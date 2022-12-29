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
* [build the docker](../docs/Dockerfile) image for the documentation
* push the docker image
* run docker prune (we no longer need the image locally in the build agent)
* The image should then be automatically picked up by openshift within the next 15min 
