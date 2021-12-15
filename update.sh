#!/bin/bash

WWW_DIR="/afs/ir.stanford.edu/group/cocolab/WWW/"
HOST="juliawhi@myth.stanford.edu"

set -e

JEKYLL_ENV=production jekyll build

pushd _site
rm -f site.zip

zip -r site.zip *
scp site.zip "$HOST:$WWW_DIR"

ssh -t "$HOST" "cd $WWW_DIR && unzip -o site.zip && rm site.zip && rm update.sh"

popd
