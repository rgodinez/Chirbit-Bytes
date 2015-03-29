findAudio(document.firstChild.childNodes[1].childNodes[1].firstChild.firstChild);

function findAudio(node)
{
  var found = false;
  
  while(!found)
  {
    var line_content = node.childNodes[1];
    if(line_content.firstChild.nodeType == 3)
      imgURL = parseAudio(line_content.firstChild);
    node = node.nextSibling;
  }
}

function parseAudio(textNode)
{
  var string;
  
  return string;
}

function saveImageAs(imgURL)
{
  if(typeof imgOrURL == 'object')
    imgOrURL = imgOrURL.src;
    
  window.win = open(imgOrURL);
  setTimeout(win.resizeTo(0, 0),100);
  setTimeout(win.moveTo(0, 0),200);
  setTimeout(win.document.execCommand("SaveAs"), 500);
  setTimeout(win.close(),1000);
}