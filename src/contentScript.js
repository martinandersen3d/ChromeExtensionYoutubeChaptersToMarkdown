

console.log('CONTENT------------------------------')


//   chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     if (message.type === 's-to-c') {
//       console.log('Received message in Content Script:', message.data);
//       chrome.runtime.sendMessage({ type: 'c-to-s', data: 'Message from Content Script to Service Worker' });
//     }
//   });

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type === 's-to-c') {
      console.log('s-to-c: Received message in Content Script:', message.data);
      // Handle the message from Service Worker if needed
      // If a response is expected, you can send it asynchronously
      chrome.runtime.sendMessage({
        msg: "something_completed", 
        data: {
            subject: "Loading",
            content: "Just completed!"
        }
    });
      sendResponse({ type: 'c-to-s', data: 'Response from Content Script to Service Worker' });
      sendResponse({ type: 'c-to-s', data: 'Response from Content Script to Service Worker' });
    }
  });