
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
    // const map = new Game('#canvas1')
    // map.draw = (interval, ctx) => {
    //     if (x > hx) {
    //         hx++
    //     } else if (x < hx) {
    //         hx--
    //     }

    //     if (y > hy) {
    //         hy++
    //     } else if (y < hy) {
    //         hy--
    //     }
    //     ctx.drawImage(bgPic, -hx, -hy)
    // }


    function touches(event) {
        x = event.changedTouches[0].clientX
        y = event.changedTouches[0].clientY
        console.log('----------', x, y);
    }

    document.addEventListener('touchend', touches, false)


    const runloop = Runloop.instance()
    const jxk = new Jxk()
    const game = new Game('#canvas2')
    game.views.push(jxk);
    runloop.loop = (interval) => {
        game.draw(interval);
    }
}








