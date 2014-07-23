$(document).ready(function(){
  $(function() {
    $( "#progressbar" ).progressbar({
      value: 0,
      max: 100
    });
  });
});

function gt(id){
  return document.getElementById(id);
}

setTimeout(errorChecker, 3000);
function errorChecker(){
  errorh("money-text");
  errorh("drama-stats");
  errorh("fantasy-stats");
  errorh("scifi-stats");
  errorh("trashy-stats");
  errorh("history-stats");
  errorh("childrens-stats");
  errorh("fiction-stats");
  errorh("nonfiction-stats");
  errorh("math-stats");
  errorh("humor-stats");
  errorh("satire-stats");
  errorh("romance-stats");
  errorh("report-stats");
  errorh("survival-stats");
  errorh("gothic-stats");
  errorv("trashy");
  errorv("history");
  errorv("romance");
}

function errorv(id){
  var error = gt(id).value;
  if(error == "NaN"){
    gt(id).value = 0;
  }
}

function errorh(id){
  var error = gt(id).innerHTML;
  if(error == "NaN"){
    gt(id).innerHTML = 0;
  }
}

setTimeout(lockCheck, 4000);
function lockCheck(){
  var trashy = gt("trashy").value;
  var trashy = parseInt(trashy);
  var history = gt("history").value;
  var history = parseInt(history);
  var romance = gt("romance").value;
  var romance = parseInt(romance);
  var scifiStats = gt("scifi-stats").innerHTML;
  var scifiStats = parseInt(scifiStats);
  var humorStats = gt("humor-stats").innerHTML;
  var humorStats = parseInt(humorStats);
  if(trashy === 1){
    unlock("Trashy","trashy");
  }else if(scifiStats >= 10){
    unlockUnknown("Fantasy","fantasy");
  }else if(history === 1){
    unlock("History","history");
  }else if(humorStats >= 5){
    unlockUnknown("Satire","satire");
  }else if(romance === 1){
    unlock("Romance","romance");
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#reset").addEventListener('click',reset);
});

function idf(id){
  var val = gt(id);
  return val;
}

function saveh(id){
  var data = gt(id).innerHTML;
  return data;
}

function savev(id){
  var data = gt(id).value;
  return data;
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#save").addEventListener('click',saveChanges);
});

function picAdder(time){
  var money = gt("money-div");
  money.setAttribute("style","background-color:#EEE");
  $(document).ready(function(){
      $(function() {
        $( "#progressbar" ).progressbar( "option", "max", time );
      });
    });
  atime = time/100;
  atimeT = time/100;
    $(document).ready(function(){
      $(function() {
        timeout = setTimeout(doLoop, 0);
        function doLoop(){
        $( "#progressbar" ).progressbar( "option", "value", atime );
        atime = atime + atimeT;
        if(atime < time){
          timeout = setTimeout(doLoop, atimeT);
        }else{
          clearTimeout(timeout);
          setTimeout(picRemover,500);
        }
        }
      });
    });
}

function picRemover(){
  var money = gt("money-div");
  money.setAttribute("style","");
  $(document).ready(function(){
      $(function() {
        $( "#progressbar" ).progressbar( "option", "value", 0 );
      });
    });
}

function bookPrompt(){
  document.getElementById('iframe').src = 'html/prompt.html';
}

function errorPopup(){
  document.getElementById('iframe').src = 'html/error.html';
}

function lockedPopup(){
  document.getElementById('iframe').src = 'html/lock.html';
}

function unknownPopup(){
  document.getElementById('iframe').src = 'html/unknown.html';
}

function unlock(book,id){
  var booktype = gt(id);
  booktype.value = 1;
  booktype.innerHTML = book;
  booktype.setAttribute("class","book-button");
}

function unlockUnknown(book,id){
  var booktype = gt(id);
  booktype.innerHTML = book;
  booktype.setAttribute("class","book-button");
}

function calc(value,book){
  var current = gt("money-text").innerHTML;
  var current = parseInt(current);
  var nv = parseInt(value);
  var money = current+nv;
  gt("money-text").innerHTML = money;
  bookc(book);
}

function bookc(id){
  var book = gt(id).innerHTML;
  var book = parseInt(book);
  var book = book + 1;
  gt(id).innerHTML = book;
}

function removeLock(){
  gt("lock").value = "lockoff";
}

function lock(num){
  gt("lock").value = "lockon";
  setTimeout(removeLock, num);
}

function startCalcScifi(){
  calc(50,"scifi-stats");
}

function onClickScifi(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(5000);
    picAdder(5000);
    setTimeout(startCalcScifi, 5000);
    setTimeout(bookPrompt, 5000);
  }else{
    errorPopup();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#scifi").addEventListener('click',onClickScifi);
});

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
      unlock("Trashy","trashy");
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
    unlockUnknown("Fantasy","fantasy");
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
      unlock("History","history");
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

function startCalcChildrens(){
  calc(80,"childrens-stats");
}

function onClickChildrens(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(7000);
    picAdder(7000);
    setTimeout(startCalcChildrens, 7000);
    setTimeout(bookPrompt, 7000);
  }else{
    errorPopup();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#childrens").addEventListener('click',onClickChildrens);
});

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
    unlockUnknown("Satire","satire");
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
      unlock("Romance","romance");
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