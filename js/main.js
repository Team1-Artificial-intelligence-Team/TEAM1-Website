//def 
let span = document.querySelector(".up");
let card = document.querySelectorAll(".card");
let lan = document.querySelector(".div");
let loader = document.getElementById("pre-loader");
let pro1 = document.querySelector("#pro1");
let pro2 = document.querySelector("#pro2");
let pro3 = document.querySelector("#pro3");
let body = document.querySelector("body");
// write
var typed = new Typed(".t", {
    strings: ["We are Team 1 - We specialize in Artificial Intelligence", "We are Team 1 - We specialize in Embedded Systems", "We are Team 1 - We specialize in Software Engineering"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});


// scroll to top
span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

function disabled() {
    return false;
}
// write ani
window.onload = function () {
    window.scrollTo({
        top: 0,
    });
    body.classList.toggle("scroll");
    setTimeout(function () {
        lan.classList.add("show");
        body.classList.toggle("scroll");
    }, 3200)
}

body.onmousedown = function () {
    return false;
}
body.onselectstart = function () {
    return false;
}
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
window.onscroll = function () {
    console.log(this.scrollY);
    // this.scrollY >= 300 ? card1.classList.add("show") : card1.classList.remove("show");
    // this.scrollY >= 482 ? card2.classList.add("show") : card2.classList.remove("show");
    // this.scrollY >= 700 ? card3.classList.add("show") : card3.classList.remove("show");
    // this.scrollY >= 1100 ? card4.classList.add("show") : card4.classList.remove("show");
    // scroll to top show 
    this.scrollY >= 600 ? span.classList.add("show") : span.classList.remove("show");
    // cards show
    // this.scrollY >= 300 ? card1.classList.add("show") : 0;
    // this.scrollY >= 300 ? card2.classList.add("show") : 0;
    // this.scrollY >= 700 ? card3.classList.add("show") : 0;
    // this.scrollY >= 1100 ? card4.classList.add("show") : 0;
    this.scrollY >= 1330 ? pro1.classList.add("show") : 0;
    this.scrollY >= 1330 ? pro2.classList.add("show") : 0;
    this.scrollY >= 1330 ? pro3.classList.add("show") : 0;

};


window.addEventListener("load", function () {
    setTimeout(function () {
        loader.style.display = "none";
    }, 3000);
});




