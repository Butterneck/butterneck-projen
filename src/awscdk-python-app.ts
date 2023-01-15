import { AwsCdkPythonApp, AwsCdkPythonAppOptions } from 'projen/lib/awscdk';
import { CatalogInfo } from './helpers';

export interface ButterneckAwsCdkPythonAppOptions extends AwsCdkPythonAppOptions {
}


/**
 * ButterneckAwscdkPythonAppProject
 *
 * @export
 * @class ButterneckAwsCdkPythonApp
 * @extends {awscdk.AwsCdkPythonApp}
 */
export class ButterneckAwsCdkPythonApp extends AwsCdkPythonApp {
  constructor(options: ButterneckAwsCdkPythonAppOptions) {
    super(options);

    new CatalogInfo(this, 'catalog-info.yaml');
  }
}