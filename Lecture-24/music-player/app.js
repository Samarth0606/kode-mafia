let playSection = document.querySelector("#play-section");
let playBtn = document.querySelector("#play-btn");
let songList = document.querySelector("#song-list");
let progress = document.querySelector("#progress");

let songs = [
  {
    name: "song1",
    id: 1,
  },
  {
    name: "song2",
    id: 2,
  },
  {
    name: "song3",
    id: 3,
  },
  {
    name: "song4",
    id: 4,
  },
];

let audio = new Audio("../media/song1.mp3");

// display saare gaane
for (let song of songs) {
  let li = document.createElement("li");
  li.innerText = song.name;
  li.setAttribute("id", song.id);
  songList.append(li);
}

// btn dabao gana chalo pirogram

playBtn.addEventListener("click", function () {
  audio.paused ? audio.play() : audio.pause();
  if (playBtn.children[0].classList.contains("fa-play")) {
    playBtn.children[0].classList.remove("fa-play");
    playBtn.children[0].classList.add("fa-pause");
  } else {
    playBtn.children[0].classList.add("fa-play");
    playBtn.children[0].classList.remove("fa-pause");
  }
});

// samay bada balwaan hai
audio.addEventListener("timeupdate", function () {
  let currentProg = (audio.currentTime * 100) / audio.duration;
  progress.value = currentProg;
});

// input ke hisaab se chlaunga
progress.addEventListener("input", function () {
  let updateTime = (audio.duration * progress.value) / 100;
  audio.currentTime = updateTime;
});

// gaana khud chuno
songList.addEventListener("click", function (e) {
  let idd = e.target.getAttribute("id");
  audio.src = `../media/song${idd}.mp3`;
  audio.currentTime = 0;
  audio.play();
  playBtn.children[0].classList.remove("fa-play");
  playBtn.children[0].classList.add("fa-pause");
});
