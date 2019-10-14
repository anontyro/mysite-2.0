# ChangeLog

Changes will be documented here generally around release items using symantic versioning

## Unreleased

- Added changeLog page to import changeLog data
- Footer now has link to changeLog

## Version 3.1.1

- [bug] fix-app-ext: NextJS doesn't need container in app and ext should check jsx files as well

## Version 3.1.0

- Fixed Nav styling the mobile so it now looks better
- Updated mobile styling for portfolio page
- Removed old TypeScript ref
- Added new route /changelog
- Footer version is now generated from package file

## Version 3.0.1

Test release for the CD pipeline that proved to be fine

## Version 3.0.0

Inital release of the new site which has the ghostJS blog linking instead of inline blog, however the data is pretty much
the same as the old site. Everything is generally good to go.

- Finished Resume page
- About page is also completed
- Statics imported correctly

## Nightly 0.1.0

Big package update updating everything, now using next 9 and require extra clean up to remove old settings for next 7. Working on getting the first release ready to be launched at the end of the week

- Updated package.json file to now support the updates, requires more clean up however.
- Updated Dockerfile to now use Alpine-12
- Simplifying the frontend:
  - Removed Login
  - Blog now redirects to blog.alexwilkinson.co
  - other fixes

## Nightly 0.0.3

Updated frontend more, but will need restructuring as using GhostJS for blog and will bring in GitHub API for porfolio.

- BrewDog API endpoints
- XKCD API endpoints for random comic
- GhostJS endpoints added for content

## Nightly 0.0.2

Updated inital build to have the basic frontend in place and building
out a more robust backend with graphql

- React frontend in development close looking to current site
- General frontend shell is in place
- First external API added to the backend XKCD

## Nightly 0.0.1

Initial Build created and dockerised to allow for access to the graphql backend due to limitations in working in local host.

- Apollo GraphQL backend setup with Express
- Project successfully setup with Docker
- NextJS frontend intergration created
  - Redux added as provider
