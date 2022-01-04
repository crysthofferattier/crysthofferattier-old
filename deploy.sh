#!/bin/bash

ng build --prod --output-path docs --base-href="https://crysthofferattier.github.io/" \
&& cp docs/index.html docs/404.html \
&& git add . && git commit -m "Production version `date +'%Y-%m-%d %H:%M:%S'`" && git push origin main