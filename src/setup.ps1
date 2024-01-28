# Create manifest.json file
@"
{
  "manifest_version": 2,
  "name": "YouTube Chapter Copy",
  "version": "1.0",
  "description": "Copy chapters from YouTube videos",
  "permissions": ["activeTab"],
  "browser_action": {
    "default_icon": {
      "16": "images/icon16.png",
      "48": "images/icon48.png",
      "128": "images/icon128.png"
    },
    "default_popup": "popup.html",
    "default_title": "Copy YouTube Chapters"
  },
  "icons": {
    "16": "images/icon16.png",
    "48": "images/icon48.png",
    "128": "images/icon128.png"
  },
  "content_scripts": [
    {
      "matches": ["*://www.youtube.com/*"],
      "js": ["content.js"]
    }
  ]
}
"@ | Out-File -FilePath "$extensionFolder\manifest.json" -Force

# Create popup.html file
@"
<!DOCTYPE html>
<html>
<head>
  <title>YouTube Chapter Copy</title>
  <script src="popup.js"></script>
</head>
<body>
  <button id="copyChapters">Copy Chapters</button>
</body>
</html>
"@ | Out-File -FilePath "$extensionFolder\popup.html" -Force

# Create popup.js file
@"
document.getElementById('copyChapters').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'copyChapters' });
  });
});
"@ | Out-File -FilePath "$extensionFolder\popup.js" -Force

# Create content.js file
@"
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'copyChapters') {
    // Implement logic to extract chapters from the YouTube video page
    // You may use DOM manipulation or other techniques here
    // Make sure it complies with YouTube's terms of service
    // For simplicity, let's just log a message for now
    console.log('Copying chapters...');
  }
});
"@ | Out-File -FilePath "$extensionFolder\content.js" -Force

Write-Host "Chrome extension structure has been set up successfully in '$extensionFolder'."
