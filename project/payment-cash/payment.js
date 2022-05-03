const pay = document.querySelectorAll(".pay")[0];
let choice = document.querySelectorAll(".choice")[0];
pay.onclick = function(){
    choice.classList.toggle("hide");
}

const pay1 = document.querySelectorAll(".pay")[1];
let choice1 = document.querySelectorAll(".choice")[1];
pay1.onclick = function(){
    choice1.classList.toggle("hide");
}

const pay2 = document.querySelectorAll(".pay")[2];
let choice2 = document.querySelectorAll(".choice")[2];
pay2.onclick = function(){
    choice2.classList.toggle("hide");
}

const credit = document.querySelector(".credit");
let check = document.querySelector(".check");
credit.onclick = function(){
    check.classList.toggle("hide");
}

const cash = document.querySelector(".cash");
let check1 = document.querySelectorAll(".check")[1];
cash.onclick = function(){
    check1.classList.toggle("hide");
}

const hidden = document.querySelector(".hidden");
let imgfawry = document.querySelector(".imgfawry");
imgfawry.onclick = function(){
    hidden.classList.toggle("hide");
}

const btn = document.querySelector(".btn");
let imgcredit = document.querySelector(".imgcredit");
imgcredit.onclick = function(){
    btn.classList.toggle("hide");
}

const numberfawry = document.querySelector(".numberfawry");
let required = document.querySelector(".required");
numberfawry.onkeyup =()=>{
    required.classList.add("hide");
}