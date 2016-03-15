---
layout: default
---

From time to time, we hold hackathons where participants chose projects tangentially related to their research to finish in a day.

# CoCoLab Hackathon (March 4, 2016).

## Ask Reddit
*Andreas Stuhlmüller*

I converted the dataset of all reddit posts and comments (1.7 billion!) into question-answer format and wrote a [command-line interpreter](https://github.com/stuhlmueller/ask-reddit) that can be used to ask reddit questions such as "what movie should i watch?" ("city of god") or "where should i go on vacation?" ("costa rica. tons of things to do and see, lovely people, reasonable prices.").

## Content inference
*Long Ouyang*

Reading articles on the internet can be annoying because often times the writing itself occupies so little space. Personally, I'd like to see nothing except for the content (no banner ads, no pictures, no floating banners / social toolbars). So I wrote a tool that tries to extract the content by inferring a CSS selector based on user-generated examples of elements that should be kept / not kept.

## rwebppl
*Michael Henry Tessler and Mika Braginsky*

We laid the foundations for [rwebppl](https://github.com/mhtess/rwebppl), an R interface to WebPPL. We got it to the point where the user can call ```install_webppl()```, and then call webppl models that are written into a file (just like one would on the command line, but from R), as well as be able to write and run models using only R (models written to a string, as is done in rjags and rstan). As well, you can use webppl packages in much the same way as you would use them on the command line. In the future, we are going to implement ways to pass data from R into webppl (for example, for doing bayesian data analysis)  and be able to pass the markov chains from Webppl MCMC to R, for running diagnostics.

## topicl
*Robert Hawkins and Noah Goodman*

We created a [webppl packge](https://github.com/hawkrobe/topicl) that scrapes text from instances of a user-provided DOM class on a webpage, parses the text into documents with word counts, and runs a topic model on the documents. We implemented LDA using a mini-batch variational inference algorithm, and embedded it in the CoCoLab publications page to get topic distributions over abstracts! In the future, we'd like to provide visualization tools as well.

## PunerRater
*Justine Kao and Desmond Ong*

We made a [website](https://github.com/justinek/PunerRater) that takes in a user-submitted pun and provides ambiguity and distinctiveness ratings. Also highlights most likely focus words given each meaning.

# CoCoLab Hackathon (July 1, 2015).

## SampleMe
*Andreas Stuhlmüller*

An app that tracks how you're feeling throughout the day, so that eventually you can correlate things that you do during the day with how you feel. It uses [webppl.js](https://github.com/probmods/webppl) to send notifications at random intervals.

Here's the web interface to the [SampleMe](http://sampleme.io/) app! You can also install the corresponding app on your smartphone.

Future extensions could request more information from users so that the app itself can make inferences (also using WebPPL) about what things make you feel good, or at least track some of the things that *might* make you feel good.

## Inference for SampleMe
*Michael Henry Tessler and Noah Goodman*

Examples of WebPPL inference to complement the SampleMe app.

<!-- And a [coffee model](https://github.com/stuhlmueller/sampleme/blob/master/models/coffeeRegression.wppl) for figuring out whether coffee makes me happier. -->
<!-- I implemented a few data analysis models that approach general problems relating to Andreas’s SampleMe project. -->

One of the problems is: when to ping the user for another data point (e.g. when to ask "how are you feeling", given some history of responses). To address this, MH wrote down a simple "[change detection](https://github.com/stuhlmueller/sampleme/blob/master/models/detectChanges.wppl)"" model, that infers when a change has occurred (or hasn’t occurred) from time-series data. From this, we can quantify uncertainty about future time points (e.g. if a change has occurred recently, we will be less uncertain about the value of the next time point than if we are still expecting a change to occur). Using the variance of the posterior predictive, we could conceivably decide when is a good future time to ask a question (e.g. when our uncertainty exceeds some threshold).

Even more models [here](https://github.com/stuhlmueller/sampleme/tree/master/models).

## Color-Me-Text
*Greg Scontras, Justine Kao, and Desmond Ong*

An app that takes text that users input and colors the words in the text according to the words' valence, arousal, or concreteness. This interface allows users to see different dimensions of text and could be very interesting for visualizing features of different kinds of correspondances and poetry. It also helps to visualize how accurate different measures of affect and concreteness and where they deviate from intuitions.

Here's the [Color-Me-Text](http://cocolab.stanford.edu/cgi-bin/colorMeText/) app! Put in your own text and try it out.

Future extensions could allow users to input their own csv files to capture other dimensions of meaning.

## Repackaging WebPPL
*Robert X.D. Hawkins*

Make it so that it's easy to write webPPL modules and manage dependencies with a `package.json` file. WebPPL pull request [#133](https://github.com/probmods/webppl/pull/133).

## Improving visualizations in WebPPL
*Erin Bennett*

Plot ERPs with continuous support as binned histograms. Also, when items in the support are objects consisting of several different continuous values, plot marginals and scatterplots. Here's the [package so far](https://github.com/erindb/webppl-viz) and some [examples](http://web.stanford.edu/~erindb/webppl-viz/).

## Symbolic Regression in WebPPL
*Daniel Ly*

The "symbolic regression using probabilistic programming languages" hackathon project focused on inferring the structure and parameters of free form equations using the probabilistic programming language webppl. Representing equations as combinations of mathematical operators, modifications of mathematical expressions are proposed using probabilistic inference and scored based on its ability to fit a given dataset. Although symbolic regression inference is typically computed using an evolutionary computational algorithm, the purpose of this project was to develop a platform for evaluating the performance of probabilistic inference in this domain.

## Streaming in WebPPL
*Siddharth Narayanaswamy*

The goal was to enable the use of _streaming_, where data is a continuously
available and updating, to perform inference in an incremental fashion,
producing answers when required. An example application would be with robots,
where sensor information was a continuously available stream, and decisions
(inference) would need to be made on demand.
The framework nominally involves two kinds of use:
 - use of streaming data for conditioning
   model conditions on data as it is made available
 - use of streaming data as model parameters
   model is reparameterised as available data changes over time

For the hackathon, the latter was implemented for MH. (the former was only
partially implemented). Implementation involved the setting up of a streaming
interface for data, and instrumenting MH to consume the data, produce results on
the inference-so-far, and emit a continuation that could be used to resume the
inference process when required.

<!-- ## Personal Webpage
http://ovsazonova.github.io/ -->