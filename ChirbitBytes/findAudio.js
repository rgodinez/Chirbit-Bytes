findAudio(tab.firstChild.childNodes[1].childNodes[1].firstChild.firstChild);

function findAudio(node)
{
  var test;
  
  while(true)
  {
    var line_content = node.childNodes[1];
    if(line_content.firstChild.nodeType == 3 && 
        line_content.firstChild.textContent.indexOf('this.element.jPlayer') > -1)
    {
      test = parseAudio(line_content.firstChild.textContent);
      break;
    }
    node = node.nextSibling;
  }
  
  return test;
}

function parseAudio(text)
{
  var string = text;
  
  var start = string.search('http');
  var end = string.search('.mp3') + 3;
  
  return string.slice(start, end);
}

function saveImageAs(imgURL)
{
  chrome.downloads.download(imgURL);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    sendResponse( {farewell: findAudio()} );
  });