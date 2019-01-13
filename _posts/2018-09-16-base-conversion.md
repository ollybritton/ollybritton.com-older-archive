---
layout: post
title: base-conversion
description: Convert different numbers into different bases.
image: assets/images/base-conversion.png
project_url: https://codepen.io/ollybritton/full/VMmpwx
code_url: https://codepen.io/ollybritton/pen/VMmpwx
---

I made this project so that I could find numbers in different bases without having to do it by hand or use somebody else's code. I tried to make it understand what is typed, but I didn't use anything very special and the code that does it is quite ugly:

{% highlight javascript %}
let parse = function(text) {
  text = text.replace("convert ", "");
  text = text.replace("what is ", "");
  text = text.replace("translate ", "");
  
  text = text.replace("unary", "base 1");
  text = text.replace("binary", "base 2");
  text = text.replace("ternary", "base 3");
  text = text.replace("quaternary", "base 4");
  text = text.replace("quinary", "base 5");
  text = text.replace("pental", "base 5");
  text = text.replace("heximal", "base 6");
  text = text.replace("senary", "base 6");
  text = text.replace("septenary", "base 7");
  text = text.replace("octal", "base 8");
  text = text.replace("nonary", "base 9");
  text = text.replace("denary", "base 10");
  text = text.replace("decimal", "base 10");
  text = text.replace("hexadecimal", "base 16");

  text = text.split(" ");

  let counter = 0;
  for (let i = 0; i < text.length; i++) {
    let curr = text[i];

    if (i !== 0 || curr === "base") {
      counter += 1;
    }
  }

  counter = natrual(counter - 2);

  for (let i = 0; i < counter; i++) {
    remove_index(text, 1);
  }

  let initial = text[0].split("");
  let base_indicator = [];
  let subscript_count = 0;

  for (let i = 0; i < initial.length; i++) {
    if (!(initial[i] in subscripts)) {
      subscript_count += 1;
    }
  }

  base_indicator = initial.slice(
    initial.length - subscript_count,
    initial.length
  );

  for (let i = 0; i < base_indicator.length; i++) {
    let curr = base_indicator[i];
    if (curr === subscripts[0]) {
      base_indicator[i] = "0";
    } else if (curr === subscripts[1]) {
      base_indicator[i] = "1";
    } else if (curr === subscripts[2]) {
      base_indicator[i] = "2";
    } else if (curr === subscripts[3]) {
      base_indicator[i] = "3";
    } else if (curr === subscripts[4]) {
      base_indicator[i] = "4";
    } else if (curr === subscripts[5]) {
      base_indicator[i] = "5";
    } else if (curr === subscripts[6]) {
      base_indicator[i] = "6";
    } else if (curr === subscripts[7]) {
      base_indicator[i] = "7";
    } else if (curr === subscripts[8]) {
      base_indicator[i] = "8";
    } else if (curr === subscripts[9]) {
      base_indicator[i] = "9";
    }
  }

  base_indicator = base_indicator.join("");
  initial = [
    initial.slice(0, initial.length - subscript_count).join(""),
    base_indicator
  ];

  let convert = text[text.length - 1];

  initial[0] = parseInt(initial[0]);
  initial[1] = parseInt(initial[1]);
  convert = parseInt(convert);

  

  let incorrect = false;

  if (isNaN(initial[0])) {
    incorrect = true;
  }

  if (isNaN(initial[1])) {
    incorrect = true;
  }

  if (isNaN(convert)) {
    incorrect = true;
  }

  if (incorrect) {
    return false;
  } else {
    return ["n", [initial, convert]];
  }
};
{% endhighlight %}

Mmmmm... Spaghetti.