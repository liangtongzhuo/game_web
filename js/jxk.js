class Jxk {
    constructor() {
        //当前坐标
        this.x = 0
        this.y = 0
        //要移动到的坐标
        this.xTarget = 0
        this.yTarget = 0
        //当前地图坐标
        this.xMap = 0
        this.yMap = 0
        //地图要移动到的坐标
        this.xTargetMap = 0
        this.yTargetMap = 0
        //帧动画 跑
        this.zero = []
        this.one = []
        this.tow = []
        this.three = []
        this.four = []
        this.five = []
        this.six = []
        this.seven = []
        //帧动画 站立
        this.zeroStand = []
        this.oneStand = []
        this.towStand = []
        this.threeStand = []
        this.fourStand = []
        this.fiveStand = []
        this.sixStand = []
        this.sevenStand = []
        //当前绘制的img
        this.img
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
            this.zero[i].src = './img/jxk/run/0000' + i + '.png'
            this.one[i] = new Image()
            this.one[i].src = './img/jxk/run/0100' + i + '.png'
            this.tow[i] = new Image()
            this.tow[i].src = './img/jxk/run/0200' + i + '.png'
            this.three[i] = new Image()
            this.three[i].src = './img/jxk/run/0300' + i + '.png'
            this.four[i] = new Image()
            this.four[i].src = './img/jxk/run/0400' + i + '.png'
            this.five[i] = new Image()
            this.five[i].src = './img/jxk/run/0500' + i + '.png'
            this.six[i] = new Image()
            this.six[i].src = './img/jxk/run/0600' + i + '.png'
            this.seven[i] = new Image()
            this.seven[i].src = './img/jxk/run/0700' + i + '.png'
        }

        for (let i = 0; i < 8; i++) {
            this.zeroStand[i] = new Image()
            this.zeroStand[i].src = './img/jxk/stand/0000' + i + '.png'
            this.oneStand[i] = new Image()
            this.oneStand[i].src = './img/jxk/stand/0100' + i + '.png'
            this.towStand[i] = new Image()
            this.towStand[i].src = './img/jxk/stand/0200' + i + '.png'
            this.threeStand[i] = new Image()
            this.threeStand[i].src = './img/jxk/stand/0300' + i + '.png'
            this.fourStand[i] = new Image()
            this.fourStand[i].src = './img/jxk/stand/0400' + i + '.png'
            this.fiveStand[i] = new Image()
            this.fiveStand[i].src = './img/jxk/stand/0500' + i + '.png'
            this.sixStand[i] = new Image()
            this.sixStand[i].src = './img/jxk/stand/0600' + i + '.png'
            this.sevenStand[i] = new Image()
            this.sevenStand[i].src = './img/jxk/stand/0700' + i + '.png'
        }
    }
    //事件
    touches(event) {
    
    }
    draw(interval, ctx, x, y) {
        this.time += interval
        if (this.time > 150) {
            this.bodyCount = (this.bodyCount + 1) % 8
            this.time %= 150
        }
        //确定人物方向
        this.directionFunction(x, y)
        this.imgGet(x, y)

        if (!this.img) return;

        ctx.save()
        ctx.drawImage(this.img, window.getViewportSize.width / 2 - 25, window.getViewportSize.height / 2 - 80)
        ctx.restore()
    }
    //根据移动坐标定人物方向
    directionFunction(x, y) {
        if (x == this.xMap && y < this.yMap) {
            this.direction = 0
        } else if (x == this.xMap && y > this.yMap) {
            this.direction = 4
        } else if (x < this.xMap && y == this.yMap) {
            this.direction = 6
        } else if (x > this.xMap && y == this.yMap) {
            this.direction = 2
        } else if (x > this.xMap && y < this.yMap) {
            this.direction = 1
        } else if (x > this.xMap && y > this.yMap) {
            this.direction = 3
        } else if (x < this.xMap && y > this.yMap) {
            this.direction = 5
        } else if (x < this.xMap && y < this.yMap) {
            this.direction = 7
        }
    }
    //否是跑、方向和帧数获得图片
    imgGet(x, y) {
        if (this.xTarget === x && this.yTarget === y){
            //站立
            if (this.direction === 0) {
                this.img = this.zeroStand[this.bodyCount]
            } else if (this.direction === 1) {
                this.img = this.oneStand[this.bodyCount]
            } else if (this.direction === 2) {
                this.img = this.towStand[this.bodyCount]
            } else if (this.direction === 3) {
                this.img = this.threeStand[this.bodyCount]
            } else if (this.direction === 4) {
                this.img = this.fourStand[this.bodyCount]
            } else if (this.direction === 5) {
                this.img = this.fiveStand[this.bodyCount]
            } else if (this.direction === 6) {
                this.img = this.sixStand[this.bodyCount]
            } else if (this.direction === 7) {
                this.img = this.sevenStand[this.bodyCount]
            }
        }else {
            //跑
            if (this.direction === 0) {
                this.img = this.zero[this.bodyCount]
            } else if (this.direction === 1) {
                this.img = this.one[this.bodyCount]
            } else if (this.direction === 2) {
                this.img = this.tow[this.bodyCount]
            } else if (this.direction === 3) {
                this.img = this.three[this.bodyCount]
            } else if (this.direction === 4) {
                this.img = this.four[this.bodyCount]
            } else if (this.direction === 5) {
                this.img = this.five[this.bodyCount]
            } else if (this.direction === 6) {
                this.img = this.six[this.bodyCount]
            } else if (this.direction === 7) {
                this.img = this.seven[this.bodyCount]
            }
        }
        this.xMap = x
        this.yMap = y
    }

}

