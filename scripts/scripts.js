//move on mouse move.
//get all elements of class
function yogagirlmove() {
    if (window.innerWidth >= 600) {
        var yogagirl = document.querySelectorAll(".yogagirl");
        var yogagirlbackgr = document.querySelectorAll(".yogagirlbackgr");
        yogagirlbackgr.forEach(function (imgToMove) {
            imgmove(imgToMove, 0.3);
        });
        yogagirl.forEach(function (imgToMove) {
            imgmove(imgToMove, 0.15);
        });
        function imgmove(imgToMove, moveSpeed) {
            let x =
                imgToMove.getBoundingClientRect().left +
                imgToMove.clientWidth / 2;
            let y =
                imgToMove.getBoundingClientRect().top +
                imgToMove.clientHeight / 2;
            let percentsOfX = ((event.pageX - x) / 100) * moveSpeed;
            let percentsOfY = ((event.pageY - y) / 100) * moveSpeed;
            imgToMove.style.transform =
                "translate(" + percentsOfX + "%, " + percentsOfY + "%)";
        }
    }
}
document.querySelector("body").addEventListener("mousemove", yogagirlmove);
//parallax
window.addEventListener("scroll", function () {
    var value = window.scrollY;
    var babochki = document.querySelector("#babochki");
    if (window.innerWidth <= 600) {
        babochki.style.left = value * 0.05 + "px";
    } else {
        babochki.style.left = value * 0.17 + "px";
    }
    babochki.style.top = -value * 0.13 + "px";
});
//reveal on move
const fadeElements = document.querySelectorAll(".one-practice");
scrollAnim = () => {
    let windowHt = window.innerHeight;
    let count = 0;
    let revealspeed = 2.2;
    fadeElements.forEach((element) => {
        count++;
        if (count <= Math.ceil(fadeElements.length / 2)) {
            revealspeed -= 0.55;
        } else {
            revealspeed += 0.55;
        }
        element.style.transition = revealspeed + "s ease-out";
        let elementPos = element.getBoundingClientRect().top;
        if (elementPos <= windowHt / 1.3) {
            element.classList.add("faded-in");
        }
    });
};
document.addEventListener("DOMContentLoaded", scrollAnim);
window.addEventListener("scroll", scrollAnim);
