// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.

console.log(this)

console.log("YM: This prints to the console of the page (injected only if the page url matched)")

let shared = "sdfdsf"
// alert(window.document.title)
// alert(document.title)
let pageTitle = document.title


document.addEventListener('DOMContentLoaded', function () {

    // chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    //     chrome.tabs.sendMessage(tabs[0].id, { action: 'extractDOM' });
    //   });

//     alert(pageTitle)
//   console.log('YM: CONTENT LOADED');

//     console.log(this.getElementById("description"))

    function copyToClipboard(textToCopy) {
        // Check if the Clipboard API is supported
        if (navigator.clipboard) {
            // Check if textToCopy is a string
            if (typeof textToCopy === 'string') {

                // Check if the user have grandted acces to the clipboard
                navigator.clipboard.writeText('')
                .then(() => {
                    // Permission granted, now proceed to copy text
                })
                .catch(() => {
                    // Permission denied or unable to get permission
                });

                // Use the Clipboard API to copy text
                navigator.clipboard.writeText(textToCopy)
                    .then(() => {
                        console.log('Text successfully copied to clipboard');
                    })
                    .catch((err) => {
                        console.error('Unable to copy text to clipboard', err);
                    });
            } else {
                console.error('Invalid data type. textToCopy must be a string.');
            }
        } else {
            // If Clipboard API is not supported, show an alert
            alert("No clipboard supportet");
        }
    }



    let elMdTextarea = this.getElementById('ym-md-output')
    elMdTextarea.innerText = "Text from textarea"

    let elBtnCopyMarkdown = this.getElementById('ym-btn-copy-markdown')
    

    elBtnCopyMarkdown.addEventListener('click', function() {

        copyToClipboard(elMdTextarea.value)
    });

    
    // function hello (){
    //     alert('Hi')
    // }
    // Add your popup logic here
    console.log('YM: Popup loaded successfully!');
    // document.append('<a link="#">MY LING</a>')
    // hello()

    // Send message to service-worker.js
    chrome.runtime.sendMessage({ action: "popup-window-opened" });

    // const getTitle = () => {
    //     console.log("getTitle() = " + document.title);
    //     return document.title;
    //   }
      
    //   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    //     console.log("Execute Script");
    //     chrome.scripting.executeScript({
    //       target: { tabId: tabs[0].id },
    //       func: getTitle
    //     }, (result) => {
    //       console.log("Recv result = " + result[0].result);
    //       document.getElementById("title").innerText = result[0].result;
    //     });
    //   });


 

  });

  

  // --------------------------------------


  