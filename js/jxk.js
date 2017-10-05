class Jxk {
    constructor() {
        this.x = 0
        this.y = 0

        this.zero = []
        this.one = []
        this.tow = []
        this.three = []
        this.img

        this.bodyount = 0
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
            this.time %= 150
            this.bodyount = (this.bodyount + 1) % 8

            if (x > this.x && y < this.y) {
                this.img = this.zero[this.bodyount]
            } else if (x > this.x && y > this.y) {
                this.img = this.one[this.bodyount]
            } else if (x < this.x && y > this.y) {
                this.img = this.tow[this.bodyount]
            } else if (x < this.x && y < this.y) {
                this.img = this.three[this.bodyount]
            }
            this.x = x
            this.y = y

        }
        if (!this.img) this.img = this.zero[this.bodyount]


        ctx.save()
        ctx.drawImage(this.img, window.getViewportSize.width / 2 - 25, window.getViewportSize.height / 2 - 80)
        ctx.restore()
    }
}

