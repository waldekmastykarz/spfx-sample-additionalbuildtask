'use strict';
var fs = require('fs'),
  argv = require('yargs').argv,
  error = require('gulp-core-build').error,
  log = require('gulp-core-build').log;

var SetServiceUrl = {
  execute: (config) => {
    return new Promise((resolve, reject) => {
      if (!argv.serviceurl) {
        error('Service URL not set. Not going to replace in code');
        reject();
        return;
      }

      var webPartCodePath = `${config.libFolder}/webparts/helloWorld/HelloWorldWebPart.js`;
      var webPartCode = fs.readFileSync(webPartCodePath, 'utf-8');
      webPartCode = webPartCode.replace('$SERVICE_URL$', argv.serviceurl);
      fs.writeFile(webPartCodePath, webPartCode, (err) => {
        if (err) {
          error(err);
          reject(err);
          return;
        }

        log(`Service URL successfully set to ${argv.serviceurl}`);
        resolve();
      })
    });
  },
  name: 'set-service-url'
};
exports.default = SetServiceUrl;