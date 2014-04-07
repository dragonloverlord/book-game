document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.sync.get('money',function(obj){
    var money = parseInt(obj.money);
    document.getElementById("money-text").innerHTML = money;
  });
  chrome.storage.sync.get('drama',function(obj){
    var drama = parseInt(obj.drama);
    document.getElementById("drama-stats").innerHTML = drama;
  });
  chrome.storage.sync.get('fantasy',function(obj){
    var fantasy = parseInt(obj.fantasy);
    document.getElementById("fantasy-stats").innerHTML = fantasy;
  });
  chrome.storage.sync.get('scifi',function(obj){
    var scifi = parseInt(obj.scifi);
    document.getElementById("scifi-stats").innerHTML = scifi;
  });
  chrome.storage.sync.get('trashy',function(obj){
    var trashy = parseInt(obj.trashy);
    document.getElementById("trashy-stats").innerHTML = trashy;
  });
  chrome.storage.sync.get('History',function(obj){
    var history = parseInt(obj.History);
    document.getElementById("history-stats").innerHTML = history;
  });
  chrome.storage.sync.get('childrens',function(obj){
    var childrens = parseInt(obj.childrens);
    document.getElementById("childrens-stats").innerHTML = childrens;
  });
  chrome.storage.sync.get('trashyLock',function(obj){
    var trashyLock = parseInt(obj.trashyLock);
    document.getElementById("trashy").value = trashyLock;
  });
  chrome.storage.sync.get('historyLock',function(obj){
    var historyLock = parseInt(obj.historyLock);
    document.getElementById("history").value = historyLock;
  });
});

setTimeout(errorChecker, 3000);
function errorChecker(){
  errorh("money-text");
  errorh("drama-stats");
  errorh("fantasy-stats");
  errorh("scifi-stats");
  errorh("trashy-stats");
  errorh("history-stats");
  errorh("childrens-stats");
  errorv("trashy");
  errorv("history");
}

function errorv(id){
  var error = document.getElementById(id).value;
  if(error == "NaN"){
    document.getElementById(id).value = 0;
  }
}

function errorh(id){
  var error = document.getElementById(id).innerHTML;
  if(error == "NaN"){
    document.getElementById(id).innerHTML = 0;
  }
}

setTimeout(lockCheck, 4000);
function lockCheck(){
  var trashy = document.getElementById("trashy").value;
  var history = document.getElementById("history").value;
  var history = parseInt(history);
  var scifiStats = document.getElementById("scifi-stats").innerHTML;
  var scifiStats = parseInt(scifiStats);
  var trashy = parseInt(trashy);
  if(trashy === 1){
    unlock("Trashy","trashy");
  }else if(scifiStats >= 10){
    unlockUnknown("Fantasy","fantasy");
  }else if(history === 1){
    unlock("History","history");
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#reset").addEventListener('click',reset);
});

function reset(){
  chrome.storage.sync.clear();
  document.getElementById("money-text").innerHTML = 0;
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#stats").addEventListener('click',stats);
});

function stats(){
  var moneyDiv = document.getElementById("money-div");
  moneyDiv.setAttribute("style","height:550px;");
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#shrink").addEventListener('click',shrink);
});

function shrink(){
  var moneyDiv = document.getElementById("money-div");
  moneyDiv.setAttribute("style","height:95px;");
}

function saveChanges(){
  var data = saveh("money-text");
  chrome.storage.sync.set({'money':data});
  var data = saveh("drama-stats");
  chrome.storage.sync.set({'drama':data});
  var data = saveh("fantasy-stats");
  chrome.storage.sync.set({'fantasy':data});
  var data = saveh("scifi-stats");
  chrome.storage.sync.set({'scifi':data});
  var data = saveh("trashy-stats");
  chrome.storage.sync.set({'trashy':data});
  var data = saveh("history-stats");
  chrome.storage.sync.set({'History':data});
  var data = saveh("childrens-stats");
  chrome.storage.sync.set({'childrens':data});
  var data = savev("trashy");
  chrome.storage.sync.set({'trashyLock':data});
  var data = savev("history");
  chrome.storage.sync.set({'historyLock':data});
}

function saveh(id){
  var data = document.getElementById(id).innerHTML;
  return data;
}

function savev(id){
  var data = document.getElementById(id).value;
  return data;
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#save").addEventListener('click',saveChanges);
});

function picAdder(time){
  var div = document.getElementById("main-div");
  var img = document.getElementById("cat-pic");
  div.setAttribute("style","background-color:#FFF;");
  img.setAttribute("src","typeimage.gif");
  setTimeout(picRemover,time);
}

function picRemover(){
  var div = document.getElementById("main-div");
  var img = document.getElementById("cat-pic");
  div.setAttribute("style","");
  img.setAttribute("src","");
}

function bookPrompt(){
  chrome.app.window.create("prompt.html",{
    "id":"prompt"
  });
}

function errorPopup(){
  chrome.app.window.create("error.html",{
    "id":"error"
  });
}

function lockedPopup(){
  chrome.app.window.create("lock.html",{
    "id":"lock"
  });
}

function unknownPopup(){
  chrome.app.window.create("unknown.html",{
    "id":"unknown"
  });
}

function unlock(book,id){
  var booktype = document.getElementById(id);
  booktype.value = 1;
  booktype.innerHTML = book;
  booktype.setAttribute("class","book-button");
}

function unlockUnknown(book,id){
  var booktype = document.getElementById(id);
  booktype.innerHTML = book;
  booktype.setAttribute("class","book-button");
}

function calc(value,book){
  var current = document.getElementById("money-text").innerHTML;
  var current = parseInt(current);
  var nv = parseInt(value);
  var money = current+nv;
  document.getElementById("money-text").innerHTML = money;
  if(book == "drama"){
    var drama = document.getElementById("drama-stats").innerHTML;
    var drama = parseInt(drama);
    var dramaStats = drama + 1;
    document.getElementById("drama-stats").innerHTML = dramaStats;
  }else if(book == "fantasy"){
    var fantasy = document.getElementById("fantasy-stats").innerHTML;
    var fantasy = parseInt(fantasy);
    var fantasyStats = fantasy + 1;
    document.getElementById("fantasy-stats").innerHTML = fantasyStats;
  }else if(book == "scifi"){
    var scifi = document.getElementById("scifi-stats").innerHTML;
    var scifi = parseInt(scifi);
    var scifiStats = scifi + 1;
    document.getElementById("scifi-stats").innerHTML = scifiStats;
  }else if(book == "trashy"){
    var trashy = document.getElementById("trashy-stats").innerHTML;
    var trashy = parseInt(trashy);
    var trashyStats = trashy + 1;
    document.getElementById("trashy-stats").innerHTML = trashyStats;
  }else if(book == "history"){
    var history = document.getElementById("history-stats").innerHTML;
    var history = parseInt(history);
    var historyStats = history + 1;
    document.getElementById("history-stats").innerHTML = historyStats;
  }else if(book == "childrens"){
    var childrens = document.getElementById("childrens-stats").innerHTML;
    var childrens = parseInt(childrens);
    var childrensStats = childrens + 1;
    document.getElementById("childrens-stats").innerHTML = childrensStats;
  }
}

function removeLock(){
  document.getElementById("lock").value = "lockoff";
}

function lock(num){
  document.getElementById("lock").value = "lockon";
  setTimeout(removeLock, num);
}

function startCalcScifi(){
  calc(50,"scifi");
}

function onClickScifi(){
  var lockState = document.getElementById("lock").value;
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
  calc(100,"drama");
}

function onClickDrama(){
  var lockState = document.getElementById("lock").value;
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
  calc(120,"trashy");
}

function onClickTrashy(){
  var lockState = document.getElementById("lock").value;
  var isLocked = document.getElementById("trashy").value;
  var isLocked = parseInt(isLocked);
  if(lockState=="lockoff" && isLocked === 1){
    lock(4000);
    picAdder(4000);
    setTimeout(startCalcTrashy, 4000);
    setTimeout(bookPrompt, 4000);
  }else if(isLocked === 0){
    var money = document.getElementById("money-text").innerHTML;
    var money = parseInt(money);
    if(money >= 1000){
      var currentMoney = document.getElementById("money-text").innerHTML;
      var currentMoney = parseInt(currentMoney);
      var newMoney = currentMoney - 1000;
      document.getElementById("money-text").innerHTML = newMoney;
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
  calc(250,"fantasy");
}

function onClickFantasy(){
  var lockState = document.getElementById("lock").value;
  var scifiStats = document.getElementById("scifi-stats").innerHTML;
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
  calc(350,"history");
}

function onClickHistory(){
  var lockState = document.getElementById("lock").value;
  var isLocked = document.getElementById("history").value;
  var isLocked = parseInt(isLocked);
  if(lockState=="lockoff" && isLocked === 1){
    lock(12000);
    picAdder(12000);
    setTimeout(startCalcHistory, 12000);
    setTimeout(bookPrompt, 12000);
  }else if(isLocked === 0){
    var money = document.getElementById("money-text").innerHTML;
    var money = parseInt(money);
    if(money >= 1500){
      var currentMoney = document.getElementById("money-text").innerHTML;
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
  calc(80,"childrens");
}

function onClickChildrens(){
  var lockState = document.getElementById("lock").value;
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
  calc(75,"fiction");
}

function onClickFiction(){
  var lockState = document.getElementById("lock").value;
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