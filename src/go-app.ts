import { BuildWorkflow } from 'projen/lib/build';
import { GitHubProject, GitHubProjectOptions } from 'projen/lib/github';
import { Projenrc } from 'projen/lib/javascript';
import { ButterneckAwsCdkPythonApp, ButterneckAwsCdkPythonAppOptions } from './awscdk-python-app';
import { GoProject, GoProjectOptions } from './go-project';


// TODO: How to call class? Combination of language used for the service and language used for infra

export interface GoAppOptions extends GitHubProjectOptions {
  /**
   * TODO
   *
   * @type {ButterneckAwsCdkPythonAppOptions}
   * @memberof GoAppOptions
   */
  readonly infra?: ButterneckAwsCdkPythonAppOptions;
  /**
   * TODO
   *
   * @type {GoProjectOptions}
   * @memberof GoAppOptions
   */
  readonly service?: GoProjectOptions;
  /**
   * Define a GitHub workflow for building PRs.
   * @default - true if not a subproject
   */
  readonly buildWorkflow?: boolean;
  /**
   * Automatically update files modified during builds to pull-request branches. This means
   * that any files synthesized by projen or e.g. test snapshots will always be up-to-date
   * before a PR is merged.
   *
   * Implies that PR builds do not have anti-tamper checks.
   *
   * @default true
   */
  readonly mutableBuild?: boolean;

}

/**
 * GoApp Project
 *
 * @export
 * @class GoApp
 * @extends {awscdk.AwsCdkPythonApp}
 * @pjid go-app
 */
export class GoApp extends GitHubProject {

  /**
   * TODO
   *
   * @type {ButterneckAwsCdkPythonApp}
   * @memberof GoApp
   */
  public infra: ButterneckAwsCdkPythonApp;

  /**
   * TODO
   *
   * @type {GoProject}
   * @memberof GoApp
   */
  public service: GoProject;

  /**
   * The PR build GitHub workflow. `undefined` if `buildWorkflow` is disabled.
   */
  public readonly buildWorkflow?: BuildWorkflow;

  constructor(options: GoAppOptions) {
    super(options);

    new Projenrc(this);

    this.infra = new ButterneckAwsCdkPythonApp({
      ...options.infra,
      name: options.infra?.name ?? options.name,
      parent: this,
      outdir: options.infra?.outdir ?? 'infra',
    });

    this.service = new GoProject({
      ...options.service,
      name: options.service?.name ?? options.name,
      parent: this,
      outdir: options.service?.outdir ?? 'src',
    });

    // Build workflow
    const buildEnabled = options.buildWorkflow ?? (this.parent ? false : true);
    if (buildEnabled && this.github) {


      this.buildWorkflow = new BuildWorkflow(this, {
        buildTask: this.buildTask,
        artifactsDirectory: '.',
        mutableBuild: options.mutableBuild,
      });
    }
  }

}
