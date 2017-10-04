
//入口
document.body.onload = () => {
    init()
}

const game = new Game('#canvas2')
const jxk = new Jxk()
game.views.push(jxk)
const runloop = Runloop.instance()


function init() {
    const bgPic = new Image()
    bgPic.src = "./img/background/bg.jpg"

    runloop.loop = (interval) => {
        game.draw(interval);
    }
}


function touches(event) {
    x = event.changedTouches[0].clientX
    y = event.changedTouches[0].clientY
    console.log('----------', x, y);
}

document.addEventListener('touchend', touches, false)






