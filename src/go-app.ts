import { GitHubProject, GitHubProjectOptions } from 'projen/lib/github';
import { Projenrc } from 'projen/lib/javascript';
import { ButterneckAwsCdkPythonApp } from './awscdk-python-app';
import { GoProject } from './go-project';


// TODO: How to call class? Combination of language used for the service and language used for infra

export interface GoAppOptions extends GitHubProjectOptions {
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

  public infraProject: ButterneckAwsCdkPythonApp;
  public serviceProject: GoProject;

  constructor(options: GoAppOptions) {
    super(options);

    new Projenrc(this);

    this.infraProject = new ButterneckAwsCdkPythonApp({
      name: options.name,
      parent: this,
      outdir: 'infra',
    });

    this.serviceProject = new GoProject({
      name: options.name,
      parent: this,
      outdir: 'src',
    });
  }

}
