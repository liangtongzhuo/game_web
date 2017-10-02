//判断大鱼和果实的距离
function moFruitsCollision() {
    //是否死亡
    if (data.gameOver) {
        return
    }
    for (var i = 0; i < fruit.num; i++) {
        if (fruit.alive[i]) {
            var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
            if (l < 900) {
                //碰到果实了
                fruit.dead(i);
                data.fruitNum++;
                mom.momBodyCount++;
                if (mom.momBodyCount > 7)
                    mom.momBodyCount = 7;
                //是蓝色还是黄色
                if (fruit.fruitType[i] == 'blue') {
                    data.double = 2;
                }
                //产生圈
                wave.born(fruit.x[i], fruit.y[i]);
            }
        }
    }
}

//判断 小鱼与鱼妈妈的碰撞
function momBabyCollision() {
    //没有果实 或 结束 都返回
    if (data.fruitNum == 0 || data.gameOver) {
        return;
    }

    var l = calLength2(mom.x, mom.y, baby.x, baby.y)
    if (l < 900) {

        //大小鱼碰撞
        baby.babyBodyCount = 0
        //清空数据
        mom.momBodyCount = 0;
        //分数更新
        data.addScore();
        //圆圈
        halo.born(baby.x, baby.y);
    }
}

// 根据坐标计算距离
function calLength2(x1, y1, x2, y2) {
    return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
}