# Releasing a new version

Releasing a new version of the SIX Web Components is a task performed by members of the Core Team,
and upon discussion with other team members. The following document outlines the different steps
required.

It is recommended that you read through this document in its entirety before you start with the
process!

## Preparation

Before you start with the release, there are a few steps that need to be undertaken.

### Merging PRs

Before you start, you need to make sure that all PRs that need to go in this release are merged!
Check the list of open PRs [here](https://github.com/six-group/six-webcomponents/pulls), and chase
down the authors if needed.

### Test changes locally

To avoid issues once the process has been started, it is good practice to test the changes locally:

1. Checkout `main`
2. Navigate to the root of the project
3. Run `npm i`. This will ensure that the required packages are correctly installed
4. Run `npm run build`. This step will build all the different subprojects and make sure there are
   no errors.

If the steps above complete with no error(s), the release can be considered ready.

### Choose version number

The next step consists in choosing the version number under which this new release will be made.
Although it should be discussed beforehand with other team members, we follow semantic versioning.

Choose a version number that makes sense for the current changelog. We will call it `VERSION_NUMBER`
for the rest of this document. Whenever you see a `VERSION_NUMBER` placeholder, you should
substitute it with your version

### Create preparation branch

Before the release is ready to be created, the changelog need to be updated. Start by creating a
branch from `main` using the following name:

```
feature/prepare-M-m-B-release
```

where:

- `M`: Major version identifier
- `m`: Minor version identifier
- `B`: Bugfix version identifier

As an example: if in the previous step you decided the new version is `4.2.3`, then the branch name
is:

```
feature/prepare-4-2-3-release
```

You now need to check that the [`changelog.md`](../changelog.md) file is correctly formatted and
that all changes listed are in fact merged.

Edit the `changelog.md` and create an entry with the changes. The title should follow the format

```
## VERSION_NUMBER - YYYY-MM-dd
```

So, for the above example, and assuming the date is January 10th, 2024:

```
## 4.2.3 - 2024-01-10
```

Also, do not forget to add a blank `Upcoming` section for future changes.

Push, and open a PR to merge with `main` with the following title/description:

- Title: `docs: Update changelog for VERSION_NUMBER release`
- Description:

```
### ❓ Type of change

<!-- What types of changes does your code introduce? Put an `x` in all the boxes that apply. -->

- [x] 📖 Documentation (updates to the documentation, readme or JSdoc annotations

### 📚 Description
Changelog preparation for release VERSION_NUMBER
```

A member of the Core Team needs to approve these changes. Once approved and merged into `main`,
proceed with the next step.

## Create a release

Now it is time to perform the actual release:

1. Go to
   [https://github.com/six-group/six-webcomponents/actions/workflows/release.yml](https://github.com/six-group/six-webcomponents/actions/workflows/release.yml)
2. Select `Run workflow` on the top right of the list. For the parameters:
   1. Branch: `main`
   2. The version to release: It must match the pattern `vVERSION_NUMBER`, so for the example above
      it would be `v4.2.3`. **Do not forget the leading `v`!**
3. Click on `Run Workflow`. This will trigger the release workflow and take care of the required
   steps.

Once the workflow has completed successfully, the different libraries have been published on npm and
are ready to be used.

At the same time, a new branch will be created with the corresponding PR. Go ahead and merge that PR
**without deleting the source branch**

## Post on the Announcements Channel

On the Teams Announcements channel, post a message with the following content:

- Title: `Release VERSION_NUMBER`
- Body: `New Release VERSION_NUMBER. Details can be found in the CHANGELOG`

Be sure to substitute the `VERSION_NUMBER` with your version, and the `CHANGELOG` with a link to
your release on the [changelog](https://six-group.github.io/six-webcomponents/changelog.html) page

## Celebrate

Congratulations! You have just released a new version of the SIX Web Components library!

![Celebrate](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzJlOTlkZHR6a2djcTlxejB2ZHR2dTczOGgxejNjNmhodmppOTI3bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BPJmthQ3YRwD6QqcVD/giphy_s.gif)
