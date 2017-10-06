//循环
class Runloop {
    constructor() {
        this.time = 0
        this.interval = 0 //距离上次的时间间隔
        this._runloop()
    }
    //单例
    static instance(...args) {
        this.obj = this.obj || new this(...args)
        return this.obj
    }

    _runloop() {
        const now = Date.now()
        this.interval = now - this.time
        this.time = now
        this.loop(this.interval);
        window.requestAnimFrame(this._runloop.bind(this))
    }
    
    loop(){
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
window.getViewportSize = (function () {
    return {
        width: (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth),
        height: (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)
    };
})();