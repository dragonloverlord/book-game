document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#general").addEventListener('click',general);
});

function general(){
  document.getElementById('iframe').src = '/html/general.html';
}