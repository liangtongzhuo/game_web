class MapOne {
    constructor() {
        this.x = 0
        this.y = 0

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
        ctx.drawImage(this.map, -x, -y, this.map.width / 2, this.map.height / 2)
        ctx.restore()
    }
}

