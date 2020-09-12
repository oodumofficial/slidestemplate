var x = 0;
var slides = [];
var images = [];

slides[0] = '';
slides[1] = 'exp1inv.mp4';
slides[2] = 'exp2inv.mp4';
slides[3] = 'exp3inv.mp4';
slides[4] = 'exp4inv.mp4';

images[0] = '';
images[1] = 'img1.png';
images[2] = 'img2.png';
images[3] = 'img3.png';
images[4] = 'img4.png';

function leftArrow() {
    x--;
    if (x < 1) {
        x = 1
    };
    console.log(x);
    document.getElementById('video').loop = false;
    document.getElementById('video').muted = false;
    document.getElementById('video').src = slides[x];
    setTimeout(function(){
        document.getElementById('image').src = images[x];
    }, 400);
};

function rightArrow() {
    x++;
    if (x < 1) {
        x = 1
    };
    console.log(x);
    document.getElementById('video').loop = false;
    document.getElementById('video').muted = false;
    document.getElementById('video').src = slides[x];
    setTimeout(function(){
        document.getElementById('image').src = images[x];
    }, 400); 
};

function switchSlide() {
    var askSlide = prompt('What slide number?');
    var setSlide = Number.parseInt(askSlide);
    x = (setSlide -1);
}


function changeNum(event) {
    switch (event.keyCode) {
        case 37:
            leftArrow();
        break;

        case 39:
            rightArrow();
        break;

        case 27:
            switchSlide();
        break;
    }
};

function start() {
    window.addEventListener('keydown', changeNum);
};