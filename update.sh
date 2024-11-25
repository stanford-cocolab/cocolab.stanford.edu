#!/bin/bash

WWW_DIR="/afs/ir.stanford.edu/group/cocolab/WWW/"

git pull
bundle exec jekyll build

pushd _site
rm -f site.zip

zip -r site.zip *
cp site.zip $WWW_DIR

cd $WWW_DIR && unzip -o site.zip && rm site.zip

popd
