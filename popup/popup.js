//HTML elements
const createMarkUp = document.querySelector('#createMarkUp')

let params = {
  active: true,
  currentWindow: true,
};

const defaultState = {
  showCanvas: false,
};

const toggle = (state) => {
  console.log(state)
  if (defaultState[state]) {
    defaultState[state] = false;
  } else {
    defaultState[state] = true;
  }
};

const toggleCreateMarkUp = () => {
  toggle("showCanvas");
  chrome.tabs.query(params, (tabs) =>
    chrome.tabs.sendMessage(tabs[0].id, {
      key: "showCanvas",
      value: defaultState.showCanvas,
    })
  );
};

createMarkUp.addEventListener('click', function(event) {
  event.preventDefault()
  toggleCreateMarkUp()
  console.log("clicked!!")
});

