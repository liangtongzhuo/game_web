var fruitObj = function () {
    this.alive = [];
    this.x = [];
    this.y = [];
    this.l = [];
    this.aneNo = [];
    this.spd = [];
    this.fruitType = [];
    this.orange = new Image();
    this.blue = new Image();
}

fruitObj.prototype.num = 30;
//初始化
fruitObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.l[i] = 0;
        this.aneNo[i] = 0;
        this.spd[i] = Math.random() * 0.1 + 0.05;
        this.fruitType[i] = '';
        this.born(i);
    }
    this.orange.src = './src/fruit.png';
    this.blue.src = './src/blue.png';
}
//绘画
fruitObj.prototype.draw = function () {
    for (var i = 0; i < this.num; i++) {
        //蓝色 还是 黄色
        var pic = this.fruitType[i] == 'blue' ? this.blue : this.orange;
        //持续时间
        deltaTime = deltaTime > 40 ? 40 : deltaTime;

        if (this.alive[i]) {
            if (this.l[i] <= 15) {
                
                this.x[i] = ane.headx[this.aneNo[i]];
                this.y[i] = ane.heady[this.aneNo[i]];

                this.l[i] += this.spd[i] * deltaTime;
            } else {
                this.y[i] -= this.spd[i] * deltaTime;
            }
            ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
            if (this.y[i] < 10) {
                this.alive[i] = false;
            }
        }
    }
}
//出生
fruitObj.prototype.born = function (i) {
    this.aneNo[i] = Math.floor(Math.random() * ane.num);

    this.alive[i] = true;
    this.l[i] = 0;
    var ran = Math.random();
    if (ran < 0.2) {
        this.fruitType[i] = 'blue';
    } else {
        this.fruitType[i] = 'orange';
    }
}

fruitObj.prototype.dead = function (i) {
    this.alive[i] = false;
}

function fruitMonitor() {
    var num = 0;
    for (var i = 0; i < fruit.length; i++) {
        if (fruit.alive[i]) num++;
    }
    if (num < 15) {
        sendFruit();
        return;
    }
}

function sendFruit() {
    for (var i = 0; i < fruit.num; i++) {
        if (!fruit.alive[i]) {
            fruit.born(i);
        }
    }
}