bookbuttons.prototype.startCalcScifi = function(){
  calc(50,"scifi-stats");
}

bookbuttons.prototype.onClickScifi = function(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(5000);
    picAdder(5000);
    setTimeout(this.startCalcScifi, 5000);
    setTimeout(bookPrompt, 5000);
  }else{
    errorPopup();
  }
}

bookbuttons.prototype.startCalcDrama = function(){
  calc(100,"drama-stats");
}

bookbuttons.prototype.onClickDrama = function(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(5000);
    picAdder(5000);
    setTimeout(this.startCalcDrama, 5000);
    setTimeout(bookPrompt, 5000);
  }else{
    errorPopup();
  }
}

bookbuttons.prototype.startCalcTrashy = function(){
  calc(120,"trashy-stats");
}

bookbuttons.prototype.onClickTrashy = function(){
  var lockState = gt("lock").value;
  var isLocked = gt("trashy").value;
  var isLocked = parseInt(isLocked);
  if(lockState=="lockoff" && isLocked === 1){
    lock(4000);
    picAdder(4000);
    setTimeout(this.startCalcTrashy, 4000);
    setTimeout(bookPrompt, 4000);
  }else if(isLocked === 0){
    var money = gt("money-text").innerHTML;
    var money = parseInt(money);
    if(money >= 1000){
      var currentMoney = gt("money-text").innerHTML;
      var currentMoney = parseInt(currentMoney);
      var newMoney = currentMoney - 1000;
      gt("money-text").innerHTML = newMoney;
      unlock("Trashy","trashy","trashy-sn");
    }else{
      lockedPopup();
    }
  }else{
    errorPopup();
  }
}

bookbuttons.prototype.startCalcFantasy = function(){
  calc(250,"fantasy-stats");
}

bookbuttons.prototype.onClickFantasy = function(){
  var lockState = gt("lock").value;
  var scifiStats = gt("scifi-stats").innerHTML;
  var scifiStats = parseInt(scifiStats);
  if(lockState=="lockoff" && scifiStats === 10){
    lock(10000);
    picAdder(10000);
    setTimeout(this.startCalcFantasy, 10000);
    setTimeout(bookPrompt, 10000);
    unlockUnknown("Fantasy","fantasy","fantasy-sn");
  }else if(scifiStats < 10){
    unknownPopup();
  }else{
    errorPopup();
  }
}

bookbuttons.prototype.startCalcHistory = function(){
  calc(350,"history-stats");
}

bookbuttons.prototype.onClickHistory = function(){
  var lockState = gt("lock").value;
  var isLocked = gt("history").value;
  var isLocked = parseInt(isLocked);
  if(lockState=="lockoff" && isLocked === 1){
    lock(12000);
    picAdder(12000);
    setTimeout(this.startCalcHistory, 12000);
    setTimeout(bookPrompt, 12000);
  }else if(isLocked === 0){
    var money = gt("money-text").innerHTML;
    var money = parseInt(money);
    if(money >= 1500){
      var currentMoney = gt("money-text").innerHTML;
      var currentMoney = parseInt(currentMoney);
      var newMoney = currentMoney - 1500;
      document.getElementById("money-text").innerHTML = newMoney;
      unlock("History","history","history-sn");
    }else{
      lockedPopup();
    }
  }else{
    errorPopup();
  }
}

function bookbuttons(){

}

bookbuttons.prototype.startCalcChildrens = function(){
  calc(80,"childrens-stats");
}

bookbuttons.prototype.onClickChildrens = function(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(7000);
    picAdder(7000);
    setTimeout(this.startCalcChildrens, 7000);
    setTimeout(bookPrompt, 7000);
  }else{
    errorPopup();
  }
}

bookbuttons.prototype.startCalcFiction = function(){
  calc(75,"fiction-stats");
}

bookbuttons.prototype.onClickFiction = function(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(7500);
    picAdder(7500);
    setTimeout(this.startCalcFiction, 7500);
    setTimeout(bookPrompt, 7500);
  }else{
    errorPopup();
  }
}

bookbuttons.prototype.startCalcNonFiction = function(){
  calc(60,"nonfiction-stats");
}

bookbuttons.prototype.onClickNonFiction = function(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(7300);
    picAdder(7300);
    setTimeout(this.startCalcNonFiction, 7300);
    setTimeout(bookPrompt, 7300);
  }else{
    errorPopup();
  }
}

bookbuttons.prototype.startCalcMath = function(){
  calc(95,"math-stats");
}

bookbuttons.prototype.onClickMath = function(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(9300);
    picAdder(9300);
    setTimeout(this.startCalcMath, 9300);
    setTimeout(bookPrompt, 9300);
  }else{
    errorPopup();
  }
}

bookbuttons.prototype.startCalcHumor = function(){
  calc(130,"humor-stats");
}

bookbuttons.prototype.onClickHumor = function(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(10300);
    picAdder(10300);
    setTimeout(this.startCalcHumor, 10300);
    setTimeout(bookPrompt, 10300);
  }else{
    errorPopup();
  }
}

bookbuttons.prototype.startCalcSatire = function(){
  calc(475,"satire-stats");
}

bookbuttons.prototype.onClickSatire = function(){
  var lockState = gt("lock").value;
  var humorStats = gt("humor-stats").innerHTML;
  var humorStats = parseInt(humorStats);
  if(lockState=="lockoff" && humorStats === 5){
    lock(19000);
    picAdder(19000);
    setTimeout(this.startCalcSatire, 19000);
    setTimeout(bookPrompt, 19000);
    unlockUnknown("Satire","satire","satire-sn");
  }else if(humorStats < 10){
    unknownPopup();
  }else{
    errorPopup();
  }
}

bookbuttons.prototype.startCalcRomance = function(){
  calc(440,"romance-stats");
}

bookbuttons.prototype.onClickRomance = function(){
  var lockState = gt("lock").value;
  var isLocked = gt("romance").value;
  var isLocked = parseInt(isLocked);
  if(lockState=="lockoff" && isLocked === 1){
    lock(15350);
    picAdder(15350);
    setTimeout(this.startCalcRomance, 15350);
    setTimeout(bookPrompt, 15350);
  }else if(isLocked === 0){
    var money = gt("money-text").innerHTML;
    var money = parseInt(money);
    if(money >= 3000){
      var currentMoney = gt("money-text").innerHTML;
      var currentMoney = parseInt(currentMoney);
      var newMoney = currentMoney - 3000;
      gt("money-text").innerHTML = newMoney;
      unlock("Romance","romance","romance-sn");
    }else{
      lockedPopup();
    }
  }else{
    errorPopup();
  }
}

bookbuttons.prototype.startCalcReport = function(){
  calc(116,"report-stats");
}

bookbuttons.prototype.onClickReport = function(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(10300);
    picAdder(10300);
    setTimeout(this.startCalcReport, 10300);
    setTimeout(bookPrompt, 10300);
  }else{
    errorPopup();
  }
}

bookbuttons.prototype.startCalcSurvival = function(){
  calc(260,"survival-stats");
}

bookbuttons.prototype.onClickSurvival = function(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(20300);
    picAdder(20300);
    setTimeout(this.startCalcSurvival, 20300);
    setTimeout(bookPrompt, 20300);
  }else{
    errorPopup();
  }
}

bookbuttons.prototype.startCalcGothic = function(){
  calc(335,"gothic-stats");
}

bookbuttons.prototype.onClickGothic = function(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(23300);
    picAdder(23300);
    setTimeout(this.startCalcGothic, 23300);
    setTimeout(bookPrompt, 23300);
  }else{
    errorPopup();
  }
}

bookbuttons.prototype.startCalcAdventure = function(){
  calc(575,"adventure-stats");
}

bookbuttons.prototype.onClickAdventure = function(){
  var lockState = gt("lock").value;
  if(lockState=="lockoff"){
    lock(35300);
    picAdder(35300);
    setTimeout(this.startCalcAdventure, 35300);
    setTimeout(bookPrompt, 35300);
  }else{
    errorPopup();
  }
}

bookbuttons.prototype.startCalcAction = function(){
  calc(370,"action-stats");
}

bookbuttons.prototype.onClickAction = function(){
  var lockState = gt("lock").value;
  var isLocked = gt("action").value;
  var isLocked = parseInt(isLocked);
  if(lockState=="lockoff" && isLocked === 1){
    lock(18350);
    picAdder(18350);
    setTimeout(this.startCalcAction, 18350);
    setTimeout(bookPrompt, 18350);
  }else if(isLocked === 0){
    var money = gt("money-text").innerHTML;
    var money = parseInt(money);
    if(money >= 6000){
      var currentMoney = gt("money-text").innerHTML;
      var currentMoney = parseInt(currentMoney);
      var newMoney = currentMoney - 6000;
      gt("money-text").innerHTML = newMoney;
      unlock("Action","action","action-sn");
    }else{
      lockedPopup();
    }
  }else{
    errorPopup();
  }
}

bookbuttons.prototype.startCalcEnvironmental = function(){
  calc(460,"environmental-stats");
}

bookbuttons.prototype.onClickEnvironmental = function(){
  var lockState = gt("lock").value;
  var isLocked = gt("environmental").value;
  var isLocked = parseInt(isLocked);
  if(lockState=="lockoff" && isLocked === 1){
    lock(19350);
    picAdder(19350);
    setTimeout(this.startCalcEnvironmental, 19350);
    setTimeout(bookPrompt, 19350);
  }else if(isLocked === 0){
    var money = gt("money-text").innerHTML;
    var money = parseInt(money);
    if(money >= 12000){
      var currentMoney = gt("money-text").innerHTML;
      var currentMoney = parseInt(currentMoney);
      var newMoney = currentMoney - 12000;
      gt("money-text").innerHTML = newMoney;
      unlock("Environmental","environmental","environmental-sn");
    }else{
      lockedPopup();
    }
  }else{
    errorPopup();
  }
}

bookbuttons.prototype.startCalcParenting = function(){
  calc(590,"parenting-stats");
}

bookbuttons.prototype.onClickParenting = function(){
  var lockState = gt("lock").value;
  var isLocked = gt("parenting").value;
  var isLocked = parseInt(isLocked);
  if(lockState=="lockoff" && isLocked === 1){
    lock(20670);
    picAdder(20670);
    setTimeout(this.startCalcParenting, 20670);
    setTimeout(bookPrompt, 20670);
  }else if(isLocked === 0){
    var money = gt("money-text").innerHTML;
    var money = parseInt(money);
    if(money >= 15000){
      var currentMoney = gt("money-text").innerHTML;
      var currentMoney = parseInt(currentMoney);
      var newMoney = currentMoney - 15000;
      gt("money-text").innerHTML = newMoney;
      unlock("Parenting","parenting","parenting-sn");
    }else{
      lockedPopup();
    }
  }else{
    errorPopup();
  }
}
