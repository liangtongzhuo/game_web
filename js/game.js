// 瓜
class Game {
    constructor(canvas) {
        this.canvas = document.querySelector(canvas)
        this.ctx = this.canvas.getContext('2d')

        this.time = 0
        this.interval = 0 //距离上次的时间间隔
        this._runloop()
    }
    draw() {
    }
    _runloop() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        const now = Date.now()
        this.interval = now - this.time
        this.time = now

        this.draw(this.interval,this.ctx)
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