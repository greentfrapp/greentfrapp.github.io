---
layout: post
title:  "EmpathyNet"
subtitle: "A Green Paper"
date:   2018-08-21 00:00:00
tags: ai social
comments: True
draft: True
mathjax: True
---

<div class='note note-left'>
	<p>
		This is adapted from my submission to the <a href='https://www.herox.com/EthicsNet'>EthicsNet Challenge</a> hosted on <a href='https://www.herox.com'>HeroX</a>.
	</p>
	<p>
		See my full submission <a href=''>here</a>!
	</p>
</div>

*A green paper typically refers to a draft or tentative proposal with the intention of facilitating consultation and discussion.*

> The EthicsNet Guardians' Challenge aims to enable kinder machines.
> 
> The Challenge seeks ideas on how to create the best possible set of examples of prosocial behaviour for AI to learn from (i.e. a machine learning dataset).
> 
> We welcome entrepreneurs, researchers, scientists, students, and anyone eager to contribute, to jump into this challenge and to help propose a solution.

---

## Contents

1. EmpathyNet
2. On Datasets
	1. Success Factors of ImageNet
	2. Other Relevant Datasets
	3. Possible Alternatives to EmpathyNet
3. On Ethics
	1. Ethical Behavior as Utility-maximizing Behavior
	2. Ethical Behavior as Empathetic Behavior
	3. Ethical Behavior as Normal Behavior
4. Why EmpathyNet?
	1. Multimodal
	2. Inclusive
	3. Cost effective
5. Making EmpathyNet
	1. Collecting the data
	2. Designing the challenge
6. Conclusion

We first give a brief overview of our proposed solution, EmpathyNet. Thereafter we elaborate on how we arrive at the proposal of EmpathyNet. This begins with an analysis of ImageNet and other datasets, with important lessons on success factors and potential pitfalls. We also describe some alternatives that we have considered, along with why we eventually rejected these alternatives. Then we have a brief discussion on the context of ethics, which will provide specific motivations for the datasets. This is followed by how EmpathyNet contributes to these motivations and subsequently larger goals. Finally, we describe in detail how EmpathyNet may be implemented in an efficient low-cost high-quality manner.

## EmpathyNet

In this green paper, we introduce EmpathyNet - a multimodal dataset that serves as the foundation for learning empathy. 

We are conscious that the original problem statement from the EthicsNet Guardians' Challenge called for

>  [...] ideas on how to create the best possible set of examples of prosocial behaviour for AI to learn from (i.e. a machine learning dataset).

However, after much deliberation, we offer a counterproposal to instead design a dataset that assesses demonstrations of empathy. Here we describe some of our motivation behind this counterproposal. For more details please refer to Sections 3 and 4.

In the context of ethics, empathy serves the dual purpose of motivation and teacher. Empathy motivates the construction of ethical values such as:

> Do unto others as you would have them do unto you.

Values such as these partly originate from empathy and identification with other humans and organisms.

Empathy also teaches. Humans infer the likeability or normalcy of their actions from the responses of the people around them. For instance, children may infer that sharing is good from positive *vibes* given by their peers and parents. Such vibes include verbal language, tone of voice, body language and facial expression - with latter factors contributing more when verbal comprehension is inadequate. The ability to understand such vibes stem from empathy, which we define here as:

> The ability to recognize, understand and share the feelings and thoughts of another.

Other animals, such as dogs and cats, have also exhibited empathy. Examples include the importance of tone of voice in training animals and the concept of emotional support animals. This illustrates two important points.

<div class='note note-right'>
	Such as recounts of dogs looking embarrassed after making a mess and cats acting like royalty. 
</div>

1. The language barrier is near-unbreachable between humans and other animals. Yet both parties are able to convey extremely subtle messages, ranging from sorrow to anger to happiness. **This might indicate that textual information is unnecessary for empathy, with a greater emphasis on body language, tone of voice and facial expression.**
2. As humans we do not know for sure if our animal companions truly *empathize* with us. Do they really know how our emotions feel like? Do they really *understand and share* our feelings? Without a device to transplant consciousness, we will probably never find out.
But many humans firmly believe that animals truly empathize, based on our inference of superficial cues. **This suggests that for artificial intelligence, demonstrating empathy might be far more crucial than truly possessing empathy.**

Based on these observations, the goal of EmpathyNet is to facilitate the assessment of **demonstrations of empathy**. We adopt the term 'demonstrations of empathy' to indicate that we are concerned about outward manifestations of empathy such as recognition and generation of cues (see below). This is primarily because, as of time of writing, assessing true underlying empathy seems to be a debatable and intractable notion. Also, as mentioned above, demonstrating empathy might be far more crucial than truly possessing empathy.

The heart of EmpathyNet is a multimodal dataset of **cues**, which we define here as:

> A signal that conveys a feeling or thought.

Cues can take the form of:

- **Verbal messages.** The textual content of speech.
- **Audio cues.** The tone, speed and manner of speech or non-speech sounds such as crying and laughter.
- **Facial expressions.** Facial movements and distortions.
- **Body language.** Body posture, tics, gestures and their associated characteristics such as size and speed.

We then assess demonstrations of empathy by a series of tasks involving recognition and generation of cues. Specifically, the dataset comprises cue groups, where a cue group contains a video (facial expression or body language) cue, with corresponding image, audio and text (verbal) cues.

\<EXAMPLE HERE>

In the example above, the video of a face is paired with a corresponding screencapture of the expression, audio clip and subtitle. As the example hints, existing movies, documentaries and video platforms are a tremendous source of samples.

**Important Note:** We might want to remove textual information from audio cues. This can be done by applying a form of blurring to the audio cues, so only nontextual information, such as pitch and speed, is retained.

Several tasks can then be conceived, grouped under classification and generation.

1. **Classification.** Predict the correct $$\alpha$$ cue out of $$N$$ options, conditioned on a $$\beta$$ cue. \<EXAMPLE HERE>
2. **Generation.** Minimize the negative log likelihood of an $$\alpha$$ cue, conditioned on a $$\beta$$ cue. \<EXAMPLE HERE>

For both tasks, there are several possible combinations of $$\alpha$$-$$\beta$$.

\<TABLE HERE>

## On Datasets

### Success Factors of ImageNet

Specific factors relevant to EthicsNet

- **Size matters.** The size of ImageNet is obviously an important factor in the success of image classification. On a side note, the size of ImageNet has also made it a target for solving the problem of efficiently training on large datasets. 
- **Annotation agreement.** Image-wise it is relatively simpler to have good annotation agreement, as compared to the subjective nature of ethics. It is also important to see that the consistency lies in the labels and not in the dataset - consistency in labels and variety in dataset lead to generalization, whereas consistency in dataset and variety in labels lead to confusion.
- **Specific scope.** Despite its size, ImageNet is a rather specific dataset with an arguably narrow scope. Every sample is a single image labeled with one of a thousand labels (1000 in the annual challenge; the actual ImageNet has over 20 000). *One thousand* classes sounds like a huge number but is tiny compared to the number of objects a human sees everyday. Furthermore, the dataset consists of only images ie. 2D representations. This is another severe constraint compared to the real world where humans observe and recognize 3D objects. In limiting the dataset with such constraints, the image classification task becomes far more tractable and the ability acquired by trained models can be described in concrete terms eg. the model is able to achieve 94% accuracy for 2D-image classification across a test set of a thousand classes. Teaching machines to recognize objects might seem intractable given the infinite types of objects available. But we can move towards this seemingly intractable goal by taking concrete specific steps that move us towards the goal slowly but surely.
- **Well-defined metrics.** ImageNet, being primarily a classification task, has a simple metric of accuracy. The accuracy has been subdivided into more elaborate metrics such as top-five-accuracy but these remain easily measured and understood. The concreteness of the metric for a task is of paramount importance since it defines the task and provides a goal for researchers to work towards.
- **Reuseable for other tasks.** While it originated as a classification dataset, ImageNet has also served as the foundation for a wider variety of tasks, such as object (bounding box) detection and image generation (minimize negative log likelihood). The reason for this is debatable but can be attributed largely to reasons above, specifically the size of the dataset and the quality of the annotations.

Aside from the dataset, the success and popularity of ImageNet can also be attributed to enthusiastic reception and participation of the annual ImageNet Large Scale Visual Recognition Challenge (ILSVRC). [This](https://qz.com/1034972/the-data-that-changed-the-direction-of-ai-research-and-possibly-the-world/) insightful Quartz article touches on several important factors that have led to this success, such as the collaboration with PASCAL VOC and the AlexNet entry in 2012.

### Other Relevant Datasets

There are many great datasets that have contributed to machine learning research eg. VQA ([Agrawal et al., 2015](https://arxiv.org/abs/1505.00468)), CLEVR ([Johnson et al., 2016](https://arxiv.org/abs/1612.06890)), SQuAD ([Rajpurkar et al., 2016](https://arxiv.org/abs/1606.05250)), YouTube-8M ([Abu-El-Haija, 2016](https://arxiv.org/abs/1609.08675)). Below we highlight some interesting datasets with important takeaways.

**Procedurally Generated Matrices (PGM).**

\<IMAGE HERE>

*At its heart, PGM is a multiple-choice-question (MCQ) test. Given the context panels (top eight), select the correct answer panel (bottom eight).*

This is a dataset introduced by a DeepMind research team, which is meant to measure abstract reasoning ([Barrett et al., 2018](http://proceedings.mlr.press/v80/santoro18a/santoro18a.pdf)). One interesting thing about this dataset is that it measures several different *expressions* of abstract reasoning. For instance, in a typical dataset, there is a single defined training-test split. In PGM, a training-test split is called a *regime* and there are eight different regimes ie. eight ways to split the dataset into training and test sets. Different regimes may be of different difficulty or focus on different expressions of abstract reasoning.

For example, the most basic regime is the `Neutral` regime, where the training and test splits are randomly sampled and mutually exclusive, with no other constraints. This is a normal training-test split in regular datasets. Contrast this with the `Held-out Shape-Colour` regime, where the training set does not contain any example with a certain shape (eg. square) and colour (black), while the test set will contain examples with this predefined shape and colour. This regime specifically tests if the model is able to extrapolate learned patterns to unseen shapes and colours.

More importantly, experimental results by DeepMind shows that such specific constraints are extremely important. For the `Neutral` regime, their model had a generalization error (ValidationAccuracy - TestAccuracy) of -0.6%. For the `Held-out Shape-Colour` regime, the generalization error dropped to -46.6%. The discovery and documentation of such trends is only possible due to the variety of constraints available in the dataset.

### Possible Alternatives to EmpathyNet

In evolving the concept of EmpathyNet, we have considered a few other possibilities. Ultimately we have chosen to propose EmpathyNet, but we list some possibilities here to serve as inspiration and provide more food for thought.

#### EthicalText

Humans are able to read a piece of short text and decide if the text is describing ethical behavior eg.

> Shelter provides dogs with big comfy chairs.

*Taken from r/MadeMeSmile.*

We can test for such ethical reasoning with a dataset of text samples, where each sample has a binary label indicating if the text is describing ethical behavior or concepts. (The label could also be a discrete or continuous score.) A low-cost way to do this is to refer to sites such as the r/MadeMeSmile or r/UpliftingNews subreddits and extract post titles, marking them as ethical. Neutral samples can be obtained from regular subreddits eg. r/Showerthoughts or r/puns. Nonethical samples can be obtained from subreddits such as r/UnethicalLifeProTips.

**Drawbacks.** If a model performs well on such a task, we might consider it a text classifier rather than having learned any semblance of ethics. A successful model might be similar to a spam classifier, just in a different domain. Such a model is also probably inherently brittle, unable to accurately classify text with unseen vocabulary. Also, ethics feels inherently multimodal, not just correlated with certain word frequencies or sequences. One way to think about it - replace every word in the vocabulary of the dataset with a random word eg. replace *help* with *giraffe*. The model will still be able to perform equally well, which feels counterintuitive.

#### SimsNet V1

A nice readily available simulation environment with human characters is the Sims franchise. Using a Sims game or something similar, we can set up certain scenarios and allow the machine to control a single character. This can be in the form of reinforcement learning eg. the machine controls the character and then tries to maximize a certain utility score. This can also be in the form of a regular dataset eg. with machine predicting the best immediate action to take in a single scenario, out of four options. Such a dataset appeals to a more language-independent concept of ethics, beyond textual information. 

**Drawbacks.** Such a dataset is actually essentially the same as any game dataset eg. Arcade Learning Environment (Atari) or OpenAI's gym and gym-retro. In all cases there is an environment and a score. Designing a model that is able to decide the best action for maximizing a score is the traditional reinforcement learning problem. Instead, the more important problem in the context of ethics is, "How can we design a reward function that maximizes ethical behavior?" Another way of phrasing it might be, "How can we infer such a score from observing the behavior of people?"

#### SimsNet V2

In natural language processing, there is a concept known as language modeling. For instance, given the entire Shakespeare corpus, we can train a model to predict the next word, conditioned on the previous five words. Interestingly, researchers have extended this concept to show that trained models demonstrate some semblance of understanding and even commonsense reasoning. Likewise in computer vision, a type of generative algorithm, known as autoregressive generation, trains a model to generate the next pixel, conditioned on previous pixels. Images generated pixel-by-pixel in such a manner actually generate fully coherent images. In a similar manner, there might be a dataset containing Sims scenarios showing ethical behavior. An autoregressive model trained on such a dataset might be able to predict the next action given previous context, thereby learning a model of ethical behavior.

**Drawbacks.** One consideration is that the input provided to the model should be a form of API for the Sims-like environment (eg. a set of discrete actions) rather than pixel values. It will be challenging for a model to have to generate entire images for predictions - resource-wise. Such a challenge distracts from the true goal of EthicsNet. This then means that it is difficult to obtain a massive amount of data. Since we are constrained to having some form of API for the action space, we cannot use cheaper alternatives such as clips from movies and videos. Finally, context is a significant factor in making ethical decisions. We will have to consider how to embed contextual information into the samples. For example, if the scenario is Alfred hitting Bob, the context might be self-defence or robbery or playful banter, with the ethicality varying widely based on the context. How can we embed such contextual information without straightforwardedly disclosing the answer (of whether it is ethical behavior)? It will also be challenging to provide context for each sample in an efficient effective manner that is scaleable for the EthicsNet organizers.

\<EXAMPLE HERE>

## Ethics

The primary purpose of this section is to discuss factors underlying ethical behavior, in order to shed light on how we can motivate AI to adopt such ethical behavior.

### Ethical Behavior as Utility-maximizing Behavior

In ethical conundrums such as the trolley problem, utility-maximization is an important motivation in ethical decisions. For instance, if forced to make a decision, killing one human is better than killing two humans, assuming all humans are equal, since we maximize utility. In reality, utility maximization is a fluffy notion, with a host of problems that must be answered before we can attempt any form of maximization. 

- How do we define utility? (Maximizing utility trivially might lead to inequality; should equality count towards utility?)
- How do we measure or infer utility based only on superficial observations?
- How do we tradeoff short-term and long-term utility? (Discount factor in reinforcement learning)
- How to we perform utility algebra? (eg. killing a baby for money is unethical - we do not have to ask how much money or quantify a baby's worth; yet it cannot be said that a baby's life is worth infinite value, especially when we compare it to another human)

These are important intractable questions yet humans are arguably able to make and use an estimation/inference of local utility/score in order to define somewhat ethical decisions. As humans, we recognize that, to a large extent, everyone's concept of ethics is unique, subjective and self-derived.
What is important (for societal stability) is that:
- Most of our values are aligned
- Minor misalignments are compromised
- Major misalignments are debated and reduced to one of the above

A huge contributing factor to the relative success of the above approach is a human's ability to infer supervisory signals (ie. labels) for their actions based on the cues of those around them. Accidentally pushing someone might cause mild annoyed responses, while deliberately punching someone might cause more violent responses. Most humans recognize that the former is of lower intensity and that both are undesirable for our innate reward function.

A similar case can be made for dogs, cats and other animals, which are trained and tamed using similar cues. **In that case, a step towards building ethical AI could be to train AI to recognize and generate such cues.**

### Ethical Behavior as Empathetic Behavior

<div class='note note-right'>
	On a side note, the two rules mentioned here are subtly different. Consider masochists who like being hurt. The second rule suggests that they should inflict pain on others as well, while the first rule does not.
</div>

> Whatever is hurtful to you, do not do to any other person.
>
> Do unto others as you would have them do unto you.

In many cases, ethical behavior can be traced back to the guidelines above, which are grounded in empathy. For example, lying is unethical partly because we do not want to be lied to. Empathy also relates to the previous interpretation of ethical behavior, since empathy is required for humans to effectively interprete supervisory signals from behavioral cues.

When you see someone crying, you empathize by placing yourself in their shoes and recognizing that you feel sad. This recognition comes about because we know to associate crying with this emotion. Hence empathy might be founded on the ability of humans to both recognize and demonstrate outward manifestations of inner emotions and thoughts. **As such, we have the recurrent theme of the importance of recognizing and generating social cues.**

### Ethical Behavior as Normal Behavior

Interestingly, humans often ignore ethical values that originate from previous discussions of utility-maximization and empathy. For instance, jaywalking is unethical because it compromises on the utility of the entire society and if we empathize with drivers, jaywalking is undesirable and dangerous. Yet despite such considerations, jaywalking is blatantly common. 

In such cases, unethical behavior, as defined by previous contexts, may become 'ethical' because majority of the people do it. Such behavior is *normalized* and it may be antisocial to go against such norms.

Hence, it is important for AI to be able to learn these norms. This means being able to infer if a decision/action is approved/disapproved/disregarded, irregardless of their ethicality defined by previous contexts. Such inferences have to be made based on behavioral cues. The AI has to be able to recognize such cues. Furthermore, the AI has to demonstrate compliance with such norms by generating and demonstrating appropriate cues eg. choosing to express disdain or disregard for jaywalking. **Once again, we see the importance of recognizing and generating these cues.**

## Why EmpathyNet?

**Multimodal.** Compared to purely textual or purely image-based datasets, EmpathyNet is multimodal, which seems suitable in the context of ethics. 

**Inclusive.** If we gather the data for EmpathyNet using movies, documentaries and videos from online platforms (see below), then there is a good chance that the dataset is inclusive across races, nationalities and age groups.

**Good Return of Investment (ROI).** Using the method described below, it is possible to generate a large amount of data with relatively low human cost. Furthermore, the data is not ethics-specific and can be used by researchers for other current and future tasks. If the above factors of multimodality and inclusiveness are observed, this dataset might also go a long way towards reducing algorithmic bias in image and audio models.

## How EmpathyNet Builds Up to Larger Goals

A model that does well on EmpathyNet will be able to match facial, behavioral, audio and textual cues. This capability serves as a foundation for pro-social and ethical behavior.

For instance, recall that one of the challenges in building ethical agents is designing a suitable reward function that promotes human-aligned ethical behavior. A model that is equipped with the ability to recognize human cues will be better equipped to infer the underlying reward function of observed humans. For example, a robot that bumps into a human while walking might observe her expression of annoyance and realize that bumping into people is impolite. Recognizing this expression of annoyance and matching it to other cues experienced before will be an important first step.

As its name suggests, EmpathyNet is also meant to assess the ability of machines to empathize or demonstrate empathy. But before we are able to design machines that can understand our feelings, we need to design machines that can recognize physical manifestations of such feelings ie. our cues. 

Furthermore, a huge part of communicating empathy is the abilitiy to demonstrate these cues. EmpathyNet, as a dataset of cues, potentially enables models to generate corresponding cues that will allow them to demonstrate empathy.

Of course, we can ask, "Do machines that recognize and demonstrate empathy truly *understand* empathy?" This is a largely intractable question but we want to point out that it is also largerly irrelevant. As mentioned in our introduction, we do not know for sure if animals understand our feelings but we believe they do based on how they seem to recognize our feelings and demonstrate behavior that convey their own feelings.

## Building EmpathyNet

A low-cost method of gathering data for EmpathyNet is through movies, documentaries and online video platforms. There may be potential collaboration with Google/YouTube or movie studios to use their collections.

Here we describe a potential efficent manner to collect EmpathyNet data. Consider if we have a single movie, containing video, audio and textual (subtitles) information. We also begin by focusing on facial expressions rather than the entire set of body language cues.

We first use a face recognition model to identify segments of the movie with large enough faces (eg. more than 20% of the screen dimensions). We then cut out these video and audio segments, ensuring that the sentences in the subtitles are kept whole and uninterrupted. Each segment should only contain a single speaker. We now have samples of matched facial, audio and textual cues. We can also use screen captures of the video segments (eg. 5 screen captures taken at equal intervals in each video segment). This will provide a static image alternative for facial cues. The static image alternatives will be far easier to process for researchers.

Another post-processing step we can perform is to remove textual information from the audio. One way to do this is to perform blurring on the audio, such that the tone and speed are retained while the words are unintelligible. This will be important to prevent models from trivially matching lip movements to audio or matching text to audio. We probably do not want to test for lip-reading or speech-to-text capabilities.

The above steps might suffice for a dataset meant to train generative models. However, for classification tasks, we have to generate labels. There are two possible ways to go about classification tasks.

For a regular classification task like the ImageNet challenge, there will be a set of classes and each sample (can refer to a group of corresponding cues or a single cue) will belong to one of the classes. In this case, we will have to examine the actual dataset that we have collected in order to determine suitable labels.

For an MCQ task like DeepMind's Procedurally Generated Matrices, we will have to generate questions. Suppose the task consists of choosing the correct audio cue for a given image cue. A question might have a single image cue with four audio cues, one of which is the correct one. From the above process, we already have a dataset of matched cues ie. the correct answers. For every sample, we will have to add three other samples that serve as the incorrect answers. These other *wrong* options can just come from the other samples in the dataset. But there are a few pitfalls here. All the audio cues for a single question should have similar characteristics eg. gender and age. Otherwise, the model might be matching an image cue of a child to the audio cue of a child because it has learned about age correlation rather than expression correlation. As mentioned above, removing textual information from the audio is important since we do not want a lip-reading or speech-to-text model. We also have to be careful not to add another audio cue that is from a similar expression. For instance, given an image of an angry man. The corresponding audio cue is him shouting. We can set the wrong options by randomly picking audio cues from other samples. But if the randomly selected audio cue is also from another angry man, it should technically be a correct answer. This then builds on the above paragraph where we determine a fixed set of classes for the entire dataset. Then we should not sample from the same class to generate the wrong option.

\<Using a concrete example might be better>

## Conclusion

In considering how to communicate ethical values to artificial intelligence, it might be worth taking a step back and observing how we communicate and understand each other across language barriers and even species barriers.

Expressions, body language and sounds cut across language barriers and species barriers to enable communication and coexistence.

A dataset for matching expressions, body language and tone of voice, might also serve as a basis for generative models to generate appropriate expressions, body language and tones of voice. This will be an enormously useful capability to help machines communicate and to help humans understand.

EmpathyNet does not seek to solve EthicsNet's vision of creating a dataset to teach AI ethical behavior. Rather, EmpathyNet seeks to be a small step towards fulfilling that vision, by proposing a dataset and a set of tasks that give a specific, tractable and measureable challenge.
