
//入口
document.body.onload = () => {
    init()
}

function init() {
    //获取鼠标点击
    let x = 0
    let y = 0
    let hx = 0
    let hy = 0
    const bgPic = new Image()
    bgPic.src = "./img/background/bg.jpg"
    const map = new Game('#canvas1')
    map.draw = (interval, ctx) => {
        if (x > hx){
            hx++
        }else if (x < hx) {
            hx--
        }
        ctx.drawImage(bgPic, -hx, -hy)
    }

    document.onmousemove = (event) => {
        if (window.event) window.event = event;
        x = window.event.x
        y = window.event.y
        console.log('----------', x, y);
    }


    const jxk = new Jxk()

    const game = new Game('#canvas2')
    game.draw = (interval, ctx) => {
        jxk.draw(interval, ctx)
    }
}




