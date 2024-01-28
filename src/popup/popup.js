console.log("YM: Popup script loaded");

document.getElementById("ym-copy").addEventListener("click", function() {

    console.log('YM: AA');

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: yourContentScriptFunction
    });
  });
});

function yourContentScriptFunction() {
    // Your content script logic goes here
    chrome.runtime.sendMessage({ action: "ym-copy" });
  }