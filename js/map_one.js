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
        //地图边界 -1没有  0左边 1右边
        this.mapHorizontal = -1
        this.mapVertical = -1
        //人物走出边界
        this.runHorizontal = false
        this.runVertical = false
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
        //记录点击地图位置
        this.xTarget = this.x + event.changedTouches[0].clientX - window.getViewportSize.width / 2
        this.yTarget = this.y + event.changedTouches[0].clientY - window.getViewportSize.height / 2

    }

    draw(interval, ctx, runHorizontal,runVertical ) {
        this.time += interval
        if (this.time > 17) {
            this.upDataLocation()
            this.time %= 17
        }
        console.log('----------', runHorizontal,runVertical);
        ctx.save()
        ctx.drawImage(this.map, -this.x, -this.y)
        ctx.restore()
    }
    //更新位置
    upDataLocation() {
        const x = this.x - this.xTarget
        const y = this.y - this.yTarget
        //计算移动的速速
        if (!this.runHorizontal) {
            if (x > this.speed && x != 0) {
                this.x -= this.speed
            } else if (x < -this.speed && x != 0) {
                this.x += this.speed
            } else {
                this.x = this.xTarget
            }
        }
        //计算移动的速度
        if (!this.runVertical) {
            if (y > this.speed && y != 0) {
                this.y -= this.speed
            } else if (y < -this.speed && y != 0) {
                this.y += this.speed
            } else {
                this.y = this.yTarget
            }
        }
        //判断是否到边界
        this.isBoundary()
    }
    //判断边界
    isBoundary() {
        //判断地图边界，地图不移动。
        if (this.x < 0) {
            this.x = 0
            this.mapHorizontal = 0
        } else if (this.x  > this.map.width - window.getViewportSize.width) {
            this.x  = this.map.width - window.getViewportSize.width
            this.mapHorizontal = 1
        }

        if (this.y  < 0) {
            this.y  = 0
            this.mapVertical = 0
        } else if (this.y > this.map.height - window.getViewportSize.height) {
            this.y = this.map.height - window.getViewportSize.height
            this.mapVertical = 1
        }

      
    }
}

