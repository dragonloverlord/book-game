chromeLoad = function(){

}

app.controller("chromeLoad", [chromeLoad]);

chromeLoad.prototype.money = function(){
  chrome.storage.local.get('money',function(obj) {
    var money = parseInt(obj.money);
    gt("money-text").innerHTML = money;
  });
  var target = gtch("money-text",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("money-text");
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
  var target = gtch("drama-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("drama-stats");
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
  var target = gtch("fantasy-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("fantasy-stats");
      var data = saveh("fantasy-stats");
      chrome.storage.local.set({'fantasy':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.scifi = function(){
  chrome.storage.local.get('scifi',function(obj) {
    var scifi = parseInt(obj.scifi);
    gt("scifi-stats").innerHTML = scifi;
  });
  var target = gtch("scifi-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("scifi-stats");
      var data = saveh("scifi-stats");
      chrome.storage.local.set({'scifi':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.trashy = function(){
  chrome.storage.local.get('trashy',function(obj) {
    var trashy = parseInt(obj.trashy);
    gt("trashy-stats").innerHTML = trashy;
  });
  var target = gtch("trashy-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("trashy-stats");
      var data = saveh("trashy-stats");
      chrome.storage.local.set({'trashy':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.historybook = function(){
  chrome.storage.local.get('History',function(obj) {
    var history = parseInt(obj.History);
    gt("history-stats").innerHTML = history;
  });
  var target = gtch("history-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("history-stats");
      var data = saveh("history-stats");
      chrome.storage.local.set({'History':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.childrens = function(){
  chrome.storage.local.get('childrens',function(obj){
    var childrens = parseInt(obj.childrens);
    gt("childrens-stats").innerHTML = childrens;
  });
  var target = gtch("childrens-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("childrens-stats");
      var data = saveh("childrens-stats");
      chrome.storage.local.set({'childrens':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

bookbuttons.prototype.trashyLock = function(){
  chrome.storage.local.get('trashyLock',function(obj){
    var trashyLock = parseInt(obj.trashyLock);
    gt("trashy").value = trashyLock;
  });
  var target = gt("trashy");
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorv("trashy");
      var data = savev("trashy");
      chrome.storage.local.set({'trashyLock':data});
      chrome.storage.local.get('trashyLockValue',function(obj){
        var trashyLockValue = parseInt(obj.trashyLockValue);
        var lock = trashyLockValue;
        while(lock === 1){
          var lock = 2;
          chrome.storage.local.set({'trashyLockValue':"2"});
          var trashy = gt("trashy").value;
          var trashy = parseInt(trashy);
          if(trashy === 1){
            unlock("Trashy","trashy","trashy-sn");
          }
        }
      });
    });
  });
  var config = {attributes:true};
  observer.observe(target,config);
}

bookbuttons.prototype.historyLock = function(){
  chrome.storage.local.get('historyLock',function(obj){
    var historyLock = parseInt(obj.historyLock);
    gt("history").value = historyLock;
  });
  var target = gt("history");
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorv("history");
      var data = savev("history");
      chrome.storage.local.set({'historyLock':data});
      chrome.storage.local.get('historyLockValue',function(obj){
        var historyLockValue = parseInt(obj.historyLockValue);
        var lock = historyLockValue;
        while(lock === 1){
          var lock = 2;
          chrome.storage.local.set({'historyLockValue':"2"});
          var history = gt("history").value;
          var history = parseInt(history);
          if(history === 1){
            unlock("History","history","history-sn");
          }
        }
      });
    });
  });
  var config = {attributes:true};
  observer.observe(target,config);
}

bookbuttons.prototype.romanceLock = function(){
  chrome.storage.local.get('romanceLock',function(obj){
    var romanceLock = parseInt(obj.romanceLock);
    gt("romance").value = romanceLock;
  });
  var target = gt("romance");
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorv("romance");
      var data = savev("romance");
      chrome.storage.local.set({'romanceLock':data});
      chrome.storage.local.get('romanceLockValue',function(obj){
        var romanceLockValue = parseInt(obj.romanceLockValue);
        var lock = romanceLockValue;
        while(lock === 1){
          var lock = 2;
          chrome.storage.local.set({'romanceLockValue':"2"});
          var romance = gt("romance").value;
          var romance = parseInt(romance);
          if(romance === 1){
            unlock("Romance","romance","romance-sn");
          }
        }
      });
    });
  });
  var config = {attributes:true};
  observer.observe(target,config);
}

chromeLoad.prototype.fiction = function(){
  chrome.storage.local.get('fiction',function(obj){
    var fiction = parseInt(obj.fiction);
    gt("fiction-stats").innerHTML = fiction;
  });
  var target = gtch("fiction-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("fiction-stats");
      var data = saveh("fiction-stats");
      chrome.storage.local.set({'fiction':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.nonfiction = function(){
  chrome.storage.local.get('nonfiction',function(obj){
    var nonfiction = parseInt(obj.nonfiction);
    gt("nonfiction-stats").innerHTML = nonfiction;
  });
  var target = gtch("nonfiction-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("nonfiction-stats");
      var data = saveh("nonfiction-stats");
      chrome.storage.local.set({'nonfiction':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.math = function(){
  chrome.storage.local.get('math',function(obj) {
    var math = parseInt(obj.math);
    gt("math-stats").innerHTML = math;
  });
  var target = gtch("math-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("math-stats");
      var data = saveh("math-stats");
      chrome.storage.local.set({'math':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.humor = function(){
  chrome.storage.local.get('humor',function(obj) {
    var humor = parseInt(obj.humor);
    gt("humor-stats").innerHTML = humor;
  });
  var target = gtch("humor-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("humor-stats");
      var data = saveh("humor-stats");
      chrome.storage.local.set({'humor':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.satire = function(){
  chrome.storage.local.get('satire',function(obj) {
    var satire = parseInt(obj.satire);
    gt("satire-stats").innerHTML = satire;
  });
  var target = gtch("satire-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("satire-stats");
      var data = saveh("satire-stats");
      chrome.storage.local.set({'satire':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.romance = function(){
  chrome.storage.local.get('romance',function(obj) {
    var romance = parseInt(obj.romance);
    gt("romance-stats").innerHTML = romance;
  });
  var target = gtch("romance-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("romance-stats");
      var data = saveh("romance-stats");
      chrome.storage.local.set({'romance':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.report = function(){
  chrome.storage.local.get('report',function(obj) {
    var report = parseInt(obj.report);
    gt("report-stats").innerHTML = report;
  });
  var target = gtch("report-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("report-stats");
      var data = saveh("report-stats");
      chrome.storage.local.set({'report':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.survival = function(){
  chrome.storage.local.get('survival',function(obj) {
    var survival = parseInt(obj.survival);
    gt("survival-stats").innerHTML = survival;
  });
  var target = gtch("survival-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("survival-stats");
      var data = saveh("survival-stats");
      chrome.storage.local.set({'survival':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.gothic = function(){
  chrome.storage.local.get('gothic',function(obj) {
    var gothic = parseInt(obj.gothic);
    gt("gothic-stats").innerHTML = gothic;
  });
  var target = gtch("gothic-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("gothic-stats");
      var data = saveh("gothic-stats");
      chrome.storage.local.set({'gothic':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

chromeLoad.prototype.adventure = function(){
  chrome.storage.local.get('adventure',function(obj){
    var adventure = parseInt(obj.adventure);
    gt("adventure-stats").innerHTML = adventure;
  });
  var target = gtch("adventure-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("adventure-stats");
      var data = saveh("adventure-stats");
      chrome.storage.local.set({'adventure':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

bookbuttons.prototype.actionLock = function(){
  chrome.storage.local.get('actionLock',function(obj){
    var actionLock = parseInt(obj.actionLock);
    gt("action").value = actionLock;
  });
  var target = gt("action");
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorv("action");
      var data = savev("action");
      chrome.storage.local.set({'actionLock':data});
      chrome.storage.local.get('actionLockValue',function(obj){
        var actionLockValue = parseInt(obj.actionLockValue);
        var lock = actionLockValue;
        while(lock === 1){
          var lock = 2;
          chrome.storage.local.set({'actionLockValue':"2"});
          var action = gt("action").value;
          var action = parseInt(action);
          if(action === 1){
            unlock("Action","action","action-sn");
          }
        }
      });
    });
  });
  var config = {attributes:true};
  observer.observe(target,config);
}

chromeLoad.prototype.action = function(){
  chrome.storage.local.get('action',function(obj){
    var action = parseInt(obj.action);
    gt("action-stats").innerHTML = action;
  });
  var target = gtch("action-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("action-stats");
      var data = saveh("action-stats");
      chrome.storage.local.set({'action':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

bookbuttons.prototype.environmentalLock = function(){
  chrome.storage.local.get('environmentalLock',function(obj) {
    var environmentalLock = parseInt(obj.environmentalLock);
    gt("environmental").value = environmentalLock;
  });
  var target = gt("environmental");
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorv("environmental");
      var data = savev("environmental");
      chrome.storage.local.set({'environmentalLock':data});
      chrome.storage.local.get('environmentalLockValue',function(obj){
        var environmentalLockValue = parseInt(obj.environmentalLockValue);
        var lock = environmentalLockValue;
        while(lock === 1){
          var lock = 2;
          chrome.storage.local.set({"environmentalLockValue":"2"});
          var environmental = gt("environmental").value;
          var environmental = parseInt(environmental);
          if(environmental === 1){
            unlock("Environmental","environmental","environmental-sn");
          }
        }
      });
    });
  });
  var config = {attributes:true};
  observer.observe(target,config);
}

chromeLoad.prototype.environmental = function(){
  chrome.storage.local.get('environmental',function(obj) {
    var environmental = parseInt(obj.environmental);
    gt("environmental-stats").innerHTML = environmental;
  });
  var target = gtch("environmental-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("environmental-stats");
      var data = saveh("environmental-stats");
      chrome.storage.local.set({'environmental':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

bookbuttons.prototype.parentingLock = function(){
  chrome.storage.local.get('parentingLock',function(obj) {
    var parentingLock = parseInt(obj.parentingLock);
    gt("parenting").value = parentingLock;
  });
  var target = gt("parenting");
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorv("parenting");
      var data = savev("parenting");
      chrome.storage.local.set({'parentingLock':data});
    });
  });
  var config = {attributes:true};
  observer.observe(target,config);
}

chromeLoad.prototype.parenting = function(){
  chrome.storage.local.get('parenting',function(obj) {
    var parenting = parseInt(obj.parenting);
    gt("parenting-stats").innerHTML = parenting;
  });
  var target = gtch("parenting-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("parenting-stats");
      var data = saveh("parenting-stats");
      chrome.storage.local.set({'parenting':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

bookbuttons.prototype.religiousLock = function(){
  chrome.storage.local.get('religiousLock',function(obj) {
    var religiousLock = parseInt(obj.religiousLock);
    gt("religious").value = religiousLock;
  });
  var target = gt("religious");
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorv("religious");
      var data = savev("religious");
      chrome.storage.local.set({'religiousLock':data});
    });
  });
  var config = {attributes:true};
  observer.observe(target,config);
}

chromeLoad.prototype.religious = function(){
  chrome.storage.local.get('religious',function(obj) {
    var religious = parseInt(obj.religious);
    gt("religious-stats").innerHTML = religious;
  });
  var target = gtch("religious-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("religious-stats");
      var data = saveh("religious-stats");
      chrome.storage.local.set({'religious':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}
