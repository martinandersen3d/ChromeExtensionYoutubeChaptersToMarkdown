// EMPTY TEMPLATE (when no chapters)--------------------------------------

const removeQuestionMarkAndAfter = (str) => {
  const questionMarkIndex = str.indexOf('?t');
  if (questionMarkIndex !== -1) {
      return str.substring(0, questionMarkIndex);
  }
  return str;
}

const getEmptyTemplate = () => {
  let url = window.location.toString()
  let urlNoTimecode = removeQuestionMarkAndAfter(url)
  let urlTimecode = `${urlNoTimecode}?t=0`
  let title = document.title.replace(' - YouTube', '') 
  
  let template = `# ${title}

![](${urlNoTimecode})

Chapters:

- [00:00](${urlTimecode}) Note
- [00:00](${urlTimecode}) Note
- [00:00](${urlTimecode}) Note
- [00:00](${urlTimecode}) Note
- [00:00](${urlTimecode}) Note
`
  return template
}



// EXTRACT TEXT FROM CHAPTERS --------------------------------------------

const chaptersArray = () => {

  // Selecting elements by the given selector
  let nodeList = document.querySelectorAll("ytd-macro-markers-list-renderer ytd-macro-markers-list-item-renderer");

  let output = []
  for ( let detailsElement of nodeList ) {
    // let detailsElement = document.getElementById('details');

    if ( nodeList ) {
      // Extract text content from the h4 element
      let title = detailsElement.firstElementChild.textContent.trim().split('\n')[0];

      // Extract text content from the div element
      let time = detailsElement.querySelector( 'div#time' ).textContent;

      // Extract text content from the div element
      let url = detailsElement.querySelector( 'a' ).href;

      output.push( { text: title, time: time, url: url } )
    }
    else {
      // console.log( 'Details element not found.' );
    }
  }
  // console.log(output)
  return output
}

const buildMarkdownChapters = () => {
  try {
    
    let title = document.title.replace(' - YouTube', '') 
    let url = window.location.toString()
    let urlNoTimecode = removeQuestionMarkAndAfter(url)
    let output = `# ${title}
    
![](${urlNoTimecode})

Chapters:
`
    let arr = chaptersArray()
    let count = arr.length


    if (count > 0) {
      for( let chapter of arr){
        let template = `- [${chapter['time']}](${chapter['url']}) ${chapter['text']}\n`
        output = output + template
      }
    }
    else{
      return getEmptyTemplate()
    }

    return output

    
} catch (error) {
  return getEmptyTemplate()
}
}


// CHECK DOMAIN--------------------------------------
const currentDomain = window.location.hostname;
let isYoutube = false
if (currentDomain.includes("youtu")) {
  isYoutube = true
    console.log("The current domain contains 'youtu'.");
}

// It will recieve a message from background.js
chrome.runtime.onMessage.addListener( function ( message, sender, sendResponse ) {
  if ( message.type === 'background-to-content' && isYoutube ) {
    // console.log('s-to-c: Received message in Content Script:', message.data);
    // Handle the message from Service Worker if needed
    // If a response is expected, you can send it asynchronously
    chrome.runtime.sendMessage( {
      type: "content-to-popup",
      data: {
        subject: "Loading",
        content: buildMarkdownChapters()
      }
    } );
  }
} );

