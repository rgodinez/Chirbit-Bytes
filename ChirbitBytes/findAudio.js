
function findAudio(node)
{
  var line = node.firstChild.childNodes[1].childNodes[1].firstChild.firstChild;
  var test;
  
  while(true)
  {
    var line_content = line.childNodes[1];
    if(line_content.firstChild.nodeType == 3 && 
        line_content.firstChild.textContent.indexOf('this.element.jPlayer') > -1)
    {
      test = parseAudio(line_content.firstChild.textContent);
      break;
    }
    line = line.nextSibling;
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