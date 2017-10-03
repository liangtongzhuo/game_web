


document.body.onload = () => {
    init()
}

function init() {

        // .width = 600;
    // document.getElementById("canvas").height = 600;  
    const canvas = document.querySelector('#canvas1')
    const ctx = canvas.getContext('2d')

    var bgPic = new Image();
    bgPic.src = "./img/background/bg.jpg"
    bgPic.onload = () => {
        ctx.drawImage(bgPic, 0, 0, 2000, 2000)
    }


    const jxk = new Jxk()

    const game = new Game('#canvas2')
    game.draw = (interval, ctx) => {
        jxk.draw(interval, ctx)
    }
}




