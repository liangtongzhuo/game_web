//游戏
class Game {
    constructor(canvas) {
        //canvas 初始化
        this.canvas = document.querySelector(canvas)
        this.canvas.width = window.getViewportSize.width
        this.canvas.height = window.getViewportSize.height
        this.ctx = this.canvas.getContext('2d')
       
        document.addEventListener('touchend', this.touches.bind(this), false)
        // 地图与人物
        this.mapOne = new MapOne();
        this.jxk = new Jxk()
    }
    //触摸调用
    touches(event) {
        
        //记录点击的实际位置
        let x = this.mapOne.x + event.changedTouches[0].clientX - window.getViewportSize.width / 2 
        let y = this.mapOne.y + event.changedTouches[0].clientY - window.getViewportSize.height / 2
        
        //判断地图边界，地图不移动。
        if (x < 0) x = 0
        if (x > this.mapOne.map.width - window.getViewportSize.width) x = this.mapOne.map.width - window.getViewportSize.width
        if (y < 0) y = 0
        if (y > this.mapOne.map.height - window.getViewportSize.height) y = this.mapOne.map.height - window.getViewportSize.height
        
        this.mapOne.xTarget = x
        this.mapOne.yTarget = y

        //jxk 要移动到的坐标
        this.jxk.xTarget = this.mapOne.xTarget
        this.jxk.yTarget = this.mapOne.yTarget
    }
    //每次循环调用
    draw(interval) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        //绘制
        this.mapOne.draw(interval, this.ctx)
        this.jxk.draw(interval, this.ctx, this.mapOne.x, this.mapOne.y)
    }

}
