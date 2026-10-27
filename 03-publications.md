---
layout: default
title: Publications
permalink: publications
---
<!-- 
<br>
## Preprints
<br>

{% bibliography --template bibtemplate --style _bibliography/cocolab.csl --query @*[year=Preprint] %}
 -->
<!--
<br>
## To appear
<br>

{% bibliography --template bibtemplate --style _bibliography/cocolab.csl --query @*[year=To appear] %}
-->

{% assign current_year = site.time | date: '%Y' | plus: 0 %}
{% for year in (2006..current_year) reversed %}

<a class="subtle_link" name="{{year}}"></a>

<br>
<h2>{{year}}</h2>
<br>

{% bibliography --template bibtemplate --style _bibliography/cocolab.csl --query @*[year={{year}}] %}

<br>
<h3>Preprints</h3>
<br>
{% bibliography --template bibtemplate --style _bibliography/cocolab.csl --query @*[year={{year}}-Preprint] %}

{% endfor %}
