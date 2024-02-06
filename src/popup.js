
chrome.runtime.onMessage.addListener(
  function ( message, sender, sendResponse ) {
    if ( message.type === "content-to-popup" ) {

      alert( 'content-to-popup' )
      let el = document.getElementById('ym-md-output')
      el.textContent = message.data.content
    }
  }
);

// It will send a message to background.js when popup.js is loaded
document.addEventListener( 'DOMContentLoaded', function () {
  document.getElementById( 'sendMessage' ).addEventListener( 'click', function () {
    chrome.runtime.sendMessage( { type: 'popup-to-background' } );
  } );
} );
