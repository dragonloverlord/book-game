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

bookbuttons.prototype.educationalLock = function(){
  chrome.storage.local.get('educationalLock',function(obj){
    var educationalLock = parseInt(obj.educationalLock);
    gt("educational").value = educationalLock;
  });
  var target = gt("educational");
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorv("educational");
      var data = savev("educational");
      chrome.storage.local.set({'educationalLock':data});
      chrome.storage.local.get("educationalLockValue",function(obj){
        var educationalLockValue = parseInt(obj.educationalLockValue);
        var lock = educationalLockValue;
        while(lock === 1){
          var lock = 2;
          chrome.storage.local.set({"educationalLockValue":"2"});
          var educational = gt("educational").value;
          var educational = parseInt(educational);
          if(educational === 1){
            unlock("Educational","educational","educational-sn");
          }
        }
      });
    });
  });
  var config = {attributes:true};
  observer.observe(target,config);
}

chromeLoad.prototype.educational = function(){
  chrome.storage.local.get('educational',function(obj){
    var educational = parseInt(obj.educational);
    gt("educational-stats").innerHTML = educational;
  });
  var target = gtch("educational-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("educational-stats");
      var data = saveh("educational-stats");
      chrome.storage.local.set({'educational':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

bookbuttons.prototype.fashionLock = function(){
  chrome.storage.local.get('fashionLock',function(obj){
    var fashionLock = parseInt(obj.fashionLock);
    gt("fashion").value = fashionLock;
  });
  var target = gt("fashion");
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorv("fashion");
      var data = savev("fashion");
      chrome.storage.local.set({'fashionLock':data});
      chrome.storage.local.get("fashionLockValue",function(obj){
        var fashionLockValue = parseInt(obj.fashionLockValue);
        var lock = fashionLockValue;
        while(lock === 1){
          var lock = 2;
          chrome.storage.local.set({"fashionLockValue":"2"});
          var fashion = gt("fashion").value;
          var fashion = parseInt(fashion);
          if(fashion === 1){
            unlock("Fashion","fashion","fashion-sn");
          }
        }
      });
    });
  });
  var config = {attributes:true};
  observer.observe(target,config);
}

chromeLoad.prototype.fashion = function(){
  chrome.storage.local.get('fashion',function(obj){
    var fashion = parseInt(obj.fashion);
    gt("fashion-stats").innerHTML = fashion;
  });
  var target = gtch("fashion-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("fashion-stats");
      var data = saveh("fashion-stats");
      chrome.storage.local.set({'fashion':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}

bookbuttons.prototype.gossipLock = function(){
  chrome.storage.local.get('gossipLock',function(obj){
    var gossipLock = parseInt(obj.gossipLock);
    gt("gossip").value = gossipLock;
  });
  var target = gt("gossip");
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorv("gossip");
      var data = savev("gossip");
      chrome.storage.local.set({'gossipLock':data});
      chrome.storage.local.get("gossipLockValue",function(obj){
        var gossipLockValue = parseInt(obj.gossipLockValue);
        var lock = gossipLockValue;
        while(lock === 1){
          var lock = 2;
          chrome.storage.local.set({"gossipLockValue":"2"});
          var gossip = gt("gossip").value;
          var gossip = parseInt(gossip);
          if(gossip === 1){
            unlock("Gossip","gossip","gossip-sn");
          }
        }
      });
    });
  });
  var config = {attributes:true};
  observer.observe(target,config);
}

chromeLoad.prototype.gossip = function(){
  chrome.storage.local.get('gossip',function(obj){
    var gossip = parseInt(obj.gossip);
    gt("gossip-stats").innerHTML = gossip;
  });
  var target = gtch("gossip-stats",0);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      errorh("gossip-stats");
      var data = saveh("gossip-stats");
      chrome.storage.local.set({'gossip':data});
    });
  });
  var config = {characterData:true};
  observer.observe(target,config);
}
