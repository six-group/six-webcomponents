# Introduction

The Web Components Library is an **in-house open source** project for developing modern web
applications that follow the SIX corporate styling guidelines.

The technology stack is based on web standards and best practices. Moreover, we try to keep it as
simple as possible for our developers. For those reasons we decided to use
[Web Components](https://en.wikipedia.org/wiki/Web_Components), which are supported by all modern
browsers. The project fully supports [TypeScript](https://www.typescriptlang.org).

If you found a bug or something doesn't work as expected feel free to open a [Github Issue](TODO)

## Install

To use the SIX Web Components in your project you need to log into artifactory first to obtain an
access token. In the second step just add the library as a dependency to your package.json. Both can
be done with:

```bash
npm install @six-group/ui-library --save
```

After the download is finished just follow the instructions for the specific framework your project
is build with: [Angular](angular.html), [React](react.html) or [Vue](vue.html)

## Contribute

We are very happy about new developers joining our small [team](aboutus.html)! If you found a bug in
our code or want to contribute some components or features get write access to the repository and...

```bash
git clone https://github.com/six-group/six-webcomponents.git
cd six-webcomponents
npm install
npm run build
```

After the build was successful you're ready to go:

1. Create a feature/bugfix branch with your code changes
2. Push your branch to the repo and open a pull request. Please add some comments and a description.
3. Please make sure your branch is passing the bamboo build and wait until one of the
   [core developers](aboutus.html#core-development) approves your pull request.
4. Merge into the develop branch and wait until a new release is available. Finally, add the library
   as a dependency to your project :)

#### Git Workflow

We follow the
[gitflow](https://www.atlassian.com/de/git/tutorials/comparing-workflows/gitflow-workflow) workflow
as our git branching model. More can be read on the linked wiki page but in short gitflow works like
this:

- we have a **master** branch which reflects production - in our case the latest release of our
  library
- we have a **develop** branch where active development happens
- we have **feature** branches which we branch out from develop and merge them back there
