setTimeout(lockCheck, 4000);
function lockCheck(){
  var humorStats = gt("humor-stats").innerHTML;
  var humorStats = parseInt(humorStats);
  if(humorStats >= 5){
    unlockUnknown("Satire","satire","satire-sn");
  }
}