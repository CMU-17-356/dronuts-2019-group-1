# dronuts-2019-group-1

[![Build Status](https://travis-ci.com/CMU-17-356/dronuts-2019-group-1.png)](https://travis-ci.com/CMU-17-356/dronuts-2019-group-1)

This repository contains the Dronuts implementation from Andy Gao, Joyce Chen, and Jonathan Fung. All code was written for the Carnegie Mellon University course 17-356, Software Engineering for Startups (https://cmu-17-356.github.io/). 

Check our site here: http://104.210.57.53/

### How to run the application locally and via docker-compose (e.g. development vs production variations as well)
The application can be run in development mode locally by using `npm start` to run both the server and client for our web app. These can be accessed by their respective directories in the repo. To view the web app in browser, navigate to http://localhost:3000. The page will reload if you make edits.

Running `npm run build` will create an optimized production build for the app, which is minified and has the filenames hashed.

### Make and deploy changes through Travis CI
Commits are automatically built through Travis CI, the Continuous Integration Tool used for this project. This tests to ensure that the code can build correctly, before allowing any changes to be pushed to the repo. The build status of our code can be seen by our build status button at the top. If you are forking your own repository and want to use your own Travis CI, Enable http://travis-ci.com for this repository. To do this, go to the travis website, and grant Travis permissions over your repository.


### Deploy on Azure VMs
In order to deploy on Azure VMs, make sure you have an Azure account setup. For more info, visit http://https://github.com/CMU-17-356/dronut-starter

Once setup, to deploy onto Azure VMs, simply run

```
docker-compose down
docker-compose build
docker-compose -f docker-compose.prod.yml up
```
This should deploy your code onto Azure VMs and run successfully on the web.


### How to run linting, tests, and additional scripts/tools

To run linting on code, we are using eslint. Thus, to lint a directory or file:
```
eslint [directory/filename]
```

To run tests, enter either the server or client folder and type:

```
npm test
```



To clean up any installed npm packages or remove extraneous packages, run `npm prune [[<@scope>/]<pkg>...] [--production] [--dry-run] [--json]`. This command removes “extraneous” packages. If a package name is provided, then only packages matching one of the supplied names are removed. Extraneous packages are packages that are not listed on the parent package’s dependencies list. More information can be found here: https://docs.npmjs.com/cli/prune.html
