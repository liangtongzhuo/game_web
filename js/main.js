
var can1;
var can2;
var ctx1;
var ctx2;

var canWidth = 800;
var canHeight = 600;

var lastTime = 0;
var deltaTime = 0; //距离上次的时间间隔
var bgPic = new Image();

var ane; //海葵
var fruit;//果实
var mom;//大鱼
var baby;//小鱼
var data//分数

//圆圈
var wave;
var halo;

var youmx;
var my;

//漂浮物
var dust;


document.body.onload = game;

function game() {
    init()
    lastTime = Date.now();
    gameloop()

}

function init() {
    mx = canWidth * 0.5
    my = canHeight * 0.5

    can1 = document.getElementById('canvas1');
    can2 = document.getElementById('canvas2')
    ctx1 = can1.getContext('2d');
    ctx2 = can2.getContext('2d');


    can1.addEventListener('mousemove', onMouseMove, false)

    bgPic.src = "./src/background.jpg";

    ane = new aneObj();
    ane.init();

    fruit = new fruitObj();
    fruit.init();

    mom = new momObj();
    mom.init();

    baby = new babyObj();
    baby.init();

    data = new dataObj();

    wave = new waveObj();
    wave.init();

    halo = new haloObj()
    halo.init();

    dust = new dustObj();
    dust.init();


}

function gameloop() {
    window.requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    drawBackground();
    ane.draw();
    fruitMonitor();
    fruit.draw();

    ctx1.clearRect(0, 0, canWidth, canHeight);
    mom.draw();
    moFruitsCollision();

    baby.draw();
    momBabyCollision();
    //数值
    data.draw();
    //圆圈的
    wave.draw();
    halo.draw()
    //漂浮物
    dust.draw();
}

function drawBackground() {
    ctx2.drawImage(bgPic, 0, 0, canWidth, canHeight);
}

function onMouseMove(e) {
    if (e.offSetX || e.layerX) {
        mx = e.offSetX == undefined ? e.layerX : e.offSetX;
        my = e.offSetY == undefined ? e.layerY : e.offSetY;
    }
}
//封装一下动画方法
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function ( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
            return window.setTimeout(callback, 1000 / 60);
        };
})();

//位移计算
function lerpDistance(aim, cur, ratio) {
    var delta = cur - aim;
    return aim + delta * ratio;
}
//角度计算
function lerpAngle(a, b, t) {
    var d = b - a;
    if (d > Math.PI) d = d - 2 * Math.PI;
    if (d < -Math.PI) d = d + 2 * Math.PI;
    return a + d * t;
}