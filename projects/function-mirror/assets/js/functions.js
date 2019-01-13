/*jshint esversion: 6 */
var video;
var videoBefore;
var canvas;
var vScale = 10;
var effect = function(x){ return x; };
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var specials = document.getElementsByClassName("special");

document.getElementById('input').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
      setFunction();
      return false;
    }
  };

specials[0].onclick = function(e){
  document.querySelector("#input").value = specials[0].innerHTML;
  setFunction();
};

specials[1].onclick = function(e){
  document.querySelector("#input").value = specials[1].innerHTML;
  setFunction();
};

specials[2].onclick = function(e){
  document.querySelector("#input").value = specials[2].innerHTML;
  setFunction();
};

specials[3].onclick = function(e){
  document.querySelector("#input").value = specials[3].innerHTML;
  setFunction();
};

specials[4].onclick = function(e){
  document.querySelector("#input").value = specials[4].innerHTML;
  setFunction();
};

specials[5].onclick = function(e){
  document.querySelector("#input").value = specials[5].innerHTML;
  setFunction();
};

specials[6].onclick = function(e){
  document.querySelector("#input").value = specials[6].innerHTML;
  setFunction();
};

specials[7].onclick = function(e){
  document.querySelector("#input").value = specials[7].innerHTML;
  setFunction();
};


function setup() {
  canvas = createCanvas(640, 480);
  pixelDensity(1);
  videoBefore = createCapture(VIDEO);
  video = createCapture(VIDEO);

  canvas.size(width, height);
  video.size(width/vScale, height/vScale);
  videoBefore.size(width, height);
  video.hide();

  canvas.parent(document.querySelector(".actual_videos"));
  videoBefore.parent(document.querySelector(".actual_videos"));
}

function setFunction() {
  str = document.querySelector("#input").value;
  if(str === "") {
    str = "x";
  }

  if(true || textVal !== prevText) {
    prevText = str;

    // effect = function(x) {
    //   return eval(str);
    // };
    effect = new Function("x", "return "+str);
    //console.log(effect.toString());
  }
}

function draw() {
  background(255);

  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width))*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];

      var bright = (r+g+b)/3;

      var w = map(bright, 0, 255, 0, vScale);

      noStroke();
      fill(effect(r),effect(g),effect(b));
      rectMode(CENTER);
      rect(x*vScale, y*vScale, vScale, vScale);

    }
  }

}
