var activate = false;

//Listen for any clicks on button, to call find and download
chrome.pageAction.onClicked.addListener(actionClicked);
// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
chrome.extension.onMessage.addListener(onMessage);

function checkForValidUrl(tabId, changeInfo, tab) {

   // If  'example.com' is the hostname for the tabs url.
   var a = document.createElement ('a');
   a.href = tab.url;
   
   if (a.hostname == 'chirb.it') {
       // ... show the page action.
       chrome.pageAction.show(tabId);
   }
}

function actionClicked()
{
  //var Url = chrome.tabs.executeScript(null, {file: 'findAudio.js'});
  var url = chrome.tabs.executeScript(null, {code: 'findAudio(this);'});
  
  alert(url);
  //chrome.tabs.executeScript(null, {file: 'findAudio.js'});
  //chrome.tabs.executeScript(null, {code: 'findAudio();'});
  activate = false;
}

function onMessage(request, sender, sendMessage)
{
  activate = true;
  chrome.pageAction.show(sender.tab.id);
  sendMessage({});
}