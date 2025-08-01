let menu = document.getElementById("menu");
let button = document.querySelector("button");
let img = document.querySelector("#contactImage");
let slogan = document.getElementById("slogan");
let imageCaption = document.querySelector("#imageCaption");
let link = document.getElementById("source");

menu.onchange = function () {
    let userChoice = menu.value;
    img.style.width = "200px";
    img.style.height = "200px";

    if (userChoice == "Instagram") {
        source.href = "https://www.instagram.com/aryan__sharma1407/";
        img.src = "images/Instagram.png";
        imageCaption.innerText = "Click Me! Slide into the DMs- let's keep it creative!"
        img.style["padding-left"] = "7px";
        img.style["padding-top"] = "7px";
        img.style["padding-right"] = "8px";
        img.style["padding-bottom"] = "7px";
        img.style.border = "3px solid black";
    } else if (userChoice == "Linkedln") {
        source.href = "https://www.linkedin.com/in/aryan-sharma-a5aa78374";
        img.src = "images/Linkedln.png";
        imageCaption.innerText = "Click Me! Let's connect professionally - collaboration starts here."
        img.style["padding-left"] = "7px";
        img.style["padding-top"] = "7px";
        img.style["padding-right"] = "8px";
        img.style["padding-bottom"] = "7px";
        img.style.border = "3px solid black";
    } else if (userChoice == "Phone") {
        img.src = "images/Phone.png";
        imageCaption.innerText = "Let's talk - sometimes a quick call says it all. CELL: 111-111-1111!"
        img.style["padding-left"] = "7px";
        img.style["padding-top"] = "7px";
        img.style["padding-right"] = "8px";
        img.style["padding-bottom"] = "7px";
        img.style.border = "3px solid black";
    } else if (userChoice == "EMAIL") {
        source.href = "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpdLpfMsnVtCbmRnDhdpMcmQrpDlRsdqnDddbPMbPQxBSXphKfHLTdgnPlBxCNvBHQPvwG";
        img.src = "images/GMAIL.png";
        imageCaption.innerText = "Click Me! Drop me a line - I'll get back faster than your inbox fills up.";
        img.style["padding-left"] = "7px";
        img.style["padding-top"] = "7px";
        img.style["padding-right"] = "8px";
        img.style["padding-bottom"] = "7px";
        img.style.border = "3px solid black";
    }
}

