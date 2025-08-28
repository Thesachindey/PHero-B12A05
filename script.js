
// Functionalities for Heart Icons
// Clicking on the 💗 heart icon of any card will increase the count in the Navbar
let outlineHeartIcons = document.querySelectorAll("#outline-heart");
let heartCountDisplay = document.getElementById("heartCount");
let heartCount = 0;

outlineHeartIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        heartCount++;
        heartCountDisplay.textContent = heartCount;
    });
});


//  Call Buttons Functionalitis
// On clicking a card's Call Button, following actions will happen:
// Show an alert with a message including the service name and number
// Each call will cut 20 coins. Reduce Coin after each click.
// If coins are less than 20, show a relevant alert and terminate the process.
// Add this service into the Call History section with:
// Service name
// Service number

let callBtnList = document.querySelectorAll(".callBtn");
let serviceNameList = document.querySelectorAll(".serviceName");
let serviceNumberList = document.querySelectorAll(".serviceNum");
let coinDisplay = document.querySelector(".coinCount");
let totalCoin = coinDisplay.innerText = 30; // Initial coin count

callBtnList.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        // Reduce coins 
        let currentCoins = totalCoin;
        if (totalCoin >= 20) {
            // alert functionality
            alert(`📞 Calling ${serviceNameList[i].innerText}   ${serviceNumberList[i].innerText}...`)
            currentCoins -= 20;
            totalCoin = currentCoins;
            coinDisplay.innerText = currentCoins;
        } else {
            alert("Not enough coins to make a call.");
        }
    })
}
);

