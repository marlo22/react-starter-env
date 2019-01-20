# My React Starter Environment with Redux
## What contain this?
* Module bundler of course. (webpack).
* Transpiling ES6 to ES5 and JSX to JavaScript (Babel).
* Lint pure JavaScript, React and JSX. (ESLint with Airbnb configuration).
* Compiling SCSS files to CSS.
* Serve files to easy and fast build your app (BrowserSync).
* Copy and manage files and directories. (Gulp)
* Configured Redux

## Where put my source files?
All files and catalogs you should keep in ```src``` directory. Redux actions should be placed in ```actions``` directory, actions name in ```consts/actions.js``` file and reducers in ```reducers``` folder.

## Commands
Use ```npm start``` to run developer mode (start BrowserSync server, listening to changes in files etc.). In this case your bundle is save to ```build``` directory. If you want build production version of your application use ```npm run build```. Your ready files and directories you can find in ```dist``` catalog.
