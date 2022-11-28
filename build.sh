#!/bin/bash

# exit when any command fails
set -e

mkdir -p build

# copy target
cp -r src/static/* build

# precompile handlebars
node_modules/handlebars/bin/handlebars ./src/handlebars/* -f build/js/handlebars_precompiled.js

# generate html files
python src/generator.py 

echo "open the generated website ./build/index.html";