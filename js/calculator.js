/*eslint-env browser*/

//FUNCTION $ FOR GETTING ID VALUE AS SHORT CODE
let $ = function(id){
  return document.getElementById(id);};

//FUNCTION INIT FOR HANDLING BUTTONS
window.onload=function init (){
  "use strict"
  //NUMBER BUTTONS
  $("nine").onclick = function () {enter(this.value)};
  $("eight").onclick = function() {enter(this.value)};
  $("seven").onclick = function() {enter(this.value)};
  $("six").onclick = function() {enter(this.value)};
  $("five").onclick = function() {enter(this.value)};
  $("four").onclick = function() {enter(this.value)};
  $("three").onclick = function() {enter(this.value)};
  $("two").onclick = function() {enter(this.value)};
  $("one").onclick = function() {enter(this.value)}; 
  $("zero").onclick = function() {enter(this.value)};
  
  //OPERATOR BUTTONS
  $("add").onclick = function() {enter(this.value)};
  $("subtract").onclick = function() {enter(this.value)};
  $("divide").onclick = function() {enter(this.value)};
  $("multiply").onclick = function() {enter(this.value)};
  $("period").onclick = function() {enter(this.value)};
  
  //RESULT BUTTON FROM =
  $("equal").onclick = function() {calculate()};
}

//FUNCTION ENTER FOR GETTING NUMBERS INCLUDE OPERATORS FOR VALUE ON TEXT
function enter(val){
  "use strict"
  $("result").value+=val;
}

//FUNCTION CALCULCATE FOR CALCULATING WITH EVAL RESULTS FROM TEXT THEN PASS THE FINAL VALUE RESULT
function calculate(){
  "use strict"
  let x = $("result").value
  let finalResult = eval(x);
  $("result").value = finalResult;
}
