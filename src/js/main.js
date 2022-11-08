const videoContainers = document.querySelectorAll(".video-container");

videoContainers.forEach((container) => {
  const button = container.querySelector(".video-button");
  const video = container.querySelector("video");

  button.addEventListener("click", () => {
    container.classList.toggle("is-playing");

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});
