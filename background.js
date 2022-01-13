console.log("Hello hello");

chrome.browserAction.onClicked.addListener((tab) => {
  let msg = {
    txt: "button clicked!!!!!",
  };

  chrome.tabs.sendMessage(tab.id, msg);
  console.log("--------->", tab);
});
