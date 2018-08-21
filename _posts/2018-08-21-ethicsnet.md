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

Ethical behavior as *normal* behavior

Ethical behavior as utility-maximizing behavior

Ethical behavior as empathetic behavior

## Ideas

- Fairytales
- Virtual environment / simulations
- Multiagent environments with preset dynamics
- Maximizing utility for all players - utility or equality?
- Learning from human interaction - consider Tay
- Simultaneous multiagent simulation to learn empathy
- Use a set of ground rules (atoms) to propagate a set of more complex moral guidelines in a simulated scenario / environment
- Scenarios with well-defined behaviors eg. characters with clear likes/dislikes etc.
- Modeling human behavior eg. given an environment and a set of actions, model the underlying policy



