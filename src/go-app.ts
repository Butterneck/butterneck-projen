import { GitHubProject, GitHubProjectOptions } from 'projen/lib/github';
import { Projenrc } from 'projen/lib/javascript';
import { ButterneckAwsCdkPythonApp, ButterneckAwsCdkPythonAppOptions } from './awscdk-python-app';
import { GoProject, GoProjectOptions } from './go-project';


// TODO: How to call class? Combination of language used for the service and language used for infra

export interface GoAppOptions extends GitHubProjectOptions {
  readonly infra: ButterneckAwsCdkPythonAppOptions;
  readonly service: GoProjectOptions;
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

  public infra: ButterneckAwsCdkPythonApp;
  public service: GoProject;

  constructor(options: GoAppOptions) {
    super(options);

    new Projenrc(this);

    this.infra = new ButterneckAwsCdkPythonApp({
      ...options.infra,
      name: options.infra.name ?? options.name,
      parent: this,
      outdir: options.infra.outdir ?? 'infra',
    });

    this.service = new GoProject({
      ...options.service,
      name: options.service.name ?? options.name,
      parent: this,
      outdir: options.service.outdir ?? 'src',
    });
  }

}
