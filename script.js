
// Functionalities for Heart Icons
// Clicking on the 💗 heart icon of any card will increase the count in the Navbar
let outlineHeartIcons = document.querySelectorAll("#outline-heart");
let heartCountDisplay = document.getElementById("heartCount");
let heartCount = 0;

outlineHeartIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        heartCount++;
        heartCountDisplay.textContent = heartCount;
    });
});