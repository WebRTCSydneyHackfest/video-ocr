'use strict';
var ocrad = require('./ocrad.js');
var glue = require('rtc-glue');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var video = document.getElementsByTagName('video');


// signal host is just the browser url without any path
glue.config.signalhost = location.href.replace(/(^.*\/).*$/, '$1');

var whichVideo = 1;

video[whichVideo].addEventListener('timeupdate', function() {
	canvas.width = video[whichVideo].offsetWidth;
	canvas.height = video[whichVideo].offsetHeight;
    context.drawImage(video[whichVideo], 0, 0, canvas.width, canvas.height);
}, false);

document.addEventListener('keydown', function(event) {
  // on hitting "c"
  if (event.keyCode == 67) {
    var image_data = context.getImageData(0, 0, canvas.width, canvas.height);
    var string = ocrad(image_data);
    alert(string);
  }
});

