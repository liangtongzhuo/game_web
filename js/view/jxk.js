class Jxk {
    constructor() {
        //宽高
        this.width = 56
        this.height = 160
        //当前坐标
        this.x = (window.getViewportSize.width - this.width) / 2
        this.y = (window.getViewportSize.height - this.height) / 2
        //要移动到的坐标
        this.xTarget = (window.getViewportSize.width - this.width) / 2
        this.yTarget = (window.getViewportSize.height - this.height) / 2
        //地图边界
        this.mapHorizontal 
        this.mapVertical 
        //走出边界
        this.runHorizontal = true
        this.runVertical = true
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
        //速度
        this.speed = 2

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
        //记录点击位置
        this.xTarget = event.changedTouches[0].clientX - this.width / 2
        this.yTarget = event.changedTouches[0].clientY - this.height / 2
        // console.log('=========',x,y);
    }

    draw(interval, ctx, x, y, mapHorizontal, mapVertical) {
        this.time += interval
        if (this.time > 150) {
            this.bodyCount = (this.bodyCount + 1) % 8
            this.time %= 150
        }

        this.mapHorizontal = mapHorizontal
        this.mapVertical = mapVertical

        this.directionFunction(x, y)
        this.imgGet(x, y)
        this.upLocation()

        if (!this.img) return;

        ctx.save()
        ctx.drawImage(this.img, this.x, this.y)
        ctx.restore()
    }
    //根据移动坐标定人物方向
    directionFunction(x, y) {
        let _x, _y
        //地图边界
        if (this.mapHorizontal != -1) {
            x = this.xTarget
            _x = this.x
        } else { 
            _x = this.xMap
        }

        if (this.mapVertical != -1) {
            y = this.yTarget
            _y = this.y
        } else {
            _y = this.yMap
        }
        //方向
        if (x == _x && y < _y) {
            this.direction = 0
        } else if (x == _x && y > _y) {
            this.direction = 4
        } else if (x < _x && y == _y) {
            this.direction = 6
        } else if (x > _x && y == _y) {
            this.direction = 2
        } else if (x > _x && y < _y) {
            this.direction = 1
        } else if (x > _x && y > _y) {
            this.direction = 3
        } else if (x < _x && y > _y) {
            this.direction = 5
        } else if (x < _x && y < _y) {
            this.direction = 7
        }
    }
    // 判断地图边界,否是跑、方向和帧数获得图片
    imgGet(x, y) {
        console.log(this.xTargetMap , x)
        if (this.xTargetMap === x && this.yTargetMap === y ) {
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
        } else {
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
    //地图到边界才更新人物位置
    upLocation() {
        if (this.mapHorizontal != -1) {
            const x = this.x - this.xTarget
            this.runHorizontal = false
            //计算移动的速速
            if (x > this.speed && x != 0) {
                this.x -= this.speed
                //更新走出边界
                if (this.mapHorizontal == 1 && this.x < (window.getViewportSize.width - this.width) / 2) {
                    this.x = (window.getViewportSize.width - this.width) / 2
                    this.runHorizontal = true

                }
            } else if (x < -this.speed && x != 0) {
                this.x += this.speed
                //更新走出边界
                if (this.mapHorizontal == 0 && this.x >  (window.getViewportSize.width - this.width) / 2) {
                    this.x = (window.getViewportSize.width - this.width) / 2
                    this.runHorizontal = true
                }
            } 

        }
      
        if (this.mapVertical != -1) {
            const y = this.y - this.yTarget
            if (y > this.speed && y != 0) {
                this.y -= this.speed
                this.runVertical = false
                //更新走出边界
                if (this.mapVertical == 1 && this.y < (window.getViewportSize.height - this.height) / 2) {
                    this.y = (window.getViewportSize.height - this.height) / 2
                    this.runVertical = true
                }
            } else if (y < -this.speed && y != 0) {
                this.y += this.speed
                //更新走出边界
                if (this.mapVertical == 0 && this.y > (window.getViewportSize.height - this.height) / 2) {
                    this.y = (window.getViewportSize.height - this.height) / 2
                    this.runVertical = true
                }
            } 
        }
    }
}

