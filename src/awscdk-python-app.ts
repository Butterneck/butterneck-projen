import { Component, SampleDir, SampleFile } from 'projen';
import { AwsCdkPythonApp, CdkConfigCommonOptions } from 'projen/lib/awscdk';
import { GitHubProjectOptions } from 'projen/lib/github';


// Jsii does not support Omit<> (https://github.com/aws/jsii/issues/2901)
// export interface ButterneckAwsCdkPythonAppOptions extends Omit<AwsCdkPythonAppOptions, 'moduleName'|'authorName'|'authorEmail'|'version'|'sample'|'cdkVersion'> {
/**
 * TODO
 *
 * @export
 * @interface ButterneckAwsCdkPythonAppOptions
 * @extends {GitHubProjectOptions}
 * @extends {CdkConfigCommonOptions}
 */
export interface ButterneckAwsCdkPythonAppOptions extends GitHubProjectOptions, CdkConfigCommonOptions {
  /**
     * Name of the python package as used in imports and filenames.
     *
     * Must only consist of alphanumeric characters and underscores.
     *
     * @default ""
     */
  readonly moduleName?: string;
  /**
     * Author's name
     *
     * @default "Filippo Pinton"
     */
  readonly authorName?: string;
  /**
     * Author's e-mail
     *
     * @default "pinton.filippo@protonmail.com"
     */
  readonly authorEmail?: string;
  /**
     * Version of the package.
     *
     * @default "0.0.0"
     * @featured
     */
  readonly version?: string;
  /**
     * Minimum version of the AWS CDK to depend on.
     *
     * @default "2.74.0"
     */
  readonly cdkVersion?: string;
  /**
     * Minimum version of the `constructs` library to depend on.
     *
     * @default "10.0.5".
     */
  readonly constructsVersion?: string;
  /**
     * List of runtime dependencies for this project.
     *
     * Dependencies use the format: `<module>@<semver>`
     *
     * Additional dependencies can be added via `project.addDependency()`.
     *
     * @default "[ 'butterneck-cdk-constructs' ]"
     * @featured
     */
  readonly deps?: string[];
  /**
     * List of dev dependencies for this project.
     *
     * Dependencies use the format: `<module>@<semver>`
     *
     * Additional dependencies can be added via `project.addDevDependency()`.
     *
     * @default []
     * @featured
     */
  readonly devDeps?: string[];
}

/**
 *
 *
 * @export
 * @class ButterneckAwsCdkPythonApp
 * @extends {AwsCdkPythonApp}
 * @pjid awscdk-app-py
 */
export class ButterneckAwsCdkPythonApp extends AwsCdkPythonApp {

  constructor(options: ButterneckAwsCdkPythonAppOptions) {

    let optionsWithDefaults = {
      ...options,

      // Overridable defaults
      moduleName: options.moduleName ?? '',
      authorName: options.authorName ?? 'Filippo Pinton',
      authorEmail: options.authorEmail ?? 'pinton.filippo@protonmail.com',
      version: options.version ?? '0.0.0', // TODO: How to version? App version / infra version / both versions
      cdkVersion: options.cdkVersion ?? '2.74.0',

      // Defaults
      sample: false, // I want to bring my own sample by default
      deps: [ // Merge deps
        ...options.deps ?? [],
        ...['butterneck-projen@0.0.4'], // TODO: Replace with `custom-cdk-construct` library
      ],
    };

    super(optionsWithDefaults);

    new ButterneckAppCode(this, 'app.py');
    new ButterneckStackCode(this);


  }
}

/**
 * TODO
 *
 * @class ButterneckAppCode
 * @extends {Component}
 */
class ButterneckAppCode extends Component {
  constructor(project: AwsCdkPythonApp, fileName: string) {
    super(project);

    new SampleFile(project, fileName, {
      contents: [
        '#!/usr/bin/env python3',
        'from aws_cdk import App',
        'from stacks.stack import Stack',
        '',
        'app = App()',
        '',
        'Stack(app)',
        '',
        'app.synth()',
        '',
      ].join('\n'),
    });
  }
}

/**
 * TODO
 *
 * @class ButterneckStackCode
 * @extends {Component}
 */
class ButterneckStackCode extends Component {
  constructor(project: AwsCdkPythonApp) {
    super(project);

    let stackFile: string[] = [
      'from aws_cdk import (',
      '    App,',
      ')',
      'from butterneck_cdk_constructs import ButterneckStack',
      '',
      'class Stack(ButterneckStack):',
      '    def __init__(self, scope: App) -> None:',
      `        super().__init__(scope, '${project.name}')`,
      '',
    ];

    new SampleDir(project, 'stacks', {
      files: {
        '__init__.py': '',
        'stack.py': stackFile.join('\n'),
      },
    });
  }
}