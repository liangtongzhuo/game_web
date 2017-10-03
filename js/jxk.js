class Jxk  {
    constructor() {
        this.x
        this.y
        this.angle;

        this.bodyRightBottom = []
        this.bodyount = 0
        this.time = 0

        this.init()
    }

    init(){
        for (var i = 0; i < 8; i++) {
            this.bodyRightBottom[i] = new Image()
            this.bodyRightBottom[i].src = './img/jxk/stand/0000' + i + '.png'
        }
    }

    draw(interval,ctx) {

        this.time += interval
        if (this.time > 150) {
            this.bodyount = (this.bodyount + 1) % 8
            this.time %= 150
        }

        ctx.save()
        ctx.drawImage(this.bodyRightBottom[this.bodyount], 10, 10)
        ctx.restore()
    }
}

