// explore.js

// only starts to run when HTML content is fully loaded
window.addEventListener('DOMContentLoaded', init);

function init() {     // gets called when everything loads (the setup function)
  const synth = window.speechSynthesis;       // gives access to the Web Speech API so the browser can talk
  const voiceSelect = document.getElementById('voice-select');      // gets the dropdown menu with all the different voice options
  const speakButton = document.querySelector('button');       // gets the "Press to Talk" button
  const textInput = document.getElementById('text-to-speak');       // gets the text box that the user can type in
  const faceImg = document.querySelector('img');      // gets the image

  let voices = [];      // stores the browser voices

  // gets all the available voices and fills the dropdown menu
  function populateVoices() {
    voices = synth.getVoices();

    voiceSelect.innerHTML = ''; // resets the menu to ensure no repeats
    
    voices.forEach((voice, i) => {      // loops through all the voices and adds each one to the dropdown menu
      const option = document.createElement('option');
      option.value = i; 
      option.textContent = `${voice.name} (${voice.lang})`; 
      voiceSelect.appendChild(option); 
    });
  
  }

  // populate voices at the start
  populateVoices();

  // runs only if voices don't load
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }


  speakButton.addEventListener('click', () => {       // when the button is clicked...
    const utter = new SpeechSynthesisUtterance(textInput.value);      // what the user wants the browser to say
    const selectedIndex = voiceSelect.value;      // the voice the user wants
    utter.voice = voices[selectedIndex];      // sets the browser voice to the chosen voice

    faceImg.src = 'assets/images/smiling-open.png';       // changes the image to a talking face

    // changes the image back at the end
    utter.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
    };

    synth.speak(utter); 
  });
}