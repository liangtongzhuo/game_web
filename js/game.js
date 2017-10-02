// 瓜
class Game {
    constructor() {
        this.time = 0
        this.interval = 0 //距离上次的时间间隔
        this._runloop()
    }
    update() {
    }
    draw() {
    }
    _runloop() {
        const now = Date.now()
        this.interval = now - this.time
        this.time = now

        this.update(this.interval )
        this.draw(this.interval )
        window.requestAnimFrame(this._runloop.bind(this))
    }
}
//封装一下动画方法
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function ( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
            return window.setTimeout(callback, 1000 / 60)
        };
})();