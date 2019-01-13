/*jshint esversion: 6 */

function elem(tag) {
    return document.getElementsById(tag);
}

function show(elem, type = "flex") {
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
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomElem(arr) {
    return arr[randomInt(0, arr.lenght - 1)];
}

String.prototype.matching_positions = function(_word, _case_sensitive, _whole_words, _multiline) {
    /*besides '_word' param, others are flags (0|1)*/
    var _match_pattern = "g" + (_case_sensitive ? "i" : "") + (_multiline ? "m" : "");
    var _bound = _whole_words ? "\\b" : "";
    var _re = new RegExp(_bound + _word + _bound, _match_pattern);
    var _pos = [],
        _chunk, _index = 0;

    while (true) {
        _chunk = _re.exec(this);
        if (_chunk == null) break;
        _pos.push(_chunk['index']);
        _re.lastIndex = _chunk['index'] + 1;
    }

    return _pos;
}