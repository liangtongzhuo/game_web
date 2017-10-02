var aneObj = function () {
    this.rootx = [];
    this.headx = [];
    this.heady = [];
    this.alpha = 0; //sin计算 偏移量
    this.amp = []; //振幅
}

aneObj.prototype.num = 50;
aneObj.prototype.init = function () {

    for (var i = 0; i < this.num; i++) {
        this.rootx[i] = i * 16 + Math.random() * 20;
        this.headx[i] = this.rootx[i];
        this.heady[i] = canHeight - 250 + Math.random() * 50;
        this.amp[i] = Math.random() * 50 + 50;
    }

}

aneObj.prototype.draw = function () {
    //根据sin函数计算 偏移
    this.alpha += deltaTime * 0.001;
    var l = Math.sin(this.alpha);

    ctx2.save();//到restore 之间 透明度起作用
    ctx2.globalAlpha = 0.6; //透明度
    ctx2.lineWidth = 20; //线宽
    ctx2.lineCap = "round"; //线头的样式
    ctx2.strokeStyle = "#3b154e"; //线的颜色

    for (var i = 0; i < this.num; i++) {
        ctx2.beginPath(); 　//新开一个线段
        ctx2.moveTo(this.rootx[i], canHeight); //线段的起点
        this.headx[i] = this.rootx[i] + l * this.amp[i]
        ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i], this.heady[i]); //二次被塞尔曲线
        ctx2.stroke(); //绘画
    }
    ctx2.restore();
}