
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
    //此方法循环调用
    runloop.loop = (interval) => {
        game.draw(interval);
    }
}









