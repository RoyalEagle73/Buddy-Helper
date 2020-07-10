var menuItem = {
    "id": "Buddyhelper",
    "title": "Buddyhelper",
    "contexts": ["selection"]
}

// chrome.contextMenus.create(menuItem);
window.onload = () => {
    chrome.contextMenus.create(menuItem);
};

function fixedEncodeURI(str) {
    return encodeURI(str);
}

chrome.contextMenus.onClicked.addListner(function(clickData) {
    if (clickData.menuItemId == "Buddyhelper" && clickData.selectionText) {
        // var url = getURL(fixedEncodeURI(clickData.selectionText));
        alert(clickData.selectionText);
    }
})