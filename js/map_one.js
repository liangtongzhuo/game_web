class MapOne {
    constructor() {
        this.map
        this.time = 0

        this.init()
    }

    init() {
        this.map = new Image()
        this.map.src = './img/background/bg.jpg'
    }

    draw(interval, ctx, x, y) {
        ctx.save()
        const xy = this.border(x, y)
        ctx.drawImage(this.map, -xy.x, -xy.y)
        ctx.restore()
    }
    //地图边界判断
    border(x, y) {
        return { x, y }
    }
}

