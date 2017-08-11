---
layout: default
---

Here's how to edit this website!

## Overview

1. Checkout [this repo](//github.com/erindb/cocolab.stanford.edu) on github
2. Make changes and push to github (make sure you have collaborator privilages, and see later sections for details on specific kinds of changes)
3. Go to `/afs/ir.stanford.edu/group/cocolab/cocolab.stanford.edu` and pull your changes

		ssh [SUNetID]@cardinal.stanford.edu
		cd /afs/ir.stanford.edu/group/cocolab/cocolab.stanford.edu
		git pull

	There's a script on the server that makes the changes live after a successful merge. 

## Specific kinds of changes

### How to add a new page to the website

1. make a markdown file, e.g. `new-file.md` in the top of the `cocolab.stanford.edu` directory

2. add this to the top of the markdown file:

		---
		layout: default
		---

3. if you want this page to appear in the navbar, add another value to the header:

		---
		layout: default
		title: New Page
		---

4. visit `cocolab.stanford.edu/new-page.html`.

### How to add a person to the website

1. go to the file `_data/cocolab.yml`

2. find (or add) whatever role they play in the lab (e.g. Principal Investigator, Graduate Student, Alumni), and add a new person to that role.

		- role: [WHATEVER ROLE]
		  people:
		    - [OTHER PEOPLE]
		    - name: New Person
		      img: newPerson.jpg
		      webpage: //www.stanford.edu/~newP
		      bio:
		        - >
		          A paragraph of this person's bio.
		        - >
		          Another paragraph of this person's bio.
		    - [OTHER PEOPLE]

### How to add a publication to the website

1. go to the file `_bibliography/cocolab.bib` and add the publication.

### How to add an image to the front page carousel

1. got to the file `_data/carousel.yml`

2. add a new image to the end of the file

		- [OTHER IMAGES]
		- image: my-new-image.jpg
		  label: "A description of my new image"
		  alt: "if you want, you can add a line of alt text. otherwise, the label will be the alt text."

### How to update Noah's CV
(for now...)

1. make changes to ndg-cv.md

2. have `jekyll`, `jekyll-scholar`, and `pandoc` installed

3. run `sh ./make-cv.bash`

4. `git add ndg-cv.md ndg-cv.pdf`

## Troubleshooting

If the website does not update within a minute or so of making these changes, this might be because the build script has stopped working. You can talk to Erin about this, or run

	source /afs/ir.stanford.edu/group/cocolab/.bash_profile
	jekyll build
	rsync -r -a -v _site/* ../WWW/

in a terminal on the Stanford server in the `/afs/ir.stanford.edu/group/cocolab/cocolab.stanford.edu` directory.

### Set up

To set up installing ruby gems without sudo access, these lines should be in your `~/.bash_profile` (or `~/.bashrc` or whatever you use):

```
PATH=$PATH:~/.gem/bin:~/bin
export GEM_HOME=~/.gem
```

Once you've re-logged on or `source`ed your profile file, you can install [`jekyll`](https://jekyllrb.com/) and [`jekyll-scholar`](https://github.com/inukshuk/jekyll-scholar) using `gem`. This site uses `jekyll (2.5.3)` and `jekyll-scholar (4.3.3)`.

```
gem install jekyll -v 2.5.3
gem install jekyll-scholar -v 4.3.3
```

Note that while `jekyll` is compatible with [GitHub pages](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/), [`jekyll-scholar` is not](https://github.com/inukshuk/jekyll-scholar#github-pages).

Here's a possible `.git/hooks/post-merge` script.

```
#!/bin/sh

export COCOHOME=/afs/ir.stanford.edu/group/cocolab
export PATH=$PATH:${COCOHOME}/.gem/bin
export GEM_HOME=${COCOHOME}/.gem
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
cd /afs/ir.stanford.edu/group/cocolab/cocolab.stanford.edu/

jekyll build

rsync -r -a -v /afs/ir.stanford.edu/group/cocolab/cocolab.stanford.edu/_site/* /afs/ir.stanford.edu/group/cocolab/WWW/
```

For local debugging, one could run

```
jekyll build
```

and then navigate to `_site/index.html`. Unfortunately, the links in this repo are currently hard-coded with the assumption that all files are present at the host (in the online version, `http://cocolab.stanford.edu/`, in the local version `file://`), so further abstraction and modifications would have to be made in order to actually navigate the site locally...




