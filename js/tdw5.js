var stream = new Howl({
    src: ['https://archive.org/download/undertaleost_202004/Undertale%20-%20Lossless%20Soundtrack%20%28toby%20fox%29/toby%20fox%20-%20UNDERTALE%20Soundtrack%20-%2021%20Dogsong.mp3'],
    ext: ['mp3'],
    autoplay: false,
    html5: true
});

document.getElementById("button1").addEventListener("click", playSound);

//restart the song every time when hitting the "play song" button
function playSound()
{
    if (stream != null)
    {
        stream.stop();
    }   
    stream.play();
}

// play or pause the song when hitting the "Play/Pause" button
document.getElementById("button2").addEventListener("click", togglePlay);

function togglePlay()
{
    if (stream.playing()) {
        stream.pause();
    } else {
        stream.play();
    }
}

function changeVolume() {
    var volume = document.getElementById("volumeSlider").value;
    stream.volume(volume); }