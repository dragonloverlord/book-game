setTimeout(lockCheck, 4000);
function lockCheck(){
  var environmental = gt("environmental").value;
  var environmental = parseInt(environmental);
  var parenting = gt("parenting").value;
  var parenting = parseInt(parenting);
  var religious = gt("religious").value;
  var religious = parseInt(religious);
  var scifiStats = gt("scifi-stats").innerHTML;
  var scifiStats = parseInt(scifiStats);
  var humorStats = gt("humor-stats").innerHTML;
  var humorStats = parseInt(humorStats);
  if(scifiStats >= 10){
    unlockUnknown("Fantasy","fantasy","fantasy-sn");
  }if(humorStats >= 5){
    unlockUnknown("Satire","satire","satire-sn");
  }if(environmental === 1){
    unlock("Environmental","environmental","environmental-sn");
  }if(parenting === 1){
    unlock("Parenting","parenting","parenting-sn");
  }if(religious === 1){
    unlock("Religious","religious","religious-sn");
  }
}