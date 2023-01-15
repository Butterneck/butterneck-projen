const { cdk } = require('projen');
const project = new cdk.JsiiProject({
  author: 'Filippo Pinton',
  authorEmail: 'pinton.filippo@protonmail.com',
  defaultReleaseBranch: 'main',
  name: 'butterneck-projen',
  repositoryUrl: 'https://github.com/butterneck/butterneck-projen.git',

  // deps: [],                /* Runtime dependencies of this module. */
  peerDeps: ['projen'],
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */

  publishToPypi: {
    distName: 'butterneck-projen',
    module: 'butterneck_projen',
  },

  renovatebot: true,
});
project.synth();