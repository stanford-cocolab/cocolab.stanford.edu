---
layout: default
permalink: datasets/tangrams.html
---

## Tangrams (Unconstrained)

<img alt="Speaker's view in color reference task." src="{{site.url}}{{site.baseurl}}/images/research/tangrams.png" width="50%" style="display: block; margin: auto;"/>

[**Download**](https://raw.githubusercontent.com/hawkrobe/reference_games/master/data/tangrams_unconstrained/tangramsUnconstrainedMessages.csv)

**Size**: 67 games; 9,967 utterances.

**Description**: Players saw a grid of twelve tangram shapes taken from Clark & Wilkes-Gibbs (1986). The matcher clicked and dragged tangrams to new positions. When confident that their board matches that of the director, the matcher clicked a 'submit board' button and received feedback on the number of tangrams (out of 12) that matched, before advancing to the next round (out of 6). This task was unconstrained in the sense that players could type anything into the chat box at any time and address the tangrams in any order they preferred.

**Columns**:

* **gameid**: unique identifier for game in which message was sent
* **msgTime**: time at which player sent message
* **roundNum**: round of game in which message was sent [1-50]
* **condition**: type of context for round ['close', 'split', 'far']
* **role**: role of player who sent message ['speaker', 'listener']
* **workerid_uniq**: unique, anonymized identifier of player who sent message to track across games
* **contents**: raw text of message
* **totalLength**: the total amount of time player spent in game (in ms)
* **thinksHuman**: whether the player thought their partner was a human
* **ratePartner**: how much the player enjoyed working with their partner
* **numRawWords**: the number of raw words in the utterance

**Citation**:

[Hawkins, R. X. D., Frank, M. C. and Goodman, N. D. (2017). Convention-formation in iterated reference games. Proceedings of the Thirty-Ninth Annual Conference of the Cognitive Science Society](https://cocolab.stanford.edu/papers/HawkinsGoodman2017-Cogsci.pdf)