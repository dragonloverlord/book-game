document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#save").addEventListener('click',saveChanges);
});

function saveChanges(){
  var data = saveh("fiction-stats");
  chrome.storage.local.set({'fiction':data});
  var data = saveh("nonfiction-stats");
  chrome.storage.local.set({'nonfiction':data});
  var data = saveh("math-stats");
  chrome.storage.local.set({'math':data});
  var data = saveh("humor-stats");
  chrome.storage.local.set({'humor':data});
  var data = saveh("satire-stats");
  chrome.storage.local.set({'satire':data});
  var data = saveh("romance-stats");
  chrome.storage.local.set({'romance':data});
  var data = saveh("report-stats");
  chrome.storage.local.set({'report':data});
  var data = saveh("survival-stats");
  chrome.storage.local.set({'survival':data});
  var data = saveh("gothic-stats");
  chrome.storage.local.set({'gothic':data});
  var data = saveh("adventure-stats");
  chrome.storage.local.set({'adventure':data});
  var data = saveh("action-stats");
  chrome.storage.local.set({'action':data});
  var data = saveh("environmental-stats");
  chrome.storage.local.set({'environmental':data});
  var data = saveh("parenting-stats");
  chrome.storage.local.set({'parenting':data});
  var data = saveh("religious-stats");
  chrome.storage.local.set({'religious':data});
  var data = savev("trashy");
  chrome.storage.local.set({'trashyLock':data});
  var data = savev("history");
  chrome.storage.local.set({'historyLock':data});
  var data = savev("romance");
  chrome.storage.local.set({'romanceLock':data});
  var data = savev("action");
  chrome.storage.local.set({'actionLock':data});
  var data = savev("environmental");
  chrome.storage.local.set({'environmentalLock':data});
  var data = savev("parenting");
  chrome.storage.local.set({'parentingLock':data});
  var data = savev("religious");
  chrome.storage.local.set({'religiousLock':data});
}