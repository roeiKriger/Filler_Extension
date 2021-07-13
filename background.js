
/* Here I add the extension to my options in the menu when right clicking the mouse, only if I click on an editable object */
var contextMenus = {};
contextMenus.createCounterString = 
    chrome.contextMenus.create(
        {"title":"Details",
        "contexts" : ["editable"]
        },
        function (){
            if(chrome.runtime.lastError){
                console.error(chrome.runtime.lastError.message);
            }
        }
    );

/* Adding a listener, on click sending to 'fill.js' */
chrome.contextMenus.onClicked.addListener(contextMenuHandler);
function contextMenuHandler(info, tab){
    if(info.menuItemId===contextMenus.createCounterString){
        chrome.tabs.executeScript({
            file: 'fill.js'
          });
    }
}
