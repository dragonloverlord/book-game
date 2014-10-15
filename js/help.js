document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#general").addEventListener('click',general);
});

function general(){
  document.getElementById('iframe').src = '/html/general.html';
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#names").addEventListener('click',names);
});

function names(){
  document.getElementById('iframe').src = '/html/names.html';
}