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


// SMALL SEVEN
const copyBtnSmallSeven = document.querySelector(".copy-btn-small-seven");
const textareaSmallSeven = document.querySelector(".textarea-small-seven");

copyBtnSmallSeven.addEventListener("click", () => {
    textareaSmallSeven.select();
    document.execCommand("copy");
    copyBtnSmallSeven.innerHTML = "<i class='fas fa-check'></i>";
    copyBtnSmallSeven.style.background = "#2DCDA7";
    copyBtnSmallSeven.style.height = 15 + "px";
    copyBtnSmallSeven.style.borderRadius = 10 + "%";
    copyBtnSmallSeven.style.color = "#fff";

    setTimeout(() => {
        document.getSelection().removeAllRanges();
        copyBtnSmallSeven.innerHTML = "<i class='fas fa-copy'></i>";
        copyBtnSmallSeven.style.background = "";
        copyBtnSmallSeven.style.color = "";
    }, 1000);
});


// SMALL EIGHT
const copyBtnSmallEight = document.querySelector(".copy-btn-small-eight");
const textareaSmallEight = document.querySelector(".textarea-small-eight");

copyBtnSmallEight.addEventListener("click", () => {
    textareaSmallEight.select();
    document.execCommand("copy");
    copyBtnSmallEight.innerHTML = "<i class='fas fa-check'></i>";
    copyBtnSmallEight.style.background = "#2DCDA7";
    copyBtnSmallEight.style.height = 15 + "px";
    copyBtnSmallEight.style.borderRadius = 10 + "%";
    copyBtnSmallEight.style.color = "#fff";

    setTimeout(() => {
        document.getSelection().removeAllRanges();
        copyBtnSmallEight.innerHTML = "<i class='fas fa-copy'></i>";
        copyBtnSmallEight.style.background = "";
        copyBtnSmallEight.style.color = "";
    }, 1000);
});


// SMALL NINE
const copyBtnSmallNine = document.querySelector(".copy-btn-small-nine");
const textareaSmallNine = document.querySelector(".textarea-small-nine");

copyBtnSmallNine.addEventListener("click", () => {
    textareaSmallNine.select();
    document.execCommand("copy");
    copyBtnSmallNine.innerHTML = "<i class='fas fa-check'></i>";
    copyBtnSmallNine.style.background = "#2DCDA7";
    copyBtnSmallNine.style.height = 15 + "px";
    copyBtnSmallNine.style.borderRadius = 10 + "%";
    copyBtnSmallNine.style.color = "#fff";

    setTimeout(() => {
        document.getSelection().removeAllRanges();
        copyBtnSmallNine.innerHTML = "<i class='fas fa-copy'></i>";
        copyBtnSmallNine.style.background = "";
        copyBtnSmallNine.style.color = "";
    }, 1000);
});


// SMALL TEN
const copyBtnSmallTen = document.querySelector(".copy-btn-small-ten");
const textareaSmallTen = document.querySelector(".textarea-small-ten");

copyBtnSmallTen.addEventListener("click", () => {
    textareaSmallTen.select();
    document.execCommand("copy");
    copyBtnSmallTen.innerHTML = "<i class='fas fa-check'></i>";
    copyBtnSmallTen.style.background = "#2DCDA7";
    copyBtnSmallTen.style.height = 15 + "px";
    copyBtnSmallTen.style.borderRadius = 10 + "%";
    copyBtnSmallTen.style.color = "#fff";

    setTimeout(() => {
        document.getSelection().removeAllRanges();
        copyBtnSmallTen.innerHTML = "<i class='fas fa-copy'></i>";
        copyBtnSmallTen.style.background = "";
        copyBtnSmallTen.style.color = "";
    }, 1000);
});


// SMALL ELEVEN
const copyBtnSmallEleven = document.querySelector(".copy-btn-small-eleven");
const textareaSmallEleven = document.querySelector(".textarea-small-eleven");

copyBtnSmallEleven.addEventListener("click", () => {
    textareaSmallEleven.select();
    document.execCommand("copy");
    copyBtnSmallEleven.innerHTML = "<i class='fas fa-check'></i>";
    copyBtnSmallEleven.style.background = "#2DCDA7";
    copyBtnSmallEleven.style.height = 15 + "px";
    copyBtnSmallEleven.style.borderRadius = 10 + "%";
    copyBtnSmallEleven.style.color = "#fff";

    setTimeout(() => {
        document.getSelection().removeAllRanges();
        copyBtnSmallEleven.innerHTML = "<i class='fas fa-copy'></i>";
        copyBtnSmallEleven.style.background = "";
        copyBtnSmallEleven.style.color = "";
    }, 1000);
});


// SMALL TWELVE
const copyBtnSmallTwelve = document.querySelector(".copy-btn-small-twelve");
const textareaSmallTwelve = document.querySelector(".textarea-small-twelve");

copyBtnSmallTwelve.addEventListener("click", () => {
    textareaSmallTwelve.select();
    document.execCommand("copy");
    copyBtnSmallTwelve.innerHTML = "<i class='fas fa-check'></i>";
    copyBtnSmallTwelve.style.background = "#2DCDA7";
    copyBtnSmallTwelve.style.height = 15 + "px";
    copyBtnSmallTwelve.style.borderRadius = 10 + "%";
    copyBtnSmallTwelve.style.color = "#fff";

    setTimeout(() => {
        document.getSelection().removeAllRanges();
        copyBtnSmallTwelve.innerHTML = "<i class='fas fa-copy'></i>";
        copyBtnSmallTwelve.style.background = "";
        copyBtnSmallTwelve.style.color = "";
    }, 1000);
});


// SMALL THIRETEEN
const copyBtnSmallThirteen = document.querySelector(".copy-btn-small-thirteen");
const textareaSmallThirteen = document.querySelector(".textarea-small-thirteen");

copyBtnSmallThirteen.addEventListener("click", () => {
    textareaSmallThirteen.select();
    document.execCommand("copy");
    copyBtnSmallThirteen.innerHTML = "<i class='fas fa-check'></i>";
    copyBtnSmallThirteen.style.background = "#2DCDA7";
    copyBtnSmallThirteen.style.height = 15 + "px";
    copyBtnSmallThirteen.style.borderRadius = 10 + "%";
    copyBtnSmallThirteen.style.color = "#fff";

    setTimeout(() => {
        document.getSelection().removeAllRanges();
        copyBtnSmallThirteen.innerHTML = "<i class='fas fa-copy'></i>";
        copyBtnSmallThirteen.style.background = "";
        copyBtnSmallThirteen.style.color = "";
    }, 1000);
});


// SMALL FOURTEEN
const copyBtnSmallFourteen = document.querySelector(".copy-btn-small-fourteen");
const textareaSmallFourteen = document.querySelector(".textarea-small-fourteen");

copyBtnSmallFourteen.addEventListener("click", () => {
    textareaSmallFourteen.select();
    document.execCommand("copy");
    copyBtnSmallFourteen.innerHTML = "<i class='fas fa-check'></i>";
    copyBtnSmallFourteen.style.background = "#2DCDA7";
    copyBtnSmallFourteen.style.height = 15 + "px";
    copyBtnSmallFourteen.style.borderRadius = 10 + "%";
    copyBtnSmallFourteen.style.color = "#fff";

    setTimeout(() => {
        document.getSelection().removeAllRanges();
        copyBtnSmallFourteen.innerHTML = "<i class='fas fa-copy'></i>";
        copyBtnSmallFourteen.style.background = "";
        copyBtnSmallFourteen.style.color = "";
    }, 1000);
});


// SMALL FIFTEEN
const copyBtnSmallFifteen = document.querySelector(".copy-btn-small-fifteen");
const textareaSmallFifteen = document.querySelector(".textarea-small-fifteen");

copyBtnSmallFifteen.addEventListener("click", () => {
    textareaSmallFifteen.select();
    document.execCommand("copy");
    copyBtnSmallFifteen.innerHTML = "<i class='fas fa-check'></i>";
    copyBtnSmallFifteen.style.background = "#2DCDA7";
    copyBtnSmallFifteen.style.height = 15 + "px";
    copyBtnSmallFifteen.style.borderRadius = 10 + "%";
    copyBtnSmallFifteen.style.color = "#fff";

    setTimeout(() => {
        document.getSelection().removeAllRanges();
        copyBtnSmallFifteen.innerHTML = "<i class='fas fa-copy'></i>";
        copyBtnSmallFifteen.style.background = "";
        copyBtnSmallFifteen.style.color = "";
    }, 1000);
});


// SMALL SIXTEEN
const copyBtnSmallSixteen = document.querySelector(".copy-btn-small-sixteen");
const textareaSmallSixteen = document.querySelector(".textarea-small-sixteen");

copyBtnSmallSixteen.addEventListener("click", () => {
    textareaSmallSixteen.select();
    document.execCommand("copy");
    copyBtnSmallSixteen.innerHTML = "<i class='fas fa-check'></i>";
    copyBtnSmallSixteen.style.background = "#2DCDA7";
    copyBtnSmallSixteen.style.height = 15 + "px";
    copyBtnSmallSixteen.style.borderRadius = 10 + "%";
    copyBtnSmallSixteen.style.color = "#fff";

    setTimeout(() => {
        document.getSelection().removeAllRanges();
        copyBtnSmallSixteen.innerHTML = "<i class='fas fa-copy'></i>";
        copyBtnSmallSixteen.style.background = "";
        copyBtnSmallSixteen.style.color = "";
    }, 1000);
});


// SMALL SEVENTEEN
const copyBtnSmallSeventeen = document.querySelector(".copy-btn-small-seventeen");
const textareaSmallSeventeen = document.querySelector(".textarea-small-seventeen");

copyBtnSmallSeventeen.addEventListener("click", () => {
    textareaSmallSeventeen.select();
    document.execCommand("copy");
    copyBtnSmallSeventeen.innerHTML = "<i class='fas fa-check'></i>";
    copyBtnSmallSeventeen.style.background = "#2DCDA7";
    copyBtnSmallSeventeen.style.height = 15 + "px";
    copyBtnSmallSeventeen.style.borderRadius = 10 + "%";
    copyBtnSmallSeventeen.style.color = "#fff";

    setTimeout(() => {
        document.getSelection().removeAllRanges();
        copyBtnSmallSeventeen.innerHTML = "<i class='fas fa-copy'></i>";
        copyBtnSmallSeventeen.style.background = "";
        copyBtnSmallSeventeen.style.color = "";
    }, 1000);
});

