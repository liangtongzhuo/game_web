class Jxk  {
    constructor() {
        this.x
        this.y
        this.angle;

        this.bodyRightBottom = []
        this.bodyRightBottomCount = 0
        this.time = 0
        this.count = 0
        
        this.init()
    }

    init(){
        for (var i = 0; i < 8; i++) {
            this.bodyRightBottom[i] = new Image()
            this.bodyRightBottom[i].src = './img/jxk/stand/0000' + i + '.png'
        }
    }

    draw() {
        this.time += deltaTime
        if (this.time > 150) {
            this.count = (this.count + 1) % 8
            this.time %= 150
        }
        ctx2.save()
        ctx2.drawImage(this.bodyRightBottom[this.count], 10, 10)
        ctx2.restore()
    }
   
   
}

