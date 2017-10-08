//游戏
class Game {
    constructor(canvas) {
        //canvas 初始化
        this.canvas = document.querySelector(canvas)
        this.canvas.width = window.getViewportSize.width
        this.canvas.height = window.getViewportSize.height
        this.ctx = this.canvas.getContext('2d')
        //绑定触摸事件
        document.addEventListener('touchend', this.touches.bind(this), false)
        // 地图与人物
        this.mapOne = new MapOne();
        this.jxk = new Jxk()
    }
    //触摸调用
    touches(event) {
        this.mapOne.touches(event)
        this.jxk.touches(event)

        //地图要移动到的坐标
        this.jxk.xTargetMap = this.mapOne.xTarget
        this.jxk.yTargetMap = this.mapOne.yTarget
    }
    //每次循环调用
    draw(interval) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        //绘制
        this.mapOne.draw(interval, this.ctx)
        this.jxk.draw(interval, this.ctx, this.mapOne.x, this.mapOne.y)
    }

}
