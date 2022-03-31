window.onload = function () {
    SlideOne();
    SlideTwo();
}

let SliderOne = document.getElementById("slider1");
let SliderTwo = document.getElementById("slider2");
let DisplayValOne = document.getElementById("range1");
let DisplayValTwo = document.getElementById("range2");
let MinGap = 0;
let SliderTrack = document.querySelector(".slidertrack");
let SliderMaxValue = document.getElementById("slider1").max;

function SlideOne() {
    if (parseInt(SliderTwo.value) - parseInt(SliderOne.value) <= MinGap) {
        SliderOne.value = parseInt(SliderTwo.value) - MinGap;
    }
    DisplayValOne.textContent = SliderOne.value;
    fillColor();
}

function SlideTwo() {
    if (parseInt(SliderTwo.value) - parseInt(SliderOne.value) <= MinGap) {
        SliderTwo.value = parseInt(SliderOne.value) + MinGap;
    }
    DisplayValTwo.textContent = SliderTwo.value;
    fillColor();
}

function fillColor() {
    percent1 = (SliderOne.value / SliderMaxValue) * 100;
    percent2 = (SliderTwo.value / SliderMaxValue) * 100;

    SliderTrack.style.background = `linear-gradient(to right, #00000000 ${percent1}% , black ${percent1}% , black ${percent2}%, #00000000 ${percent2}%)`;

    console.log(SliderTrack.style);
}