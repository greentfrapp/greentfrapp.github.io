---
layout: post
title:  "Getting Started with Leaflet"
subtitle: "A list of short-term AI-related problems."
date:   2018-10-07 00:00:00 +0800
categories: code
comments: true
draft: True
---

Recently, while working on an assignment for my Urban Science Masters, I came across a wonderful JS library known as [Leaflet](https://leafletjs.com/). Here's a brief guide to getting started with Leaflet, although there are also several [tutorials](https://leafletjs.com/examples.html) on the site.

*While I generally assume that the reader is familiar with basic HTML, CSS and Javascript, working files are provided for the newcomer.*

---

## Get that Map

We start with displaying a simple map with Leaflet.

First of all, we need to include the CSS and JS files for Leaflet.

{% highlight html %}
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css" integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==" crossorigin=""/>
<script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js" integrity="sha512-nMMmRyTVoLYqjP9hrbed9S+FzjZHW5gY1TWCHA5ckwXZBadntCNs8kEqAWdrb9O7rxbCaA4lKTIWjDXZxflOcA==" crossorigin="">
</script>
{% endhighlight %}

Then we just define a `<div>` element that will contain our map:

{% highlight html %}
<div id="map"></div>
{% endhighlight %}

Then we just have to write some simple Javascript to load the map.

{% highlight html %}
<script>
	// This is the attribution data for Leaflet, OpenStreetMap and Mapbox
	var attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
	// This is the API key for your account when you sign up with Mapbox
	var apiKey = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'

	// Here we create the map layers - one satellite and one regular map
	// The last one in the list will be the default when you open the link
	var layerIds = [
		'satellite-streets-v10',
		'light-v9',
	]
	// Here we define the names for the legend
	var layerNames = [
		'Satellite',
		'Streets',
	]
	var baseMaps = {}

	// This actually adds the layers that we named above
	var layers = []
	for (var i = 0; i < layerIds.length; i++) {
		layers.push(
			L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{style}/tiles/256/{z}/{x}/{y}?access_token={apiKey}',
	    		{
					maxZoom: 20,
					attribution: attribution,
					apiKey: apiKey,
					style: layerIds[i],
				}
			)
		)
		baseMaps[layerNames[i]] = layers[i]
	}

	// Here we create the map
	// - we give it the layers
	// - we tell it the center location by default
	// - we decide how much to zoom-in by default
	var map = L.map('map', {layers: layers}).setView(
		center=[1.3453099609309793, 103.95996451377869],
		zoom=17,
	);
	
	// This creates the legend / top right button to change between layers
	L.control.layers(baseMaps).addTo(map);
</script>
{% endhighlight %}













