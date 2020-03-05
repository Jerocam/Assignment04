
let $ = function(id){
  return document.getElementById(id);};

window.onload=function init (){
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

  $("add").onclick = function() {enter(this.value)};
  $("subtract").onclick = function() {enter(this.value)};
  $("divide").onclick = function() {enter(this.value)};
  $("multiply").onclick = function() {enter(this.value)};
  $("period").onclick = function() {enter(this.value)};
  
  $("equal").onclick = function() {calculate()};
}

function enter(val){
  $("result").value+=val;
}

function calculate(){
  let x = $("result").value
  let finalResult = eval(x);
  $("result").value = finalResult;
}
