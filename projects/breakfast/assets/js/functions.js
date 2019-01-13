/*jshint esversion: 6 */
let drunk = false;

let body = document.getElementsByTagName('body')[0];
let initialSection = document.getElementsByClassName("initial-title")[0];
let whatSection = document.getElementsByClassName("what")[0];

const colors = [
    "#df1b33", // Red
    "#4abdac", // Cyan
    "#fc4a1a", // Red
    "#f7b733", // Yellow
    "#0375b4", // Blue 
    "#a239ca", // Pink
    "#4717f6", // Navy Blue
];

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomListItem(list) {
    return list[randomInt(0, list.length - 1)]
}

function randomColor() {
    return randomListItem(colors)
}

function randomFood() {
    let chosen = randomListItem(food);
    return `<a href="${chosen[1]}">${chosen[0]}</a>`;
}

function randomDrunkFood() {
    let chosen = randomListItem(drunkFood);
    return `<a href="${chosen[1]}">${chosen[0]}</a>`;
}

function randomDrink() {
    let chosen = randomListItem(drinks);
    return chosen;
}

function updateBodyColor() {
    body.style.backgroundColor = randomColor();
}

function updatePage() {
    updateBodyColor();

    let foodText = document.getElementById("food");
    let subText = document.getElementById("sub");

    initialSection.style.display = "none";
    whatSection.style.display = "flex";

    let currentFood;

    if (!drunk) {

        let currentFood = randomFood();
        foodText.innerHTML = `${currentFood}`;

        subText.innerHTML = `(Plus ${randomDrink()}) | <a href="javascript:drunk=true;updatePage()">Wait, I've got a hangover.</a>`;

    } else {

        let currentFood = randomDrunkFood();
        foodText.innerHTML = `${currentFood}`;

        subText.innerHTML = `(Plus ${randomDrink()}) | <a href="javascript:drunk=false;updatePage()">Oh ok, I don't have a hangover.</a>`;

    }
}

document.addEventListener("DOMContentLoaded", function() {
    updateBodyColor();

    document.addEventListener("keydown", function() {
        updatePage();
    });

    document.addEventListener("mousedown", function(e) {
        if (e.path[0].localName !== "a") {
            updatePage();
        }
    });
});