/*jshint esversion: 6 */
hide(elements.cntdown);
hide(elements.init);
hide(elements.explosion);

function disguise() {
  hide(elements.pre);
  show(elements.init, "flex");
}

function timerCountdown() {
  var time = new Date();
  var to = new Date( time.getTime() + 120*1000 );
  var interval;

  function update() {
    var curr = Date.now();
    var dif = to - curr;

    var seconds = (dif/1000).toFixed(2);

    if(seconds < 0) {
      seconds = 0;
      clearInterval(interval);
      hide(elements.cntdown);
      show(elements.explosion, "flex");
      explosionNoise.play();
    }

    setVolume(seconds);

    if(seconds % 1 === 0) {
      elements.beep.play();
    }

    elements.timer.innerHTML = seconds + " seconds remain.";
  }

  interval = setInterval(function(){
    update();
  }, 1);
}

function countdown() {
  hide(elements.init);
  show(elements.cntdown, "flex");
  timerCountdown();
  setTimeout(function(){ addClass(elements.top, "fadedIn"); addClass(elements.bottom, "fadedIn"); addClass(elements.faultCode, "fadedIn"); }, 2000);
}

btn.onclick = function() {
  enter();
  disguise();
  setTimeout(function(){ elements.init.setAttribute("onmousemove", "countdown()"); }, 5000);
};
