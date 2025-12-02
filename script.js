// heart icon functionality

let hearts = document.getElementsByClassName("heart-btn");

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    let clickHeart = parseInt(document.getElementById("count-heart").innerText);

    clickHeart++;
    document.getElementById("count-heart").innerText = clickHeart;
  });
}

// copy btn related functionality

let copyBtn = document.getElementsByClassName("copy-btn");

for (let i = 0; i < copyBtn.length; i++) {
  copyBtn[i].addEventListener("click", function (e) {
    let copyCount = parseInt(document.getElementById("copyCountBtn").innerText);
    let serviceNum = e.target.parentNode.parentNode.children[3].innerText;

    navigator.clipboard.writeText(serviceNum);
    alert("Copied the number " + ": " + serviceNum);
    copyCount++;
    document.getElementById("copyCountBtn").innerText = copyCount;
  });
}

// call related functionality
let callButton = document.getElementsByClassName("call-button");

for (let i = 0; i < callButton.length; i++) {
  callButton[i].addEventListener("click", function (e) {
    let coinCount = parseInt(document.getElementById("coinCountBtn").innerText);
    // console.log(e.target.parentNode.parentNode.children[1].innerText);
    let serviceName = e.target.parentNode.parentNode.children[1].innerText;
    let serviceNum = e.target.parentNode.parentNode.children[3].innerText;
    let serviceTime = new Date().toLocaleTimeString();
    if (coinCount < 20) {
      alert("Not enough coins to make this call!");
      return;
    }

    alert("Calling " + serviceName + " " + serviceNum + " ...");

    coinCount = coinCount - 20;
    document.getElementById("coinCountBtn").innerText = coinCount;

    // Add to call history
    let div = document.createElement("div");
    let callHistoryEl = document.getElementById("history-container");

    div.innerHTML = `<div
              class="flex justify-between items-center mb-2 p-4 rounded-lg bg-[#fafafa]"
            >
              <div>
                <h3
                  class="text-[18px] font-semibold text-[#111111] pb-1 font-inter"
                >
                  ${serviceName}
                </h3>
                <p class="text-[18px] text-[#5c5c5c] font-hind-madurai">${serviceNum}</p>
                <!-- <ul id="call-history"></ul> -->
              </div>
              <p class="text-[18px] text-[#111111] font-hind-madurai">
                ${serviceTime} 
              </p>
            </div>`;
    callHistoryEl.appendChild(div);
  });
}

// Clear button Functionality----->

document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("history-container").innerHTML = "";
});
