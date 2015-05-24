chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    id: 'mainWindow',
    innerBounds: {
      width: 1200,
      height: 658,
      minWidth: 1200,
      minHeight: 658
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
		chrome.app.window.create('html/help.html', {
		  id: 'helpWindow',
		  innerBounds:{
		    width: 1000,
		    height: 550,
		    minWidth: 1000,
		    minHeight: 550
		  }
		});

	if (itemData.menuItemId == "about")
		chrome.app.window.create('html/about.html', {
		  id: 'aboutWindow',
		  innerBounds:{
		    width: 600,
		    height: 475,
		    minWidth: 600,
		    minHeight: 475
		  }
		});
});


chrome.runtime.onInstalled.addListener(function(details){
  if(details.reason == "update"){
    chrome.app.window.create('html/update.html', {
      focused: true,
      alwaysOnTop: true,
      innerBounds:{
        width: 600,
        height: 475,
        minWidth: 600,
        minHeight: 475
      }
    });
  }
});

