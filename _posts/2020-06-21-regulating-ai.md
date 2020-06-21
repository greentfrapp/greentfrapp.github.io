---
layout: post
title:  "Regulating AI"
subtitle: "Notes on Possible Futures"
date:   2020-06-21 00:00:00
tags: ai social
comments: True
---

<div class='note note-left'>
Some thoughts from recent readings including Clark and Hadfield's <a href="https://arxiv.org/abs/2001.00078">Regulatory Markets for AI Safety</a>, Brundage et al.'s <a href="https://arxiv.org/abs/1802.07228">The Malicious Use of Artificial Intelligence</a> and other related works. I intend to start writing more and will tweet about new posts <a href="https://twitter.com/sweekiat_lim">@sweekiat_lim</a>.
</div>

The *zeitgeist* of the current decade concerning AI ethics revolves around worries of algorithmic bias, privacy violation and black boxes amongst other things. A recurring distinction is the one made between *right* and *wrong*.

> It is **wrong** for the effectiveness of algorithmic decisions to depend on skin color or gender.

> It is **wrong** for personal information to be exploited and sold.

> It is **wrong** for us to blindly trust algorithmic systems.

Unfortunately, the world is not particularly amenable to individual cries for justice. But if we understand the world enough, we might try to predict plausible local minima that reality might end up in. Then, figure out what it takes to nudge the world into a more desirable minimum.

From a game theory perspective, what rules do we need so that the equilibrium is desirable? What regulatory framework is likely to emerge for AI technologies and how can we shape it for the better?

### Direct Government Regulation

Governments lack sufficient expertise to effectively predict and regulate AI technologies. Even if they have such expertise, moving as fast as the industry is not desirable for political stability.

**Lack of needed expertise**

The problems that stem from AI can be very technical - adversarial attacks, membership inference attacks, model interpretability etc. An adequate understanding of the technicalities is required to identify key problems and design appropriate regulations. But with unabating industrial demand for AI experts, governments will find it challenging to compete against the high salaries, innovative cultures and other perks offered by industrial players. This may be less so for national defence labs that offer interesting problems and have historically been a source of technological innovation. Nevertheless, considering the alternatives, AI experts are unlikely to be attracted by policy roles in the public sector.

**Preference for stability**

While we often lament slow-moving legislation that cannot keep up with rapidly evolving technologies, an everchanging set of laws is just as undesirable. Overly enthusiastic renewal of regulations compromises on the sanctity and stability of legislation. The lack of constant ground to stand on makes it difficult for investors and companies to make decisions and discourages long-term planning. Even if governments somehow had the ability to keep up with technological advancements, it may not be in their best interests to do so. Governments are not supposed to *move fast and break things*.

### Dedicated Government Agencies

Dedicated government regulatory agencies have previously been created for high-tech industries such as medical (FDA), automobile (NHTSA) and aviation (FAA). The question is whether AI poses a unique challenge that resists this form of regulation. I am inclined to believe that it does, based on two reasons.

1. AI moves fast and sometimes it moves *really* fast. The recent pace of AI research already has researchers lamenting about FOMO. And once in a (short) while, we see research that upend entire domains e.g. AlexNet, Deep Q-Learning, Transformer. This speed makes it far more difficult to regulate than previous high-tech industries.
2. AI can be and has been applied to a wide variety of domains. As such there is really no single "AI industry" to regulate. Most companies that call themselves "AI companies" are really using AI techniques to solve industry-specific problems. An AI agriculture company is really an agriculture company. An AI surveillance company is really a surveillance company.

### Self-regulation

Self-regulation by tech companies is a plausible but pretty crappy local minimum in the reality manifold.

Big tech companies might end up regulating themselves, simply because they have the most talent and understand the most about technical problems. This possibility might be cemented if the companies invent and implement provably neutral self-auditing methods such as formal verification techniques. We do see these research trends from the industry, particularly from Google.

Regardless, there is no real incentive for the companies themselves to be sufficiently neutral and transparent. Self-regulation simply lacks essential safeguards. And even if these companies are indeed well-intentioned, their presently blemished reputations make it difficult to publicly justify self-regulation.

### Non-governmental Institutions

Emergence of non-governmental institutions such as ISO and IEEE might be another plausible local minimum.

One way this might happen is for representatives from tech giants to come together to form a neutral organization. The Partnership on AI is a prime example of this. While the Partnership remains primarily a research institution, it is not unthinkable for it to evolve into a regulatory body in the future.

Current institutions (ISO, IEEE etc.) might also grow to encompass the role of regulating AI. Specifically, the IEEE had previously created the Global Initiative on Ethics of Autonomous and Intelligent Systems, along with the EAD1e document. However, the document remains largely non-prescriptive.

The primary question that lingers is the lack of a clear definition for "auditing AI". In part, we are still discovering new problems with autonomous systems. Furthermore, AI technologies applied and distributed across different fields with different expectations and standards makes "AI regulation" an ill-posed problem.

### Private Regulators

Private regulation is a third possible minimum, arguably a more desirable one. This is also put forward by Clark and Hadfield in [Regulatory Markets for AI Safety](https://arxiv.org/abs/2001.00078).

Private regulators act as mediators between governments and peddlers of AI technologies. Governments stipulate higher-level requirements and leave the implementation details to private regulators. In the case where a government proposes an impractical constraint, objections from a third party are far more legitimate than objections from the tech companies themselves.

In contrast to some previous frameworks, a key advantage here is that private regulators do not actually have to care about what "AI regulation" means. All they have to do is deliver a service - make a particular AI product more palatable for governments and the public. The framework of private regulators is flexible, in that solutions can be specific to single AI products or generally applied to the entire class of AI-related technologies. This might be very well suited to the diverse nature of AI applications.

Clark and Hadfield go into further details about the advantages and risks of regulatory markets, and I encourage a detailed [read](https://arxiv.org/abs/2001.00078).

{% comment %}

The success of this as a form of regulation is contingent on two main risks.

**Capture**

The game must be set up to reduce the risk of companies capturing regulators. Rather than relying on private regulators to "do the right thing", social and financial carrots and sticks need to be in place. If the revenue of regulators are derived solely from the companies they regulate, the companies become customers patronizing the regulators' services. Incentives are not aligned to roles and we end up with what happened to credit rating agencies in the subprime crisis. This makes no sense, unless balanced out by sufficient counter-incentives from governments or disincentives such as swift penalties.

**Delegitimization**

If capture is difficult, one might imagine tech giants adopting the strategy of active resistance. Discrediting regulators could be cheaper than being regulated. This is all the more likely if regulators are viewed as a threat to market access rather than as an enabler. This is further compounded by the plausibility of self-regulation. *Why pay someone to do it when we can do it ourselves?* Part of this depends on whether the government has sufficient political will to enforce regulatory markets and the presence of strong contenders for regulators.

{% endcomment %}

---

## A Forecast

With more AI-related goods and services and more problems emerging from these products, there is bound to be some form of regulation in the long-term. But how will it play out from now till then?

**Phase 1 - Failure of AI Services**

The failure of AI products, as perceived by governments and the public is an important spark to start the ball rolling.

With enough screw-ups, governments, the public and users of AI services will start to realize that these technologies require regulation. By eroding trust in the tech companies, these failures also reduce the plausibility of self-regulation.

**Phase 2 - Interest in Regulatory-related Research**

In the midst of the failures from the previous stage, interest in regulation-related research will increase.

Tech companies begin to invest in regulatory-related research and publicize their efforts in an attempt to salvage their reputations. To promote the idea of self-regulation, these companies may channel resources toward methods that do not require neutral third parties.

Likewise, there will be heightened government interest in regulatory technologies, increasing funding for academic labs in related research. We also see non-governmental organizations paying more attention to the problem of AI regulation.

**Phase 3 - Creation of Regulatory Technologies**

Depending on the types of techniques that are discovered, various forms of regulatory technologies may be created.

- *In-house technologies* - methods designed by tech companies themselves to convince customers and governments that self-regulation is sufficient - take for instance publicized attempts at [federated learning](https://federated.withgoogle.com/) from Google and differential privacy from [Apple](https://www.apple.com/privacy/docs/Differential_Privacy_Overview.pdf) and [Google](https://github.com/google/rappor)
- *Open-source technologies* - technologies created by open-source communities, following a tradition of similar efforts in computer science - for a prominent example, see PySyft and PyGrid by [OpenMined](https://openmined.org)
- *Private technologies* - similar to open-source technologies but with a focus on profit - no current examples for AI technologies exist to my knowledge, but consider the emergence of credit rating agencies and the Big Four

A few relevant prospective technologies, some of which we have made significant progress toward:

- Fast and tractable solvers for verifying large neural networks
- Provably robust networks
- Differentially private training algorithms with tight upper-bounds on epsilon
- Shared model governance (e.g. homomorphic encryption or secure multiparty computation) with low space and communication overhead

**Phase 4 - Concrete Regulation**

In this stage, we see the emergence of concrete regulatory frameworks. I suspect we will end up with an amalgam rather than a single well-defined framework, especially considering the variety of AI products.

Industry-agnostic processes such as data collection, preprocessing and storage might be more attractive for private players that intend to offer scalable regulatory services. On the other end of the pipeline, where autonomous systems translate predictions to actionable decisions, the products, services, regulations and standards might be too industry-specific. The task of regulation may fall to industry-specific players, such as ISO, FDA, FAA etc.

---

While the forecast enumerates four distinct phases, we already see the first three phases happening simultaneously in present circumstances, with the fourth phase in the horizon. I expect all four phases to go into full swing in the short to mid-term, while we stumble about figuring out which is the optimal regulatory framework.

---

What will the regulatory landscape look like when the dust settles? Given the fuzzy definitions of AI, what will it mean to "regulate AI"?

We may eventually make distinctions between "AI processes" governed by "AI regulations" and industry-specific practices governed by industry-specific standards. An AI drug company may have the data collection, preprocessing and storage steps governed by AI regulations, while the actual testing of new drugs remain under the purview of the FDA. AI regulation may simply be a wrapper around data ownership regulation. Perhaps we eventually have to review all regulations in light of the impacts of AI technologies.

On a final note, this discussion has been primarily Western-centric and neglects the unique technopolitical landscape in China. As a major player in both academic and industrial contexts, China's views on regulating AI are likely to send tremendous ripples across the world, and these ripples are likely to come far swifter than those from Western governments.
