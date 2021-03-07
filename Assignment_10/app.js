//  Navbar

var state = 'close';
function openNavbar() {
    var navbar = document.getElementById('navbar');
    if(state == 'close') {
        navbar.style.display = 'block'
        state = 'open';
    }
    else {
        navbar.style.display = 'none';
        state = 'close';
    }
}

// (Product Details) Change Images

function changeImage(path) {
    document.getElementById('defaultImg').setAttribute('src',path);
}

// Toggle Form


var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
var current = document.getElementById('current');

function login() {
    form2.style.transform = 'translateX(300px)';
    form1.style.transform = 'translateX(300px)';
    current.style.transform = 'translateX(0px)';
}

function register() {
    form1.style.transform = 'translateX(0px)';
    form2.style.transform = 'translateX(0px)';
    current.style.transform = 'translateX(100px)';
}