window.onload = function () {
  document.getElementById("save").onclick = function () {
    let data = document.getElementById("savedata").value;
    chrome.storage.sync.set({ value: data }, function () {});
    chrome.storage.sync.get("value", function (data) {
      console.log("----------->", data.value);
    });
  };
};
