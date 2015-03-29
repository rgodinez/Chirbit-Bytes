function checkForValidUrl(tabId, changeInfo, tab) {

   // If  'example.com' is the hostname for the tabs url.
   var a = document.createElement ('a');
   a.href = tab.url;
   
   if (a.hostname == 'chirb.it') {
       // ... show the page action.
       chrome.pageAction.show(tabId);
   }
}

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.pageAction.onClicked.addListener(
  function()
  {
    chrome.runtime.sendMessage({greeting: 'find'});
  }
);