chromeLoad = function(){

}

app.controller("chromeLoad", [chromeLoad]);

chromeLoad.prototype.money = function(){
  chrome.storage.local.get('money',function(obj) {
    var money = parseInt(obj.money);
    gt("money-text").innerHTML = money;
  });
  var target = document.getElementById("money-text").childNodes[0];
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = saveh("money-text");
      chrome.storage.local.set({'money':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.drama = function(){
  chrome.storage.local.get('drama',function(obj) {
    var drama = parseInt(obj.drama);
    gt("drama-stats").innerHTML = drama;
  });
  var target = gt("drama-stats").childNodes[0];
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = saveh("drama-stats");
      chrome.storage.local.set({'drama':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.fantasy = function(){
  chrome.storage.local.get('fantasy',function(obj) {
    var fantasy = parseInt(obj.fantasy);
    gt("fantasy-stats").innerHTML = fantasy;
  });
}

chromeLoad.prototype.scifi = function(){
  chrome.storage.local.get('scifi',function(obj) {
    var scifi = parseInt(obj.scifi);
    gt("scifi-stats").innerHTML = scifi;
  });
}

chromeLoad.prototype.trashy = function(){
  chrome.storage.local.get('trashy',function(obj) {
    var trashy = parseInt(obj.trashy);
    gt("trashy-stats").innerHTML = trashy;
  });
}

chromeLoad.prototype.historybook = function(){
  chrome.storage.local.get('History',function(obj) {
    var history = parseInt(obj.History);
    gt("history-stats").innerHTML = history;
  });
}

chromeLoad.prototype.childrens = function(){
  chrome.storage.local.get('childrens',function(obj) {
    var childrens = parseInt(obj.childrens);
    gt("childrens-stats").innerHTML = childrens;
  });
  var target = document.getElementById("childrens-stats").childNodes[0];
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var data = saveh("childrens-stats");
      chrome.storage.local.set({'childrens':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

bookbuttons.prototype.trashyLock = function(){
  chrome.storage.local.get('trashyLock',function(obj) {
    var trashyLock = parseInt(obj.trashyLock);
    gt("trashy").value = trashyLock;
  });
}

bookbuttons.prototype.historyLock = function(){
  chrome.storage.local.get('historyLock',function(obj) {
    var historyLock = parseInt(obj.historyLock);
    gt("history").value = historyLock;
  });
}

bookbuttons.prototype.romanceLock = function(){
  chrome.storage.local.get('romanceLock',function(obj) {
    var romanceLock = parseInt(obj.romanceLock);
    gt("romance").value = romanceLock;
  });
}

chromeLoad.prototype.fiction = function(){
  chrome.storage.local.get('fiction',function(obj) {
    var fiction = parseInt(obj.fiction);
    gt("fiction-stats").innerHTML = fiction;
  });
}

chromeLoad.prototype.nonfiction = function(){
  chrome.storage.local.get('nonfiction',function(obj) {
    var nonfiction = parseInt(obj.nonfiction);
    gt("nonfiction-stats").innerHTML = nonfiction;
  });
}

chromeLoad.prototype.math = function(){
  chrome.storage.local.get('math',function(obj) {
    var math = parseInt(obj.math);
    gt("math-stats").innerHTML = math;
  });
}

chromeLoad.prototype.humor = function(){
  chrome.storage.local.get('humor',function(obj) {
    var humor = parseInt(obj.humor);
    gt("humor-stats").innerHTML = humor;
  });
}

chromeLoad.prototype.satire = function(){
  chrome.storage.local.get('satire',function(obj) {
    var satire = parseInt(obj.satire);
    gt("satire-stats").innerHTML = satire;
  });
}

chromeLoad.prototype.romance = function(){
  chrome.storage.local.get('romance',function(obj) {
    var romance = parseInt(obj.romance);
    gt("romance-stats").innerHTML = romance;
  });
}

chromeLoad.prototype.report = function(){
  chrome.storage.local.get('report',function(obj) {
    var report = parseInt(obj.report);
    gt("report-stats").innerHTML = report;
  });
}

chromeLoad.prototype.survival = function(){
  chrome.storage.local.get('survival',function(obj) {
    var survival = parseInt(obj.survival);
    gt("survival-stats").innerHTML = survival;
  });
}

chromeLoad.prototype.gothic = function(){
  chrome.storage.local.get('gothic',function(obj) {
    var gothic = parseInt(obj.gothic);
    gt("gothic-stats").innerHTML = gothic;
  });
}

chromeLoad.prototype.adventure = function(){
  chrome.storage.local.get('adventure',function(obj) {
    var adventure = parseInt(obj.adventure);
    gt("adventure-stats").innerHTML = adventure;
  });
}

bookbuttons.prototype.actionLock = function(){
  chrome.storage.local.get('actionLock',function(obj) {
    var actionLock = parseInt(obj.actionLock);
    gt("action").value = actionLock;
  });
}

chromeLoad.prototype.action = function(){
  chrome.storage.local.get('action',function(obj) {
    var action = parseInt(obj.action);
    gt("action-stats").innerHTML = action;
  });
}

bookbuttons.prototype.environmentalLock = function(){
  chrome.storage.local.get('environmentalLock',function(obj) {
    var environmentalLock = parseInt(obj.environmentalLock);
    gt("environmental").value = environmentalLock;
  });
}

chromeLoad.prototype.environmental = function(){
  chrome.storage.local.get('environmental',function(obj) {
    var environmental = parseInt(obj.environmental);
    gt("environmental-stats").innerHTML = environmental;
  });
}

bookbuttons.prototype.parentingLock = function(){
  chrome.storage.local.get('parentingLock',function(obj) {
    var parentingLock = parseInt(obj.parentingLock);
    gt("parenting").value = parentingLock;
  });
}

chromeLoad.prototype.parenting = function(){
  chrome.storage.local.get('parenting',function(obj) {
    var parenting = parseInt(obj.parenting);
    gt("parenting-stats").innerHTML = parenting;
  });
}

bookbuttons.prototype.religiousLock = function(){
  chrome.storage.local.get('religiousLock',function(obj) {
    var religiousLock = parseInt(obj.religiousLock);
    gt("religious").value = religiousLock;
  });
}

chromeLoad.prototype.religious = function(){
  chrome.storage.local.get('religious',function(obj) {
    var religious = parseInt(obj.religious);
    gt("religious-stats").innerHTML = religious;
  });
}
