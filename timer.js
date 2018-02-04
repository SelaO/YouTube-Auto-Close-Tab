var timeoutvar;
var video = document.getElementsByTagName("video")[0];

if(video) {
  video.addEventListener("ended", function() {
    console.log("Video ended");
    
    timeoutvar = setTimeout(msg, 90000);
    
    video.onmouseover = function() {mouseOver();};
    
  });
} 
else {
  console.error("Video element not found");
}

//reset timeout if detected movement on the video
function mouseOver() {
     console.log("mouse over");
     clearTimeout(timeoutvar);
}

function msg(){
  chrome.runtime.sendMessage({closeThis: true});
}
