// expose.js

// only starts to run when HTML content is fully loaded
window.addEventListener('DOMContentLoaded', init);

function init() {     // contains the interactive logic and only gets called when HTML content is fully loaded
  // grab all the important elements from the page
  const hornSelect = document.getElementById("horn-select");      // gets the dropdown menu where the user chooses between air, car, or horn
  const hornImage = document.querySelector("img");      // gets the image on the page and a new one is put in for each different horn
  const hornAudio = document.querySelector("audio");      // the audio element - how the horn sound is played
  const volumeSlider = document.getElementById("volume");       // gets the volume slider 
  const volumeIcon = document.getElementById("volume-controls").querySelector("img");       // gets the speaker image
  const playButton = document.querySelector("button");      // gets the button that plays the horn sound 

  // instance of the confetti animation
  const jsConfetti = new JSConfetti();


  hornSelect.addEventListener("change", () => {       // everytime the user selects a horn...
    const selected = hornSelect.value;      // get the selected value
    hornImage.src = `assets/images/${selected}.svg`;      // get the matching image to the selected horn
    hornAudio.src = `assets/audio/${selected}.mp3`;       // get the matching audio to the selected horn
  });


  volumeSlider.addEventListener("input", () => {      // when the user moves the volume slider
    const value = Number(volumeSlider.value);       // gets the selected volume
    hornAudio.volume = value / 100;       // converts the selected volume value to work

    // updates the volume icon based on the current selected volume level
    if (value === 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (value < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (value < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  });


  playButton.addEventListener("click", () => {      // when the button is clicked 
    hornAudio.play();       // plays the audio

    // if the user selected the party horn, play the confetti animation
    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}
