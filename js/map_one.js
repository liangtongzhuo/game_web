class MapOne {
    constructor() {
        //当前坐标
        this.x = 0
        this.y = 0
        //要移动到的坐标
        this.xTarget = 0
        this.yTarget = 0
        //时间间隔
        this.time = 0
        //移动速度
        this.speed = 2
        //地图
        this.map
        this.init()
    }

    init() {
        this.map = new Image()
        this.map.src = './img/background/bg.jpg'
    }
    //事件
    touches(event) {
        //记录点击的实际位置
        let x = this.x + event.changedTouches[0].clientX - window.getViewportSize.width / 2
        let y = this.y + event.changedTouches[0].clientY - window.getViewportSize.height / 2

        //判断地图边界，地图不移动。
        if (x < 0) x = 0
        if (x > this.map.width - window.getViewportSize.width) x = this.map.width - window.getViewportSize.width
        if (y < 0) y = 0
        if (y > this.map.height - window.getViewportSize.height) y = this.map.height - window.getViewportSize.height

        this.xTarget = x
        this.yTarget = y
    }

    draw(interval, ctx) {
        this.time += interval
        if (this.time > 17) {
            this.upDataLocation()
            this.time %= 17
        }

        ctx.save()
        ctx.drawImage(this.map, -this.x, -this.y)
        ctx.restore()
    }
    //更新位置
    upDataLocation() {
        const x = this.x - this.xTarget
        const y = this.y - this.yTarget
        //计算移动的速速
        if (x > this.speed && x != 0) {
            this.x -= this.speed
        } else if (x < -this.speed && x != 0) {
            this.x += this.speed
        } else {
            this.x = this.xTarget
        }
        //计算移动的速度
        if (y > this.speed && y != 0) {
            this.y -= this.speed
        } else if (y < -this.speed && y != 0) {
            this.y += this.speed
        } else {
            this.y = this.yTarget
        }
    }
}

