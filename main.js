chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    bounds: {
      width: 1200,
      height: 658
    }
  });
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    title: 'Help',
    id: 'help',
    contexts: [ 'all' ]
  });
  chrome.contextMenus.create({
    title: 'About This Game',
    id: 'about',
    contexts: [ 'all' ]
  });
});

chrome.contextMenus.onClicked.addListener(function(itemData) {
	if (itemData.menuItemId == "help")
		chrome.app.window.create('html/help.html', {bounds:{width: 600, height: 300}});
	if (itemData.menuItemId == "about")
		chrome.app.window.create('html/about.html', {bounds:{width: 600, height: 475}});
});
