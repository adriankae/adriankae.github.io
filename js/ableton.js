document.getElementById('playButton').addEventListener('click', function() {
    var video = document.getElementById('videoElement');
    var container = this.parentElement;

    if (video.paused) {
        video.play();
        container.classList.add('video-is-playing');
    } else {
        video.pause();
        container.classList.remove('video-is-playing');
    }
});

document.getElementById('videoElement').addEventListener('click', function() {
    this.pause();
    this.parentElement.classList.remove('video-is-playing');
});
