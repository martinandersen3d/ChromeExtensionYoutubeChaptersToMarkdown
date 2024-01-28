// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.

console.log("YM: This prints to the console of the page (injected only if the page url matched)")



document.addEventListener('DOMContentLoaded', function () {

    // function hello (){
    //     alert('Hi')
    // }
    // Add your popup logic here
    console.log('YM: Popup loaded successfully!');
    // document.append('<a link="#">MY LING</a>')
    // hello()

    chrome.runtime.sendMessage({ action: "popup-window-opened" });



  });