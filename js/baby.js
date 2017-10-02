var babyObj = function () {
    this.x;
    this.y;
    this.angle = 0;
    //眼睛
    this.babyEye = [];
    this.babyEyeCount = 0;
    this.babyEyeTimer = 0;
    this.babyEyeInterval = 1000;
    //身体
    this.babyBody = [];
    this.babyBodyCount = 0;
    this.babyBodyTimer = 0;
    //尾巴
    this.babyTail = [];
    this.babyTailCount = 0;
    this.babyTailTimer = 0;

}
babyObj.prototype.init = function () {
    this.x = canWidth * 0.5 - 50;
    this.y = canHeight * 0.5 + 50;
    this.babyBody.src = "./src/babyFade0.png";
    //眼睛
    for (var i = 0; i < 2; i++) {
        this.babyEye[i] = new Image();
        this.babyEye[i].src = './src/babyEye' + i + '.png';
    }
    //身体
    for (var i = 0; i < 20; i++) {
        this.babyBody[i] = new Image();
        this.babyBody[i].src = './src/babyFade' + i + '.png';
    }
    //尾巴
    for (var i = 0; i < 8; i++) {
        this.babyTail[i] = new Image();
        this.babyTail[i].src = './src/bigTail' + i + '.png';
    }

}
babyObj.prototype.draw = function () {
    //lerp x,y
    this.x = lerpDistance(mom.x, this.x, 0.98);
    this.y = lerpDistance(mom.y, this.y, 0.99);

    //lerp angle
    var deltaY = mom.y - this.y;
    var deltaX = mom.x - this.x;
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;//-PI,PI

    //lerp angle
    this.angle = lerpAngle(beta, this.angle, 0.6);

    //绘画眼睛
    this.babyEyeTimer += deltaTime;
    if (this.babyEyeTimer > this.babyEyeInterval) {
        this.babyEyeCount = (this.babyEyeCount + 1) % 2;
        this.babyEyeTimer %= this.babyEyeInterval;

        if (this.babyEyeCount == 0) {
            this.babyEyeInterval = Math.random() * 1500 + 2000;
        } else {
            this.babyEyeInterval = 200;
        }
    }
    //绘画身体
    this.babyBodyTimer += deltaTime;
    if (this.babyBodyTimer > 300) {
        this.babyBodyTimer %= 300;
        this.babyBodyCount = this.babyBodyCount + 1;
        if (this.babyBodyCount > 19) {
            this.babyBodyCount = 19;
            //死亡
            data.gameOver = true;
        }
    }

    //绘画尾巴-由时间计算图片第几张
    this.babyTailTimer += deltaTime;
    if (this.babyTailTimer > 50) {
        this.babyTailTimer %= 50;
        this.babyTailCount = (this.babyTailCount + 1) % 8;
    }

    ctx1.save();
    ctx1.translate(this.x, this.y);//起始点定位到中心
    ctx1.rotate(this.angle);//角度
    ctx1.drawImage(this.babyTail[this.babyTailCount], -this.babyTail[this.babyTailCount].width * 0.5 + 23, -this.babyTail[this.babyTailCount].height * 0.5);
    ctx1.drawImage(this.babyBody[this.babyBodyCount], -this.babyBody[this.babyBodyCount].width * 0.5, -this.babyBody[this.babyBodyCount].height * 0.5);
    ctx1.drawImage(this.babyEye[this.babyEyeCount], -this.babyEye[this.babyEyeCount].width * 0.5, -this.babyEye[this.babyEyeCount].height * 0.5);
    ctx1.restore();
}