// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     if (message.type === 's-to-p') {
//       console.log('s-to-p: Received message in Popup from Service Worker:', message.data);
//       alert('s-to-p: Received message in Popup from Service Worker')
//       // Handle the message received in the popup from the service worker
//     }
//     if (message.type === 'c-to-s') {
//         console.log('s-to-p: Received message in Popup from Service Worker:', message.data);
//         alert('s-to-p: Received message in Popup from Service Worker')
//         // Handle the message received in the popup from the service worker
//       }
// });


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type === 's-to-p') {
      console.log('s-to-p: Received message in Popup from Service Worker:', message.data);
      alert('s-to-p: Received message in Popup from Service Worker')
      // Handle the message received in the popup from the service worker
    }
    if (message.type === 'c-to-s') {
        console.log('c-to-s: Received message in Popup from Service Worker:', message.data);
        alert('c-to-s: Received message in Popup from Service Worker')
        // Handle the message received in the popup from the service worker
      }
      alert('wdwad')
  });
  


  
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sendMessage').addEventListener('click', function () {
      chrome.runtime.sendMessage({ type: 'p-to-s', data: 'Message from Popup to Service Worker' });
    });
  });
  