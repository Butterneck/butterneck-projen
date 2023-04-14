import { Project, ProjectOptions, Component, SampleFile } from 'projen';

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

    new GoMod(this);
    new GoMainCode(this);
  }
}

/**
 * TODO
 *
 * @class GoMod
 * @extends {Component}
 */
class GoMod extends Component {
  constructor(project: GoProject) {
    super(project);

    new SampleFile(project, 'go.mod', {
      contents: [
        `module github.com/butterneck/${project.name}/src`,
        '',
        'go 1.20',
      ].join('\n'),
    });
  }
}

/**
 * TODO
 *
 * @class GoMainCode
 * @extends {Component}
 */
class GoMainCode extends Component {
  constructor(project: GoProject) {
    super(project);

    new SampleFile(project, '', {
      contents: [
        'package main',
        '',
        'import "fmt"',
        '',
        'func main() {',
        '    fmt.Println("Hello, World!")',
        '}',
      ].join('\n'),
    });
  }
}