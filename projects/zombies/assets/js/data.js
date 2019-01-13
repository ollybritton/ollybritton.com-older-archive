var body = document.getElementsByTagName('body');

var t = 52; // Time in weeks.
var a = 0.5; // Chance of infection.
var b = 0.5; // Rate zombies die.
var q = 0.5; // Rate dead turn to zombies.

var s = 0.99; // Percent of population that is susceptible.
var r = 0; // Percent that are dead/immune.
var z = 0.01; // Percent that are zombies.

var pop = 1000;

var elements = {
  aInput: elem("aInput"),
  tInput: elem("tInput"),
  bInput: elem("bInput"),
  qInput: elem("qInput"),
  sInput: elem("sInput"),
  rInput: elem("rInput"),
  zInput: elem("zInput"),
  sVal: elem("sVal"),
  rVal: elem("rVal"),
  zVal: elem("zVal"),
  aVal: elem("aVal"),
  bVal: elem("bVal"),
  qVal: elem("qVal")
};
