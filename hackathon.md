---
layout: default
---

# CoCoLab Hackathon

We held a hackathon on July 1, 2015. Participants chose projects tangentially related to their research to finish in a day.

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