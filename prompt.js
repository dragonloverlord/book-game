function nextWindow(){
  chrome.app.window.create("name.html",{
    "id":"name-book"
  });
  chrome.app.window(close());
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#yes").addEventListener('click',nextWindow);
});

function closeWindow(){
  chrome.app.window(close());
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#no").addEventListener('click',closeWindow);
});