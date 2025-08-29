
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
let totalCoin = coinDisplay.innerText = 100; // Initial coin count
let callHistoryCont = document.getElementById("callHistoryCont");
// let titleNum=document.getElementById("H-titleOfNum");
// let number=document.getElementById("H-number");
// let lastCalledTime=document.getElementById("H-lastCalledTime");

// Get current date and time
const now = new Date();
const timeString = now.toLocaleTimeString();
// clear btn 
let clearBtn = document.getElementById("clearHistoryBtn");
let copyBtn = document.querySelectorAll(".copyBtn");

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

            // create element for store history item 
            const historyItem = document.createElement('div');
            historyItem.innerHTML = `
               <div id="historyCard" class="flex items-center justify-between mt-1 px-4 py-3 w-full bg-[#fafafa] rounded-lg">
                    <div class="card-item1 w-[70%]">
                        <h1 id="H-titleOfNum" class="text-[.9rem] font-semibold">${serviceNameList[i].innerText}</h1>
                        <p id="H-number" class="text-[.8rem] text-[#5C5C5C] ">${serviceNumberList[i].innerText}</p>
                    </div>
                    <div class="card-item2 w-[30%]">
                        <p class="text-[.8rem] text-[#5C5C5C] " id="H-lastCalledTime">${timeString}</p>
                    </div>
                </div>
`
            // add history item
            callHistoryCont.append(historyItem);
            // Clear the call history
            clearBtn.addEventListener("click", () => {
                historyItem.innerHTML = "";
            });


        } else {
            alert("📵 Not enough coins to make a call, need at least 20 coins.");
        }
    })
}
);

// Copy button functionality
let copyCount = document.querySelector(".copyCountNum ");
let currentCopyCount = 0;
// copyCount.innerText = currentCopyCount;

copyBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        // this is the main thing 
        navigator.clipboard.writeText(serviceNumberList[i].innerText);
        alert("📋 Copied " + serviceNumberList[i].innerText);
        currentCopyCount++;
        copyCount.innerText = currentCopyCount;
    });
});


