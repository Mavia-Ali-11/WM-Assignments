//  Slider Transitions

function dropImages() {
    var cloud = document.getElementById('cloud');
    var flower = document.getElementById('effect');
    var text1 = document.getElementById('cloudh4');
    var text2 = document.getElementById('cloudh3');
    var text3 = document.getElementById('cloudp');
    var text4 = document.getElementById('lasth4');
    var text5 = document.getElementById('lasth3');
    var text6 = document.getElementById('lastp');

    cloud.style.transform = 'translateY(0px)';
    flower.style.transform = 'translateY(0px)';
    flower.style.opacity = '1';
    cloud.style.opacity = '1';
    var text = [text1, text2, text3, text4, text5, text6];
    for (var x = 0; x < text.length; x++) {
        text[x].style.opacity = '1';
        text[x].style.transform = 'translateY(0px)';
    }
}

// Slider Mouse Effects

VanillaTilt.init(document.querySelector(".effect"), {
    max: 3,
    perspective: 3000,
});

//  Trigerring Images Of Video Lesson Section

function changeImg(path) {
    var lessonImg = document.getElementById('lessonImg');
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var four = document.getElementById('four');
    lessonImg.setAttribute('style', 'background-image: url(assets/' + path + '.jpg)');
    if (path == 'lesson1') {
        one.classList.add('right');
        two.classList.remove('right');
        three.classList.remove('left');
        four.classList.remove('left');
        one.style.border = '1px solid dodgerblue';
        two.style.border = '1px solid lavender';
        three.style.border = '1px solid lavender';
        four.style.border = '1px solid lavender';
    }
    else if (path == 'lesson2') {
        two.classList.add('right');
        one.classList.remove('right');
        three.classList.remove('left');
        four.classList.remove('left');
        two.style.border = '1px solid dodgerblue';
        one.style.border = '1px solid lavender';
        three.style.border = '1px solid lavender';
        four.style.border = '1px solid lavender';
    }
    else if (path == 'lesson3') {
        three.classList.add('left');
        one.classList.remove('right');
        two.classList.remove('right');
        four.classList.remove('left');
        three.style.border = '1px solid dodgerblue';
        one.style.border = '1px solid lavender';
        two.style.border = '1px solid lavender';
        four.style.border = '1px solid lavender';
    }
    else {
        four.classList.add('left');
        one.classList.remove('right');
        two.classList.remove('right');
        three.classList.remove('left');
        four.style.border = '1px solid dodgerblue';
        one.style.border = '1px solid lavender';
        two.style.border = '1px solid lavender';
        three.style.border = '1px solid lavender';
    }
}

//  Image Gallery (Modal)

var modal = document.getElementById("modal");
var modalImg = document.getElementById("modalImg");
var span = document.getElementsByClassName("close")[0];

function openImage(image) {
  modal.style.display = "block";
  modalImg.setAttribute('src', image);
}

span.onclick = function () {
  modal.style.display = "none";
}

document.addEventListener('keydown', function (event) {
  if (event.keyCode == 27) {
    modal.style.display = 'none'
  }
});


// Go to top button

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


var topBtn = document.getElementById("topBtn");
var navbar = document.getElementById("navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 800) {
    topBtn.style.transform = "translateY(0px)";
  }
  else {
    topBtn.style.transform = "translateY(230px)";
  }
}











// /* box-shadow: 0px 3px 8px lightgray; */

