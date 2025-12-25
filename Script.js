let songs = [
    { title:"Song One", src:"song1.mp3", img:"song1.jpg" },
    { title:"Song Two", src:"song2.mp3", img:"song2.jpg" },
    { title:"Song Three", src:"song3.mp3", img:"song3.jpg" }
];

let currentSong = 0;
let audio = document.getElementById("audio");
let title = document.getElementById("songTitle");
let img = document.getElementById("songImg");

function loadSong(index){
    audio.src = songs[index].src;
    title.innerText = songs[index].title;
    img.src = songs[index].img;
}

function playSong(){
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }
}

function nextSong(){
    currentSong = (currentSong + 1) % songs.length;
    loadSong(currentSong);
    audio.play();
}

function prevSong(){
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadSong(currentSong);
    audio.play();
}

function selectSong(index){
    currentSong = index;
    loadSong(currentSong);
    audio.play();
}

loadSong(currentSong);