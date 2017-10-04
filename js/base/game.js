//游戏
class Game {
    constructor(canvas) {
        this.canvas = document.querySelector(canvas)
        this.canvas.width = window.getViewportSize.width
        this.canvas.height = window.getViewportSize.height
        this.ctx = this.canvas.getContext('2d')

        this.views = [];

        this.time = 0
        this.x = 0
        this.y = 0
        this._x = 0
        this._y = 0
        document.addEventListener('touchend', this.touches.bind(this), false)
    }
    touches(event) {
        this._x = this.x + event.changedTouches[0].clientX - window.getViewportSize.width / 2
        this._y = this.y + event.changedTouches[0].clientY - window.getViewportSize.height / 2
    }
    draw(interval) {
        this.time += interval
        if (this.time > 17) {
            this.x += (this._x - this.x) / 50
            this.y += (this._y - this.y) / 50
            this.time %= 17
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        if (!this.views.length) return;
        for (let i = 0; i < this.views.length; i++) {
            this.views[i].draw(interval, this.ctx, this.x, this.y)
        }
    }
}
