var mysong = document.getElementById('mysong');
var icon = document.getElementById('icon');

icon.onclick = function(){
    if (mysong.paused){
        mysong.play();
        icon.src = "assets/media/pause.png";
    } else {
        mysong.pause();
        icon.src = "assets/media/play-buttton.png";
    }
}