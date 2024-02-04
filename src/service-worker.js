chrome.runtime.onInstalled.addListener(function () {
  console.log('Service Worker Installed');
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === 'p-to-s') {
    console.log('p-to-s: Received message in Service Worker:', message.data);

    // Wait for the tab to be fully loaded before sending a message
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs[0] && tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, { type: 's-to-c', data: 'Message from Service Worker to Content Script' }, function (response) {
          if (chrome.runtime.lastError) {
            // console.error(chrome.runtime.lastError.message);
          }
        });
      } else {
        console.error('No active tab found.');
      }
    });
  }
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === 'c-to-s') {
    console.log('c-to-s: Received message in Service Worker:', message.data);

    // Ensure that the tab is fully loaded before sending a message to the popup
    chrome.runtime.sendMessage({ type: 's-to-p', data: 'Message from Service Worker to Popup' }, function (response) {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
      }
    });
  }
});
