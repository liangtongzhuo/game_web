
//入口
document.body.onload = () => {
    init()
}
const game = new Game('#canvas')
const runloop = Runloop.instance()

function init() {
    //此方法循环调用
    runloop.loop = (interval) => {
        game.draw(interval)
    }
}









