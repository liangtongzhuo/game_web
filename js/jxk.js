class Jxk {
    constructor() {
        this.x = 0
        this.y = 0

        this.zero = []
        this.one = []
        this.tow = []
        this.three = []

        this.bodyCount = 0
        this.time = 0

        this.init()
    }

    init() {
        for (let i = 0; i < 8; i++) {
            this.zero[i] = new Image()
            this.zero[i].src = './img/jxk/stand/0000' + i + '.png'
            this.one[i] = new Image()
            this.one[i].src = './img/jxk/stand/0100' + i + '.png'
            this.tow[i] = new Image()
            this.tow[i].src = './img/jxk/stand/0200' + i + '.png'
            this.three[i] = new Image()
            this.three[i].src = './img/jxk/stand/0300' + i + '.png'
        }
    }

    draw(interval, ctx, x, y) {
        this.time += interval
        if (this.time > 150) {
            this.bodyCount = (this.bodyCount + 1) % 8
            this.time %= 150
        }

        ctx.save()
        ctx.drawImage(this.zero[this.bodyCount], window.getViewportSize.width / 2 - 25, window.getViewportSize.height / 2 - 80)
        ctx.restore()
    }
}

