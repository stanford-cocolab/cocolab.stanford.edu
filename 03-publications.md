---
layout: default
title: Publications
permalink: publications.html
---
## Submitted & Under review

{% bibliography --template bibtemplate --style _bibliography/cocolab.csl --query @*[year=Manuscript] %}

## To appear

{% bibliography --template bibtemplate --style _bibliography/cocolab.csl --query @*[year=To appear] %}

{% for year in (2006..{{site.max_year}}) reversed %}

<a class="subtle_link" name="{{year}}"></a>
## {{year}}

{% bibliography --template bibtemplate --style _bibliography/cocolab.csl --query @*[year={{year}}] %}

{% endfor %}
