const rsvpButton = document.getElementById("rsvpButton");
const rsvpMessage = document.getElementById("rsvpMessage");

rsvpButton.addEventListener("click", () => {

  rsvpMessage.textContent =
    "Thank you! We can't wait to celebrate with you. ♡";

  rsvpButton.textContent = "RSVP Confirmed ✓";

  rsvpButton.disabled = true;

});
