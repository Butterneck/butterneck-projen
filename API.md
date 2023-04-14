# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### ButterneckAwsCdkPythonAppOptions <a name="ButterneckAwsCdkPythonAppOptions" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions"></a>

TODO.

#### Initializer <a name="Initializer" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.Initializer"></a>

```typescript
import { ButterneckAwsCdkPythonAppOptions } from 'butterneck-projen'

const butterneckAwsCdkPythonAppOptions: ButterneckAwsCdkPythonAppOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.buildCommand">buildCommand</a></code> | <code>string</code> | A command to execute before synthesis. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.cdkout">cdkout</a></code> | <code>string</code> | cdk.out directory. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.context">context</a></code> | <code>{[ key: string ]: any}</code> | Additional context to include in `cdk.json`. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.featureFlags">featureFlags</a></code> | <code>boolean</code> | Include all feature flags in cdk.json. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.requireApproval">requireApproval</a></code> | <code>projen.awscdk.ApprovalLevel</code> | To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.watchExcludes">watchExcludes</a></code> | <code>string[]</code> | Glob patterns to exclude from `cdk watch`. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.watchIncludes">watchIncludes</a></code> | <code>string[]</code> | Glob patterns to include in `cdk watch`. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | Minimum version of the AWS CDK to depend on. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.deps">deps</a></code> | <code>string[]</code> | List of runtime dependencies for this project. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | List of dev dependencies for this project. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.moduleName">moduleName</a></code> | <code>string</code> | Name of the python package as used in imports and filenames. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.version">version</a></code> | <code>string</code> | Version of the package. |

---

##### `name`<sup>Required</sup> <a name="name" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
sub-projects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `buildCommand`<sup>Optional</sup> <a name="buildCommand" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.buildCommand"></a>

```typescript
public readonly buildCommand: string;
```

- *Type:* string
- *Default:* no build command

A command to execute before synthesis.

This command will be called when
running `cdk synth` or when `cdk watch` identifies a change in your source
code before redeployment.

---

##### `cdkout`<sup>Optional</sup> <a name="cdkout" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.cdkout"></a>

```typescript
public readonly cdkout: string;
```

- *Type:* string
- *Default:* "cdk.out"

cdk.out directory.

---

##### `context`<sup>Optional</sup> <a name="context" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.context"></a>

```typescript
public readonly context: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* no additional context

Additional context to include in `cdk.json`.

---

##### `featureFlags`<sup>Optional</sup> <a name="featureFlags" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.featureFlags"></a>

```typescript
public readonly featureFlags: boolean;
```

- *Type:* boolean
- *Default:* true

Include all feature flags in cdk.json.

---

##### `requireApproval`<sup>Optional</sup> <a name="requireApproval" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.requireApproval"></a>

```typescript
public readonly requireApproval: ApprovalLevel;
```

- *Type:* projen.awscdk.ApprovalLevel
- *Default:* ApprovalLevel.BROADENING

To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.

---

##### `watchExcludes`<sup>Optional</sup> <a name="watchExcludes" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.watchExcludes"></a>

```typescript
public readonly watchExcludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to exclude from `cdk watch`.

---

##### `watchIncludes`<sup>Optional</sup> <a name="watchIncludes" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.watchIncludes"></a>

```typescript
public readonly watchIncludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to include in `cdk watch`.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string
- *Default:* "pinton.filippo

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string
- *Default:* "Filippo Pinton"

Author's name.

---

##### `cdkVersion`<sup>Optional</sup> <a name="cdkVersion" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* "2.74.0"

Minimum version of the AWS CDK to depend on.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* "10.0.5".

Minimum version of the `constructs` library to depend on.

---

##### `deps`<sup>Optional</sup> <a name="deps" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* "[ 'butterneck-cdk-constructs' ]"

List of runtime dependencies for this project.

Dependencies use the format: `<module>@<semver>`

Additional dependencies can be added via `project.addDependency()`.

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

List of dev dependencies for this project.

Dependencies use the format: `<module>@<semver>`

Additional dependencies can be added via `project.addDevDependency()`.

---

##### `moduleName`<sup>Optional</sup> <a name="moduleName" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string
- *Default:* ""

Name of the python package as used in imports and filenames.

Must only consist of alphanumeric characters and underscores.

---

##### `version`<sup>Optional</sup> <a name="version" id="butterneck-projen.ButterneckAwsCdkPythonAppOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "0.0.0"

Version of the package.

---

### GoAppOptions <a name="GoAppOptions" id="butterneck-projen.GoAppOptions"></a>

#### Initializer <a name="Initializer" id="butterneck-projen.GoAppOptions.Initializer"></a>

```typescript
import { GoAppOptions } from 'butterneck-projen'

const goAppOptions: GoAppOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#butterneck-projen.GoAppOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#butterneck-projen.GoAppOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#butterneck-projen.GoAppOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#butterneck-projen.GoAppOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#butterneck-projen.GoAppOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#butterneck-projen.GoAppOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#butterneck-projen.GoAppOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#butterneck-projen.GoAppOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#butterneck-projen.GoAppOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#butterneck-projen.GoAppOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#butterneck-projen.GoAppOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#butterneck-projen.GoAppOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#butterneck-projen.GoAppOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#butterneck-projen.GoAppOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#butterneck-projen.GoAppOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#butterneck-projen.GoAppOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#butterneck-projen.GoAppOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#butterneck-projen.GoAppOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#butterneck-projen.GoAppOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#butterneck-projen.GoAppOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#butterneck-projen.GoAppOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#butterneck-projen.GoAppOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#butterneck-projen.GoAppOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#butterneck-projen.GoAppOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#butterneck-projen.GoAppOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#butterneck-projen.GoAppOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#butterneck-projen.GoAppOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#butterneck-projen.GoAppOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#butterneck-projen.GoAppOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#butterneck-projen.GoAppOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#butterneck-projen.GoAppOptions.property.infra">infra</a></code> | <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions">ButterneckAwsCdkPythonAppOptions</a></code> | TODO. |
| <code><a href="#butterneck-projen.GoAppOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#butterneck-projen.GoAppOptions.property.service">service</a></code> | <code><a href="#butterneck-projen.GoProjectOptions">GoProjectOptions</a></code> | TODO. |

---

##### `name`<sup>Required</sup> <a name="name" id="butterneck-projen.GoAppOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="butterneck-projen.GoAppOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="butterneck-projen.GoAppOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="butterneck-projen.GoAppOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="butterneck-projen.GoAppOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="butterneck-projen.GoAppOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
sub-projects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="butterneck-projen.GoAppOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="butterneck-projen.GoAppOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="butterneck-projen.GoAppOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="butterneck-projen.GoAppOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="butterneck-projen.GoAppOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="butterneck-projen.GoAppOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="butterneck-projen.GoAppOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="butterneck-projen.GoAppOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="butterneck-projen.GoAppOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="butterneck-projen.GoAppOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="butterneck-projen.GoAppOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="butterneck-projen.GoAppOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="butterneck-projen.GoAppOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="butterneck-projen.GoAppOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="butterneck-projen.GoAppOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="butterneck-projen.GoAppOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="butterneck-projen.GoAppOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="butterneck-projen.GoAppOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="butterneck-projen.GoAppOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="butterneck-projen.GoAppOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="butterneck-projen.GoAppOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="butterneck-projen.GoAppOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="butterneck-projen.GoAppOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="butterneck-projen.GoAppOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `infra`<sup>Optional</sup> <a name="infra" id="butterneck-projen.GoAppOptions.property.infra"></a>

```typescript
public readonly infra: ButterneckAwsCdkPythonAppOptions;
```

- *Type:* <a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions">ButterneckAwsCdkPythonAppOptions</a>

TODO.

---

##### `mutableBuild`<sup>Optional</sup> <a name="mutableBuild" id="butterneck-projen.GoAppOptions.property.mutableBuild"></a>

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### `service`<sup>Optional</sup> <a name="service" id="butterneck-projen.GoAppOptions.property.service"></a>

```typescript
public readonly service: GoProjectOptions;
```

- *Type:* <a href="#butterneck-projen.GoProjectOptions">GoProjectOptions</a>

TODO.

---

### GoProjectOptions <a name="GoProjectOptions" id="butterneck-projen.GoProjectOptions"></a>

TODO.

#### Initializer <a name="Initializer" id="butterneck-projen.GoProjectOptions.Initializer"></a>

```typescript
import { GoProjectOptions } from 'butterneck-projen'

const goProjectOptions: GoProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#butterneck-projen.GoProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#butterneck-projen.GoProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#butterneck-projen.GoProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#butterneck-projen.GoProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#butterneck-projen.GoProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#butterneck-projen.GoProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#butterneck-projen.GoProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#butterneck-projen.GoProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#butterneck-projen.GoProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#butterneck-projen.GoProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#butterneck-projen.GoProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#butterneck-projen.GoProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |

---

##### `name`<sup>Required</sup> <a name="name" id="butterneck-projen.GoProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="butterneck-projen.GoProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="butterneck-projen.GoProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="butterneck-projen.GoProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="butterneck-projen.GoProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="butterneck-projen.GoProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
sub-projects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="butterneck-projen.GoProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="butterneck-projen.GoProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="butterneck-projen.GoProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="butterneck-projen.GoProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="butterneck-projen.GoProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="butterneck-projen.GoProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

## Classes <a name="Classes" id="Classes"></a>

### ButterneckAwsCdkPythonApp <a name="ButterneckAwsCdkPythonApp" id="butterneck-projen.ButterneckAwsCdkPythonApp"></a>

#### Initializers <a name="Initializers" id="butterneck-projen.ButterneckAwsCdkPythonApp.Initializer"></a>

```typescript
import { ButterneckAwsCdkPythonApp } from 'butterneck-projen'

new ButterneckAwsCdkPythonApp(options: ButterneckAwsCdkPythonAppOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.Initializer.parameter.options">options</a></code> | <code><a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions">ButterneckAwsCdkPythonAppOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="butterneck-projen.ButterneckAwsCdkPythonApp.Initializer.parameter.options"></a>

- *Type:* <a href="#butterneck-projen.ButterneckAwsCdkPythonAppOptions">ButterneckAwsCdkPythonAppOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.addDependency">addDependency</a></code> | Adds a runtime dependency. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.addDevDependency">addDevDependency</a></code> | Adds a dev dependency. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="butterneck-projen.ButterneckAwsCdkPythonApp.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="butterneck-projen.ButterneckAwsCdkPythonApp.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="butterneck-projen.ButterneckAwsCdkPythonApp.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="butterneck-projen.ButterneckAwsCdkPythonApp.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="butterneck-projen.ButterneckAwsCdkPythonApp.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="butterneck-projen.ButterneckAwsCdkPythonApp.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="butterneck-projen.ButterneckAwsCdkPythonApp.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="butterneck-projen.ButterneckAwsCdkPythonApp.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="butterneck-projen.ButterneckAwsCdkPythonApp.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="butterneck-projen.ButterneckAwsCdkPythonApp.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="butterneck-projen.ButterneckAwsCdkPythonApp.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="butterneck-projen.ButterneckAwsCdkPythonApp.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="butterneck-projen.ButterneckAwsCdkPythonApp.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="butterneck-projen.ButterneckAwsCdkPythonApp.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="butterneck-projen.ButterneckAwsCdkPythonApp.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="butterneck-projen.ButterneckAwsCdkPythonApp.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="butterneck-projen.ButterneckAwsCdkPythonApp.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="butterneck-projen.ButterneckAwsCdkPythonApp.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="butterneck-projen.ButterneckAwsCdkPythonApp.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="butterneck-projen.ButterneckAwsCdkPythonApp.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="butterneck-projen.ButterneckAwsCdkPythonApp.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="butterneck-projen.ButterneckAwsCdkPythonApp.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="butterneck-projen.ButterneckAwsCdkPythonApp.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="butterneck-projen.ButterneckAwsCdkPythonApp.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="butterneck-projen.ButterneckAwsCdkPythonApp.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="butterneck-projen.ButterneckAwsCdkPythonApp.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="butterneck-projen.ButterneckAwsCdkPythonApp.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="butterneck-projen.ButterneckAwsCdkPythonApp.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDependency` <a name="addDependency" id="butterneck-projen.ButterneckAwsCdkPythonApp.addDependency"></a>

```typescript
public addDependency(spec: string): void
```

Adds a runtime dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="butterneck-projen.ButterneckAwsCdkPythonApp.addDependency.parameter.spec"></a>

- *Type:* string

Format `<module>@<semver>`.

---

##### `addDevDependency` <a name="addDevDependency" id="butterneck-projen.ButterneckAwsCdkPythonApp.addDevDependency"></a>

```typescript
public addDevDependency(spec: string): void
```

Adds a dev dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="butterneck-projen.ButterneckAwsCdkPythonApp.addDevDependency.parameter.spec"></a>

- *Type:* string

Format `<module>@<semver>`.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.depsManager">depsManager</a></code> | <code>projen.python.IPythonDeps</code> | API for managing dependencies. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.envManager">envManager</a></code> | <code>projen.python.IPythonEnv</code> | API for mangaging the Python runtime environment. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.moduleName">moduleName</a></code> | <code>string</code> | Python module name (the project name, with any hyphens or periods replaced with underscores). |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.version">version</a></code> | <code>string</code> | Version of the package for distribution (should follow semver). |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.packagingManager">packagingManager</a></code> | <code>projen.python.IPythonPackaging</code> | API for managing packaging the project as a library. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.pytest">pytest</a></code> | <code>projen.python.Pytest</code> | Pytest component. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app entrypoint. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.cdkConfig">cdkConfig</a></code> | <code>projen.awscdk.CdkConfig</code> | cdk.json configuration. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.cdkDeps">cdkDeps</a></code> | <code>projen.awscdk.AwsCdkDeps</code> | *No description.* |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.cdkTasks">cdkTasks</a></code> | <code>projen.awscdk.CdkTasks</code> | Common CDK tasks. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The CDK version this app is using. |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.testdir">testdir</a></code> | <code>string</code> | The directory in which the python tests reside. |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `depsManager`<sup>Required</sup> <a name="depsManager" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.depsManager"></a>

```typescript
public readonly depsManager: IPythonDeps;
```

- *Type:* projen.python.IPythonDeps

API for managing dependencies.

---

##### `envManager`<sup>Required</sup> <a name="envManager" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.envManager"></a>

```typescript
public readonly envManager: IPythonEnv;
```

- *Type:* projen.python.IPythonEnv

API for mangaging the Python runtime environment.

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

Python module name (the project name, with any hyphens or periods replaced with underscores).

---

##### `version`<sup>Required</sup> <a name="version" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Version of the package for distribution (should follow semver).

---

##### `packagingManager`<sup>Optional</sup> <a name="packagingManager" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.packagingManager"></a>

```typescript
public readonly packagingManager: IPythonPackaging;
```

- *Type:* projen.python.IPythonPackaging

API for managing packaging the project as a library.

Only applies when the `projectType` is LIB.

---

##### `pytest`<sup>Optional</sup> <a name="pytest" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.pytest"></a>

```typescript
public readonly pytest: Pytest;
```

- *Type:* projen.python.Pytest

Pytest component.

---

##### `appEntrypoint`<sup>Required</sup> <a name="appEntrypoint" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string

The CDK app entrypoint.

---

##### `cdkConfig`<sup>Required</sup> <a name="cdkConfig" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.cdkConfig"></a>

```typescript
public readonly cdkConfig: CdkConfig;
```

- *Type:* projen.awscdk.CdkConfig

cdk.json configuration.

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* projen.awscdk.AwsCdkDeps

---

##### `cdkTasks`<sup>Required</sup> <a name="cdkTasks" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.cdkTasks"></a>

```typescript
public readonly cdkTasks: CdkTasks;
```

- *Type:* projen.awscdk.CdkTasks

Common CDK tasks.

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The CDK version this app is using.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which the python tests reside.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="butterneck-projen.ButterneckAwsCdkPythonApp.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### GoApp <a name="GoApp" id="butterneck-projen.GoApp"></a>

GoApp Project.

#### Initializers <a name="Initializers" id="butterneck-projen.GoApp.Initializer"></a>

```typescript
import { GoApp } from 'butterneck-projen'

new GoApp(options: GoAppOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#butterneck-projen.GoApp.Initializer.parameter.options">options</a></code> | <code><a href="#butterneck-projen.GoAppOptions">GoAppOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="butterneck-projen.GoApp.Initializer.parameter.options"></a>

- *Type:* <a href="#butterneck-projen.GoAppOptions">GoAppOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#butterneck-projen.GoApp.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#butterneck-projen.GoApp.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#butterneck-projen.GoApp.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#butterneck-projen.GoApp.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#butterneck-projen.GoApp.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#butterneck-projen.GoApp.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#butterneck-projen.GoApp.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#butterneck-projen.GoApp.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#butterneck-projen.GoApp.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#butterneck-projen.GoApp.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#butterneck-projen.GoApp.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#butterneck-projen.GoApp.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#butterneck-projen.GoApp.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#butterneck-projen.GoApp.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#butterneck-projen.GoApp.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="butterneck-projen.GoApp.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="butterneck-projen.GoApp.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="butterneck-projen.GoApp.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="butterneck-projen.GoApp.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="butterneck-projen.GoApp.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="butterneck-projen.GoApp.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="butterneck-projen.GoApp.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="butterneck-projen.GoApp.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="butterneck-projen.GoApp.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="butterneck-projen.GoApp.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="butterneck-projen.GoApp.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="butterneck-projen.GoApp.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="butterneck-projen.GoApp.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="butterneck-projen.GoApp.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="butterneck-projen.GoApp.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="butterneck-projen.GoApp.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="butterneck-projen.GoApp.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="butterneck-projen.GoApp.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="butterneck-projen.GoApp.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="butterneck-projen.GoApp.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="butterneck-projen.GoApp.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="butterneck-projen.GoApp.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="butterneck-projen.GoApp.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="butterneck-projen.GoApp.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="butterneck-projen.GoApp.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="butterneck-projen.GoApp.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="butterneck-projen.GoApp.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="butterneck-projen.GoApp.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#butterneck-projen.GoApp.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#butterneck-projen.GoApp.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#butterneck-projen.GoApp.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#butterneck-projen.GoApp.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#butterneck-projen.GoApp.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#butterneck-projen.GoApp.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#butterneck-projen.GoApp.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#butterneck-projen.GoApp.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#butterneck-projen.GoApp.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#butterneck-projen.GoApp.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#butterneck-projen.GoApp.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#butterneck-projen.GoApp.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#butterneck-projen.GoApp.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#butterneck-projen.GoApp.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#butterneck-projen.GoApp.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#butterneck-projen.GoApp.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#butterneck-projen.GoApp.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#butterneck-projen.GoApp.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#butterneck-projen.GoApp.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#butterneck-projen.GoApp.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#butterneck-projen.GoApp.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#butterneck-projen.GoApp.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#butterneck-projen.GoApp.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#butterneck-projen.GoApp.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#butterneck-projen.GoApp.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#butterneck-projen.GoApp.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#butterneck-projen.GoApp.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#butterneck-projen.GoApp.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#butterneck-projen.GoApp.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#butterneck-projen.GoApp.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#butterneck-projen.GoApp.property.infra">infra</a></code> | <code><a href="#butterneck-projen.ButterneckAwsCdkPythonApp">ButterneckAwsCdkPythonApp</a></code> | TODO. |
| <code><a href="#butterneck-projen.GoApp.property.service">service</a></code> | <code><a href="#butterneck-projen.GoProject">GoProject</a></code> | TODO. |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="butterneck-projen.GoApp.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="butterneck-projen.GoApp.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="butterneck-projen.GoApp.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="butterneck-projen.GoApp.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="butterneck-projen.GoApp.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="butterneck-projen.GoApp.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="butterneck-projen.GoApp.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="butterneck-projen.GoApp.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="butterneck-projen.GoApp.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="butterneck-projen.GoApp.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="butterneck-projen.GoApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="butterneck-projen.GoApp.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="butterneck-projen.GoApp.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="butterneck-projen.GoApp.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="butterneck-projen.GoApp.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="butterneck-projen.GoApp.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="butterneck-projen.GoApp.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="butterneck-projen.GoApp.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="butterneck-projen.GoApp.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="butterneck-projen.GoApp.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="butterneck-projen.GoApp.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="butterneck-projen.GoApp.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="butterneck-projen.GoApp.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="butterneck-projen.GoApp.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="butterneck-projen.GoApp.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="butterneck-projen.GoApp.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="butterneck-projen.GoApp.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="butterneck-projen.GoApp.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="butterneck-projen.GoApp.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="butterneck-projen.GoApp.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `infra`<sup>Required</sup> <a name="infra" id="butterneck-projen.GoApp.property.infra"></a>

```typescript
public readonly infra: ButterneckAwsCdkPythonApp;
```

- *Type:* <a href="#butterneck-projen.ButterneckAwsCdkPythonApp">ButterneckAwsCdkPythonApp</a>

TODO.

---

##### `service`<sup>Required</sup> <a name="service" id="butterneck-projen.GoApp.property.service"></a>

```typescript
public readonly service: GoProject;
```

- *Type:* <a href="#butterneck-projen.GoProject">GoProject</a>

TODO.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#butterneck-projen.GoApp.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="butterneck-projen.GoApp.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### GoProject <a name="GoProject" id="butterneck-projen.GoProject"></a>

TODO.

#### Initializers <a name="Initializers" id="butterneck-projen.GoProject.Initializer"></a>

```typescript
import { GoProject } from 'butterneck-projen'

new GoProject(options: GoProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#butterneck-projen.GoProject.Initializer.parameter.options">options</a></code> | <code><a href="#butterneck-projen.GoProjectOptions">GoProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="butterneck-projen.GoProject.Initializer.parameter.options"></a>

- *Type:* <a href="#butterneck-projen.GoProjectOptions">GoProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#butterneck-projen.GoProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#butterneck-projen.GoProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#butterneck-projen.GoProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#butterneck-projen.GoProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#butterneck-projen.GoProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#butterneck-projen.GoProject.annotateGenerated">annotateGenerated</a></code> | Consider a set of files as "generated". |
| <code><a href="#butterneck-projen.GoProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#butterneck-projen.GoProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#butterneck-projen.GoProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#butterneck-projen.GoProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#butterneck-projen.GoProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#butterneck-projen.GoProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#butterneck-projen.GoProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#butterneck-projen.GoProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#butterneck-projen.GoProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="butterneck-projen.GoProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="butterneck-projen.GoProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="butterneck-projen.GoProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="butterneck-projen.GoProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="butterneck-projen.GoProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="butterneck-projen.GoProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="butterneck-projen.GoProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="butterneck-projen.GoProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="butterneck-projen.GoProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="butterneck-projen.GoProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="butterneck-projen.GoProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="butterneck-projen.GoProject.annotateGenerated"></a>

```typescript
public annotateGenerated(_glob: string): void
```

Consider a set of files as "generated".

This method is implemented by
derived classes and used for example, to add git attributes to tell GitHub
that certain files are generated.

###### `_glob`<sup>Required</sup> <a name="_glob" id="butterneck-projen.GoProject.annotateGenerated.parameter._glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="butterneck-projen.GoProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="butterneck-projen.GoProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="butterneck-projen.GoProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="butterneck-projen.GoProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="butterneck-projen.GoProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="butterneck-projen.GoProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="butterneck-projen.GoProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="butterneck-projen.GoProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="butterneck-projen.GoProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="butterneck-projen.GoProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="butterneck-projen.GoProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="butterneck-projen.GoProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="butterneck-projen.GoProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="butterneck-projen.GoProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="butterneck-projen.GoProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#butterneck-projen.GoProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#butterneck-projen.GoProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#butterneck-projen.GoProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#butterneck-projen.GoProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#butterneck-projen.GoProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#butterneck-projen.GoProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#butterneck-projen.GoProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#butterneck-projen.GoProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#butterneck-projen.GoProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#butterneck-projen.GoProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#butterneck-projen.GoProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#butterneck-projen.GoProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#butterneck-projen.GoProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#butterneck-projen.GoProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#butterneck-projen.GoProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#butterneck-projen.GoProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#butterneck-projen.GoProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#butterneck-projen.GoProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#butterneck-projen.GoProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#butterneck-projen.GoProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#butterneck-projen.GoProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#butterneck-projen.GoProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#butterneck-projen.GoProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="butterneck-projen.GoProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="butterneck-projen.GoProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="butterneck-projen.GoProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="butterneck-projen.GoProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="butterneck-projen.GoProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="butterneck-projen.GoProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="butterneck-projen.GoProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="butterneck-projen.GoProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="butterneck-projen.GoProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="butterneck-projen.GoProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="butterneck-projen.GoProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="butterneck-projen.GoProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="butterneck-projen.GoProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="butterneck-projen.GoProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="butterneck-projen.GoProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="butterneck-projen.GoProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="butterneck-projen.GoProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="butterneck-projen.GoProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="butterneck-projen.GoProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="butterneck-projen.GoProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="butterneck-projen.GoProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="butterneck-projen.GoProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="butterneck-projen.GoProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#butterneck-projen.GoProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="butterneck-projen.GoProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---


