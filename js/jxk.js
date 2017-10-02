var momObj = function () {
    this.x;
    this.y;
    this.angle;

    this.bodyRightBottom = [];

   
}
momObj.prototype.init = function () {

    for (var i = 0; i < 8; i++) {
        this.bodyRightBottom[i] = new Image();
        this.bodyRightBottom[i].src = './img/jxk/stand/0000' + i + '.png';
    }

}
momObj.prototype.draw = function () {

 
    //尾巴
    // ctx1.drawImage(this.momTail[this.momTailCount], -this.momTail[this.momTailCount].width * 0.5 + 30, -this.momTail[this.momTailCount].height * 0.5);


    // ctx1.restore();
}