// SCROLL BEHAVIOUR
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header ul li a");
window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector("header ul li a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });
};

// SMALL ONE
const copyBtnSmallOne = document.querySelector(".copy-btn-small-one");
const textareaSmallOne = document.querySelector(".textarea-small-one");

copyBtnSmallOne.addEventListener("click", () => {
    textareaSmallOne.select();
    document.execCommand("copy");
    copyBtnSmallOne.innerHTML = "<i class='fas fa-check'></i>";
    copyBtnSmallOne.style.background = "#2DCDA7";
    copyBtnSmallOne.style.height = 15 + "px";
    copyBtnSmallOne.style.borderRadius = 10 + "%";
    copyBtnSmallOne.style.color = "#fff";

    setTimeout(() => {
        document.getSelection().removeAllRanges();
        copyBtnSmallOne.innerHTML = "<i class='fas fa-copy'></i>";
        copyBtnSmallOne.style.background = "";
        copyBtnSmallOne.style.color = "";
    }, 1000);
});


// SMALL TWO
const copyBtnSmallTwo = document.querySelector(".copy-btn-small-two");
const textareaSmallTwo = document.querySelector(".textarea-small-two");

copyBtnSmallTwo.addEventListener("click", () => {
    textareaSmallTwo.select();
    document.execCommand("copy");
    copyBtnSmallTwo.innerHTML = "<i class='fas fa-check'></i>";
    copyBtnSmallTwo.style.background = "#2DCDA7";
    copyBtnSmallTwo.style.height = 15 + "px";
    copyBtnSmallTwo.style.borderRadius = 10 + "%";
    copyBtnSmallTwo.style.color = "#fff";

    setTimeout(() => {
        document.getSelection().removeAllRanges();
        copyBtnSmallTwo.innerHTML = "<i class='fas fa-copy'></i>";
        copyBtnSmallTwo.style.background = "";
        copyBtnSmallTwo.style.color = "";
    }, 1000);
});


// SMALL THREE
const copyBtnSmallThree = document.querySelector(".copy-btn-small-three");
const textareaSmallThree = document.querySelector(".textarea-small-three");

copyBtnSmallThree.addEventListener("click", () => {
    textareaSmallThree.select();
    document.execCommand("copy");
    copyBtnSmallThree.innerHTML = "<i class='fas fa-check'></i>";
    copyBtnSmallThree.style.background = "#2DCDA7";
    copyBtnSmallThree.style.height = 15 + "px";
    copyBtnSmallThree.style.borderRadius = 10 + "%";
    copyBtnSmallThree.style.color = "#fff";

    setTimeout(() => {
        document.getSelection().removeAllRanges();
        copyBtnSmallThree.innerHTML = "<i class='fas fa-copy'></i>";
        copyBtnSmallThree.style.background = "";
        copyBtnSmallThree.style.color = "";
    }, 1000);
});


// SMALL FOUR
const copyBtnSmallFour = document.querySelector(".copy-btn-small-four");
const textareaSmallFour = document.querySelector(".textarea-small-four");

copyBtnSmallFour.addEventListener("click", () => {
    textareaSmallFour.select();
    document.execCommand("copy");
    copyBtnSmallFour.innerHTML = "<i class='fas fa-check'></i>";
    copyBtnSmallFour.style.background = "#2DCDA7";
    copyBtnSmallFour.style.height = 15 + "px";
    copyBtnSmallFour.style.borderRadius = 10 + "%";
    copyBtnSmallFour.style.color = "#fff";

    setTimeout(() => {
        document.getSelection().removeAllRanges();
        copyBtnSmallFour.innerHTML = "<i class='fas fa-copy'></i>";
        copyBtnSmallFour.style.background = "";
        copyBtnSmallFour.style.color = "";
    }, 1000);
});


// SMALL FIVE
const copyBtnSmallFive = document.querySelector(".copy-btn-small-five");
const textareaSmallFive = document.querySelector(".textarea-small-five");

copyBtnSmallFive.addEventListener("click", () => {
    textareaSmallFive.select();
    document.execCommand("copy");
    copyBtnSmallFive.innerHTML = "<i class='fas fa-check'></i>";
    copyBtnSmallFive.style.background = "#2DCDA7";
    copyBtnSmallFive.style.height = 15 + "px";
    copyBtnSmallFive.style.borderRadius = 10 + "%";
    copyBtnSmallFive.style.color = "#fff";

    setTimeout(() => {
        document.getSelection().removeAllRanges();
        copyBtnSmallFive.innerHTML = "<i class='fas fa-copy'></i>";
        copyBtnSmallFive.style.background = "";
        copyBtnSmallFive.style.color = "";
    }, 1000);
});


// SMALL SIX
const copyBtnSmallSix = document.querySelector(".copy-btn-small-six");
const textareaSmallSix = document.querySelector(".textarea-small-six");

copyBtnSmallSix.addEventListener("click", () => {
    textareaSmallSix.select();
    document.execCommand("copy");
    copyBtnSmallSix.innerHTML = "<i class='fas fa-check'></i>";
    copyBtnSmallSix.style.background = "#2DCDA7";
    copyBtnSmallSix.style.height = 15 + "px";
    copyBtnSmallSix.style.borderRadius = 10 + "%";
    copyBtnSmallSix.style.color = "#fff";

    setTimeout(() => {
        document.getSelection().removeAllRanges();
        copyBtnSmallSix.innerHTML = "<i class='fas fa-copy'></i>";
        copyBtnSmallSix.style.background = "";
        copyBtnSmallSix.style.color = "";
    }, 1000);
});
