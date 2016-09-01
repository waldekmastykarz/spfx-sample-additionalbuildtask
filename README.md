# Extending SharePoint Framework build process with custom tasks

This sample illustrates how you can add custom tasks to the build process of SharePoint Framework projects.

## Minimal Path to Awesome

- clone this repo
- `$ npm i`
- `$ gulp bundle --serviceurl https://contoso.com/api/myservice`

## Features

This sample uses a custom task to dynamically set the URL of a service in Web Part's code file during build. The token is included in the [Web Part's source file](./src/webparts/helloWorld/HelloWorldWebPart.ts) and is replaced after TypeScript transpilation but before bundling with the value passed using the **serviceurl** parameter.

The custom task is defined in the **[setServiceUrl.js](./setServiceUrl.js)** file which is loaded into gulpfile.js and injected into the build pipeline using the `build.addBuildTasks()` function.