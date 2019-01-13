/*jshint esversion: 6 */

sVal.innerHTML = s*100 + "%";
rVal.innerHTML = r*100 + "%";
zVal.innerHTML = z*100 + "%";

aVal.innerHTML = (a*100).toPrecision(3) + "%";
bVal.innerHTML = (b*100).toPrecision(3) + "%";
qVal.innerHTML = (q*100).toPrecision(3) + "%";

var ds = -b*s*z;
var dz = (b - a)*(s*z)+(q*r);
var dr = (a*s*z) - (q*r);

function run(time) {
  var sList = [s];
  var rList = [r];
  var zList = [z];

  var dsList = [ds];
  var dzList = [dz];
  var drList = [dr];

  for(var i = 0; i < time; i++) {
    sList.push( sList[i] + dsList[i] );
    rList.push( rList[i] + drList[i] );
    zList.push( zList[i] + dzList[i] );

    dsList.push( -b * sList[i] * zList[i] );
    dzList.push( (b - a) * (sList[i] * zList[i]) + (q * rList[i]) );
    drList.push( (a*sList[i]*zList[i]) - (q * rList[i]) );
  }

  return [sList, rList, zList];

}

function population(time) {
  var populations = [];
  for(var i = 0; i < 3; i++) {
    var curr = run(time)[i];
    for(var j = 0; j < curr.length; j++) {
      if(curr[j]*pop < 0) {
        curr[j] = 0;
      } else if(curr[j]*pop > pop) {
        curr[j] = pop;
      } else {
        curr[j] = (curr[j] * pop);
      }
    }
    populations.push( curr );
  }
  return populations;
}

function generateChartData(time) {
  arr = [];
  arr.push(["Week", "S", "R", "Z"]);
  for(var i = 0; i < time; i++) {
    arr.push([i, population(i)[0].last(), population(i)[1].last(), population(i)[2].last()]);
  }
  return arr;
}

function update() {
  a = elements.aInput.value;
  t = elements.tInput.value;
  b = elements.bInput.value;
  q = elements.qInput.value;

  aVal.innerHTML = (a*100).toPrecision(3) + "%";
  bVal.innerHTML = (b*100).toPrecision(3) + "%";
  qVal.innerHTML = (q*100).toPrecision(3) + "%";

  //s = elements.sInput.value;
}
