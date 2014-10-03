setTimeout(errorChecker, 3000);
function errorChecker(){
  errorh("money-text");
  errorh("drama-stats");
  errorh("fantasy-stats");
  errorh("scifi-stats");
  errorh("trashy-stats");
  errorh("history-stats");
  errorh("childrens-stats");
  errorh("fiction-stats");
  errorh("nonfiction-stats");
  errorh("math-stats");
  errorh("humor-stats");
  errorh("satire-stats");
  errorh("romance-stats");
  errorh("report-stats");
  errorh("survival-stats");
  errorh("gothic-stats");
  errorh("adventure-stats");
  errorh("action-stats");
  errorv("trashy");
  errorv("history");
  errorv("romance");
  errorv("action");
}

setTimeout(lockCheck, 4000);
function lockCheck(){
  var trashy = gt("trashy").value;
  var trashy = parseInt(trashy);
  var history = gt("history").value;
  var history = parseInt(history);
  var romance = gt("romance").value;
  var romance = parseInt(romance);
  var action = gt("action").value;
  var action = parseInt(action);
  var scifiStats = gt("scifi-stats").innerHTML;
  var scifiStats = parseInt(scifiStats);
  var humorStats = gt("humor-stats").innerHTML;
  var humorStats = parseInt(humorStats);
  if(trashy === 1){
    unlock("Trashy","trashy","trashy-sn");
  }if(scifiStats >= 10){
    unlockUnknown("Fantasy","fantasy","fantasy-sn");
  }if(history === 1){
    unlock("History","history","history-sn");
  }if(humorStats >= 5){
    unlockUnknown("Satire","satire","satire-sn");
  }if(romance === 1){
    unlock("Romance","romance","romance-sn");
  }if(action === 1){
    unlock("Action","action","action-sn");
  }
}