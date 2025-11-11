const myButton = document.getElementById("myButton");
const mySound = new Audio("../assets/audio/uuhhh_KD275SD.mp3");

myButton.addEventListener("click", () => {
  mySound.play(); // Play the sound when the button is clicked
});
