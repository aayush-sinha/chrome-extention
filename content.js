console.log("hello");
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("---------->", message.txt);
});
const getLocal = async () => {
  try {
    var myStoredValue = localStorage["email"];
    console.log("--local reading-----", myStoredValue);
    localStorage["TheKeyToMyStoredValue"] = "testing to write on local";
    //   console.log("-------came");
    //   try {
    //     const key = "foobar";

    //     // Get the current tab
    //     // const tabs = await chrome.tabs.query({
    //     //   active: true,
    //     //   currentWindow: true,
    //     // });
    //     // const tab = tabs[0];

    //     // // Execute script in the current tab
    //     // const fromPageLocalStore = await chrome.tabs.executeScript(tab.id, {
    //     //   code: `localStorage['${key}']`,
    //     // });

    //     // Store the result
    //     chrome.storage.local.get(["name"], (res) => {
    //       console.log("----->", res);
    //     });
    // console.log("------after", result);
  } catch (err) {
    console.log("--------", err);
  }
};
getLocal();
$("body").append('<canvas id="canvas" ></canvas>');
$("p").css("background", "green");
