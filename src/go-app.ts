import { AwsCdkPythonApp, AwsCdkPythonAppOptions } from 'projen/lib/awscdk';

export interface GoAppOptions extends AwsCdkPythonAppOptions {
}


// TODO: How to call class? Combination of language used for the service and language used for infra

/**
 * GoApp Project
 *
 * @export
 * @class GoApp
 * @extends {awscdk.AwsCdkPythonApp}
 * @pjid go-app
 */
export class GoApp extends AwsCdkPythonApp {

  constructor(options: GoAppOptions) {
    super(options);
  }
}
