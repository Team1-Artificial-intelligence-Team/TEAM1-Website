var typed = new Typed(".t", {
    strings: ["We are Team 1 - We specialize in Artificial Intelligence", "We are Team 1 - We specialize in Embedded Systems", "We are Team 1 - We specialize in Software Engineering"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});


let span = document.querySelector(".up");

window.onscroll = function () {
    // console.log(this.scrollY);
    // if (this.scrollY >= 600) {
    //     span.classList.add("show");
    // }
    // else {
    //     span.classList.remove("show");
    // }
    this.scrollY >= 600 ? span.classList.add("show") : span.classList.remove("show");
};
span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

let icon = document.querySelector(".icon");

icon.onclick = function () {
    icon.classList.toggle("show")
}