
//入口
document.body.onload = () => {
    init()
}

const game = new Canvas('#canvas2')
const runloop = Runloop.instance()


function init() {
    const bgPic = new Image()
    bgPic.src = "./img/background/bg.jpg"

    const jxk = new Jxk()
    game.views.push(jxk)
    runloop.loop = (interval) => {
        game.draw(interval);
    }
}


function touches(event) {
    const x = event.changedTouches[0].clientX
    const y = event.changedTouches[0].clientY
    console.log('----------', x, y);
}

document.addEventListener('touchend', touches, false)






