#!/usr/bin/env bash

sed '/layout: default/d' ndg-cv.md > cv-for-pdf-tmp.md
sed '/.*ndg-cv.pdf.*/d' cv-for-pdf-tmp.md > cv-for-pdf.md
rm cv-for-pdf-tmp.md
jekyll build
pandoc _site/cv-for-pdf.html -H cv.sty -o ndg-cv.pdf
rm cv-for-pdf.md