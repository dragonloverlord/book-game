document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#save").addEventListener('click',saveChanges);
});

function saveChanges(){
  var data = saveh("parenting-stats");
  chrome.storage.local.set({'parenting':data});
  var data = saveh("religious-stats");
  chrome.storage.local.set({'religious':data});
  var data = savev("religious");
  chrome.storage.local.set({'religiousLock':data});
}