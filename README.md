# Playwright
# TEST DEMO SAUCEDEMO
# Description:

# test framework include e2e tests for Login and Add Cart to Checkout.
# project has been prepared in JS, Node.JS and Playwright 1.30.0.
# recommended Node version: 16

# Setup:

# clone repo from: https://github.com/FaisalAJ88/Playwright.git

# go to ./playwright-tests
# type: nvm use
# install dependencies: npm install

Tests scripts:

npm run playwright:test:run - to run all tests on all browsers
npm run playwright:test:debug - to run all tests in debug mode
npm run playwright:test:run name.spec.js - to run specific spec file or files (example: npm run playwright:test:run luluBookstoreSearch.spec.js)
npm run playwright:test:run:chrome - to run all tests on chrome browser
npm run playwright:test:run:firefox - to run all tests on firefox browser
npm run playwright:test:report - to generate report from tests

Gitlab-ci:

at this moment gitlab-ci includes pipeline with two simple jobs - build (run automatically) and e2e-tests (run manually).
jobs are launched during creating merge requests, commits and merge the branches to the master.
after e2e-tests has been completed - report is generated automatically to the artifacts.

Author:

Faisal Adi Jayadi