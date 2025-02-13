# Creating a Release

Releasing a new version of the SIX Web Components is a task performed by members of the Core Team,
and upon discussion with other team members. The following document outlines the different steps
required.

It is recommended that you read through this document in its entirety before you start with the
process!

## Check for Open Pull Requests

Ensure all [open Pull Pequests](https://github.com/six-group/six-webcomponents/pulls) for this
release are merged. Follow up with authors if needed.

## Choose a Version Number

Choose the version number under which this new release will be made, following semantic versioning.
We will call it `VERSION_NUMBER` for the rest of this document. Example: `4.3.2`.

## Create Release Branch

Create a branch with the name `release/<VERSION_NUMBER>` from `main` or from a **release tag** like
`v4.3.1`, if you want to create a patch release from a previous version.

## Edit Changelog

In the created branch, edit the file `docs/changelog.md` and replace the `Upcoming` section with
`VERSION_NUMBER - YYYY-MM-dd` and add a new Upcoming section on top. Example:

```
## Upcoming

## 4.2.3 - 2024-01-10

### Changed
...

```

## Test it Locally

1. Navigate to the root of the project.
2. Run `npm install`.
3. Run `npm run build`. Make sure there are no errors.
4. Run `npm run preview:doc`. Check if the documentation at http://localhost:4173/six-webcomponents/
   looks fine.

## Create Pull Request

1. Commit the changes with a commit message of `docs: prepare changelog for release VERSION_NUMBER`
2. Push to GitHub and create a Pull Request with `main` as its base branch with the following title
   `docs: prepare changelog for release VERSION_NUMBER` (body can be empty).

A member of the Core Team should review the Pull Request. **But don't merge the Pull Request yet**.

## Run 'Release' GitHub Action

1. Go to
   [https://github.com/six-group/six-webcomponents/actions/workflows/release.yml](https://github.com/six-group/six-webcomponents/actions/workflows/release.yml)
2. Select `Run workflow` on the top right of the list and set the following parameters:
   - Branch: `release/<VERSION_NUMBER>`
   - The version to release: It must match the pattern `vVERSION_NUMBER`, so for the example above
     it would be `v4.2.3`. **Do not forget the leading `v`!**
   - Disable _Deploy Docs_ if you release a non-stable release (like RC or alpha)
3. Click on `Run Workflow`. This will trigger the release workflow and take care of the required
   steps.

Once the workflow has completed successfully, check if new version was published on
https://www.npmjs.com/~six-opensource. You might need to force refresh the page to see the new
version.

## Merge Changes Back to main

The GitHub action in the previous step, should have created a Pull Request with the name
`Update package.json Versions for Release VERSION_NUMBER`.

- For Releases **from main**: Find a reviewer and merge the Pull Request to the previously created
  branch `release/<VERSION_NUMBER>`. Then merge the branch `release/<VERSION_NUMBER>` to main.

- For Releases **from a tag**: Simply delete the Pull Request. Then resolve conflicts on
  `release/<VERSION_NUMBER>`, find a reviewer and merge it to main.

## Post on the Announcements Channel

On the Teams Announcements channel, post a message with the following content:

- Title: `Release VERSION_NUMBER`
- Body: `New Release VERSION_NUMBER. Details can be found in the CHANGELOG`

Be sure to substitute the `VERSION_NUMBER` with your version, and the `CHANGELOG` with a link to
your release on the [changelog](https://six-group.github.io/six-webcomponents/changelog.html) page

## Celebrate

Congratulations! You have just released a new version of the SIX Web Components library!

![Celebrate](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzJlOTlkZHR6a2djcTlxejB2ZHR2dTczOGgxejNjNmhodmppOTI3bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BPJmthQ3YRwD6QqcVD/giphy_s.gif)
