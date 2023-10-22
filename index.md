---
layout: home
title: home.
---

## Latests Posts

<ul class="post-list">
  {% for post in site.posts limit:2 %}
    {% if post.draft != true %}
    <li>
      <div class="post-meta" style='width: 120px; display:inline-block; vertical-align: top; padding-top: 10px;'>{{ post.date | date: "%b %-d, %Y" }}</div>
      <div style='display:inline-block; max-width: 500px;'>

      <h2 style="margin-bottom: 5px;">
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
      </h2>
      <h4>
        {{ post.subtitle | escape }}
      </h4>

      <span class="tags">{% for tag in post.tags %}{% capture tag_name %}{{ tag }}{% endcapture %}<a href="/tag/{{ tag_name }}">&middot;<nobr>{{ tag_name }}</nobr>&nbsp;</a>{% endfor %}</span>
    </div>
    </li>
    {% endif %}
  {% endfor %}
</ul>

## Publications

[**Neural, Neural Everywhere: Controlled Generation Meets Scaffolded, Structured Dialogue**](https://trentonchang.org/files/alexa_prize_report.pdf)
<br/>
Ethan A Chi, Caleb Chiam, Trenton Chang, **Swee Kiat Lim**, Chetanya Rastogi, Alexander Iyabor, Yutong He, Hari Sowrirajan, Avanika Narayan, Jillian Tang, Haojun Li, Ashwin Paranjape, Christopher D Manning
<br/>
Alexa Prize 2021 Proceedings

[**Visualizing Weights**](https://distill.pub/2020/circuits/visualizing-weights/)
<br/>
Chelsea Voss, Nick Cammarata, Gabriel Goh, Michael Petrov, Ludwig Schubert, Ben Egan, **Swee Kiat Lim**, Chris Olah
<br/>
Distill

[**Few-Shot Regression via Learned Basis Functions**](https://openreview.net/forum?id=r1ldYi9rOV)
<br/>
Yi Loo, **Swee Kiat Lim**, Gemma Roig, Ngai-Man Cheung
<br/>
International Conference on Learning Representations (ICLR) 2019
<br/>
Learning from Limited Labeled Data Workshop

[**DOPING: Generative Data Augmentation for Unsupervised Anomaly Detection with GAN**](https://arxiv.org/abs/1808.07632)
<br/>
**Swee Kiat Lim**, Yi Loo, Ngoc-Trung Tran, Ngai-Man Cheung, Gemma Roig, Yuval Elovici
<br/>
IEEE International Conference on Data Mining (ICDM) 2018

[**MalwareTextDB: A Database for Annotated Malware Articles**](https://aclweb.org/anthology/P17-1143)
<br/>
**Swee Kiat Lim**, Aldrian Obaja Muis, Wei Lu, Chen Hui Ong
<br/>
Annual Meeting of the Association for Computational Linguistics (ACL) 2017

[**Carbon‐Nanodot Solar Cells from Renewable Precursors**](dx.doi.org/10.1002/cssc.201601741)
<br/>
Adam Marinovic, **Swee Kiat Lim**, Steve Dunn, Maria‐Magdalena Titirici, Joe Briscoe
<br/>
ChemSusChem 10.5 (2017): 1004-1013.
