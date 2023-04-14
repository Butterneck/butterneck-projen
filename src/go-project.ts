import { Project, ProjectOptions } from 'projen';

/**
 * TODO
 *
 * @export
 * @interface GoProjectOptions
 * @extends {ProjectOptions}
 */
export interface GoProjectOptions extends ProjectOptions {

}

/**
 * TODO
 *
 * @export
 * @class GoProject
 * @extends {Project}
 * @pjid go-project
 */
export class GoProject extends Project {
  constructor(options: GoProjectOptions) {
    super(options);
  }
}