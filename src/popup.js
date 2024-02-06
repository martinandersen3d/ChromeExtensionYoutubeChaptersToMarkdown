
let isYoutube = true

const getDomain = () => {
  // Query the active tab
  chrome.tabs.query( { active: true, currentWindow: true }, function ( tabs ) {
    // Get the URL of the active tab
    const url = tabs[0].url;
    // Create an anchor element to extract the domain name
    const parser = document.createElement( 'a' );
    parser.href = url;
    // Extract and return the domain name
    try {

      const currentDomain = parser.hostname;
      if ( !currentDomain.includes( "youtu" ) ) {
        isYoutube = false
        let gotoYouyube = "You are not on Youtube.com\nThis extension only works on Youtube.com.\nGo to Youtube.com and try again."
        alert( gotoYouyube );
        let el = document.getElementById( 'ym-md-output' )
        el.textContent = gotoYouyube
      }

    } catch ( error ) { }


  } );
}

getDomain()

function showSucces() {
  var successMessage = document.getElementById( "successMessage" );
  successMessage.classList.remove( "hidden" );
}

function copyText() {
  // Get the textarea element
  var textarea = document.getElementById( "ym-md-output" );

  // Read the text from the textarea into a variable
  var textToCopy = textarea.value;

  // Copy the text to the clipboard
  try {
    navigator.clipboard.writeText( '' )
    navigator.clipboard.writeText( textToCopy )
      .then( () => {
        // alert( 'Text copied to clipboard' );
        showSucces()
      } )
      .catch( err => {
        // console.error('Unable to copy text: ', err);
        alert( 'Unable to copy text. Check your settings, under Site Clipboard.' );
      } );
  } catch ( err ) {
    // console.error('Unable to copy text: ', err);
    alert( 'Unable to copy text. Check your settings, under Site Clipboard.' );
  }
}

if ( isYoutube === true ) {

  chrome.runtime.onMessage.addListener(
    function ( message, sender, sendResponse ) {
      if ( message.type === "content-to-popup" ) {

        // alert( 'content-to-popup' )
        let el = document.getElementById( 'ym-md-output' )
        el.textContent = message.data.content
      }
    }
  );

  // It will send a message to background.js when popup.js is loaded
  document.addEventListener( 'DOMContentLoaded', function () {

    var copyBtn = document.getElementById( 'ym-btn-copy-markdown' );
    copyBtn.addEventListener( 'click', copyText );


    chrome.runtime.sendMessage( { type: 'popup-to-background' } );

    // document.getElementById( 'sendMessage' ).addEventListener( 'click', function () {
    // } );
  } );
}
