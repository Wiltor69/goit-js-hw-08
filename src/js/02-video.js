import Player  from "@vimeo/player"
import throttle from "lodash.throttle"


const videoEl = document.getElementById("vimeo-player");
const player = new Player(videoEl);

const timeUpdate = throttle(seconds => {
    
    localStorage.setItem('videoplayer-current-time', seconds);
}, 1000);  

player.on('timeupdate', function (data) {
    timeUpdate(data.seconds);
});

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
    player.setCurrentTime(savedTime);
}