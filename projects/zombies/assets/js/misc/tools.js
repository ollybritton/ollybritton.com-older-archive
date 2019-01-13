/*jshint esversion: 6 */

function elem(tag) {
  return document.getElementById(tag);
}

function show(elem, type="flex") {
  elem.style.display = type;
}

function hide(elem) {
  elem.style.display = "none";
}

function addClass(elem, val) {
  elem.classList.add(val);
}

function removeClass(elem, val) {
  elem.classList.remove(val);
}

function toggleClass(elem, val) {
  elem.classList.toggle(val);
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
}
