## Building the docs

You can build the docs by running the command `npm run start:doc:fresh:full` in root of the project.

### What to do if examples are missing?

There needs to be a `readme.md` file (**attention**, casing is important!) in the directory of the
component. In the README, there needs to be a line with the following content: `<!-- EXAMPLES -->`.
This line gets replaced by the examples as part of building the docs.
