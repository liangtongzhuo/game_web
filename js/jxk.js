class Jxk {
    constructor() {
        this.x
        this.y
        this.angle;

        this.bodyRightBottom = []
        this.bodyount = 0
        this.time = 0

        this.init()
    }

    init() {
        for (let i = 0; i < 8; i++) {
            this.bodyRightBottom[i] = new Image()
            this.bodyRightBottom[i].src = './img/jxk/stand/0000' + i + '.png'
        }
    }

    draw(interval, ctx, x, y) {

        this.time += interval
        if (this.time > 150) {
            this.bodyount = (this.bodyount + 1) % 8
            this.time %= 150
        }

        ctx.save()
        ctx.drawImage(this.bodyRightBottom[this.bodyount], window.getViewportSize.width / 2 - 25, window.getViewportSize.height / 2 - 80)
        ctx.restore()
    }
}

