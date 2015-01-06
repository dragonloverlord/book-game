bookbuttons.prototype.comicLock = function(){
  chrome.storage.local.get('comicLock',function(obj){
    var comicLock = parseInt(obj.comicLock);
    gt("comic").value = comicLock;
  });
  var target = gt("comic");
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorv("comic");
      var data = savev("comic");
      chrome.storage.local.set({'comicLock':data});
      chrome.storage.local.get("comicLockValue",function(obj){
        var comicLockValue = parseInt(obj.comicLockValue);
        var lock = comicLockValue;
        while(lock === 1){
          var lock = 2;
          chrome.storage.local.set({"comicLockValue":"2"});
          var comic = gt("comic").value;
          var comic = parseInt(comic);
          if(comic === 1){
            unlock("Comic","comic","comic-sn");
          }
        }
      });
    });
  });
  var config = {attributes:true};
  observer.observe(target,config);
}

chromeLoad.prototype.comic = function(){
  chrome.storage.local.get('comic',function(obj){
    var comic = parseInt(obj.comic);
    gt("comic-stats").innerHTML = comic;
  });
  var target = gtch("comic-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("comic-stats");
      var data = saveh("comic-stats");
      chrome.storage.local.set({'comic':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}