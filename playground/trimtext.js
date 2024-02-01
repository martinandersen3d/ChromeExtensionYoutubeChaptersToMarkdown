
function ExtractJsonText (txt) {
    try {
        if (typeof txt === 'string') {
            let startIndex = txt.indexOf("var ytInitialPlayerResponse = ");
            let endIndex = txt.lastIndexOf(";var meta = ");
        
            if (startIndex !== -1 && endIndex !== -1 ) {
                let result = txt.substring(startIndex + 30, endIndex);
                return result
            }
        }
        return null
            
    } catch (error) {
        return null
    }
    
    return null
}

let txt = 'var ytInitialPlayerResponse = { "responseContext": keepme};var meta = '
let output = ExtractJsonText(txt)
console.log(output);