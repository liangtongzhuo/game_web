
//入口
document.body.onload = () => {
    init()
}

const game = new Game('#canvas2')
const runloop = Runloop.instance()


function init() {
    const mapOne = new MapOne();
    game.views.push(mapOne)
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






