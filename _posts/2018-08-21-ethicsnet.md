---
layout: post
title:  "EthicsNet"
subtitle: "EmpathyNet: A Green Paper"
date:   2018-08-21 00:00:00
tags: ai social
comments: True
draft: True
---

<div class='note note-left'>
	This is adapted from my submission to the <a href='https://www.herox.com/EthicsNet'>EthicsNet Challenge</a> hosted on <a href='https://www.herox.com'>HeroX</a>. Disclaimer! I discovered the Challenge 4.5 days away from the deadline so the ideas here may not be too coherent.
</div>

*A green paper typically refers to a draft or tentative proposal with the intention of facilitating consultation and discussion.*

> The EthicsNet Guardians' Challenge aims to enable kinder machines.
> 
> The Challenge seeks ideas on how to create the best possible set of examples of prosocial behaviour for AI to learn from (i.e. a machine learning dataset).
> 
> We welcome entrepreneurs, researchers, scientists, students, and anyone eager to contribute, to jump into this challenge and to help propose a solution.

---

## Contents

1. Overview of EmpathyNet
2. Review of Current Datasets
	1. Success Factors of ImageNet
	2. Other Related Datasets and Relevant Notes
	3. Possible Alternatives
3. Context of Ethics
4. How EmpathyNet Builds Up to Larger Goals
5. Building EmpathyNet

We cut right to the chase by first giving a brief overview of the proposed solutions, before elaborating on how we arrive at the solutions. This begins with a detailed analysis of current datasets, with important lessons on success factors and potential pitfalls. Then we have a brief discussion on the context of ethics, which will provide specific motivations for the datasets. This then leads nicely to how the datasets contribute to these motivations and subsequently larger goals. Finally, we describe in detail how the solutions may be implemented in an efficient low-cost high-quality manner.

## Overview of EmpathyNet

In this green paper, we introduce EmpathyNet - a multimodal dataset that serves as the foundation for learning empathy. 

In the context of ethics, empathy serves the dual purpose of motivation and teacher. Empathy motivates the construction of ethical values such as:

> Do unto others as you would have them do unto you.

Empathy also teaches - humans infer the likeability or normalcy of their actions from the responses of the people around them. For instance, children may infer that sharing is good from positive *vibes* given by their peers and parents. Such *vibes* include verbal language, body language, tone of voice and facial expression, with latter factors contributing more when verbal comprehension is inadequate. The ability to understand such *vibes* stem from a modicum of empathy, defined here as:

> The ability to understand and share the feelings of another.

Other animals, such as dogs and cats, have also exhibited the ability of empathy. Examples include the importance of tone of voice in training animals and the concept of emotional support animals. There are two important points here.

1. The language barrier is near-unbreachable between humans and other animals. Yet both parties are able to convey extremely subtle messages, ranging from sorrow to anger to happiness. This might indicate that textual information is unnecessary for empathy, with a greater emphasis on body language, tone of voice and facial expression.
2. As humans we do not know for sure if our animal companions truly *empathize* with us. Do they really know how our emotions feel like? Do they really *understand and share* our feelings? Without a device to transplant consciousness, we will probably never find out. But the important thing here is that, despite all that, many humans do feel that animals truly empathize. We firmly believe this based on our inference of superficial cues. This suggests that for artificial intelligence, demonstrating empathy might be far more crucial than truly possessing empathy.

Based on these, the goal of EmpathyNet is to facilitate the assessment of demonstrations of empathy. This is primarily achieved by a series of tasks that test models' abilities to both match and generate cues. These tasks are facilitated by a multimodal dataset consisting of video, image and audio samples. Specifically, the dataset comprises cues, where a single cue contains a video subcue, with corresponding image, audio and text subcues.

\<EXAMPLE HERE>

In the example above, the video of a face is paired with a corresponding screencapture of the expression, audio clip and subtitle. As the example hints, existing movies and video platforms are a tremendous source of samples.

**Important Note:** We might want to remove textual information from audio cues. This can be done by applying a form of blurring to the audio cues, so only nontextual information such as pitch and speed is retained.

Several tasks can then be conceived, grouped under classification and generation.

1. **Classification.** For every $$\alpha$$ cue, predict the correct $$\beta$$ cue out of $$N$$ options.
\<EXAMPLE HERE> We might have five possible tasks - Video-Audio, Video-Text, Audio-Text, Image-Audio, Image-Text.
2. **Generation.** Here the model is required to minimize the negative log likelihood of $$\alpha$$ cue, conditioned on $$\beta$$ cue. \<EXAMPLE HERE>

For both tasks, there are several possible combinations of $$\alpha$$-$$\beta$$ \<TABLE HERE>.

## Success Factors of ImageNet

Specific factors relevant to EthicsNet

- **Size matters.** The size of ImageNet is obviously an important factor in the success of image classification. On a side note, the size of ImageNet has also made it a target for solving the problem of efficiently training on large datasets. 
- **Annotation agreement.** - Image-wise it is relatively simpler to have good annotation agreement, as compared to the subjective nature of ethics. It is also important to see that the consistency lies in the labels and not in the dataset - consistency in labels and variety in dataset lead to generalization, whereas consistency in dataset and variety in labels lead to confusion.
- **Specific scope** - Despite its size, ImageNet is a concrete and specific dataset with an arguably narrow scope. Every sample is a single image labeled with one of a thousand labels (1000 in the annual challenge; the actual ImageNet has over 20 000). *One thousand classes* sounds like a huge number but is tiny compared to the number of objects a human sees everyday. In limiting the dataset to one thousand classes, the image classification task becomes far more tractable.
- **Well-defined metrics** - ImageNet, being primarily a classification task, has a simple metric of accuracy. The accuracy has been subdivided into more elaborate metrics such as top-five-accuracy but these remain easily measured and understood. The concreteness of the metric for a task is of paramount importance since it defines the task and provides a goal for researchers to work towards.
- **Reuseable for other tasks** - While it originated as a classification dataset, ImageNet has also served as the foundation for a wider variety of tasks, such as object (bounding box) detection and image generation (minimize negative log likelihood). The reason for this is debatable but can be attributed largely to reasons above, specifically the size of the dataset and the quality of the annotations.

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

**Ethical behavior as utility-maximizing behavior**
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

**Ethical behavior as empathetic behavior**
- Pairing expressions with sentences - from movies?
Whatever is hurtful to you, do not do to any other person.
Do unto others as you would have them do unto you.

Effectively, we define ethical behavior as what we think we would like to happen if we are personally involved vs what we think we would not like to happen. eg. lying is unethical because we do not want to be lied to.

Certain subtleties though, do not do vs do...

All the same, in order for a model to express empathy, it should first learn the building blocks of empathy. 
When you see someone crying, you empathize by placing yourself in their shoes and recognizing that you feel sad. This recognition comes about because we know to associate crying with this emotion. Someone foreign to the concept of sadness or crying (and their unpleasantness) will be unlikely to make this association.

As such, we have the recurring theme of the importance of implied visual/audio cues.

**Ethical behavior as *normal* behavior**
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
