---
layout: default
---




#Computation and Cognition: the Probabilistic Approach (Psych204/CS428, Fall 2016)

##Overview

How can we understand intelligent behavior as computation?
This course will introduce probabilistic modeling through probabilistic programs,
and will explore the probabilistic approach to modeling human (and artificial) cognition.
Examples will be drawn from areas including concept learning, causal reasoning, social cognition, and language understanding.

* Instructor: Noah Goodman (ngoodman at stanford)

* TAs: Robert Hawkins (rxdh at stanford) & MH Tessler (mtessler at stanford)

* Meeting time: T,Th, 1:30-2:50pm

* Meeting place: School of Education 313

* Office hours: T, 3-4pm (NG; see after class); Th, 3-4pm (MH; Room 316); F, 2-3pm (RH; Room 352)

We will use [Canvas](https://canvas.stanford.edu/courses/49557/) to post announcements, collect assignments, and host discussion among students. We encourage students to post questions here instead of directly emailing the instructors: we hope students will attempt to answer each other's questions as well (TAs will verify the answers). Trying to explain a concept to someone else is often the best way to check your own knowledge.

<!--
**The course is full, but we may be able to accept a few more students. If you would like to apply to add the course please fill out [this form](https://goo.gl/forms/uq9cf2syqP2h7b1k2).**
-->

##Assignments and grading

Students (both registered and auditing) will be expected to do assigned readings *before* class.
Registered students will be graded based on:

* 20% Class participation and Canvas participation.
* 30% Homework.
* 50% Final project (including proposal, update, presentation, and paper).

Assignments should be submitted to Canvas in .pdf form; fixed-width font appreciated. Homework assignments will be graded using the following scheme:

After the first attempt of the problem set:

+ Full credit: Assignment is complete and solutions are correct
+ Half credit: Assignment was attempted, with incorrect solutions
+ No credit: Assignment was not attempted

You will receive feedback on your work. If you receive *half credit*, you will have the opportunity for revision. Submit revisions to the same assignment entry on Canvas, including "revision" in your file name:

+ Full credit (revised attempt): Assignment is complete, solutions are correct, and explanations for why original solution was incorrect are provided

##Readings

Readings for each week will be linked from the calendar below. Readings will be drawn from the web-book [Probabilistic Models of Cognition](http://probmods.org/v2) and selected research papers. (In some cases the papers will require an SUNet ID to access. See the instructor in case of trouble.)

##Pre-requisites

There are no formal pre-requisites for this class. However, this is a graduate-level course, which will move relatively quickly and have technical content. Students should be already familiar with the basics of probability and programming.


# Other resources

In addition to the assigned readings below, here are notes from a few related short courses, that might prove useful:

* [The Design and Implementation of Probabilistic Programming Languages](http://dippl.org/)
* [PPAML Summer School 2016](http://probmods.github.io/ppaml2016/)
* [Bayesian Statistics for Psychologists](http://www.stanford.edu/class/psych201s/)


#Schedule

##Week of September 26

Introduction. Simulation, computation, and generative models. Probability and belief.

Homework: Exercises on Generative Models and (optionally) JavaScript Basics.

Readings:

 * [JavaScript Basics](http://probmods.org/v2/chapters/13-appendix-js-basics.html)
 * [Generative Models](http://probmods.org/v2/chapters/02-generative-models.html)
 * Optional: [Concepts in a probabilistic language of thought.](http://www.stanford.edu/~ngoodman/papers/ConceptsChapter-final.pdf) Goodman, Tenenbaum, Gerstenberg (2015).
 * Optional: [How to grow a mind: structure, statistics, and abstraction.](http://web.mit.edu/~cocosci/Papers/tkgg-science11-reprint.pdf), J. B. Tenenbaum, C. Kemp, T. L. Griffiths, and N. D. Goodman (2011).
 * Optional: [Structure and Interpretation of Computer Programs.](http://mitpress.mit.edu/sicp/) (This is an amazing intro to computer science, through Scheme.)
 * Optional: [Internal physics models guide probabilistic judgments about object dynamics.](http://web.mit.edu/~pbatt/www/publications/HamrBattTene11CogSci33.pdf) Hamrick, Battaglia, Tenenbaum (2011).
 * Optional: [Sources of uncertainty in intuitive physics.](http://www.edvul.com/pdf/SV-CogSci-2012.pdf) Smith and Vul (2012).


##Week of October 3

Conditioning and inference. Causal vs. statistical dependency. Patterns of inference.

Homework: Exercises on Conditioning and Patterns of Inference.

Readings:

* [Conditioning](http://probmods.org/v2/chapters/03-conditioning.html)
* [Patterns of Inference](http://probmods.org/v2/chapters/04-patterns-of-inference.html)
* [Predicting the future.](http://cocosci.berkeley.edu/tom/papers/predictions.pdf) Griffiths and Tenenbaum (2006).
* Optional: [Causal Reasoning Through Intervention.](http://www.ucl.ac.uk/lagnado-lab/publications/lagnado/intervention%20hagmayer%20et%20al.pdf) Hagmayer, Sloman, Lagnado, and Waldmann (2006).
* Optional: [Children's causal inferences from indirect evidence: Backwards blocking and Bayesian reasoning in preschoolers.](https://web.stanford.edu/~ngoodman/psych204/restrictedpapers/Sobel2004.pdf) Sobel, Tenenbaum, Gopnik (2004).
* Optional: [Bayesian models of object perception.](http://vision.psych.umn.edu/users/kersten/kersten-lab/papers/KerstenYuilleApr2003.pdf) Kersten and Yuille (2003).

## Week of October 10

Bayesian data analysis. Discussion on levels of analysis.

Homework: Exercises on Bayesian data analysis, also work on project proposals (see below).

<!--[Mini-project](https://probmods.org/v2/chapters/mini-projects.html#explaining-away) -->

Readings:

* [Bayesian data analysis](http://probmods.org/v2/chapters/14-bayesian-data-analysis.html)
* [Chapter 1 of "The adaptive character of thought."](https://web.stanford.edu/~ngoodman/psych204/restrictedpapers/Anderson90.pdf) Anderson (1990).
* Optional: [Chapter 1 of  "Vision."](http://ling.umd.edu/~idsardi/728/Marr/Marr%20%27Vision%27%20Ch%201.pdf) Marr (1982).
* Optional: [Ten Years of Rational Analysis.](https://web.stanford.edu/~ngoodman/psych204/restrictedpapers/chater99ten.pdf) Chater, Oaksford (1999).
* Optional: [The Knowledge Level.](https://web.stanford.edu/~ngoodman/psych204/restrictedpapers/Newell1982.pdf) Newell (1982).

## Week of October 17

Inference algorithms. Resource-rational process models.

Project proposals due on Thursday!

Readings (to be finalized!):

* [Algorithms for Inference](http://probmods.org/v2/chapters/07-inference-process.html)
* [DIPPL: Exploring the executions of a random computation](http://dippl.org/chapters/03-enumeration.html)
* [DIPPL: Markov Chain Monte Carlo](http://dippl.org/chapters/06-mcmc.html)
* [One and done: Globally optimal behavior from locally suboptimal decisions.](http://stanford.edu/~ngoodman/papers/VulEtAl2009.pdf) Vul, Goodman, Griffiths, Tenenbaum (2009).
* [Burn-in, bias, and the rationality of anchoring.](http://www.stanford.edu/~ngoodman/papers/LiederGriffithsGoodman2013NIPS.pdf) Lieder, Griffiths, and Goodman (2012).
* Optional: [Perceptual multistability as Markov chain Monte Carlo inference](http://papers.nips.cc/paper/3711-perceptual-multistability-as-markov-chain-monte-carlo-inference.pdf). Gershman, Vul, Tenenbaum (2009).
* Optional: [A more rational model of categorization](http://health.adelaide.edu.au/psychology/ccs/docs/pubs/2006/SanbornGriffithsNavarro2006.pdf). Sanborn, Griffiths,  Navarro (2006).
* Optional: [Theory acquisition as stochastic search](http://stanford.edu/~ngoodman/papers/tlss_2010_final.pdf) Ullman, Goodman, and Tenenbaum (2010).
* Optional: [Exemplar models as a mechanism for performing Bayesian inference](http://cocosci.berkeley.edu/tom/papers/mechanism.pdf). Shi, Griffiths, Feldman, Sanborn (2010).


## Week of October 24
Sequences of observations. Learning as inference.

Readings (to be finalized!):

* [Models for sequences of observations](http://probmods.org/v2/chapters/05-observing-sequences.html)
* [Learning as Conditional Inference](https://probmods.org/v2/chapters/08-learning-as-conditional-inference.html)
* [A rational analysis of rule-based concept learning.](http://stanford.edu/~ngoodman/papers/RRfinal3.pdf) Goodman, Tenenbaum, Feldman, and Griffiths (2008).
* Optional: <a href="http://web.mit.edu/cocosci/Papers/nips99preprint.pdf">Rules and similarity in concept learning.</a> Tenenbaum (2000).
* Optional: [Learning Structured Generative Concepts](https://mindmodeling.org/cogsci2010/papers/0533/paper0533.pdf). Stuhlmueller, Tenenbaum, and Goodman (2010).

## Week of October 31

Hierarchical models. Mixture models. Occam's razor.

Readings (to be finalized!):

* <a href="https://probmods.org/v2/chapters/09-hierarchical-models.html">Hierarchical Models</a>
* <a href="https://probmods.org/v2/chapters/10-occam's-razor.html">Occam's Razor</a>
* <a href="https://probmods.org/v2/chapters/11-mixture-models.html">Hierarchical Models</a>
* <a href="http://web.mit.edu/cocosci/Papers/structure-strength-reprint.pdf">Structure and strength in causal induction.</a> Griffiths and Tenenbaum (2005).
* Optional: <a href="http://web.mit.edu/cocosci/Papers/bayes.pdf">Bayesian modeling of human concept learning.</a> Tenenbaum (1999).
* Optional: <a href="http://web.mit.edu/cocosci/Papers/cogsci00_FINAL.pdf">Word learning as Bayesian inference.</a> Tenenbaum and Xu (2000).
* Optional: <a href="http://web.mit.edu/cocosci/Papers/f881-XuTenenbaum.pdf"> Word learning as Bayesian inference: Evidence from preschoolers.</a> Xu and Tenenbaum (2005).
* Optional: <a href="http://www.psy.cmu.edu/~ckemp/papers/KempPT06.pdf">Learning overhypotheses.</a> Kemp, Perfors, and Tenenbaum (2006).
* Optional: [Object name learning provides on-the-job training for attention](http://www.iub.edu/~cogdev/labwork/ObjectNameLearning.pdf). Smith, Jones, Landau, Gershko-Stowe, and Samuelson (2002).

## Week of November 7
Social cognition.

Readings (to be finalized!):

* [Inference about Inference](http://probmods.org/v2/chapters/06-inference-about-inference.html)
* Optional: [Goal Inference as Inverse Planning.](http://web.mit.edu/clbaker/www/papers/cogsci2007.pdf) Baker, Tenenbaum, Saxe (2007).
* Optional: [Cause and intent: Social reasoning in causal learning.](http://stanford.edu/~ngoodman/papers/SocCause_v1.pdf) Goodman, Baker, Tenenbaum (2009).
* Optional: [Reasoning about Reasoning by Nested Conditioning: Modeling Theory of Mind with Probabilistic Programs.](http://stanford.edu/~ngoodman/papers/StuhlmuellerGoodman-CogSys-2013.pdf) Stuhlmueller and Goodman (2013).
* Optional: [Young children use statistical sampling to infer the preferences of other people.](http://economics.cornell.edu/sites/default/files/files/events/Psychological%20Science-2010-Kushnir-0956797610376652.pdf) Kushnir, Xu, and Wellman (2010).
* Optional: [Teaching games: statistical sampling assumptions for learning in pedagogical situations.](http://stanford.edu/~ngoodman/papers/pedagogicalSampling.pdf) Shafto and Goodman (2008).
* Optional: [A rational account of pedagogical reasoning: Teaching by, and learning from, examples.](http://www.stanford.edu/~ngoodman/papers/shaftogg14.pdf) Shafto, Goodman, and Griffiths (2014).

## Week of November 14
Natural language pragmatics and semantics.

Project update (preliminary paper) due on Thursday!

Readings (to be finalized!):

* [Probabilistic Semantics and Pragmatics: Uncertainty in Language and Thought](http://www.stanford.edu/~ngoodman/papers/Goodman-HCS-final.pdf) Goodman and Lassiter (2015).
* [Quantifying pragmatic inference in language games.](http://stanford.edu/~ngoodman/papers/FrankGoodman-Science2012.pdf) Frank and Goodman (2012).
* Optional: [Knowledge and implicature: Modeling language understanding as social cognition.](http://stanford.edu/~ngoodman/papers/GS-TopiCS-2013.pdf) Goodman and Stuhlmueller (2013).
* Optional: [Nonliteral understanding of number words.](http://cocolab.stanford.edu/papers/PNAS-2014-KaoEtAl.pdf) Kao, Wu, Bergen, Goodman (2014). (See also [the model on Forest](http://forestdb.org/models/hyperbole.html).)
* Optional: [The strategic use of noise in pragmatic reasoning.](http://cocolab.stanford.edu/papers/PragmaticProsody.pdf) Bergen and Goodman (to appear).


## Week of November 21

Thanksgiving -- no class!

## Week of November 28

Potpourri!! (Topics TBA.)

## Week of December 6
Project presentations!

Each project team will present a short summary. We'll go in alphabetical order.



<!--
<li> <a href="http://www.psy.cmu.edu/~ckemp/papers/KempTGYU06.pdf">Learning systems of concepts with an infinite relational model.</a> Kemp, C., Tenenbaum, J. B., Griffiths, T. L., Yamada, T., Ueda, N. (2006).
<li> Optional: <a href="http://www.psy.cmu.edu/~ckemp/papers/kempgt10_learningtolearncausalmodels.pdf">Learning to learn causal models.</a> Kemp, C., Goodman, N., Tenenbaum, J. (2010).
-->

<!--

 <h3>Learning as inference. Occam's razor.</h3>
 <p>Readings:
 <ul>
 <li> ProbMods wiki: <a href="http://projects.csail.mit.edu/church/wiki/Learning_as_Conditional_Inference">Learning as Conditional Inference</a>.
 <li> ProbMods wiki: <a href="http://projects.csail.mit.edu/church/wiki/Occam%27s_Razor">Occam's Razor</a>.
 <li> <a href="http://web.mit.edu/cocosci/Papers/cogsci00_FINAL.pdf">Word learning as Bayesian inference.</a> Tenenbaum and Xu (2000).
 <li> <a href="http://web.mit.edu/cocosci/Papers/structure-strength-reprint.pdf">Structure and strength in causal induction.</a> Griffiths and Tenenbaum (2005).
 <li>Optional: <a href="http://web.mit.edu/cocosci/Papers/bayes.pdf">Bayesian modeling of human concept learning.</a> Tenenbaum (1999).
 <li> Optional: <a href="http://web.mit.edu/cocosci/Papers/f881-XuTenenbaum.pdf"> Word learning as Bayesian inference: Evidence from preschoolers.</a> Xu and Tenenbaum (2005).
 <li> Optional: <a href="http://web.mit.edu/cocosci/Papers/nips99preprint.pdf">Rules and similarity in concept learning.</a> Tenenbaum (2000).
 </ul>
 </p>

 <h3>Heirarchical and mixture models.</h3>
 <p>(Work on <a href="projects.html">project proposals</a>!)</p>
 <p>Readings:
 <ul>
 <li> ProbMods wiki: <a href="http://projects.csail.mit.edu/church/wiki/Hierarchical_Models"> Hierarchical Models</a>
 <li> ProbMods wiki: <a href="http://projects.csail.mit.edu/church/wiki/Mixture_Models"> Mixture Models</a>
 <li> ProbMods book: <a href="https://web.stanford.edu/~ngoodman/psych204/restrictedpapers/ch9-main.pdf">Hierarchical Bayes</a> (<a href="restrictedpapers/probmodscomments.html">feedback</a>)
 <li> <a href="http://www.psy.cmu.edu/~ckemp/papers/KempPT06.pdf">Learning overhypotheses.</a> Kemp, Perfors, and Tenenbaum (2006).
 <li> Optional: <a>Object name learning provides on-the-job training for attention.</a> Smith, Jones, Landau, Gershko-Stowe, and Samuelson (2002).
 </ul>
 </p>




 <h3>Non-parametrics and relational models.</h3>
 <p><a href="projects.html">Project proposals</a> due Saturday!</p>
 <p>Readings:
 <ul>
 <li> ProbMods wiki: <a href="http://projects.csail.mit.edu/church/wiki/Non-Parametric_Models">Non-Parametric Models</a>
 <li> ProbMods book: <a href="restrictedpapers/ch8-main.pdf">Infinite Models</a> (<a href="restrictedpapers/probmodscomments.html">feedback</a>)
 <li> ProbMods book: <a>Relational Models</a> (<a href="restrictedpapers/probmodscomments.html">feedback</a>)
 <li> <a href="http://www.psy.cmu.edu/~ckemp/papers/KempTGYU06.pdf">Learning systems of concepts with an infinite relational model.</a> Kemp, C., Tenenbaum, J. B., Griffiths, T. L., Yamada, T., Ueda, N. (2006).
 <li> <a href="http://stanford.edu/~ngoodman/papers/LTBC_psychreview_final.pdf">Learning a theory of causality.</a> Goodman, Ullman, and Tenenbaum (2011).
 <li> Optional: <a href="http://www.psy.cmu.edu/~ckemp/papers/kempgt10_learningtolearncausalmodels.pdf">Learning to learn causal models.</a> Kemp, C., Goodman, N., Tenenbaum, J. (2010).
 <li> Optional: <a href="http://books.nips.cc/papers/files/nips23/NIPS2010_1259.pdf"> Infinite Relational Modeling of Functional
 Connectivity in Resting State fMRI.</a> Morup, M. and Madsen, K.H. and Dogonowski, A.M. and Siebner, H. and Hansen, L.K. (2010).
 </ul>
 </p>
 </div>



 <h3>Logic, recursion, and grammar-based induction.</h3>
 <p>Readings:
 <ul>
 <li> ProbMods wiki: <a href="http://projects.csail.mit.edu/church/wiki/Recursive_Models">Recursive Models</a>
 <li> ProbMods book: <a href="restrictedpapers/ch11-main.pdf">Logical representations</a> (<a href="restrictedpapers/probmodscomments.html">feedback</a>)
 <li> ProbMods book: <a>Grammars for cognition</a> (<a href="restrictedpapers/probmodscomments.html">feedback</a>)
 <li> <a href="http://stanford.edu/~ngoodman/papers/RRfinal3.pdf">A rational analysis of rule-based concept learning.</a> Goodman, Tenenbaum, Feldman, and Griffiths (2008).
 <li> Optional: <a href="http://www.psy.cmu.edu/~ckemp/papers/kempr_kinshipcategoriesacrosslanguagesreflectgeneralcommunicativeprinciples.pdf">
 Kinship categories across languages reflect general communicative principles</a>. Kemp and Regier (2012).
 <li> Optional: <a href="http://stanford.edu/~ngoodman/papers/LTBC_psychreview_final.pdf">Learning a theory of causality.</a> Goodman, Ullman, and Tenenbaum (2011).
 <li> Optional: <a href="http://www.mit.edu/~ast/papers/structured-generative-concepts-cogsci2010.pdf">Learning Structured Generative Concepts.</a> Stuhlmueller, Tenenbaum, and Goodman (2010).
 <li> Optional: <a href="http://www.dectech.org/publications/LinksNick/Language/Language.pdf">Probabilistic models of language processing and acquisition.</a> Chater and Manning (2006).
 </ul>
 </p>
 </div>

 -->



# Course Projects

Your final project is an opportunity to get in-depth experience
applying the techniques we've discussed in class to a question that
interests you. In choosing a project, you should draw on your own
background, interests and strengths. You do not have to work on a
project that relates directly to the topics covered in the classes and readings: other topics
that pursue the general idea of probabilistic models of cognition are fine, and you should try
to work on a project that captures your interests within that fairly broad scope. Working
on existing research projects is okay, if you bring the techniques and ideas of
the class to bear.

You are encouraged (but not required) to do projects in small groups of two or three people.

Projects will generally contain both a probabilistic model of some aspect of human cognition and a behavioral experiment testing the model. Some ways you can go:

* Directly replicate the experiment and model in an existing paper. This is the most concrete way to go if you are new to both experiments and models.
* Replicate an existing experiment (or possibly use existing data) that has not been modeled and consider different probabilistic models for the data.
* Extend the experiment and model in an existing paper in a new direction.
* Something brand new: choose an interesting phenomenon in human cognition; do an experiment and model it!

In all cases, you are encouraged to consider multiple models (for example, several variants of your theory) and pay careful attention to data analysis (for example, by doing bayesian model selection).

With approval of the instructor, a project could focus on AI rather than human behavior: use an idea we've discussed in class to implement an interesting new AI system. Similarly projects could focus on inference and infrastructure in PPLs by building a better algorithm, implementing a useful automatic analysis of programs, etc.

A list of class projects done in previous versions of the course can be found here:

+ [2014-2015](http://cocolab.stanford.edu/psych204-projects2015.html)

## Project proposal

Your proposal should be no more than one page long (single
spaced). Make sure that you cover the background, key question, and
methods of your project. The *background* should include the topic and
the context of your project, including other research in this area.
The specific *question* you are planning to ask through your
project should be clearly stated. You should briefly describe the
*methods* you plan to use (your experimental
design, your modeling approach, your data analysis, and so on).

Upload your proposal to Canvas as a PDF file by midnight on 10/17/2016.


## Project update

Two weeks before your project presentation you should turn in a preliminary version of your paper. This should be a complete outline for all sections. It should have a full draft of your *introduction* and *background and related work* sections. In addition, it should have preliminary results from your modeling and/or experiments. All together, these will probably take about 3 pages.

Upload your proposal to Canvas as a PDF file by midnight on 11/14/2016.


## Project presentation

Each person or team will have **5-10** minutes to present their project (*exact timing TBA*). We will go in
alphabetical order (last name). The presentations should describe your question,
methods, and results at a high level.

Presentations should be in Google Drive Presentation format. *Upload instructions TBA.*

For students who don’t like working in Google Presentations, you can do your presentation in powerpoint and convert it. Google drive can upload (and convert) slides from the following formats: .ppt (if newer than Microsoft® Office 95), .pptx, .pptm, .pps, .ppsx, .ppsm, .pot, .potx, .potm, .odp . Students should check their conversion once they’ve uploaded it for errors. Presumably, one could also do the slides in Keynote, convert to PPT, and then convert to Google Slides, but we suspect the errors would compound.


## Project writeup

Your final project should be described in the format of a conference
paper, following the guidelines of paper submissions to the
Cognitive Science Society conference: [see the section "Submission formats" on this page](http://www.cognitivesciencesociety.org/cogsci-archival-conference-information/).
In particular, your paper should be no more than six pages long.
Your paper should cover the background behind your
project, the questions you are asking, your methods and results, and
your interpretation of these results.

Email your paper to the instructor as a PDF file by midnight on *date TBA*.
