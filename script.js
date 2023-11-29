"use strict"
// WAKE UP SENTENCE
const wakeUpSentence = document.getElementById("wakeUpSentence");
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const d3 = document.getElementById("d3");
const d4 = document.getElementById("d4");
const d5 = document.getElementById("d5");
const d6 = document.getElementById("d6");
const d7 = document.getElementById("d7");
const d8 = document.getElementById("d8");
const d9 = document.getElementById("d9");

// CHAT ------------

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const p5 = document.getElementById("p5");
const p6 = document.getElementById("p6");
const p7 = document.getElementById("p7");


// SHUT DOWN
const shutDown = document.getElementById("shutDown");

function Chat() {

    // WAKE UP SENTENCE ANIMATIONS
    wakeUpSentence.classList.remove("hide");

    setInterval(() => {

        d1.classList.remove("hide");



    }, 1000);


    setInterval(() => {

        d2.classList.remove("hide");



    }, 1100);

    setInterval(() => {

        d3.classList.remove("hide");



    }, 1200);



    setInterval(() => {

        d4.classList.remove("hide");



    }, 1300);

    setInterval(() => {

        d5.classList.remove("hide");



    }, 1400);


    setInterval(() => {

        d6.classList.remove("hide");



    }, 1500);


    setInterval(() => {

        d7.classList.remove("hide");



    }, 1600);




    setInterval(() => {

        d7.classList.remove("hide");



    }, 1700);

    setInterval(() => {

        d8.classList.remove("hide");



    }, 1800);


    setInterval(() => {

        d9.classList.remove("hide");



    }, 1900);

    // CHAT ANIMATIONS --------------------------------------------------------------------------------

    setInterval(() => {

        p1.classList.remove("hide");

    }, 3000);


    setInterval(() => {

        p2.classList.remove("hide");

    }, 5500);

    setInterval(() => {

        p3.classList.remove("hide");

    }, 7000);


    setInterval(() => {

        p4.classList.remove("hide");

    }, 8500);

    setInterval(() => {

        p5.classList.remove("hide");



    }, 10000);


    setInterval(() => {

        p6.classList.remove("hide");

    }, 11500);


    setInterval(() => {

        p7.classList.remove("hide");

    }, 15000);


    setInterval(() => {


        shutDown.classList.add("hide");



    }, 17000);



}


Chat();
