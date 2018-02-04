var video = document.getElementsByTagName("video")[0];

if(video) {
  video.addEventListener("ended", function() {
    setTimeout(msg, 60000);
  });
} 
else {
  console.error("Video element not found");
}

function msg(){
  chrome.runtime.sendMessage({closeThis: true});
}