const { cdk } = require('projen');
const { GithubCredentials } = require('projen/lib/github');
const { AppPermission } = require('projen/lib/github/workflows-model');
const project = new cdk.JsiiProject({
  author: 'Filippo Pinton',
  authorEmail: 'pinton.filippo@protonmail.com',
  defaultReleaseBranch: 'main',
  name: 'butterneck-projen',
  repositoryUrl: 'https://github.com/butterneck/butterneck-projen.git',
  // packageName: '@butterneck/projen',

  // deps: [],                /* Runtime dependencies of this module. */
  peerDeps: ['projen'],
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */

  publishToPypi: {
    distName: 'butterneck-projen',
    module: 'butterneck_projen',
  },

  // githubOptions: {
  //   projenCredentials: GithubCredentials.fromApp({
  //     permissions: {
  //       repositoryProject: AppPermission.WRITE,
  //       packages: AppPermission.WRITE,
  //       workflows: AppPermission.WRITE
  //     }
  //   })
  // }

  // renovatebot: true,
});
project.synth();