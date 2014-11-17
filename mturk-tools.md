---
layout: default
permalink: mturk-tools.html
---

# Resources for Experiments on Amazon's Mechanical Turk

We write our experiments as webpages, and participants see this as a frame within the Mechanical Turk window. We have some tools that make using Amazon's Command Line Tools a bit easier.

**NOTE:** Chrome, Firefox, and IE block mixed content, so you might have some issues with Turkers seeing a blank window instead of your experiment. This is easy to fix by making all of your links begin with `https://` or just //`. Many Turkers will [know about this issue](//mturkforum.com/showthread.php?10046-problem-with-hits) and be able to see your HIT anyway, but it's nicer to make it easily visible.

## Preparation

**Note: read all of the instructions here!! (Amazon's instructions are not very good.)**

1.  Download Amazon's [Command Line Tools](//aws.amazon.com/developertools/Amazon-Mechanical-Turk/694)

    Open the file GetStarted.html included in the download. Follow the instructions to create a mTurk requester account, sign up for Amazon Web Services, and install the Command Line Tools.

    Troubleshooting notes for this step:
	* follow steps 2-3 on this page *before* testing that CLT is working.
	* If you have Java-related trouble with this step, read the * at the bottom of this page.
	* If you have already made an account on sandbox but when you try to post a HIT there, you get `error #1 go to sandbox and complete registration`, log out and then log back in, and then it will ask you additional registration questions.)

2. The identifiers that you are instructed to insert in the file mturk.properties in the `/bin` folder of your CLT installation are part of your MTurk requester information. To get them, go to the AWS identifier page after you've created a Requester account.

3. Also edit mturk.properties to change the service URL from `http://...` to `https://...` (As of June 8, 2012 it appears that Amazon is requiring you to use `https` instead of `http`, but the current version of CLT doesn't reflect this.)

## Writing Your Experiment Webpage

You'll want to write your experiment using HTML/JS/CSS and put it online somewhere. We have a template experiment you can to work off of. You can get it from [this github page](//github.com/feste/experiment_template) or you can download the [zipped file](//github.com/feste/experiment_template/archive/master.zip). See the `readme.md` included in the folder for instructions.

## Running Your Experiment

We have a python script `submiterator.py` (originally written by Dan Lassiter) for posting experiments to Mechanical Turk (this may or may not work in Windows). You can get an updated version of Submiterator from [this github page](//github.com/feste/Submiterator), or you can download the [zipped file](//github.com/feste/Submiterator/archive/master.zip).

1. Download and unzip the submiterator files
2. Put the included files in a dedicated folder for your experiment.
3. Open the readme.md file in a text editor and follow the instructions, and you should be up and running in no time.
4. Note that webpages don't always display the same way in an mTurk frame that they do when you open them in a normal browser window. Use the sandbox setting in Submiterator to find out whether your experiment displays as expected before going live. This is also important for confirming that the step where data gets sent to mTurk has no bugs in it. You definitely don't want turkers completing your experiment, but being unable to send you the data and therefore unable to get paid. They don't like that. 

## Getting Data From Your Experiment

If the submiterator tools work on your computer, you can use the included `getresults.sh` and `reformat.py` to get results into long form tables. You can also see your results (and accept or reject HITs) by going to the web interface for mTurk, clicking on the Manage tab, and then clicking on the tiny link in th eupper right hand corner that says Manage Hits Individually.

## Additional Information

*Some additional notes on installation, in case you have Java-related trouble installing CLT:

1. Some people have initially had trouble getting CLT to work due to weird stuff with the version of Java they have installed; eventually they managed to get it working by finding a legacy version of Java buried somewhere in their library and setting the `JAVA_HOME` environment variable to this. Don't know if others will have this problem, but the information is just in case. Not every version of Java will work, apparently.

2. Check out this link if you want to find out where your java home is. Then you can edit the file `~/.bash` (or other terminal preferences file, like `~/.bashrc` or `~/.bash_profile`) and add the line:

    	export JAVA_HOME=/System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home

3. The script at `/bin/invoke.sh` in the folder where you are keeping CLT assumes that your version of Java is in a folder called `/bin/` that is one level deeper than your `JAVA_HOME` path. If this isn't right for you, you will need to modify the last line of `invoke.sh` in tandem with setting the `JAVA_HOME` path in your `.profile` (or whatever file your preferences are in) to reflect the correct location.
