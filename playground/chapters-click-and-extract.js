// CLICK THE DESCRIPTION ------------------------------------------------
// Select the element by ID
let element = document.getElementById('description-inline-expander');

// Check if the element is found
if (element) {
  // Trigger a click event
  element.click();
} else {
  console.log('Element not found.');
}

// CLICK THE SEE ALL BUTON  ------------------------------------------------

// Select the element by the given complex CSS selector
let element2 = document.querySelector('#navigation-button > ytd-button-renderer > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill');

// Check if the element is found
if (element2) {
  // Trigger a click event
  element2.click();
} else {
  console.log('Element not found.');
}




// EXTRACT TEXT FROM CHAPTERS --------------------------------------------

// Selecting elements by the given selector
let nodeList = document.querySelectorAll("#secondary ytd-macro-markers-list-renderer ytd-macro-markers-list-item-renderer #details");

// Convert NodeList to an array
let arrayFromNodeList = Array.from(nodeList);
console.log(arrayFromNodeList);

let output = []
for (let detailsElement of arrayFromNodeList) {
    // let detailsElement = document.getElementById('details');

    if (nodeList) {
        // Extract text content from the h4 element
        let title = detailsElement.firstElementChild.textContent.trim();
        
        // Extract text content from the div element
        let time = detailsElement.querySelector('div#time').textContent;
        
        console.log('Title:', title);
        console.log('Time:', time);
        output.push({text: title, time: time})    
    } 
    else {
      console.log('Details element not found.');
    }
}

console.log(output)