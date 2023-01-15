import { Project, YamlFile } from 'projen';

export interface CatalogInfoOptions {
}

export class CatalogInfo extends YamlFile {
  constructor(project: Project, filePath: string, options?: CatalogInfoOptions) {
    options;
    super(project, filePath, {
      obj: {
        apiVersion: 'backstage.io/v1alpha1',
        kind: 'Component',
        metadata: {
          name: project.name,
          annotations: {
            // TODO: Infere author name from `project`
            'github.com/project-slug': `butterneck/${project.name}`,
          },
        },
        spec: {
          type: 'service',
          owner: 'user:guest',
          lifecycle: 'experimental',
        },
      },
    });
  }
}
