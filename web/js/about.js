document.addEventListener('DOMContentLoaded', function () {
  manifest = chrome.runtime.getManifest();
  document.getElementById('version').innerHTML = "book writer v " + manifest.version;
});