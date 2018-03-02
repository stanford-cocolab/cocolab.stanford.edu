---
layout: default
permalink: datasets/colors.html
---

## Color Reference (English)

<img alt="Speaker's view in color reference task." src="{{site.url}}{{site.baseurl}}/images/research/speakerView.png" width="50%" style="display: block; margin: auto;"/>

[**Download**](https://raw.githubusercontent.com/futurulus/coop-nets/master/behavioralAnalysis/humanOutput/filteredCorpus.csv)

**Size**: 948 games; 53,365 utterances.

**Description**: Players saw three color swatches. Trials were split evenly among three conditions manipulating the context to give rise to different pragmatic language use. In the *far* condition, all three colors were far apart in space (e.g. one was reddish, one was greenish, one was blueish). In the *split* condition, the target was close to one of the other objects but far away from the other (e.g. two were reddish, one was blue). In the *close* condition, all three colors were close in space (e.g. three subtly different shades of red).

**Columns**:

* **gameid**: unique identifier for game in which message was sent
* **msgTime**: time at which player sent message
* **roundNum**: round of game in which message was sent [1-50]
* **condition**: type of context for round ['close', 'split', 'far']
* **role**: role of player who sent message ['speaker', 'listener']
* **workerid_uniq**: unique, anonymized identifier of player who sent message to track across games
* **contents**: raw text of message
* **clkTime**: time at which listener clicked object to terminate round
* **outcome**: boolean denoting whether the listener picked the correct object [false, true]
* **numOutcome**: integer denoting whether the listener picked the correct object [0, 1]
* **numRawWords**, **numRawChars**: number of words/characters in raw message
* **numCleanWords**, **numCleanChars**: number of words/characters in cleaned message (stopwords removed)
* **source**: indicator that message game from human participant rather than model
* **clickStatus**: identity of object clicked by listener [target, distr1, distr2]
* **clickColH**,**clickColS**,**clickColL**: coordinate in HSL space of object clicked by listener
* **clickLocS**,**clickLocL**: location in array of object clicked: for speaker (S) and listener (L)
* **alt1Status**: identity of first alternative [target, distr1, distr2]
* **alt1ColH**,**alt1ColS**,**alt1ColL**: coordinate in HSL space of first alternative
* **alt1LocS**,**alt1LocL**: location in array of first alternative: for speaker (S) and listener (L)
* **alt2Status**: identity of second alternative [target, distr1, distr2]
* **alt2ColH**,**alt2ColS**,**alt2ColL**: coordinate in HSL space of second alternative
* **alt2LocS**,**alt2LocL**: location in array of second alternative: for speaker (S) and listener (L)
* **targetD1Diff**,**targetD2Diff**,**D1D2Diff**: [delta-e 2000](http://zschuessler.github.io/DeltaE/learn/) distance in perceptually-normed LAB space between each pair of the three swatches

Raw data can be found with its own README [on github](https://github.com/futurulus/coop-nets/tree/master/behavioralAnalysis/humanOutput/rawCorpus).

**Citation**:

[Monroe, W., Hawkins, R. X. D., Goodman, N. D., & Potts, C. (2017). Colors in Context: A Pragmatic Neural Model for Grounded Language Understanding. TACL: Transactions of the Association for Computational Linguistics 5, pp. 325–338.](http://www.aclweb.org/anthology/Q17-1023)

## Color Reference (Chinese)

[**Download**](https://github.com/futurulus/coop-nets/blob/master/languageAnalysis/data_input_cleaned/filteredCorpus.csv)

**Size**: 175 games; 5,775 utterances.

**Description**: Chinese speakers performed the same task as above.

**Columns**:

* **gameid**: unique identifier for game in which message was sent
* **msgTime**: time at which player sent message
* **roundNum**: round of game in which message was sent [1-50]
* **condition**: type of context for round ['close', 'split', 'far']
* **role**: role of player who sent message ['speaker', 'listener']
* **contents**: raw text of message
* **clkTime**: time at which listener clicked object to terminate round
* **outcome**: boolean denoting whether the listener picked the correct object [false, true]
* **numRawWords**, **numRawChars**: number of words/characters in raw message
* **numCleanWords**, **numCleanChars**: number of words/characters in cleaned message (stopwords removed)
* **source**: indicator that message game from human participant rather than model
* **clickStatus**: identity of object clicked by listener [target, distr1, distr2]
* **clickColH**,**clickColS**,**clickColL**: coordinate in HSL space of object clicked by listener
* **clickLocS**,**clickLocL**: location in array of object clicked: for speaker (S) and listener (L)
* **alt1Status**: identity of first alternative [target, distr1, distr2]
* **alt1ColH**,**alt1ColS**,**alt1ColL**: coordinate in HSL space of first alternative
* **alt1LocS**,**alt1LocL**: location in array of first alternative: for speaker (S) and listener (L)
* **alt2Status**: identity of second alternative [target, distr1, distr2]
* **alt2ColH**,**alt2ColS**,**alt2ColL**: coordinate in HSL space of second alternative
* **alt2LocS**,**alt2LocL**: location in array of second alternative: for speaker (S) and listener (L)
* **targetD1Diff**,**targetD2Diff**,**D1D2Diff**: [delta-e 2000](http://zschuessler.github.io/DeltaE/learn/) distance in perceptually-normed LAB space between each pair of the three swatches

Raw, pre-filtered data can be found [on github](https://github.com/futurulus/coop-nets/tree/master/languageAnalysis/data_input_raw).

**Citation**:

Monroe, W., Hu, J., Jong, A., & Potts, C. (2018). Generating Bilingual Pragmatic Color References. Proceedings of the 16th Annual Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies. 