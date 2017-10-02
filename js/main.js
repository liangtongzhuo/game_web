
var can1;
var can2;
var ctx1;
var ctx2;

var canWidth = 800;
var canHeight = 600;



var jxk;

document.body.onload = () => {
    init()
}

var bgPic = new Image();
bgPic.src = "./img/background/bg.jpg";

function init() {
    mx = canWidth * 0.5
    my = canHeight * 0.5

    can1 = document.getElementById('canvas1');
    can2 = document.getElementById('canvas2')
    ctx1 = can1.getContext('2d');
    ctx2 = can2.getContext('2d');

    
    jxk = new Jxk();

    const game = new Game();
    game.draw = (interval) => {
        ctx1.drawImage(bgPic, 0, 0, 2000, 2000);
        ctx2.clearRect(0, 0, 1000, 1000);
        jxk.draw(interval);
    } 
}



