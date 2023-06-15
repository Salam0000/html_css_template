document.addEventListener('click',
    (event) => {
        let lis = document.querySelectorAll('nav ul li');
        console.log(lis);
        lis.forEach(e => {
            e.onclick = () => {
                lis.forEach(e => e.classList.remove("active"));
                e.classList.add("active");
                console.log(e.classList.contains("hasOtherLinks"));
                if (e.classList.contains("hasOtherLinks")) {
                    document.querySelector(".showMegaMenu").style.display = "grid";

                } else {
                    document.querySelector(".showMegaMenu").style.display = "none";

                }
            };

        });
    }
);
let secondSection = document.querySelectorAll('.second_section_container');
console.log(secondSection);
secondSection.forEach(element => {
    element.onmouseleave = function () {
        secondSection.forEach(function (e) {
            e.classList.remove("move");
            e.childNodes[9].childNodes[3].classList.remove('move_left_right');
        });
    }
    element.onmouseover = function () {
        console.log(element.childNodes[9].childNodes[3]);
        secondSection.forEach(function (e) {
            e.classList.remove("move");
            e.childNodes[9].childNodes[3].classList.remove('move_left_right');
        });
        element.classList.add("move");
        element.childNodes[9].childNodes[3].classList.add('move_left_right');
    };

});
let thirdSection = document.querySelectorAll('.third_section_image img');
console.log(thirdSection);
thirdSection.forEach(element => {
    element.onmouseleave = function () {
        thirdSection.forEach(function (e) {
            e.classList.remove("rotate");
        });
    }
    element.onmouseover = function () {
        thirdSection.forEach(function (e) {
            e.classList.remove("rotate");
        });
        element.classList.add("rotate");
    };

});
let fourthSection = document.querySelectorAll('.fourth_section_container');
console.log(fourthSection)
// fourthSection.forEach(element => {
// console.log(element.getAttribute('data-color'));
console.log(document.querySelectorAll('.fourth_section_container')[0].childNodes[3].childNodes[5].childNodes[1])
// fourthSection[0].childNodes[3].childNodes[5].childNodes[1].style.background = fourthSection[0].getAttribute('data-color');
// fourthSection[1].childNodes[3].childNodes[5].childNodes[1].style.background = fourthSection[1].getAttribute('data-color');
// fourthSection[2].childNodes[3].childNodes[5].childNodes[1].style.background = fourthSection[2].getAttribute('data-color');
// element.style.css=`width:${element.getAttribute('data-progress')};background-color: #2196f3;`;
// });
let sixthSection = document.querySelectorAll('.sixth_section_container');
console.log(sixthSection);
sixthSection.forEach(element => {
    element.onmouseleave = function () {
        sixthSection.forEach(function (e) {
            element.classList.remove("grey_filter");
        });
    }
    element.onmouseover = function () {
        element.classList.add("grey_filter");
    };
});
let seventhSection = document.querySelectorAll('.seventh_section_container');
console.log(seventhSection);
seventhSection.forEach(element => {
    element.onmouseleave = function () {
        seventhSection.forEach(function (e) {
            e.classList.remove("move");
            e.style.borderTop = "none";

        });
    }
    element.onmouseover = function () {
        element.classList.add("move");
        element.style.borderTop = "solid 5px #2196f3"
    };
});
let eighthSection = document.querySelectorAll('.progress span');
console.log(eighthSection)
let thirteenSection = document.querySelectorAll(".thirteen_section_container");
console.log(thirteenSection)
document.addEventListener("scroll", () => {
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(window.scrollX);
    console.log("y:", window.scrollY);
    if (window.scrollY >= 6500) {
        eighthSection.forEach(element => {
            console.log(element.getAttribute('data-progress'))
            element.style.width = `${element.getAttribute('data-progress')}`;
            element.style.height = '100%';
            element.style.position = 'absolute';
            element.style.background = '#2196f3';
            // element.style.css=`width:${element.getAttribute('data-progress')};background-color: #2196f3;`;
        });
    }
    if (window.scrollY >= 6500) {
        thirteenSection.forEach(element => {
            console.log(element.getAttribute('data-count'))
            console.log(element.childNodes[1])
            // element.childNodes[1].innerHTML = element.getAttribute('data-count');
        });
    }
});
