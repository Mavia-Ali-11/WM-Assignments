// Got to Top

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Progress Bar Animation

var topBtn = document.getElementById("top");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 2300) {
        document.getElementById('pb1').style.width = '85%';
        document.getElementById('pb2').style.width = '93%';
        document.getElementById('pb3').style.width = '80%';
        document.getElementById('pb4').style.width = '98%';
    }
    else if (document.documentElement.scrollTop > 400) {
        topBtn.style.transform = "translateY(0px)";
    }
    else {
        topBtn.style.transform = "translateY(65px)";
    }
}