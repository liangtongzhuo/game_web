var waveObj = function () {
    this.x = [];
    this.y = [];
    this.alive = [];
    this.r = [];
}

waveObj.prototype.num = 10;
waveObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.alive[i] = false;
        this.r[i] = 0;
    }
}
//绘画圆圈
waveObj.prototype.draw = function () {
    ctx1.save()
    ctx1.linewidth = 2;
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = 'white';
    for (var i = 0; i < this.num; i++) {
        if (this.alive[i]) {
            this.r[i] += deltaTime * 0.05;
            
            //半径太大则销毁
            if (this.r[i] > 50)
            {
                this.alive[i] = false;
                break;
            }
            //根据半径计算透明
            var alpha = 1 - this.r[i] / 50
            
            ctx1.beginPath();
            ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);
            ctx1.closePath();
            ctx1.strokeStyle = 'rgba(255,255,255,' + alpha + ')';
            ctx1.stroke();
        }
    }
    ctx1.restore();
}
//出生
waveObj.prototype.born = function (x, y) {
    for (var i = 0; i < this.num; i++) {
        if (!this.alive[i]) {
            this.alive[i] = true;
            this.r[i] = 10;
            this.x[i] = x;
            this.y[i] = y;
            return;
        }
    }
}