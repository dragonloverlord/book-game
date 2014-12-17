document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#save").addEventListener('click',saveChanges);
});

function saveChanges(){
  var data = saveh("environmental-stats");
  chrome.storage.local.set({'environmental':data});
  var data = saveh("parenting-stats");
  chrome.storage.local.set({'parenting':data});
  var data = saveh("religious-stats");
  chrome.storage.local.set({'religious':data});
  var data = savev("parenting");
  chrome.storage.local.set({'parentingLock':data});
  var data = savev("religious");
  chrome.storage.local.set({'religiousLock':data});
}