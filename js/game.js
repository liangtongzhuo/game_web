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
//封装执行动画
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function ( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
            return window.setTimeout(callback, 1000 / 60)
        };
})();
//屏幕宽高
window.getViewportSize = ( function() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    };
})();