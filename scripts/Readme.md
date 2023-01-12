# Build Scripts

## buildCI.js
The [buildCI.js](./buildCI.js) script is run with our Github actions

In the script we check on which git branch we are and decide which sub-script to run accordingly:


* Feature Branch
    * defaultScript
* Develop & Main Branch
    * defaultScript
    * deployDocScript
    
### defaultScript
The defaultScript: 
* installs all dependencies
* checks linting
* runs unit tests
* runs e2e tests

### deployScript
The deployScript:
* executes `npm i` on the documentation
* executes `npm run build` on the documentation
