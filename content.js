const blueButton = document.createElement("button");
blueButton.id = "blue-button";
blueButton.textContent = "Tab";
document.body.appendChild(blueButton);

function openNewTab() {
    // Opens a new empty tab
    window.open('', '_blank');
}

  document.getElementById("blue-button").addEventListener("click", openNewTab);