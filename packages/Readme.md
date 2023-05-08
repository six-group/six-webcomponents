## Creation a new version

Use `npm version [ major | minor | patch ]` to create a new version, where
given a version number MAJOR.MINOR.PATCH, increment the:

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards compatible manner, and
- PATCH version when you make backwards compatible bug fixes.

See [Semantic Versioning](https://semver.org/) for more details.

## Creating a new version on Github

- Create a branch from main with the prefix release/... and do a PR against main
- Execute npm run version:nopush in your local branch and go through the release setup
- Review the made changes after the execution
- Push the commit and created tags to Github
- Review the results from the release dry-run
