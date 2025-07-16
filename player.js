// displaySongs(songs);

const songs = [
  {
    title: "Rise Of Dragon",
    artist: "Arjun Ravichandran",
    src: "Rise Of Dragon.mp3",
    cover: "https://i.pinimg.com/1200x/fb/97/84/fb9784ae25cc08c7140eed2082ef641c.jpg",
    lyrics: "Rise high, conquer fear"
  },
  {
    title: "Minnalvala",
    artist: "Shreya Ghoshal",
    src: "Minnalvala.mp3",
    cover: "https://i.pinimg.com/736x/7d/bb/08/7dbb08aef182b080da0e5734ea17726d.jpg",
    lyrics: "Lightning strikes, hearts race"
  },
  {
    title: "O Maara",
    artist: "Anirudh Ravichander",
    src: "O Maara.mp3",
    cover: "https://i.pinimg.com/736x/16/69/6d/16696daeda0fedfbb00bc11015e7a320.jpg",
    lyrics: "You shine, I fall"
  },
  {
    title: "Aathi",
    artist: "Sid Sriram",
    src: "Aathi.mp3",
    cover: "https://i.pinimg.com/736x/68/49/88/6849884f3d8b1577797023ccc4cc4afb.jpg",
    lyrics: "Moonlight dances on waves"
  },
  {
    title: "Badass",
    artist: "Harris Jayaraj",
    src: "Badass.mp3",
    cover: "https://i.pinimg.com/736x/1a/85/fc/1a85fc08c07154c0e942e771a1d758c6.jpg",
    lyrics: "Never stop, keep going"
  },
  {
    title: "En Rojaa Neeye",
    artist: "Armaan Malik",
    src: "En-Rojaa-Neeye.mp3",
    cover: "https://i.pinimg.com/1200x/23/38/22/23382282c35e5409349c1fa1e93c144b.jpg",
    lyrics: "Love comforts, heart heals"
  },
  {
    title: "Fear Song",
    artist: "Pradeep Kumar",
    src: "Fear song.mp3",
    cover: "https://i.pinimg.com/236x/e1/2f/9a/e12f9a7eef491f92f4b3e6982f569c88.jpg",
    lyrics: "Fear fades when brave"
  },
  {
    title: "Ilamai Thirumbudhe",
    artist: "Karthik",
    src: "ilamai-Thirumbudhe.mp3",
    cover: "https://i.pinimg.com/736x/b7/d0/13/b7d01359a73c5e138d935d9cf514d2ca.jpg",
    lyrics: "Youth returns with hope"
  },
  {
    title: "Iraivaa",
    artist: "Yuvan Shankar Raja",
    src: "iraivaa.mp3",
    cover: "https://i.pinimg.com/1200x/fb/97/84/fb9784ae25cc08c7140eed2082ef641c.jpg",
    lyrics: "Dance tonight, ignite soul"
  },
  {
    title: "Master the Blaster Mass",
    artist: "Anirudh Ravichander",
    src: "Master-the-Blaster-Mass.mp3",
    cover: "https://i.pinimg.com/1200x/f6/84/d5/f684d5de98d8237d08d1cedcf0c4e1f5.jpg",
    lyrics: "Beat drops, crowd roars"
  },
  {
    title: "Monica",
    artist: "Vijay Yesudas",
    src: "Monica.mp3",
    cover: "https://i.pinimg.com/736x/4f/70/66/4f7066f6660752ba637696cd716964b8.jpg",
    lyrics: "Eyes meet, hearts flutter"
  },
  {
    title: "Nee Varumbodhu",
    artist: "S. Janaki",
    src: "Nee-Varumbodhu.mp3",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa4Du1Z1k2gi7EQOld8yB_UShDSlbg1UKQk2T3skd_Eb2drgw_zMZnJyAeJVNkrEoWm2Y&usqp=CAU",
    lyrics: "When you arrive, rejoice"
  },
  {
    title: "Paththavaikkum",
    artist: "Dhanush",
    src: "Paththavaikkum.mp3",
    cover: "https://i.pinimg.com/236x/e1/2f/9a/e12f9a7eef491f92f4b3e6982f569c88.jpg",
    lyrics: "Steps light, paths open"
  },
  {
    title: "Selfie Pulla",
    artist: "Dhanush",
    src: "Selfie-Pulla.mp3",
    cover: "https://i.pinimg.com/736x/68/49/88/6849884f3d8b1577797023ccc4cc4afb.jpg",
    lyrics: "Smile bright, snap away"
  },
  {
    title: "Thangame",
    artist: "Anirudh Ravichander",
    src: "Thangame.mp3",
    cover: "https://i.pinimg.com/736x/ce/c2/ac/cec2ac8f9c2572bdae256a45c1979dc7.jpg",
    lyrics: "My gold, my love"
  },
  {
    title: "The One",
    artist: "Yuvan Shankar Raja",
    src: "The One.mp3",
    cover: "https://i.pinimg.com/736x/0b/b0/58/0bb0581a169e4184316d7e2de200e63e.jpg",
    lyrics: "You’re perfect in every"
  },
  {
    title: "Thuli Thuli Mazhaiyaai",
    artist: "Kavya Ajith",
    src: "Thuli-Thuli-Mazhaiyaai.mp3",
    cover: "https://i.pinimg.com/1200x/b0/69/de/b069de7e5b1420e4fbaa11cc7a424210.jpg",
    lyrics: "Raindrops fall like kisses"
  },
  {
    title: "Ullaallaa",
    artist: "M. M. Keeravani",
    src: "Ullaallaa.mp3",
    cover: "https://i.pinimg.com/736x/b7/d0/13/b7d01359a73c5e138d935d9cf514d2ca.jpg",
    lyrics: "Heart beats, joy flows"
  },
  {
    title: "Vaathi Coming",
    artist: "Anirudh Ravichander",
    src: "Vaathi-Coming.mp3",
    cover: "https://i.pinimg.com/1200x/f6/84/d5/f684d5de98d8237d08d1cedcf0c4e1f5.jpg",
    lyrics: "Teacher arrives, party starts"
  },
  {
    title: "Vaathi Raid",
    artist: "Anirudh Ravichander",
    src: "Vaathi-Raid.mp3",
    cover: "https://i.pinimg.com/1200x/f6/84/d5/f684d5de98d8237d08d1cedcf0c4e1f5.jpg",
    lyrics: "Raid begins, chaos follows"
  },
  {
    title: "Vazhithunaiye",
    artist: "Arijit Singh",
    src: "Vazhithunaiye.mp3",
    cover: "https://i.pinimg.com/1200x/fb/97/84/fb9784ae25cc08c7140eed2082ef641c.jpg",
    lyrics: "You’re my guiding light"
  }
];


let songIndex = 0;
let isPlaying = false;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const favoriteBtn = document.getElementById('favorite');
const playlistEl = document.getElementById('playlist');
const favoritesListEl = document.getElementById('favorites-list');
const progressBar = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volume-slider');
const volumeBtn = document.getElementById('volume-btn');
const searchBar = document.getElementById('search-bar');
const songListContainer = document.getElementById('song-list');
const searchResultsContainer = document.getElementById('search-list');

// Load the initial song
loadSong(songs[songIndex]);

// Function to load song and update the UI
function loadSong(song) {
    document.getElementById('song-title').textContent = song.title;
    document.getElementById('artist-name').textContent = song.artist;
    document.getElementById('cover-image').src = song.cover;
    audio.src = song.src;
    audio.load();
}

// Play/Pause functionality
function playPause() {
    if (isPlaying) {
        audio.pause();
        playBtn.textContent = '▶️';
    } else {
        audio.play();
        playBtn.textContent = '⏸️';
    }
    isPlaying = !isPlaying;
}

// Next Song functionality
function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    audio.play();  // Automatically play the next song
    playBtn.textContent = '⏸️';  // Update the button to show 'pause' symbol
    isPlaying = true;  // Update the isPlaying state
}


// Previous Song functionality
function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    audio.play();  // Automatically play the next song
    playBtn.textContent = '⏸️';  // Update the button to show 'pause' symbol
    isPlaying = true;  // Update the isPlaying state
}

// Toggle favorite functionality
function toggleFavorite() {
    const currentSong = songs[songIndex];
    const isFavorited = favorites.some(song => song.title === currentSong.title);

    if (isFavorited) {
        // Remove from favorites
        favorites = favorites.filter(song => song.title !== currentSong.title);
        favoriteBtn.classList.remove('favorited');  // Remove highlight
    } else {
        // Add to favorites
        favorites.push(currentSong);
        favoriteBtn.classList.add('favorited');  // Add highlight
    }

    // Update localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesList();
}

function updateFavoriteIcon() {
    const currentSong = songs[songIndex];
    const isFavorited = favorites.some(song => song.title === currentSong.title);
    
    if (isFavorited) {
        favoriteBtn.classList.add('favorited');  // Highlight if song is a favorite
    } else {
        favoriteBtn.classList.remove('favorited');  // Normal if not a favorite
    }
}
// Favorite button event
favoriteBtn.addEventListener('click', toggleFavorite);

// Load initial song
loadSong(songs[songIndex]);
updateFavoritesList();  // Load the favorites list on start





// Update favorites list UI
function updateFavoritesList() {
    favoritesListEl.innerHTML = favorites.map((song, index) =>
        `<li data-index="${index}">${song.title} - ${song.artist}</li>`
    ).join('');
}

// Load song from favorites list
favoritesListEl.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const index = e.target.getAttribute('data-index');
        const favoriteSong = favorites[index];
        songIndex = songs.findIndex(song => song.title === favoriteSong.title);
        loadSong(favoriteSong);
        playPause();
    }
});

// Volume Slider functionality
volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value; // Get the volume value (0 to 1)
    audio.volume = volume;

    // Update the slider's background based on the volume
    const percentage = volume * 100; // Convert volume to percentage (0 to 100)
    volumeSlider.style.background = `linear-gradient(to right, #28a745 ${percentage}%, #6c757d ${percentage}%)`;

    updateVolumeIcon(); // Update the volume icon based on the level
});



// Mute/Unmute button functionality
volumeBtn.addEventListener('click', () => {
    if (audio.volume > 0) {
        audio.volume = 0;
        volumeSlider.value = 0;
    } else {
        audio.volume = 0.5;
        volumeSlider.value = 0.5;
    }
    updateVolumeIcon();
    updateSliderColor();
});

// Update volume icon based on the current volume
function updateVolumeIcon() {
    if (audio.volume === 0) {
        volumeBtn.textContent = '🔇'; // Muted icon
    } else if (audio.volume < 0.5) {
        volumeBtn.textContent = '🔉'; // Low volume icon
    } else {
        volumeBtn.textContent = '🔊'; // High volume icon
    }
}

// Change volume slider color
function updateSliderColor() {
    if (audio.volume === 0) {
        volumeSlider.style.background = '#6c757d'; // Grey for muted
    } else if (audio.volume < 0.5) {
        volumeSlider.style.background = '#ffc107'; // Yellow for low volume
    } else {
        volumeSlider.style.background = '#28a745'; // Green for high volume
    }
}

// Format time (MM:SS)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
}

// Update song duration once metadata is loaded
audio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audio.duration);
    progressBar.max = audio.duration;
});

// Update current time and progress bar
audio.addEventListener('timeupdate', () => {
    if (!isNaN(audio.currentTime)) {
        currentTimeEl.textContent = formatTime(audio.currentTime);
        progressBar.value = audio.currentTime;
    }
});

// Seek functionality (progress bar)
progressBar.addEventListener('input', () => {
    audio.currentTime = progressBar.value;
});

// Search functionality
function searchSong() {
    const query = searchBar.value.toLowerCase();
    const filteredSongs = songs.filter(song => {
        return song.title.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query);
    });

     // Display songs or show "Song not found" message if no match
     if (filteredSongs.length === 0) {
        songListContainer.innerHTML = '<p style="color:red;"><b>Sorry!! Song not found</b></p>';
    } else {
        displaySongs(filteredSongs);
    }
}

// Display songs in the playlist or search results
function displaySongs(songsToDisplay) {
    songListContainer.innerHTML = '';

    songsToDisplay.forEach(song => {
        const songItem = document.createElement('div');
        songItem.classList.add('song-item');
        songItem.innerHTML = `
            <div class="song-title">${song.title}</div>
            <div class="song-artist">${song.artist}</div>
            <button class="play-button" onclick="playSong('${song.src}')">Play</button>
        `;
        songListContainer.appendChild(songItem);
    });
}

// Play selected song from the search
function playSong(src) {
    const song = songs.find(song => song.src === src);
    loadSong(song);
    if (isPlaying) {
        audio.pause();
        playBtn.textContent = '▶️'; // Update button to play icon
    } else {
        audio.play();
        playBtn.textContent = '⏸️'; // Update button to pause icon
    }
    isPlaying = !isPlaying;
}


// Update the favorites list
updateFavoritesList();

// Event listeners for player controls
playBtn.addEventListener('click', playPause);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
favoriteBtn.addEventListener('click', toggleFavorite);
