chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "copyChapters") {
      // Implement any background logic here
      console.log('Hello');
      alert('fuck')
    }
  });