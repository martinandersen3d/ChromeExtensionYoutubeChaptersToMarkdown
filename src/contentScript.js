

console.log('CONTENT------------------------------')
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM content loaded.');
    // rest of your content script code



  });

  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type === 's-to-c') {
      console.log('Received message in Content Script:', message.data);
      chrome.runtime.sendMessage({ type: 'c-to-s', data: 'Message from Content Script to Service Worker' });
    }
  });