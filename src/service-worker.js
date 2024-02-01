// This is the service worker script, which executes in its own context
// when the extension is installed or refreshed (or when you access its console).
// It would correspond to the background script in chrome extensions v2.


// try{

//     //ON page change
//     chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//       if(changeInfo.status == 'complete'){

//         console.log('Hit')
//         chrome.scripting.executeScript({
//             files: ['contentScript.js'],
//             target: {tabId: tab.id}
//           });


//     //   if (changeInfo.url) {
//     //     chrome.scripting.executeScript({
//     //       files: ['contentScript.js'],
//     //       target: {tabId: tab.id}
//     //     });
//     //   }
//       }
//     });
  
  
//   }catch(e){
//     console.log(e);
//   }

// console.log("This prints to the console of the service worker (background script)")

// Importing and using functionality from external files is also possible.
// importScripts('service-worker-utils.js')

// If you want to import a file that is deeper in the file hierarchy of your
// extension, simply do `importScripts('path/to/file.js')`.
// The path should be relative to the file `manifest.json`.

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "popup-window-opened") {
      console.log("YM: Button clicked message received in background script");

      // Get the active tab
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];

        // Add your logic here to respond to the button click event
        // For example, execute content script in the active tab
        chrome.scripting.executeScript({
            files: ['contentScript.js'], // Change to 'code' if you want to include inline code
            target: { tabId: activeTab.id }
        });
      });
    }
});


  // Sender Dom'en over--------------------------------------
//   function extractDOM() {
//     console.log("DOM:")
//     const allElements = document.querySelectorAll('*');
//     const elementsArray = Array.from(allElements).map(element => element.outerHTML);
  
//     console.log(elementsArray);
//     // You can do whatever you want with elementsArray, for example, send it to popup.js
//   }

//   chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.action === 'extractDOM') {
//       chrome.scripting.executeScript({
//         target: { tabId: sender.tab.id },
//         function: extractDOM,
//       });
//     }
//   });
  

// console.log('sada------------------------------------------------')
//   const allElements = document.querySelectorAll('*');
//   const elementsArray = Array.from(allElements).map(element => element.outerHTML);

//   console.log(elementsArray);

// const myMethod = () => {
//     console.log("My method is called!");
//     chrome.runtime.sendMessage({ message: "Hello from service worker!" })
//   };
  

// chrome.runtime.onInstalled.addListener(() => {
//     console.log("Extension Installed");
  
//     // Example: Sending a message from the background (service worker)
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//       const activeTab = tabs[0];
  
//       // Execute content script in the active tab
//       chrome.scripting.executeScript({
//         target: { tabId: activeTab.id },
//         function: myMethod(),
//       });
//     });
//   });
  
  
//   // Function to send a message to the content script injected into the page
//   function sendScriptToPage() {
//     chrome.runtime.sendMessage({ message: "Hello from service worker!" });
//   }