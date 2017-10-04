class MapOne  {
    constructor() {
        this.x
        this.y
        
        this.map
        this.time = 0

        this.init()
    }

    init(){
            this.map = new Image()
            this.map.src = './img/background/bg.jpg'
    }

    draw(interval,ctx) {
        ctx.save()
        ctx.drawImage(this.map, 0, 0);
        ctx.restore()
    }
}

