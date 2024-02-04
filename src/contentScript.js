
 
    console.log('> C 0');


// if(typeof init === 'undefined'){
//     const init = function(){
//         let elDescription = document.getElementById('description')
//         elDescription.style.backgroundColor = "red"
//         console.log('> C 0');

//     }
//     init();
//   }



// Example: Content script injected into the page
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('> 1');
  
    // Perform an action based on the received message
    if (request.message === "service-worker-action") {
        console.log('> 2');

            const extractChapters = function() {

                // Selecting elements by the given selector
                let nodeList = document.querySelectorAll("ytd-macro-markers-list-renderer ytd-macro-markers-list-item-renderer");
            
                let result = []
                for (let detailsElement of nodeList) {
                    if (nodeList) {
                        // Extract text content from the h4 element
                        let title = detailsElement.firstElementChild.textContent.trim() || '';
                        
                        // Extract text content from the div element
                        let time = detailsElement.querySelector('div#time').textContent || '';
                        
                        // Extract text content from the div element
                        let url = detailsElement.querySelector('a').href || '';
                        
                        result.push({text: title, time: time, url: url})    
                    } 
                    else {
                    console.log('YouTubeToMarkdown: Details element not found.');
                    }
                }
            
                return result
            };
            
            
            const renderMarkdownText = function(list = []) {
            
                let title = document.title.replace(' - YouTube', '')
                let currentUrl = window.location.href || '';
            
                let body = []
                for( let item of list){
                    body.push(`- [${item['time']}](${item['url']}) ${item['text']}`)
                }
                body = body.join('\n')
            
                let template = `# ${title}
                
                !()[${currentUrl}]
            
                ## Timestamps:
                ${body}
                `
                console.log(template)
                return template
            };
            
            
            const returnMarkdownToPopup = function() {
                result = ''
                try {
                    let ChaptersObjectList = extractChapters()
                    if (ChaptersObjectList.length > 0) {
                        result = renderMarkdownText(ChaptersObjectList)
                    }
            
                } 
                catch (error) {
                    return ''
                }
                return result
            };
                

        let markdownText = returnMarkdownToPopup()
        chrome.runtime.sendMessage({ message: "markdown-action", payload: markdownText });
      
    }
  });

//   chrome.runtime.sendMessage({ message: "markdownText" });
chrome.runtime.sendMessage({ message: "markdown-action", payload: "LORT" });

const hi = function(){
    chrome.runtime.sendMessage({ message: "Hello from content script!" });
}
hi()