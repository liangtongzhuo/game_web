// 瓜
class Game {
    constructor() {

    }
    update() {
    }
    draw() {
    }
    _runloop() {
        window.requestAnimFrame(_runloop);

        this.update()
        // this.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        this.draw()

    }
}


//封装一下动画方法
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function ( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
            return window.setTimeout(callback, 1000 / 60)
        };
})();