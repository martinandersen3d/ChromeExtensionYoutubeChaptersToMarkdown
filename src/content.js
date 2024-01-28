chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "copyChapters") {
      // Your background script logic goes here
      console.log('AAAAA');
    }
  });