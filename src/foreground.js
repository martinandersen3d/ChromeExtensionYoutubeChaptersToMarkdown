// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.


document.addEventListener('DOMContentLoaded', function () {

    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        if (message.type === 's-to-p') {
          console.log('s-to-p: Received message in Popup from Service Worker:', message.data);
          // Handle the message received in the popup from the service worker
        }
      });

      document.getElementById('sendMessage').addEventListener('click', function () {
        chrome.runtime.sendMessage({ type: 'p-to-s', data: 'Message from Popup to Service Worker' });
      });


 

  });

  

  // --------------------------------------


  