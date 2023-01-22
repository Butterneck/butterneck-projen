import { AwsCdkPythonApp, AwsCdkPythonAppOptions } from 'projen/lib/awscdk';
import { BuildWorkflow } from 'projen/lib/build/build-workflow';
import { JobStep } from 'projen/lib/github/workflows-model';
import { CatalogInfo } from './helpers';

export interface ButterneckAwsCdkPythonAppOptions extends AwsCdkPythonAppOptions {
}


/**
 * ButterneckAwscdkPythonAppProject
 *
 * @export
 * @class ButterneckAwsCdkPythonApp
 * @extends {awscdk.AwsCdkPythonApp}
 * @pjid butterneck-awscdk-app-py
 */
export class ButterneckAwsCdkPythonApp extends AwsCdkPythonApp {

  /**
   * The PR build GitHub workflow.
   */
  public readonly buildWorkflow: BuildWorkflow;

  constructor(options: ButterneckAwsCdkPythonAppOptions) {
    options;
    super(options);

    new CatalogInfo(this, 'catalog-info.yaml');

    this.buildWorkflow = new BuildWorkflow(this, {
      buildTask: this.buildTask,
      artifactsDirectory: '', // this.artifactsDirectory,
      // containerImage: options.workflowContainerImage,
      // gitIdentity: this.workflowGitIdentity,
      // mutableBuild: options.mutableBuild,
      preBuildSteps: this.renderWorkflowSetup({
        // mutable: options.mutableBuild ?? true,
      }),
      // postBuildSteps: options.postBuildSteps,
      // runsOn: options.workflowRunsOn,
      // workflowTriggers: options.buildWorkflowTriggers,
    });

    // this.buildWorkflow.addPostBuildSteps(
    //   ...this.renderUploadCoverageJobStep(options)
    // );
  }

  /**
   * Returns the set of workflow steps which should be executed to bootstrap a
   * workflow.
   *
   * @param options Options.
   * @returns Job steps
   */
  public renderWorkflowSetup(
    options: RenderWorkflowSetupOptions = {},
  ): JobStep[] {
    const install = new Array<JobStep>();

    // TODO: Translate to Python from Node
    options;
    // // first run the workflow bootstrap steps
    // install.push(...this.workflowBootstrapSteps);

    // if (this.nodeVersion) {
    //   install.push({
    //     name: "Setup Node.js",
    //     uses: "actions/setup-node@v3",
    //     with: { "node-version": this.nodeVersion },
    //   });
    // }

    // if (this.package.packageManager === NodePackageManager.PNPM) {
    //   install.push({
    //     name: "Setup pnpm",
    //     uses: "pnpm/action-setup@v2.2.2",
    //     with: { version: "7" }, // current latest. Should probably become tunable.
    //   });
    // }

    // const mutable = options.mutable ?? false;

    // if (this.package.scopedPackagesOptions) {
    //   install.push(
    //     ...this.getScopedPackageSteps(this.package.codeArtifactOptions)
    //   );
    // }

    // install.push({
    //   name: "Install dependencies",
    //   run: mutable
    //     ? this.package.installAndUpdateLockfileCommand
    //     : this.package.installCommand,
    // });

    // TODO: END

    return install;
  }
}

/**
 * Options for `renderInstallSteps()`.
 */
export interface RenderWorkflowSetupOptions {
  /**
   * Should the pacakge lockfile be updated?
   * @default false
   */
  readonly mutable?: boolean;
}