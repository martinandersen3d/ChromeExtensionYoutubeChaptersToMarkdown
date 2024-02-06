chrome.runtime.onInstalled.addListener( function () {
  // console.log( 'Service Worker Installed' );
} );

chrome.runtime.onMessage.addListener( function ( message, sender, sendResponse ) {
  if ( message.type === 'popup-to-background' ) {

    // Wait for the tab to be fully loaded before sending a message
    chrome.tabs.query( { active: true, currentWindow: true }, function ( tabs ) {
      if ( tabs[0] && tabs[0].id ) {
        chrome.tabs.sendMessage( tabs[0].id, { type: 'background-to-content' }, function ( response ) {
          // this line needs to be here i guess. I dont know why..
          if ( chrome.runtime.lastError ) {
            // console.error(chrome.runtime.lastError.message);
          }
        } );
      }
    } );
  }

});

