import { Project, ProjectOptions } from 'projen';

export interface GoProjectOptions extends ProjectOptions {

}

export class GoProject extends Project {
  constructor(options: GoProjectOptions) {
    super(options);
  }
}