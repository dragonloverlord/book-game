setTimeout(lockCheck, 4000);
function lockCheck(){
  var scifiStats = gt("scifi-stats").innerHTML;
  var scifiStats = parseInt(scifiStats);
  var humorStats = gt("humor-stats").innerHTML;
  var humorStats = parseInt(humorStats);
  if(scifiStats >= 10){
    unlockUnknown("Fantasy","fantasy","fantasy-sn");
  }if(humorStats >= 5){
    unlockUnknown("Satire","satire","satire-sn");
  }
}