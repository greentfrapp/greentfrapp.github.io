---
layout: post
title:  "Getting Started with Leaflet"
subtitle: "A list of short-term AI-related problems."
date:   2018-10-07 00:00:00 +0800
categories: code
comments: true
draft: true
---

Recently, while working on an assignment for my Urban Science Masters, I came across a wonderful JS library known as [Leaflet](https://leafletjs.com/). Here's a quickstart guide to using Leaflet, although there are also several [tutorials](https://leafletjs.com/examples.html) on the site.

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

We will be creating a simple map centered around my current university, Singapore University of Technology and Design. The map will have two layers, a satellite view and a regular map view, which we will call 'Satellite' and 'Streets' respectively.

In order to use Leaflet, it will be best if you also sign up for an account with [Mapbox](https://www.mapbox.com/), which provides the layers for Leaflet. After signing up, go to the [Account](https://www.mapbox.com/account/) page to get your API key, which will allow you to retrieve Mapbox maps and create custom maps.

In the meantime, you can use the default API key below, which is also used in Leaflet's tutorials.

We will also be using some default styles, which can be found [here](https://www.mapbox.com/api-documentation/#styles). Specifically, we will be using the `satellite-streets-v10` and `light-v9` styles.

Let's define some variables for the map.

{% highlight javascript %}
// This is your API key
var apiKey = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
// This refers to the layer IDs that we want to retrieve from Mapbox
var layerIds = [
	'satellite-streets-v10',
	'light-v9',
]
// This refers to the names that we will see in the legend
var layerNames = [
	'Satellite',
	'Streets',
]
// This defines where the map is centered when the page is first shown
var center=[1.3453099609309793, 103.95996451377869]
// This defines the zoom level of the map when the page is first shown
var zoom=17
{% endhighlight %}


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

You can try adjusting any of the variables mentioned above to customize the map that is displayed.

## Add Custom Shapes

One new thing we will be introducing here is the web app at https://geojson.io. This helps to export any drawings on the map to a geojson format that is readable by Leaflet.

For starters, we can try drawing a rectangle near SUTD. Then just copy the code on the right side and paste into a new file, titled geojson.js. One thing to add is `var blocks = ` at the start of the file.

Next we can go back to our original file in the previous section and import our geojson object.

```
<script src="geojson.js"></script>
```














