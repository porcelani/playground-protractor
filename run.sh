#!/usr/bin/env bash

start sh -i -c "webdriver-manager update && webdriver-manager start"
start sh -i -c "protractor config.js"



