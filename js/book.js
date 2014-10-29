bookbuttons.prototype.startCalcScifi = function(){
  calc(50,"scifi-stats");
}

bookbuttons.prototype.onClickScifi = function(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(5000);
    picAdder(5000);
    setTimeout(this.startCalcScifi, 5000);
    setTimeout(bookPrompt, 5000);
  }else{
    errorPopup();
  }
}

function startCalcDrama(){
  calc(100,"drama-stats");
}

function onClickDrama(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(5000);
    picAdder(5000);
    setTimeout(startCalcDrama, 5000);
    setTimeout(bookPrompt, 5000);
  }else{
    errorPopup();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#drama").addEventListener('click',onClickDrama);
});

function startCalcTrashy(){
  calc(120,"trashy-stats");
}

function onClickTrashy(){
  var lockState = gt("lock").value;
  var isLocked = gt("trashy").value;
  var isLocked = parseInt(isLocked);
  if(lockState=="lockoff" && isLocked === 1){
    lock(4000);
    picAdder(4000);
    setTimeout(startCalcTrashy, 4000);
    setTimeout(bookPrompt, 4000);
  }else if(isLocked === 0){
    var money = gt("money-text").innerHTML;
    var money = parseInt(money);
    if(money >= 1000){
      var currentMoney = gt("money-text").innerHTML;
      var currentMoney = parseInt(currentMoney);
      var newMoney = currentMoney - 1000;
      gt("money-text").innerHTML = newMoney;
      unlock("Trashy","trashy","trashy-sn");
    }else{
      lockedPopup();
    }
  }else{
    errorPopup();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#trashy").addEventListener('click',onClickTrashy);
});

function startCalcFantasy(){
  calc(250,"fantasy-stats");
}

function onClickFantasy(){
  var lockState = gt("lock").value;
  var scifiStats = gt("scifi-stats").innerHTML;
  var scifiStats = parseInt(scifiStats);
  if(lockState=="lockoff" && scifiStats === 10){
    lock(10000);
    picAdder(10000);
    setTimeout(startCalcFantasy, 10000);
    setTimeout(bookPrompt, 10000);
    unlockUnknown("Fantasy","fantasy","fantasy-sn");
  }else if(scifiStats < 10){
    unknownPopup();
  }else{
    errorPopup();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#fantasy").addEventListener('click',onClickFantasy);
});

function startCalcHistory(){
  calc(350,"history-stats");
}

function onClickHistory(){
  var lockState = gt("lock").value;
  var isLocked = gt("history").value;
  var isLocked = parseInt(isLocked);
  if(lockState=="lockoff" && isLocked === 1){
    lock(12000);
    picAdder(12000);
    setTimeout(startCalcHistory, 12000);
    setTimeout(bookPrompt, 12000);
  }else if(isLocked === 0){
    var money = gt("money-text").innerHTML;
    var money = parseInt(money);
    if(money >= 1500){
      var currentMoney = gt("money-text").innerHTML;
      var currentMoney = parseInt(currentMoney);
      var newMoney = currentMoney - 1500;
      document.getElementById("money-text").innerHTML = newMoney;
      unlock("History","history","history-sn");
    }else{
      lockedPopup();
    }
  }else{
    errorPopup();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#history").addEventListener('click',onClickHistory);
});

function bookbuttons(){

}

bookbuttons.prototype.startCalcChildrens = function(){
  calc(80,"childrens-stats");
}

bookbuttons.prototype.onClickChildrens = function(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(7000);
    picAdder(7000);
    setTimeout(this.startCalcChildrens, 7000);
    setTimeout(bookPrompt, 7000);
  }else{
    errorPopup();
  }
}



function startCalcFiction(){
  calc(75,"fiction-stats");
}

function onClickFiction(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(7500);
    picAdder(7500);
    setTimeout(startCalcFiction, 7500);
    setTimeout(bookPrompt, 7500);
  }else{
    errorPopup();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#fiction").addEventListener('click',onClickFiction);
});

function startCalcNonFiction(){
  calc(60,"nonfiction-stats");
}

function onClickNonFiction(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(7300);
    picAdder(7300);
    setTimeout(startCalcNonFiction, 7300);
    setTimeout(bookPrompt, 7300);
  }else{
    errorPopup();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#nonfiction").addEventListener('click',onClickNonFiction);
});

function startCalcMath(){
  calc(95,"math-stats");
}

function onClickMath(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(9300);
    picAdder(9300);
    setTimeout(startCalcMath, 9300);
    setTimeout(bookPrompt, 9300);
  }else{
    errorPopup();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#math").addEventListener('click',onClickMath);
});

function startCalcHumor(){
  calc(130,"humor-stats");
}

function onClickHumor(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(10300);
    picAdder(10300);
    setTimeout(startCalcHumor, 10300);
    setTimeout(bookPrompt, 10300);
  }else{
    errorPopup();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#humor").addEventListener('click',onClickHumor);
});

function startCalcSatire(){
  calc(475,"satire-stats");
}

function onClickSatire(){
  var lockState = gt("lock").value;
  var humorStats = gt("humor-stats").innerHTML;
  var humorStats = parseInt(humorStats);
  if(lockState=="lockoff" && humorStats === 5){
    lock(19000);
    picAdder(19000);
    setTimeout(startCalcSatire, 19000);
    setTimeout(bookPrompt, 19000);
    unlockUnknown("Satire","satire","satire-sn");
  }else if(humorStats < 10){
    unknownPopup();
  }else{
    errorPopup();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#satire").addEventListener('click',onClickSatire);
});

function startCalcRomance(){
  calc(440,"romance-stats");
}

function onClickRomance(){
  var lockState = gt("lock").value;
  var isLocked = gt("romance").value;
  var isLocked = parseInt(isLocked);
  if(lockState=="lockoff" && isLocked === 1){
    lock(15350);
    picAdder(15350);
    setTimeout(startCalcRomance, 15350);
    setTimeout(bookPrompt, 15350);
  }else if(isLocked === 0){
    var money = gt("money-text").innerHTML;
    var money = parseInt(money);
    if(money >= 3000){
      var currentMoney = gt("money-text").innerHTML;
      var currentMoney = parseInt(currentMoney);
      var newMoney = currentMoney - 3000;
      gt("money-text").innerHTML = newMoney;
      unlock("Romance","romance","romance-sn");
    }else{
      lockedPopup();
    }
  }else{
    errorPopup();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#romance").addEventListener('click',onClickRomance);
});

function startCalcReport(){
  calc(116,"report-stats");
}

function onClickReport(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(10300);
    picAdder(10300);
    setTimeout(startCalcReport, 10300);
    setTimeout(bookPrompt, 10300);
  }else{
    errorPopup();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#report").addEventListener('click',onClickReport);
});

function startCalcSurvival(){
  calc(260,"survival-stats");
}

function onClickSurvival(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(20300);
    picAdder(20300);
    setTimeout(startCalcSurvival, 20300);
    setTimeout(bookPrompt, 20300);
  }else{
    errorPopup();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#survival").addEventListener('click',onClickSurvival);
});

function startCalcGothic(){
  calc(335,"gothic-stats");
}

function onClickGothic(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(23300);
    picAdder(23300);
    setTimeout(startCalcGothic, 23300);
    setTimeout(bookPrompt, 23300);
  }else{
    errorPopup();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#gothic").addEventListener('click',onClickGothic);
});

bookbuttons.prototype.startCalcAdventure = function(){
  calc(575,"adventure-stats");
}

bookbuttons.prototype.onClickAdventure = function(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(35300);
    picAdder(35300);
    setTimeout(this.startCalcAdventure, 35300);
    setTimeout(bookPrompt, 35300);
  }else{
    errorPopup();
  }
}

function startCalcAction(){
  calc(370,"action-stats");
}

function onClickAction(){
  var lockState = gt("lock").value;
  var isLocked = gt("action").value;
  var isLocked = parseInt(isLocked);
  if(lockState=="lockoff" && isLocked === 1){
    lock(18350);
    picAdder(18350);
    setTimeout(startCalcAction, 18350);
    setTimeout(bookPrompt, 18350);
  }else if(isLocked === 0){
    var money = gt("money-text").innerHTML;
    var money = parseInt(money);
    if(money >= 6000){
      var currentMoney = gt("money-text").innerHTML;
      var currentMoney = parseInt(currentMoney);
      var newMoney = currentMoney - 6000;
      gt("money-text").innerHTML = newMoney;
      unlock("Action","action","action-sn");
    }else{
      lockedPopup();
    }
  }else{
    errorPopup();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#action").addEventListener('click',onClickAction);
});