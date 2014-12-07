document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.sync.get('money',function(obj) {
    var money = parseInt(obj.money);
    gt("money-text").innerHTML = money;
  });
  chrome.storage.sync.get('drama',function(obj) {
    var drama = parseInt(obj.drama);
    gt("drama-stats").innerHTML = drama;
  });
  chrome.storage.sync.get('fantasy',function(obj) {
    var fantasy = parseInt(obj.fantasy);
    gt("fantasy-stats").innerHTML = fantasy;
  });
  chrome.storage.sync.get('scifi',function(obj) {
    var scifi = parseInt(obj.scifi);
    gt("scifi-stats").innerHTML = scifi;
  });
  chrome.storage.sync.get('trashy',function(obj) {
    var trashy = parseInt(obj.trashy);
    gt("trashy-stats").innerHTML = trashy;
  });
  chrome.storage.sync.get('History',function(obj) {
    var history = parseInt(obj.History);
    gt("history-stats").innerHTML = history;
  });
  chrome.storage.sync.get('childrens',function(obj) {
    var childrens = parseInt(obj.childrens);
    gt("childrens-stats").innerHTML = childrens;
  });
  chrome.storage.sync.get('trashyLock',function(obj) {
    var trashyLock = parseInt(obj.trashyLock);
    gt("trashy").value = trashyLock;
  });
  chrome.storage.sync.get('historyLock',function(obj) {
    var historyLock = parseInt(obj.historyLock);
    gt("history").value = historyLock;
  });
  chrome.storage.sync.get('romanceLock',function(obj) {
    var romanceLock = parseInt(obj.romanceLock);
    gt("romance").value = romanceLock;
  });
  chrome.storage.sync.get('fiction',function(obj) {
    var fiction = parseInt(obj.fiction);
    gt("fiction-stats").innerHTML = fiction;
  });
  chrome.storage.sync.get('nonfiction',function(obj) {
    var nonfiction = parseInt(obj.nonfiction);
    gt("nonfiction-stats").innerHTML = nonfiction;
  });
  chrome.storage.sync.get('math',function(obj) {
    var math = parseInt(obj.math);
    gt("math-stats").innerHTML = math;
  });
  chrome.storage.sync.get('humor',function(obj) {
    var humor = parseInt(obj.humor);
    gt("humor-stats").innerHTML = humor;
  });
  chrome.storage.sync.get('satire',function(obj) {
    var satire = parseInt(obj.satire);
    gt("satire-stats").innerHTML = satire;
  });
  chrome.storage.sync.get('romance',function(obj) {
    var romance = parseInt(obj.romance);
    gt("romance-stats").innerHTML = romance;
  });
  chrome.storage.sync.get('report',function(obj) {
    var report = parseInt(obj.report);
    gt("report-stats").innerHTML = report;
  });
  chrome.storage.sync.get('survival',function(obj) {
    var survival = parseInt(obj.survival);
    gt("survival-stats").innerHTML = survival;
  });
  chrome.storage.sync.get('gothic',function(obj) {
    var gothic = parseInt(obj.gothic);
    gt("gothic-stats").innerHTML = gothic;
  });
  chrome.storage.sync.get('adventure',function(obj) {
    var adventure = parseInt(obj.adventure);
    gt("adventure-stats").innerHTML = adventure;
  });
  chrome.storage.sync.get('actionLock',function(obj) {
    var actionLock = parseInt(obj.actionLock);
    gt("action").value = actionLock;
  });
  chrome.storage.sync.get('action',function(obj) {
    var action = parseInt(obj.action);
    gt("action-stats").innerHTML = action;
  });
  chrome.storage.sync.get('environmentalLock',function(obj) {
    var environmentalLock = parseInt(obj.environmentalLock);
    gt("environmental").value = environmentalLock;
  });
  chrome.storage.sync.get('environmental',function(obj) {
    var environmental = parseInt(obj.environmental);
    gt("environmental-stats").innerHTML = environmental;
  });
  chrome.storage.sync.get('parentingLock',function(obj) {
    var parentingLock = parseInt(obj.parentingLock);
    gt("parenting").value = parentingLock;
  });
  chrome.storage.sync.get('parenting',function(obj) {
    var parenting = parseInt(obj.parenting);
    gt("parenting-stats").innerHTML = parenting;
  });
});