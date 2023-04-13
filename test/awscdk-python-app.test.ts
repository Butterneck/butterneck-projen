import { GoApp } from '../src';

test('ButterneckAwscdkPythonAppProject', () => {

  const project = new GoApp({
    name: 'foo-project',
    moduleName: 'foo',
    authorName: 'Foo Bar',
    authorEmail: 'foo.bar@example.com',
    cdkVersion: '2.1.0',
    version: '0.0.1',
  });

  const fileNames = project.files.map(_ => _.path);
  ['requirements.txt', 'requirements-dev.txt', 'cdk.json'].forEach(fileName => {
    expect(fileNames).toContain(fileName);
  });
});