/*jshint esversion: 6 */

function elem(tag) {
    return document.getElementById(tag);
}

function hide(elem) {
    elem.style.display = "none";
}

function show(elem, pref = "block") {
    elem.style.display = pref;
}

function setVolume(seconds) {
    volume = (120 - seconds) / 120;
    elements.beep.volume = volume;
}

var elements = {
    body: elem("body"),
    btn: elem("btn"),
    pre: elem("pre"),
    init: elem("init"),
    explosion: elem("explosion"),
    cntdown: elem("countdown"),
    all: document.documentElement,
    top: elem("top"),
    bottom: elem("bottom"),
    timer: elem("timer"),
    beep: elem("beep"),
    faultCode: elem("faultCode"),
    explosionNoise: elem("explosionNoise")
};

var videos = {
    mac: "https://www.apple.com/media/us/macbook-pro/2016/b4a9efaa_6fe5_4075_a9d0_8e4592d6146c/films/design/macbook-pro-design-tft-cc-us-20161026_1536x640h.mp4"
};

function addClass(elem, val) {
    elem.classList.add(val);
}
