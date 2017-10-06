class Jxk {
    constructor() {
        this.x = 0
        this.y = 0
        //图
        this.zero = []
        this.one = []
        this.tow = []
        this.three = []
        this.four = []
        this.five = []
        this.six = []
        this.seven = []

        //方向
        this.direction = 0
        //帧数
        this.bodyCount = 0
        this.time = 0

        this.init()
    }
    //初始化加载
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
            this.four[i] = new Image()
            this.four[i].src = './img/jxk/stand/0400' + i + '.png'
            this.five[i] = new Image()
            this.five[i].src = './img/jxk/stand/0500' + i + '.png'
            this.six[i] = new Image()
            this.six[i].src = './img/jxk/stand/0600' + i + '.png'
            this.seven[i] = new Image()
            this.seven[i].src = './img/jxk/stand/0700' + i + '.png'
        }
    }

    draw(interval, ctx, x, y) {
        this.time += interval
        if (this.time > 150) {
            this.bodyCount = (this.bodyCount + 1) % 8
            this.time %= 150
        }

        this.directionFunction(x, y)
        const img = this.imgGet(x, y)

        if (!img) return;

        ctx.save()
        ctx.drawImage(img, window.getViewportSize.width / 2 - 25, window.getViewportSize.height / 2 - 80)
        ctx.restore()
    }
    //根据移动坐标定人物方向
    directionFunction(x, y) {
        if (x == this.x && y < this.y) {
            this.direction = 0
        } else if (x == this.x && y > this.y) {
            this.direction = 4
        } else if (x < this.x && y == this.y) {
            this.direction = 6
        } else if (x > this.x && y == this.y) {
            this.direction = 2
        } else if (x > this.x && y < this.y) {
            this.direction = 1
        } else if (x > this.x && y > this.y) {
            this.direction = 3
        } else if (x < this.x && y > this.y) {
            this.direction = 5
        } else if (x < this.x && y < this.y) {
            this.direction = 7
        }
    }
    // 根据方向和帧数获得图片
    imgGet(x, y) {
        this.x = x
        this.y = y
        if (this.direction === 0) {
            return this.zero[this.bodyCount]
        } else if (this.direction === 1) {
            return this.one[this.bodyCount]
        } else if (this.direction === 2) {
            return this.tow[this.bodyCount]
        } else if (this.direction === 3) {
            return this.three[this.bodyCount]
        } else if (this.direction === 4) {
            return this.four[this.bodyCount]
        } else if (this.direction === 5) {
            return this.five[this.bodyCount]
        } else if (this.direction === 6) {
            return this.six[this.bodyCount]
        } else if (this.direction === 7) {
            return this.seven[this.bodyCount]
        }
       
    }

}

