document.getElementById("copyChapters").addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: yourContentScriptFunction
      });
    });
  });
  
  function yourContentScriptFunction() {
    // Your content script logic goes here
    chrome.runtime.sendMessage({ action: "copyChapters" });
    console.log('BBBBB');

  }