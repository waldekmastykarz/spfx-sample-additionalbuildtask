'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
const setServiceUrl = require('./setServiceUrl');

build.addBuildTasks(setServiceUrl);
build.initialize(gulp);
