//游戏
class Canvas {
    constructor(canvas) {
        this.canvas = document.querySelector(canvas)
        this.canvas.width = window.getViewportSize.width
        this.canvas.height = window.getViewportSize.height

        this.ctx = this.canvas.getContext('2d')

        this.views = [];
    }
    draw(interval) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (!this.views.length) return;
        for (let i = 0; i < this.views.length; i++) {
            this.views[i].draw(interval, this.ctx);
        }
    }
}
