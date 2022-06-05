# wellio-playground
Place to test alternative code and demonstrate bugs outside the main wellio.js repo.

This is mostly a repo for note keeping and a place to move quickly without worrying about leaving bad code in a branch on wellio that I then accidentally merge.

## Example A - Loading files with wellio.loadLAS() vs. AJAX:

There are two JS scripts, one `main_pureWellio.js` and another `main_withAjax.js` that can be switched on and off in index.html

"main_pureWellio.js" attempts to load a LAS file via wellio.loadLAS() and will fail.

"main_withAjax.js" attempts to load the same LAS file via AJAX and then passes it to wellio.js for conversion into JSON and succeeds. 

Unsure why wellio.loadLAS() fails, but the demo used ajax and not wellio.js and wellio test load files on server side where the fs node process is different, so it might be this circumstance was just not covered in existing tests?

####
Need to investigate further but stopping for now.



## Prerequisites
- NPM

## Instruction Steps to Replicate DemoNpmRequire
- In a terminal run from the top directory of the repository `npm install wellio`. This puts a folder called 'node_modules' in the top directly and within it creates a folders for wellio and the various node modules that wellio uses.
- 