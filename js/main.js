//def 
let span = document.querySelector(".up");
let card1 = document.querySelector(".hassan-mohamed1");
let card2 = document.querySelector(".hassan-mohamed2");
let card3 = document.querySelector(".hassan-mohamed3");
let card4 = document.querySelector(".hassan-mohamed4");
let lan = document.querySelector(".div");
let loader = document.getElementById("pre-loader");


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

// write ani
window.onload = function () {
    setTimeout(function () {
        lan.classList.add("show");
    }, 3200)
}



window.onscroll = function () {
    console.log(this.scrollY);
    // this.scrollY >= 300 ? card1.classList.add("show") : card1.classList.remove("show");
    // this.scrollY >= 482 ? card2.classList.add("show") : card2.classList.remove("show");
    // this.scrollY >= 700 ? card3.classList.add("show") : card3.classList.remove("show");
    // this.scrollY >= 1100 ? card4.classList.add("show") : card4.classList.remove("show");
    // scroll to top show 
    this.scrollY >= 600 ? span.classList.add("show") : span.classList.remove("show");
    // cards show
    this.scrollY >= 300 ? card1.classList.add("show") : 0;
    this.scrollY >= 300 ? card2.classList.add("show") : 0;
    this.scrollY >= 700 ? card3.classList.add("show") : 0;
    this.scrollY >= 1100 ? card4.classList.add("show") : 0;
};


window.addEventListener("load", function () {
    setTimeout(function () {
        loader.style.opacity = "0";
    }, 3000);
});
