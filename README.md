# Docsplant Website

This repository contains the sources for the docsplant main website. 

# Usage
All resources are located in the 'src' directory. Currently, there are 3 components:

* `static` - The static resources that will be copies directly into the target directory.
* `handlebars` - The js handlebars used for shared HTML snippets like the header.
* `templates` - The jinja templates used to generate HTML files in multiple languages.

## Prerequisites
 
The handlebars need to be precompiled with the js library `handlebars`. 

```
npm install handlebars -g
```

The jinja templates are used in the `src/generator.py` python script. Python3
is needed and the packages from `requirements.txt` need to be installed.

```
pip install -r requirements.txt
```

## Build

