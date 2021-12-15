---
layout: default
title: Publications
permalink: publications
---
<!--
## Under review
<br>

{% bibliography --template bibtemplate --style _bibliography/cocolab.csl --query @*[year=Manuscript] %}

<br>
## To appear
<br>

{% bibliography --template bibtemplate --style _bibliography/cocolab.csl --query @*[year=To appear] %}
-->

{% for year in (2006..2021) reversed %}

<a class="subtle_link" name="{{year}}"></a>

<br>
<h2>{{year}}</h2>
<br>

{% bibliography --template bibtemplate --style _bibliography/cocolab.csl --query @*[year={{year}}] %}

{% endfor %}
