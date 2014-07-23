function nextWindow(){
  document.getElementById('iframe').src = 'html/name.html';
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#yes").addEventListener('click',nextWindow);
});

function closeWindow(){
  document.getElementById('iframe').src = '';
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#no").addEventListener('click',closeWindow);
});