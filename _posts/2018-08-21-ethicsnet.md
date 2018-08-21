---
layout: post
title:  "EthicsNet"
subtitle: "Collecting an ethics dataset"
date:   2018-08-21 00:00:00
tags: ai social
comments: True
draft: True
---

<div class='note note-left'>
	This is adapted from my submission to the <a href='https://www.herox.com/EthicsNet'>EthicsNet Challenge</a> hosted on <a href='https://www.herox.com'>HeroX</a>. Disclaimer! I discovered the Challenge 4.5 days away from the deadline so the ideas here may not be too coherent.
</div>

## Contents

1. Summary of Concrete Solutions
2. Review of Current Datasets
	- Success Factors of ImageNet
	- Other Related Datasets and Relevant Notes
3. Context of Ethics
4. How Solutions Build Up to Larger Goals
5. How to Implement Solutions ie. Collect Data


## Ideas

1. Predicting ethical score/class of statements
2. EmpathyNet - matching sentences / tone of voice / expressions / actions


## Success Factors of ImageNet

Specific factors relevant to EthicsNet

- Size
- Annotation agreement / consistency
- Domain distribution / scope
- Metric

## Other Relevant Datasets

- VQA
- CLEVR
- SQuAD
- Berkeley Self-driving Dataset
- DeepMind IQ Test

## Ethics

> This dataset is not designed to answer difficult philosophical questions. This dataset is designed to be a description of pro-social (nice, polite, socially welcomed) behaviours, especially generally universal ones.
>
> The imagined goal is to create a system that can make simple social decisions that one might expect of a well-raised young human child or dog. We want to capture simple social rules like the following: 
- It’s not nice to stare at people.
- If you see trash lying around and you aren’t doing anything particularly time sensitive, pick it up and put it in a wastebin.
- If you see someone accidentally drop something (e.g. their wallet), alert them, and return it.

But these *pro-social* behaviors are not simple!

Important things to consider

- Changing dynamics and definition
- Alignment
- Consistency
- Long and short-term considerations
- Scope
- Metric

## Subdefinitions of Ethics and Corresponding Tasks

Ethical behavior as utility-maximizing behavior
- Maximizing utility/equality of multiagent environments
Parallel to maximizing scores in games or more generally, optimizing a loss function.
The more troublesome problem here is how do we extend such concepts to reality?
- How do we measure utility?
	- In some sense it is a subjective concept - as an example, someone who is used to a wealthy life will lose more utility if bankrupt, as compared to someone who is used to a poor life
	- It is a hidden state - utility needs to be infered or estimated from superficial observations, which leads to the next definition
- How should we define the score?
	- Maximizing utility might lead to persistent inequality
	- Short-term and long-term tradeoffs eg. killing off unhappy people
These are important intractable questions yet humans are arguably able to make and use an estimation/inference of local utility/score in order to define somewhat ethical decisions.
eg. killing a human for money is unethical - we do not have to ask how much money or quantify a baby's worth
The utility inference and score maximization is implicit and as such is unique and subjective.

As humans, we recognize that, to a large extent, everyone's concept of ethics is unique, subjective and self-derived.
What is important is that:
- Most of our concepts are aligned
- Minor misalignments are compromised
- Major misalignments are debated

Likewise, rather than specifying a set of ethical rules or an ethical metric, it might be better for such metrics to be learned, perhaps in the manner of inverse reinforcement learning.

Alternatively, an ideal model might have learned/ingrained visual cues which it use as metrics, just like humans!
- Official rules, punishments and rewards actually form a minority of human learning
- The majority comes from implied visual/audio cues - expressions, body language and tone of voice - just like how dogs learn!

Ethical behavior as empathetic behavior
- Pairing expressions with sentences - from movies?
Whatever is hurtful to you, do not do to any other person.
Do unto others as you would have them do unto you.

Effectively, we define ethical behavior as what we think we would like to happen if we are personally involved vs what we think we would not like to happen. eg. lying is unethical because we do not want to be lied to.

Certain subtleties though, do not do vs do...

All the same, in order for a model to express empathy, it should first learn the building blocks of empathy. 
When you see someone crying, you empathize by placing yourself in their shoes and recognizing that you feel sad. This recognition comes about because we know to associate crying with this emotion. Someone foreign to the concept of sadness or crying (and their unpleasantness) will be unlikely to make this association.

As such, we have the recurring theme of the importance of implied visual/audio cues.

Ethical behavior as *normal* behavior
- Infering norms from events
Unethical behavior in the above contexts may be 'ethical' because everyone else does it.

In this case, it is important for the agent/model to be able to infer norms. This means being able to infer if some thing/action is approved/disapproved/disregarded.

Again the recurring theme of the importance of implied visual/audio cues contribute to the infering of such norms.

## Ideas

- Fairytales
- Multiagent environments with preset dynamics
- Maximizing utility for all players - utility or equality?
- Learning from human interaction - consider Tay
- Simultaneous multiagent simulation to learn empathy
- Use a set of ground rules (atoms) to propagate a set of more complex moral guidelines in a simulated scenario / environment
- Scenarios with well-defined behaviors eg. characters with clear likes/dislikes etc.
- Modeling human behavior eg. given an environment and a set of actions, model the underlying policy
- Something similar to inductive logic programming - given positive and negative scenarios, predict other scenarios

The ideal EthicsNet dataset is such that a model that performs well on this dataset might be said to be good at making ethical decisions.

Explainability is important. There is an ethical difference between picking up rubbish because I want to make the place cleaner for everyone else and picking up rubbish because I get annoyed by rubbish. See also DeepMind's IQ test performing better when trained with explanations.

Possible problems with a fixed dataset

of crowdsourced labeled statements (eg. from a forum)

- Positive labels on most social media platforms are more correlated to humor, surprise rather than morals or echo-chambers
- Huge bias depending on the platform (eg. Reddit's r/The_Donald and r/hillaryclinton)
- Singular statements may not have sufficient context for ethical analysis eg. 'I find this disgusting.'
- It is possible for model to successfully identify sentences as positive or negative without an ethics-related understanding eg. based on word frequency
- Should be renamed as text classification or sentiment analysis

- Use titles from Reddit's UpliftingNews and MadeMeSmile vs ULPT

- Can be adversarial eg. train classifier and then generator to generate based on given words

of scenarios paired with possible choices (pick the most ethical choice)
of scenarios labeled as ethical or unethical

- Text, image, video or ...?
	For text, same problem as second last point above
	For image and video, might be difficult to illustrate ethical scenarios
- Costly with low ROI

In considering how to communicate ethical values to artificial intelligence, it might be worth taking a step back and observing how we communicate and understand each other across language barriers and even species barriers.

Expressions, body language and tone of voice cut across language and species barriers to enable communication and coexistence.

A dataset for matching expressions, body language and tone of voice, might also serve as a basis for generative models to generate new expressions, body language and tones of voice. This will be an enormously useful capability to help machines communicate and to help humans understand.
