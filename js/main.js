
var can1;
var ctx1;


document.body.onload = () => {
    init()

    var bgPic = new Image();
    bgPic.src = "./img/background/bg.jpg"
    bgPic.onload = () => {
        ctx1.drawImage(bgPic, 0, 0, 2000, 2000)
    }

}

function init() {

    can1 = document.getElementById('canvas1')
    ctx1 = can1.getContext('2d')

    const jxk = new Jxk()

    const game = new Game('#canvas2')
    game.draw = (interval, ctx) => {
        jxk.draw(interval, ctx)
    }
}



