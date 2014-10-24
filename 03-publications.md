---
layout: default
title: Publications
permalink: publications.html
---

## Manuscripts

{% bibliography --query @*[year=Manuscript] %}

## To appear

{% bibliography --query @*[year=To appear] %}

{% for year in (2006..{{site.max_year}}) reversed %}

<a class="subtle_link" name="{{year}}"></a>
## {{year}}

{% bibliography --query @*[year={{year}}] %}

{% endfor %}
