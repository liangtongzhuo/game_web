
var can1;
var can2;
var ctx1;
var ctx2;

var canWidth = 800;
var canHeight = 600;

var lastTime = 0;
var deltaTime = 0; //距离上次的时间间隔

var jxk;

document.body.onload = game;

function game() {
    init()
    lastTime = Date.now();
    gameloop()
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
    // can1.addEventListener('mousemove', onMouseMove, false)  

    jxk = new Jxk();
    jxk.init();
}

function gameloop() {
    window.requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    
    // ctx1.clearRect(0, 0, 1000, 1000);
    ctx1.drawImage(bgPic, 0, 0,2000,2000);
    // ctx1.restore();

    ctx2.clearRect(0, 0, 1000, 1000);
    jxk.draw();


}


//封装一下动画方法
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function ( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
            return window.setTimeout(callback, 1000 / 60);
        };
})();

