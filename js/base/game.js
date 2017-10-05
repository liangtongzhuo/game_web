//游戏
class Game {
    constructor(canvas) {
        //canvas 初始化
        this.canvas = document.querySelector(canvas)
        this.canvas.width = window.getViewportSize.width
        this.canvas.height = window.getViewportSize.height
        this.ctx = this.canvas.getContext('2d')
        // cahvas 上绘制内容
        this.views = [];

        this.time = 0
        //当前坐标
        this.x = 0
        this.y = 0
        //要移动到的坐标
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
            const x = this.x - this._x
            const y = this.y - this._y
            if (x > 10 && x != 0) {
                this.x -= 10
            } else if (x < -10 && x != 0) {
                this.x += 10
            } else {
                this.x = this._x
            }
            if (y > 10 && y != 0) {
                this.y -= 10
            } else if (y < -10 && y != 0) {
                this.y += 10
            } else {
                this.y = this._y
            }

            this.time %= 17
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        if (!this.views.length) return;
        for (let i = 0; i < this.views.length; i++) {
            this.views[i].draw(interval, this.ctx, this.x, this.y)
        }
    }
}
