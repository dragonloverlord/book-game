document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#save").addEventListener('click',saveChanges);
});

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
  var data = saveh("fiction-stats");
  chrome.storage.sync.set({'fiction':data});
  var data = saveh("nonfiction-stats");
  chrome.storage.sync.set({'nonfiction':data});
  var data = saveh("math-stats");
  chrome.storage.sync.set({'math':data});
  var data = saveh("humor-stats");
  chrome.storage.sync.set({'humor':data});
  var data = saveh("satire-stats");
  chrome.storage.sync.set({'satire':data});
  var data = saveh("romance-stats");
  chrome.storage.sync.set({'romance':data});
  var data = saveh("report-stats");
  chrome.storage.sync.set({'report':data});
  var data = saveh("survival-stats");
  chrome.storage.sync.set({'survival':data});
  var data = saveh("gothic-stats");
  chrome.storage.sync.set({'gothic':data});
  var data = savev("trashy");
  chrome.storage.sync.set({'trashyLock':data});
  var data = savev("history");
  chrome.storage.sync.set({'historyLock':data});
  var data = savev("romance");
  chrome.storage.sync.set({'romanceLock':data});
}