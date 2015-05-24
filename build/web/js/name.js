function closeWindow(){
  window.location = 'about:blank';
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#enter").addEventListener('click',closeWindow);
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#input").addEventListener('keypress',function (e) {
    var key = e.which || e.keyCode;
    if (key == 13) {
      closeWindow();
    }
  });
});