(function(){
	
	chrome.browserAction.onClicked.addListener(function(tab) {
		
		chrome.tabs.executeScript(null, {file:"jsonview.js"});
		
	});
	
})();