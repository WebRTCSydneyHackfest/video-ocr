'use strict';
var ocrad = require('./ocrad.js');
var glue = require('rtc-glue');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var video = document.getElementsByTagName('video');


// signal host is just the browser url without any path
glue.config.signalhost = location.href.replace(/(^.*\/).*$/, '$1');


video[0].addEventListener('timeupdate', function() {
	canvas.width = video[0].offsetWidth;
	canvas.height = video[0].offsetHeight;
    context.drawImage(video[0], 0, 0, canvas.width, canvas.height);
}, false);

document.addEventListener('keydown', function(event) {
  // on hitting "c"
  if (event.keyCode == 67) {
    var image_data = context.getImageData(0, 0, canvas.width, canvas.height);
    var string = ocrad(image_data);
    alert(string);
  }
});

