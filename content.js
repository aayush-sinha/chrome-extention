console.log("hello");
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("---------->", message.txt);
});
$("body").append('<canvas id="canvas" ></canvas>');
$("p").css("background", "green");
