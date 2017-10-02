// 瓜
class Game {
    constructor() {

        this._runloop();
    }
    update() {
    }
    draw() {
    }
    _runloop() {
        this.update()
        this.draw()
        window.requestAnimFrame(this._runloop.bind(this));
    }
}
//封装一下动画方法
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function ( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
            return window.setTimeout(callback, 1000 / 60)
        };
})();