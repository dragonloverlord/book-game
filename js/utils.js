function errorv(id){
  var error = gt(id).value;
  if(error == "NaN"){
    gt(id).value = 0;
  }
}

function errorh(id){
  var error = gt(id).innerHTML;
  if(error == "NaN"){
    gt(id).innerHTML = 0;
  }
}

function gt(id){
  return document.getElementById(id);
}

function idf(id){
  var val = gt(id);
  return val;
}

function saveh(id){
  var data = gt(id).innerHTML;
  return data;
}

function savev(id){
  var data = gt(id).value;
  return data;
}

function unlock(book,id,id2){
  var booktype = gt(id);
  var sname = gt(id2);
  booktype.value = 1;
  booktype.innerHTML = book;
  booktype.setAttribute("class","book-button");
  sname.innerHTML = book;
}

function unlockUnknown(book,id,id2){
  var booktype = gt(id);
  var sname = gt(id2);
  booktype.innerHTML = book;
  booktype.setAttribute("class","book-button");
  sname.innerHTML = book;
}

function calc(value,book){
  var current = gt("money-text").innerHTML;
  var current = parseInt(current);
  var nv = parseInt(value);
  var money = current+nv;
  gt("money-text").innerHTML = money;
  bookc(book);
}

function bookc(id){
  var book = gt(id).innerHTML;
  var book = parseInt(book);
  var book = book + 1;
  gt(id).innerHTML = book;
}

function removeLock(){
  gt("lock").value = "lockoff";
}

function lock(num){
  gt("lock").value = "lockon";
  setTimeout(removeLock, num);
}

