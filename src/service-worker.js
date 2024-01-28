// This is the service worker script, which executes in its own context
// when the extension is installed or refreshed (or when you access its console).
// It would correspond to the background script in chrome extensions v2.

console.log("This prints to the console of the service worker (background script)")

// Importing and using functionality from external files is also possible.
importScripts('service-worker-utils.js')

// If you want to import a file that is deeper in the file hierarchy of your
// extension, simply do `importScripts('path/to/file.js')`.
// The path should be relative to the file `manifest.json`.

chrome.runtime.onInstalled.addListener(function () {
    console.log("YM: Extension Installed");
  });
  
  chrome.action.onClicked.addListener(function (tab) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: initContentScript,
    });
  });
  
  function initContentScript() {
    console.log("YM: Content Script Loaded");
  
    // Add your logic here for injecting scripts or interacting with the page
    chrome.scripting.executeScript({
      function: () => {
        // This is a simple example, you can customize it as needed
        const button = document.createElement("button");
        button.textContent = "Click me!";
        document.body.appendChild(button);
  
        button.addEventListener("click", function () {
          alert("Button Clicked!");
        });
      },
    });
  }