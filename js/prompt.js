function nextWindow(){
  window.location = 'name.html';
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#yes").addEventListener('click',nextWindow);
});

function closeWindow(){
  window.location = 'about:blank';
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#no").addEventListener('click',closeWindow);
});