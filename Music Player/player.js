document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio");
    const playlist = document.getElementById("playlist");
    const shuffleButton = document.getElementById("shuffle");

    // Define your audio files
    const audioFiles = [
"/home/lancelot/Projects/Music Player/Music/Sunflower .mp3",
"/home/lancelot/Projects/Music Player/Music/Asha\ Pasham.mp3",
//"./Music/Lover\ Also\ Fighter\ Also\ -\ SenSongsMp3.Co.mp3",
"/home/lancelot/Projects/Music Player/Music/INDUSTRY\ BABY.mp3",
"/home/lancelot/Projects/Music Player/Music/Sam\ Tinnesz\ -\ Play\ With\ Fire\ feat.\ Yacht\ Money\ \[Official\ Audio\].mp3",
"/home/lancelot/Projects/Music Player/Music/Ed\ Sheeran\ -\ Shape\ Of\ You\ \[Official\].mp3 ",               
"/home/lancelot/Projects/Music Player/Music/Ed\ Sheeran\ -\ South\ of\ the\ Border\ \(feat.\ Camila\ Cabello\ \&\ Cardi\ B\)\ \[Official\].mp3",
"/home/lancelot/Projects/Music Player/Music/Ed\ Sheeran\ -\ Beautiful\ People\ \(feat.\ Khalid\)\ \[Official\].mp3",
"/home/lancelot/Projects/Music Player/Music/Ed\ Sheeran\ -\ Galway\ Girl\ \[Official\].mp3 ",
"/home/lancelot/Projects/Music Player/Music/ZAYN\,\ Taylor\ Swift\ -\ I\ Don’t\ Wanna\ Live\ Forever\ \(Fifty\ Shades\ Darker\).mp3 ",
"/home/lancelot/Projects/Music Player/Music/Enemy -Imagine Dragons x JID.mp3",
"/home/lancelot/Projects/Music Player/Music/Ed Sheeran & Justin Bieber - I Don t Care [Official].mp3",
        // Add more audio files here
    ];

    // Initialize the current audio index
    let currentAudioIndex = 0;

    // Function to load and play audio
    function playAudio(index) {
	audio.src =  audioFiles[index];
        audio.load();
        audio.play();
    }
// const fs = require('fs');
    // Create playlist items and set up click handlers
    audioFiles.forEach((files, index) => {
        const listItem = document.createElement("li");
//        const lastNode = files[files.length - 1];
        listItem.textContent = files.substring(9,files.length-4 );
        listItem.addEventListener("click", () => {
            currentAudioIndex = index;
            playAudio(currentAudioIndex);
        });
        playlist.appendChild(listItem);
    });

    // Play the first song on page load
    playAudio(currentAudioIndex);

    // Shuffle button click handler
    shuffleButton.addEventListener("click", () => {
        const shuffledIndex = Math.floor(Math.random() * audioFiles.length);
        currentAudioIndex = shuffledIndex;
        playAudio(currentAudioIndex);
    });

    // Update the playlist with the currently playing song
    audio.addEventListener("play", () => {
        const playlistItems = playlist.querySelectorAll("li");
        playlistItems.forEach((item, index) => {
            item.classList.remove("active");
            if (index === currentAudioIndex) {
                item.classList.add("active");
            }
        });
    });
});

