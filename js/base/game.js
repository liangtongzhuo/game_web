//游戏
class Game {
    constructor(canvas) {
        //canvas 初始化
        this.canvas = document.querySelector(canvas)
        this.canvas.width = window.getViewportSize.width
        this.canvas.height = window.getViewportSize.height
        this.ctx = this.canvas.getContext('2d')
        //时间间隔
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

        this.mapOne = new MapOne();
        this.jxk = new Jxk()
    }
    //触摸调用
    touches(event) {
        
        //记录点击的实际位置
        let x = this.x + event.changedTouches[0].clientX - window.getViewportSize.width / 2 
        let y = this.y + event.changedTouches[0].clientY - window.getViewportSize.height / 2
        
        //判断地图边界
        if (x < 0) x = 0
        if (x > this.mapOne.map.width) x = this.mapOne.map.width - window.getViewportSize.width
        if (y < 0) y = 0
        if (y > this.mapOne.map.height) x = this.mapOne.map.height - window.getViewportSize.height
        
        this.xTarget = x
        this.yTarget = y

        //jxk 要移动到的坐标
        this.jxk.xTarget = this.xTarget
        this.jxk.yTarget = this.yTarget
    }
    //每次循环调用
    draw(interval) {
        this.time += interval
        if (this.time > 17) {
            this.upDataLocation()
            this.time %= 17
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        //绘制
        this.mapOne.draw(interval, this.ctx, this.x, this.y)
        this.jxk.draw(interval, this.ctx, this.x, this.y)
    }
    //更新位置
    upDataLocation() {
        const x = this.x - this.xTarget
        const y = this.y - this.yTarget
        if (x > this.speed && x != 0) {
            this.x -= this.speed
        } else if (x < -this.speed && x != 0) {
            this.x += this.speed
        } else {
            this.x = this.xTarget
        }
        if (y > this.speed && y != 0) {
            this.y -= this.speed
        } else if (y < -this.speed && y != 0) {
            this.y += this.speed
        } else {
            this.y = this.yTarget
        }
    }
}
