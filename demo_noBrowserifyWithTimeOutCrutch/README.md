# Demo Using npm to install wellio, require, but not all build tooling
_The main characteristic of this demo is it doesn't use browserify or any build tooling and all the logic is done immediately with no button pushes._

### Demonstrates
It shows a way to use wellio that works when:
1. Don't want to mess with any build tooling like webpack, browserify, gulp, etc.
2. All the JavaScript runs on start instead of only when a button is pushed.

### Problems Avoided
#### Complicated Build Tooling
It is easy to either get confused or frustrated by JavaScript's complicated build tooling. Thankfully, this tooling is optional as shown in this demo.

#### Run Conditions
If you're not using build tooling but calling modules, it is possible to accidentally write JavaScript such that wellio is called before it is finished loading.

This is an example that uses timeouts as a somewhat hacky way to ensure each step is run to completion before starting the next step.

This type of problem may not come up at all if you're calling functions after button pushes, but if all the logic runs on page load, it has confused people in the past.

### How To

## Prerequisites
- NPM
  - Recommend using [NVM](https://github.com/nvm-sh/nvm) to install npm if you don't have it already, so it is easy to have different versions of node on your machine and switch back and forth.


## Instruction Steps to Replicate/Explain demo_noBrowserifyWithTimeOutCrutch demo
- In a terminal, from the top directory, run `npm install wellio`. 
  - This puts a folder called 'node_modules' in the top directly and within it creates a folders for wellio and the various node modules that wellio uses.
- Create an `index.html` file at the same level by running `touch index.html`
- Create a `js` directory, by running mkdir `js`
- Move inside the `js` folder by running `cd js`, then make a loadOneLas.js JavaScript file inside by running `touch loadOneLas.js`.
- The rest of the instructions describe the content in these files in broad strokes. You can look into them for particulars.
- The index.html file loads several JavaScript files.
  - Require.js from 'https://requirejs.org/docs/release/2.3.5/minified/require.js' is used to load the wellio module. It is called from inside the loadOneLas.js.
  - Ajax from `https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js` is used to load the file into browser memory. Wellio.js also have some functionality for this, but it has functionality that needs to work both on server side node.js and front-end only. As a result there's been some situations where it hasn't worked well. Ajax is very robust and easy to understand, so it is used in this demo instead of the built-in wellio functionality.
  - Lastly, index.html calls the `js/loadOneLAS.js` script that is part of this project.
- The `js/loadOneLAS.js` script does 3 things in order.
  - Loads wellio.js with the help of require.js. It loads it from the node_modules folder.
  - Loads the well file using Ajax from jquery into browser memory.
  - Wellio is used to convert the gigantic string in memory into a JSON that is then written to an element in the index.html, such that it appears on the page.