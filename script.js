var x = 0;
var slides = [];
var images = [];

slides[0] = 'exp1inv.mp4';
slides[1] = 'exp2inv.mp4';
slides[2] = 'exp3inv.mp4';
slides[3] = 'exp4inv.mp4';

images[0] = 'img1.png';
images[1] = 'img2.png';
images[2] = 'img3.png';
images[3] = 'img4.png';

function leftArrow() {
    x--;
    if (x < 0) {
        x = 0
    };
    console.log(x);
    document.getElementById('video').src = slides[x];
    document.getElementById('image').src = images[x+1];
};

function rightArrow() {
    x++;
    if (x < 0) {
        x = 0
    };
    console.log(x);
    document.getElementById('video').src = slides[x];
    document.getElementById('image').src = images[x-1];
};


function changeNum(event) {
    document.getElementById('image').src = images[x-1];
    switch (event.keyCode) {
        case 37:
            leftArrow();
        break;

        case 39:
            rightArrow();
        break;
    }
};

function start() {
    window.addEventListener('keydown', changeNum);
};