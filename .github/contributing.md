# Six Webcomponents Contributing Guide

Hi! I'm really excited that you are interested in contributing to the SIX Webcomponents. Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Contributing Tests](#contributing-tests)

## Issue Reporting Guidelines

- Always use the propagated issue template to create new issues.

## Pull Request Guidelines

- Checkout a topic branch from a base branch, e.g. `main`, and merge back against that branch.

- [Make sure to tick the "Allow edits from maintainers" box](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork). This allows us to directly make minor edits / refactors and saves a lot of time.

- If adding a new feature:

  - Add accompanying test case.
  - Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.

- If fixing a bug:

  - If you are resolving a special issue, add `(fix #xxxx[,#xxxx])` (#xxxx is the issue id) in your PR title for a better release log, e.g. `update entities encoding/decoding (fix #3899)`.
  - Provide a detailed description of the bug in the PR. Live demo preferred.
  - Add appropriate test coverage if applicable. You can check the coverage of your code addition by running `npm test -- --coverage`.

- It's OK to have multiple small commits as you work on the PR - GitHub can automatically squash them before merging.

- Make sure tests pass!

- Commit messages must follow the [commit message convention](./commit-convention.md) so that changelogs can be automatically generated. Commit messages are automatically validated before commit (by invoking [Git Hooks](https://git-scm.com/docs/githooks) via [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks)).

- No need to worry about code style as long as you have installed the dev dependencies - modified files are automatically formatted with Prettier on commit (by invoking [Git Hooks](https://git-scm.com/docs/githooks) via [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks)).

### Advanced Pull Request Tips

- The PR should fix the intended bug **only** and not introduce unrelated changes. This includes unnecessary refactors - a PR should focus on the fix and not code style, this makes it easier to trace changes in the future.

- Consider the performance / size impact of the changes, and whether the bug being fixes justifies the cost. If the bug being fixed is a very niche edge case, we should try to minimize the size / perf cost to make it worthwhile.

  - Is the code perf-sensitive (e.g. in "hot paths" like component updates or the vdom patch function?)

    - If the branch is dev-only, performance is less of a concern.

## Development Setup

You will need [Node.js](https://nodejs.org) **version 16+**, and [NPM](https://www.npmjs.com/package/npm) **version 8**.

After cloning the repo, run in root directory::

```bash
$ npm install # install the dependencies of the project
```

A high level overview of tools used:

- [TypeScript](https://www.typescriptlang.org/) as the development language
- [Jest](https://jestjs.io/) for unit testing
- [Prettier](https://prettier.io/) for code formatting

## Project Structure

This repository employs a [monorepo](https://en.wikipedia.org/wiki/Monorepo) setup which hosts a number of associated packages under the `libraries` directory:

- `ui-library`: <tbd>

- `ui-library-react`: <tbd>

- `ui-library-vue`: <tbd>

and some demo applications in the `examples` directory:

- `angular`: <tbd>

- `js`: <tbd>

- `react`: <tbd>

## Contributing Tests

Unit tests are collocated with the code being tested in each package, inside directories named `__tests__`. Consult the [Jest docs](https://jestjs.io/docs/en/using-matchers) and existing test cases for how to write new test specs. Here are some additional guidelines:

## Credits

Thank you to all the people who have already contributed to Six-Webcomponents!

<a href="https://github.com/six-group/six-webcomponents/graphs/contributors"></a>
