chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.key) {
    case 'showCanvas':
        if(message.value === true) {
          showCanvas()
        } else {
          deleteCanvas()
        }
      break;
  
    default:
      break;
  }
});

const showCanvas = () => {
  $("body").append('<canvas id="canvas" ></canvas>');
  $("body").append('<div class="setting-bar"></div>');
  $(".setting-bar").append('<button id="toggleMode">Toggle Drawing</button>');
  
  

  function getViewport() {
    var body = document.body,
        html = document.documentElement;
    var viewPortWidth;
    var viewPortHeight;
   
    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined') {
      viewPortWidth = window.innerWidth,
      viewPortHeight = window.innerHeight
    }
   
   // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined'
    && typeof document.documentElement.clientWidth !=
    'undefined' && document.documentElement.clientWidth != 0) {
       viewPortWidth = document.documentElement.clientWidth,
       viewPortHeight = document.documentElement.clientHeight
    }
   
    // older versions of IE
    else {
      viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
      viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
    }
    var height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
     
    return [viewPortWidth, height];
   }


   const initCanvas = (id) => {
    return new fabric.Canvas(id, {
        width: getViewport()[0],
        height: getViewport()[1],
        selection: false
    });
}
const canvas = initCanvas('canvas')
let mousePressed = false
let color = '#000000'

let currentMode;

const modes = {
    drawing: 'drawing'
}

const toggleMode = (mode) => {
  console.log("currnt_mode",currentMode,mode)
  
        if (currentMode === modes.drawing) {
            currentMode = ''
            canvas.isDrawingMode = false
            canvas.renderAll()
        } else {
            currentMode = modes.drawing
            canvas.freeDrawingBrush.color = color
            canvas.isDrawingMode = true
            canvas.renderAll()
        }      
}

document.querySelector('#toggleMode').addEventListener('click', (mode) => {
  console.log("currnt_mode",currentMode,mode)
  
        if (currentMode === modes.drawing) {
            currentMode = ''
            canvas.isDrawingMode = false
            canvas.renderAll()
        } else {
            currentMode = modes.drawing
            canvas.freeDrawingBrush.color = color
            canvas.isDrawingMode = true
            canvas.renderAll()
        }      
})


$("#canvas").css({
  "width": "100% !important",
  "position": "absolute",
  "top": "0",
  "float": "left"
});
$(".canvas-container").css({
  "position": "absolute",
  "top": "0",
});
$(".setting-bar").css({
  "position": "absolute",
  "top": "0",
  "z-index":"10"
});
}

