var video = document.querySelector("video");

window.addEventListener("load", function () {
  console.log("Good job opening the window");
  video.autoplay = false;
  video.loop = false;
});

document.querySelector("#play").addEventListener("click", function () {
  video.play();
  document.querySelector("#volume").innerHTML =
    document.querySelector("#slider").value;
});

document.querySelector("#pause").addEventListener("click", function () {
  video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
  video.playBackRate -= 0.1;
  console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
  video.playBackRate += 0.1;
  console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
  if (video.currentTime >= video.duration) {
    video.currentTime = 0;
  } else {
    video.currentTime += 10;
  }
});

document.querySelector("#mute").addEventListener("click", function () {
  let mute = document.querySelector("#mute");
  video.muted = !video.muted; 
  if ((video.muted = true)) {
    mute.innerHTML = "Unmute";
    video.
  } else {
    mute.innerHTML = "Mute";
  }
});

document.querySelector("#slider").addEventListener("change", function () {
  let slider = document.querySelector("#slider");
  video.volume = slider.value;
  document.querySelector("#volume").innerHTML = slider.value;
});

document.querySelector("#vintage").addEventListener("click", function () {
  video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
  video.classList.remove("oldSchool");
});
