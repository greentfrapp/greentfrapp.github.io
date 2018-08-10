---
layout: post
title:  "AI and Social Science"
subtitle: "Thoughts as an AI researcher venturing into the humanities."
date:   2017-08-09
tags: social ai commentary
comments: True
---

#### Draft version

<div class='note note-left'>
	This post marks my transition from a full-time AI researcher to a full-time urban science student. When I wrote my response to the 'What attracted you to this program?' question in the application form for the course, I was surprised to find that I had many thoughts about the mixing of the 'hard' and 'soft' sciences. Here is what I might have written had I not been afraid of overwhelming the admissions committee with a potential long-form essay. I figure it will also be fun to look back on this post and see what has changed after finishing my urban science course.
</div>

<blockquote class="twitter-tweet" data-lang="en" style='margin:auto;'><p lang="en" dir="ltr">Fair point that can just as easily, and more urgently, be inverted: why don&#39;t those building AI for $subject actually engage with the foundational $subject literature? Including the histories of ethics, discrimination, etc in $subject domain... <a href="https://t.co/SPkSBCxWzz">https://t.co/SPkSBCxWzz</a></p>&mdash; Meredith Whittaker (@mer__edith) <a href="https://twitter.com/mer__edith/status/998211595879833602?ref_src=twsrc%5Etfw">May 20, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---

I used to find the term **social science** oxymoronic. Not that I felt either humanities or sciences were inferior to the other, but that I thought the two were mutually exclusive. I enjoyed my share of visual arts, literature and cinematography, as well as a healthy dose of math and science (staples of the Singaporean education). 

Recurrent words, symbols and themes in literature, the mise-en-scène, cuts and pacing in cinematography - these invoke raw feelings that do not necessarily have to be dissected to be impactful. On the other hand, math and science classes taught calculus, geometry, reactions and patterns and trends, dictated by gradients and formulas and rules (although I must say that I fully agree with Paul Lockhart's [A Mathematician's Lament](https://www.mimuw.edu.pl/~pawelst/rzut_oka/Zajecia_dla_MISH_2011-12/Lektury_files/LockhartsLament.pdf)!). 

One of the books that changed my mind about this was Poor Economics by Abhijit Banerjee and Esther Duflo. 

<div class='note note-left'>
	Here's a <a href='https://www.youtube.com/watch?v=0zvrGiPkVcs'>link</a> to the TED talk by Esther Duflo on Poor Economics.
</div>

A primary theme of the book was the use of Randomized Controlled Trials (RCTs) for understanding the effects of aid measures on the poor. RCTs have been traditionally employed for clinical and scientific trials. But Banerjee and Duflo demonstrated that RCTs could be used to shed light on the 'soft' psychological factors influencing the success of aid measures. It was fascinating to see how traditional scientific techniques and sociological investigations could be complementary.

---

Today, **artificial intelligence** is such a buzzword that I feel somewhat guilty for being an AI researcher. Yet, with all the money pouring into AI, there seems to be a lack of interdisciplinary practitioners who can bridge the gap between humanities and the latest technology developments. 

Problems such as racial bias in judicial algorithms and face recognition systems, realistic image and speech synthesis leading to pornography of dubious legality, the muddled ethics of self-driving cars and most recently, the uncanny valley of Google Duplex, all point towards the hardcore technologist's unwritten creed of "Can it be done?" instead of "Should it be done?". As we stand like children today, in anticipation of tomorrow's robots and AIs and self-driving cars and drones, we forget to wonder if there will be a day after tomorrow.

That is not to say that the Luddites have been right all along. Rather, as the oft-quoted uncle said, "With great power comes great responsibility." Genius has to be tempered with maturity and an understanding of human nature, or risk being prefixed with 'mad' or 'evil' and one day waking up to a pitchfork-wielding mob.

Instead of the apocalyptic fears of Skynet and Roko's Basilisk, I am primarily concerned about the very real short-term, even immediate, problems with AI that has rapidly permeated many aspects of society - bias propagation, blackbox decisions, privacy concerns, amongst other issues starving for solutions.

<div class='note note-right'>
	This does not mean I am not at all concerned with the existential threats due to AI. I do agree that the existential threats have to be prevented rather than treated, since any notion of treatment is likely to be too late. Furthermore, I think we will find that both classes of problems have related origins, such as issues of interpretability and goal-alignment.
</div>

Below I list several issues with AI in the social context. These range from AI-specific challenges to problems that tend to accompany any major technological shift. In the latter, I find that even amongst the class of major technological shifts (steam, electricity, internet), AI is relatively unique in its cultural baggage and the extent and speed of its pervasiveness.

#### 1. Bias Propagation

It is important for people to recognize that algorithms, despite all the association with cold hard calculative logic, are just as prone to bias as humans.

Humans tend to accumulate bias in two ways - inculcation or first-hand experience. (Biological factors may also account for some form of bias, such as a predisposition to prefer certain physical features.) 

First-hand experience is relatively straightforward - particularly memorable events that cause the formation of personal stereotypes. A trivial example might include how certain names might sound particularly obnoxious or humble or fat or thin or tall or short, despite common sense telling us that names should have no effect on a person's characteristics. 

<div class='note note-left'>
	Actually, <a href='https://www.newyorker.com/tech/elements/why-your-name-matters'>name-signalling</a> is actually a well-documented phenomenon, which shows that, surprisingly, names <i>do</i> have some effect on personal characteristics. Ironically, these effects usually have their origins in human bias, kind of like a self-fulfilling prophecy.
</div>

When considering inculcation and upbringing, bias and discrimination can be propagated in families, tribes and cultures, through every aspect of everyday behavior - verbal teachings, gossip, nonverbal cues, songs, stories.

<div class='note note-right'>
	An interesting article on how culture might influence perceptions of AI - <a href='https://www.wired.com/story/ideas-joi-ito-robot-overlords/'>Why Westerners Fear Robots and the Japanese Do Not</a>
</div>

From the perspective of an AI researcher, both first-hand experience and upbringing form the training data of a human. Certain trends in the data surface themselves as biases in the human. 

In a similar manner, training data provided to algorithms can result in biases being inherited by the algorithms. These biases will stem primarily from the humans that generated the data. 

**Just because it is not human does not mean it is fair and without bias.**

A great example are word-embedding algorithms (eg. [Word2Vec](https://arxiv.org/abs/1301.3781) and [GloVe](https://nlp.stanford.edu/pubs/glove.pdf)). These algorithms generate vector representations of words ie. each word is mapped to a vector of <span class='math'><i>n</i></span> numbers, where <span class='math'><i>n</i></span> typically ranges from 50 to 300. The cool thing about the vector representation is that we can do 'word arithmetic'. A classic example is: 

<p style='text-align: center;'><span class='math'><i>King</i> - <i>Man</i> + <i>Woman</i> = <i>Queen</i></span></p>

Another way of interpreting the equation is to see that

<p style='text-align: center;'><span class='math'><i>King</i> - <i>Man</i> = <i>Queen</i> - <i>Woman</i></span></p>

which in turn demonstrates analogy relationships (King is to Man as Queen is to Woman). 

Researchers were fascinated at the prospect of such 'word arithmetic' until we realized that we could also calculate all sorts of other more provocative equations, for instance examining if *rich/poor* is analogous to *white/black*.

<div class='note note-right'>
	<p>
		Word2Vec demo available <a href='http://bionlp-www.utu.fi/wv_demo/'>here</a> and the King - Man + Woman equation can be seen by entering 'man', 'king' and 'woman' in that order, in the Word Analogy section.
	</p>
	<p>
		A more visual demonstration can be found <a href='https://lamyiowce.github.io/word2viz/'>here</a> (can take several minutes to load).
	</p>
</div>

Another related example is language models, which try to predict a next word or token, given a sequence of previous words. For example, given the words 'The sun is', the language model might predict high probabilities for words such as 'hot' and 'bright'. Such models can also exhibit undesirable bias such as predicting certain gender pronouns as more likely given certain contexts or predicting certain attributes such as race, religion, nationality.

**How do we detect bias and how can we differentiate bias from real patterns?**

In particular, *bias* seems analagous to wrong predictions - we often consider biases as false stereotypes that lead to incorrect judgement. Predicting that a thrown rock falls to the ground is not bias. Deciding that someone, because of their race, should not be allowed to take out a loan is bias. 

In the language model example, suppose a model predicts the male pronoun as more likely given that the preceding words mention 'lawyer'. Such a model will have made a wrong prediction if the 'lawyer' in question was referenced using the female pronoun in the true text. But here's the caveat, suppose it is true that lawyers are more often male than female. Then is the algorithm wrong in predicting a male pronoun with a higher probability?

Interestingly, the fact that algorithms can exhibit bias might indicate a novel way of detecting bias in training data. Specifically, if the bias did not exist in the training data, the tendency would not have surfaced in the trained model. The model can be seen as a distillation of the prejudice recorded in the training data.

**How should we deal with identified algorithmic bias?**

Finally, another contentious point is how to treat algorithmic bias. Algorithmic bias, once detected, might seem simple to systematically remove, as compared to human bias that is arguably resistant to change. However, the use of blackbox models might impede the diagnosis and cure. Furthermore, the solution is not as simple as simply removing the bias. In [Delayed Impact of Fair Machine Learning](http://bair.berkeley.edu/blog/2018/05/17/delayed-impact/), Liu et al. suggest that any corrective measures could have long-term repercussions that reverse short-term gains.

Links to articles documenting bias in AI:

- [Computers, Artificial Intelligence Show Bias and Prejudice, Too](https://www.nbcnews.com/health/health-news/computers-artificial-intelligence-show-bias-prejudice-too-n746206) (NBC, 14th April 2017)
- [Biased Algorithms are Everywhere, and No One Seems to Care](https://www.technologyreview.com/s/608248/biased-algorithms-are-everywhere-and-no-one-seems-to-care/) (MIT Tech Review, 12th July 2017)
- [Rise of the Racist Robots - How AI is Learning All of Our Worst Impulses](https://www.theguardian.com/inequality/2017/aug/08/rise-of-the-racist-robots-how-ai-is-learning-all-our-worst-impulses) (The Guardian, 8th August 2017)
- [Forget Killer Robots - Bias is the Real AI Danger](https://www.technologyreview.com/s/608986/forget-killer-robotsbias-is-the-real-ai-danger/) (MIT Tech Review, 3rd Oct 2017)
- [MIT fed an AI data from Reddit, and now it only thinks about murder](https://www.theverge.com/2018/6/7/17437454/mit-ai-psychopathic-reddit-data-algorithmic-bias) (The Verge, 7th June 2018)
- [Artificial Intelligence has a Bias Problem, and It's Our Fault](https://sea.pcmag.com/netflix/26863/feature/artificial-intelligence-has-a-bias-problem-and-its-our-fault) (PC Mag, 15th June 2018)

#### 2. Blackbox Decisions

#### 3. Privacy

#### 4. Weaponization

#### 5. Media Hyperbole and Misinformation

<div class='note note-right'>
	Check out <a href='http://approximatelycorrect.com/'>Approximately Correct</a>! It's a blog started by Zachary C. Lipton, an assistant professor at Carnegie Mellon University, as a counter against overwhelming AI hyperbole and false hype in mainstream media.
</div>

#### 6. Inequality

#### 7. Playing Catch-up

My second motivation relates to my dream of using AI for social good. For instance, a team from MIT previously developed software for detecting and counting roofs from satellite images, for the purpose of estimating appropriate sites for microgrids and other infrastructure initiatives. On the same note, earlier this year, as part of a submission to a humanitarian aid and disaster relief app competition, I adapted an algorithm to detect flooded regions and structural damage from satellite images. 

Recent applied-AI innovations have catered primarily to consumer delight. After all, that's where the money is. But I see no reason why AI should not improve and amplify the efforts of aid workers and organizations. Rather than using AI as a crude tool, I seek to wield it with precision, complemented with an understanding of humanitarian problems acquired from this programme, with the knowledge that there are people, not numbers, on the other end of the equation.

AI looks to be the driving force for at least the next decade. AI engineers and experts are in high demand and low supply. But perhaps, more importantly, we need AI engineers who can also play the role of urban planner, AI experts who are also human experts and society experts.
