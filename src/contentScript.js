// console.log('YM: Hello from: contentScript')
// alert("Hello from: contentScript")
let elDescription = document.getElementById('description')
        elDescription.style.backgroundColor = "red"
        


if(typeof init === 'undefined'){
    const init = function(){
        let elDescription = document.getElementById('description')
        elDescription.style.backgroundColor = "red"
    }
    init();
  }



// Example: Content script injected into the page
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request.message);
  
    // Perform an action based on the received message
    if (request.message === "Hello from service worker!") {
      // Add your custom action here
      console.log("Received a greeting from the service worker!");
      alert("Hello! This is a message from the service worker.");
      
    }
  });


  chrome.runtime.sendMessage({ message: "Hello from content script!" });