var momObj = function () {
    this.x;
    this.y;
    this.angle;
    //眼睛
    this.momEye = [];
    this.momEyeTime = 0;
    this.momEyeCount = 0;
    this.momEyeInterval = 1000;

    //身体
    this.momBodyOra = [];
    this.momBodyBlue = []
    this.momBodyCount = 0;

    //尾巴
    this.momTail = [];
    this.momTailTime = 0;
    this.momTailCount = 0;
}
momObj.prototype.init = function () {
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.angle = 0;

    for (var i = 0; i < 2; i++) {
        this.momEye[i] = new Image();
        this.momEye[i].src = './src/bigEye' + i + '.png';
    }

    for (var i = 0; i < 8; i++) {
        this.momBodyOra[i] = new Image();
        this.momBodyBlue[i] = new Image();
        this.momBodyOra[i].src = './src/bigSwim' + i + '.png';
        this.momBodyBlue[i].src = './src/bigSwimBlue' + i + '.png';
    }

    for (var i = 0; i < 8; i++) {
        this.momTail[i] = new Image();
        this.momTail[i].src = './src/bigTail' + i + '.png';
    }

}
momObj.prototype.draw = function () {

    this.x = lerpDistance(mx, this.x, 0.98);
    this.y = lerpDistance(my, this.y, 0.99);

    //根据坐标 计算角度
    var deltaY = my - this.y;
    var deltaX = mx - this.x;
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;//-PI,PI
    this.angle = lerpAngle(beta, this.angle, 0.9);

    //眼睛
    this.momEyeTime += deltaTime;
    if (this.momEyeTime > this.momEyeInterval) {
        this.momEyeCount = (this.momEyeCount + 1) % 2;
        this.momEyeTime %= this.momEyeInterval;
        if (this.momEyeCount == 0) {
            this.momEyeInterval = Math.random() * 1500 + 2000;
        } else {
            this.momEyeInterval = 200;
        }
    }

    //尾巴
    this.momTailTime += deltaTime;
    if (this.momTailTime > 50) {
        this.momTailCount = (this.momTailCount + 1) % 8;
        this.momTailTime %= 50;
    }

    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);
      //身体
    if (data.double == 1) {
        ctx1.drawImage(this.momBodyOra[this.momBodyCount], -this.momBodyOra[this.momBodyCount].width * 0.5, -this.momBodyOra[this.momBodyCount].height * 0.5);
    } else {
        ctx1.drawImage(this.momBodyBlue[this.momBodyCount], -this.momBodyBlue[this.momBodyCount].width * 0.5, -this.momBodyBlue[this.momBodyCount].height * 0.5);
    }
    //眼睛
    ctx1.drawImage(this.momEye[this.momEyeCount], -this.momEye[this.momEyeCount].width * 0.5, -this.momEye[this.momEyeCount].height * 0.5);
 
    //尾巴
    ctx1.drawImage(this.momTail[this.momTailCount], -this.momTail[this.momTailCount].width * 0.5 + 30, -this.momTail[this.momTailCount].height * 0.5);


    ctx1.restore();
}