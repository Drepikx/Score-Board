

let scoreHome = document.getElementById("scorehome")
let scoreAway = document.getElementById("scoreaway")

let countHome = 0
let countAway = 0

function add1() {
    countHome += 1
    scoreHome.textContent = countHome
} 
function add2() {
    countHome += 2
    scoreHome.textContent = countHome
} 
function add3() {
    countHome += 3
    scoreHome.textContent = countHome
} 
function add1B() {
    countAway += 1
    scoreAway.textContent = countAway
} 
function add2B() {
    countAway += 2
    scoreAway.textContent = countAway
} 
function add3B() {
    countAway += 3
    scoreAway.textContent = countAway
} 
function resetA(){
    countHome = 0
    scoreHome.textContent = countHome
}
function resetB(){
    countAway = 0
    scoreAway.textContent = countAway
}