Bugs that were originally being explored here are gone, so archiving this repo

---------------
# wellio-playground
Place to test alternative code and demonstrate bugs outside the main wellio.js repo.

This is mostly a repo for note keeping and a place to move quickly without worrying about leaving bad code in a branch on wellio that I then accidentally merge.

## Demos

The top-level directories in this repository with `demo_` suffixes in their names are independent demo folders. Each holds a `index.html` file that builds a different demo.

### Demo Pages
- https://justingosses.github.io/wellio-playground/demo_original
  - The original temp demo used in an issue discussion
- https://justingosses.github.io/wellio-playground/demo_noBrowserifyWithTimeOutCrutch/
  - Uses node modules installed in local environment via npm (Node Package Manager) but doesn't use any build tooling otherwise.
- https://justingosses.github.io/wellio-playground/demo_pureFrontEnd
  - Doesn't require use of any build tooling, npm, etc. Everything is 100% front-end vanilla JavaScript. Leverages require to load wellio. Uses Jquery's AJAX to load the file as it is a robust choice that doesn't require any particular format then uses wellio to convert the resulting string into wellio standard JSON.

#### Future demos...
- Use create react app.... this one in progress under demo_react folder
- Use vue
