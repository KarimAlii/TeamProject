//scroll to top
let ScrollToTop = document.querySelector(".scroll-to-top");
let body = document.querySelector("html");
window.addEventListener("scroll", () => {
    if (body.scrollTop >= 100) {
        ScrollToTop.style.display = "block";
        ScrollToTop.addEventListener("click", () => {
            window.scrollTo(0, 0);
        })
    } else {
        ScrollToTop.style.display = "none";
    }
})
//sticky nav
let StickyNav = document.querySelector(".sticky-nav");
window.addEventListener("scroll", () => {
    if (body.scrollTop >= 100) {
        if (StickyNav.classList.contains("animate__fadeOutUp")) {
            StickyNav.classList.remove("animate__animated", "animate__fadeOutUp");
        }
        StickyNav.classList.add("animate__animated", "animate__fadeInDown")
        StickyNav.style.display = "block";
    } else {
        if (StickyNav.classList.contains("animate_animate_fadeInDown")) {
            StickyNav.classList.remove("animate__animated", "animate__fadeInDown");
        }
        StickyNav.classList.add("animate__animated", "animate__fadeOutUp")
        StickyNav.style.display = "block";
    }
})
//dark theme
let moonIcon = document.querySelector(".dark-theme");
let styleSheet = document.querySelector("#color-theme");
let sunIcon = document.querySelector(".light-theme");
moonIcon.addEventListener("click", () => {
    styleSheet.setAttribute("href", "css/Dark-Style.css")
})
sunIcon.addEventListener("click", () => {
    styleSheet.setAttribute("href", "css/style.css")
})

//show more/less
let showimages = document.querySelectorAll(".show-more-image");
let showButton = document.querySelector(".btn-show-more");
let showLess = document.querySelector(".btn-show-less");
showButton.addEventListener("click", () => {
    for (let index = 0; index < showimages.length; index++) {
        showimages[index].style.display = "block";

    }
    showButton.style.display = "none";
    showLess.style.display = "block";
})
showLess.addEventListener("click", () => {
    for (let index = 0; index < showimages.length; index++) {
        showimages[index].style.display = "none";

    }
    showButton.style.display = "block";
    showLess.style.display = "none";
})
//active buttons
let linkitem = document.querySelectorAll(".nav-link");
for (let index = 0; index < linkitem.length; index++) {
    linkitem[index].addEventListener("click", () => {
        for (let index = 0; index < linkitem.length; index++) {
            linkitem[index].classList.remove("active");
        }
        linkitem[index].classList.add("active");
    })
}
let message = document.querySelector("textarea");
let formData = document.querySelectorAll(".form-data");
let subject = document.querySelector(".subject");
let email = document.querySelector(".email");
message.disabled = true;
for (let index = 0; index < formData.length; index++) {
    formData[index].addEventListener("blur", () => {
        if (subject.value != "" && email.value != "") {
            message.disabled = false;
        }
        else {
            message.disabled = true;
        }
    })


}