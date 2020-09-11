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
    if (x < 0) {
        x = 0
    };
    console.log(x);
    document.getElementById('video').src = slides[x];
    setTimeout(function(){
        document.getElementById('image').src = images[x];
    }, 400);
};

function rightArrow() {
    x++;
    if (x < 0) {
        x = 0
    };
    console.log(x);
    document.getElementById('video').src = slides[x];
    setTimeout(function(){
        document.getElementById('image').src = images[x];
    }, 400); 
};


function changeNum(event) {
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