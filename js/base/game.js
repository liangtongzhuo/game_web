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
        this.xTarget = 0
        this.yTarget = 0
        //移动速度
        this.speed = 2
        document.addEventListener('touchend', this.touches.bind(this), false)
    }
    //触摸调用
    touches(event) {
        this.xTarget = this.x + event.changedTouches[0].clientX - window.getViewportSize.width / 2
        this.yTarget = this.y + event.changedTouches[0].clientY - window.getViewportSize.height / 2
    }
    //每次循环调用
    draw(interval) {
        this.time += interval
        if (this.time > 17) {
            this.upDataLocation()
            this.time %= 17
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        if (!this.views.length) return;
        for (let i = 0; i < this.views.length; i++) {
            this.views[i].draw(interval, this.ctx, this.x, this.y)
        }
    }
    //更新位置
    upDataLocation(){
        const x = this.x - this.xTarget
        const y = this.y - this.yTarget
        if (x > this.speed  && x != 0) {
            this.x -= this.speed 
        } else if (x < -this.speed  && x != 0) {
            this.x += this.speed 
        } else {
            this.x = this.xTarget
        }
        if (y > this.speed  && y != 0) {
            this.y -= this.speed 
        } else if (y < -this.speed  && y != 0) {
            this.y += this.speed 
        } else {
            this.y = this.yTarget
        }
    }
}
