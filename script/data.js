/**
 * 7种 方块的各种形状
 */
var diamonds = [
		[ 
				[ 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0 ],
				[ 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0 ] ],
		[ 
		  		[ 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ],
				[ 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ] ],
		[ 
		  		[ 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
		  		[ 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ]],
		[ 	
		  		[ 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ],
				[ 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0 ] ],
		[ 
		  		[ 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ],
		[ 		
		  		[ 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0 ],
				[ 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ] ],
		[ 
		  		[ 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ],
				[ 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ] ] ];
var diamondsPlace = [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ];

var diamondsObj = {
	sound:{
		bgsound:'sound/02.mp3',
		fastdown:'sound/fastdown.wav',
		changedir:'sound/change.wav',
		removeline:'sound/removeline.wav'
	},
	emptyLine:20,
	waitRemoveLine:0,
	diamondsPlace:diamondsPlace,
	isRunning:false,
	startTime:null,
	timeCount:0,
	score : {
		op1 : 0,
		op2 : 0,
		op3 : 0,
		op4 : 0
	},
	history:{
		item1:0,
		item2:0,
		item3:0,
		item4:0
	},
	puase : false,
	timer : null,
	defaultSpeed : 500,
	speed : 500,
	levelSpeed:'',
	// 显示的长
	width : diamondsPlace[0].length,
	// 显示的宽
	height : diamondsPlace.length,
	dir:0,
	xmlObj:null,
	dirObj : {
		up:0,
		left:1,
		down:2,
		right:3
	},
	type : 0,
	nextType : 0,
	nextDir : 0,
	x : 3,
	y : 0,
	flag : 0,
	// 方块的长
	diamondsWidth : 0,
	// 方块的宽
	diamondsHeight : 0,
	// 刷新所有固定的方块
	refreshDiamons : function() {
		var full = diamondsObj.getFullDiamonds();
		for (var h = 0; h < full.length; h++) {
			for (var w = 0; w < full[h].length; w++) {
				var location = h * 10 + w;
				var id = "#center" + location;
				if (full[h][w] == 0) {
					$(id).attr("class", "back_center_nothing");
				} else {
					$(id).attr("class", "back_center_diamonds");
				}
			}
		}
	},
	// 初始化x,y
	init : function() {
		diamondsObj.diamondsPlace = diamondsObj.clearnAllDiamonds();
		diamondsObj.timeCount=0;
		diamondsObj.score.op1=0;
		diamondsObj.score.op2=0;
		diamondsObj.score.op3=0;
		diamondsObj.score.op4=0;
		diamondsObj.x = 3;
		diamondsObj.y = 0;
		diamondsObj.dir=diamondsObj.getRandomDir();
		diamondsObj.type = diamondsObj.getRandomType(); 
		// 改变下一个图形
		diamondsObj.changeNextDir();
		diamondsObj.changeNextType();
		diamondsObj.setHistory();
	},
	nextInit : function() {
		diamondsObj.x = 3;
		diamondsObj.y = 0;
		diamondsObj.setEmptyLine(0);
		diamondsObj.setWaitRemoveLine(0);
		// 将下一个图形赋值给当前图形
		diamondsObj.setType();
		diamondsObj.setDir();
		// 改变下一个图形
		diamondsObj.changeNextDir();
		diamondsObj.changeNextType();
		diamondsObj.showNext();
		diamondsObj.setTimer(diamondsObj.toDown, diamondsObj.getDefaultSpeed());
		//diamondsObj.setStartTimer(diamondsObj.recordTime, 1000);
	},
	// 开始
	start : function() {
		diamondsObj.init();
		diamondsObj.showNext();
		diamondsObj.showScore();
		diamondsObj.setTimer(diamondsObj.toDown, diamondsObj.getDefaultSpeed());
		diamondsObj.setStartTimer(diamondsObj.recordTime, 1000);
	},
	// 暂停
	pause : function() {
		if (diamondsObj.isPuase()) {
			diamondsObj.setTimer(diamondsObj.toDown, diamondsObj
					.getDefaultSpeed());
			diamondsObj.setStartTimer(diamondsObj.recordTime, 1000);
			diamondsObj.initKeyBorder();
			diamondsObj.setPuase(false);
		} else {
			diamondsObj.clearnTimer();
			diamondsObj.pauseKeyBorder();
			diamondsObj.setPuase(true);
		}

	},
	// 清空下一个方块的显示
	nextClear : function() {
		$("#diamonds").children("div").attr("class", "next_right_nothing");
	},
	// 清空方块
	nextGameClear : function() {
		$("#back_center").children("div").attr("class", "back_center_nothing");
	},
	// 显示下一个方块
	showNext : function() {
		var dias = diamondsObj.getDiamonds(diamondsObj.getNextType(),
				diamondsObj.getNextDir());
		diamondsObj.nextClear();
		for (var i = 0; i < dias.length; i++) {
			if (dias[i] == 1) {
				var id = "#right" + i;
				$(id).attr("class", "next_right_diamonds");
			}
		}
	},
	showScore : function() {
		$("#score2").text(diamondsObj.getOp2());
		$("#score3").text(diamondsObj.getOp3());
		$("#score4").text(diamondsObj.getOp4());
	},
	showLineNumber:function(){
		$("#emptyLine").text(diamondsObj.getEmptyLine());
		$("#waitRemove").text(diamondsObj.getWaitRemoveLine());
	},
	// 显示下落的方块
	showFallDiamonds : function() {
		diamondsObj.refreshDiamons();
		// 得到方块
		var dias = diamondsObj.getDiamonds(diamondsObj.getType(), diamondsObj
				.getDir());
		for (var h = 0; h < 4; h++) {
			for (var w = 0; w < 4; w++) {
				var index = h * 4 + w;
				if (dias[index] == 1) {
					diamondsObj.setDiamondsLocation(w, h);
					var location = diamondsObj.getLocation(w, h);
					var id = "#center" + location;
					$(id).attr("class", "back_center_diamonds");
				}
			}
		}
	},
	// 到最顶部
	toTop : function() {
		var h = diamondsObj.getDiamondsWidth();
		var y = diamondsObj.getDiamondsY();
		var height = diamondsObj.getHeight();
		if ((y + h) <= height && (diamondsObj.isHitBottomBorder() == 0)) {
			diamondsObj.moveToDown();
		} else {
			// alert("jjjj");
		}
	},
	// 下落
	toDown : function() {
		
		// 如果方块已经到顶了
		if (diamondsObj.isFailed()) {
			// 就暂停游戏
			diamondsObj.clearnTimer();
			
			diamondsObj.addHistory({
				score:diamondsObj.getOp2()
			});
			diamondsObj.isRunning=false;
			
			// 初始化游戏
			alert("Game Over！\n你的得分是："+diamondsObj.getOp2());
			diamondsObj.init();
			diamondsObj.refreshDiamons();
			return;
		}
		diamondsObj.showLineNumber();
		var h = diamondsObj.getDiamondsWidth();
		var y = diamondsObj.getDiamondsY();
		var x = diamondsObj.getDiamondsX();
		var height = diamondsObj.getHeight();
		// 若可以继续下落
		if ((y + h) <= height && (diamondsObj.isHitBottomBorder() == 0)) {
			if (diamondsObj.isHitDiamondTopBorder() == 0) {
				diamondsObj.moveToDown();
			} else {
				// 将方块添加到数组中
				diamondsObj.addDiamonds(x, y);
				// 初始化下落的方块
				diamondsObj.checkDiamondsPlace();
				diamondsObj.nextInit();
			}
		} else {// 如果不能下落
			// 将方块添加到数组中
			diamondsObj.addDiamonds(x, y);
			// 初始化下落的方块
			diamondsObj.checkDiamondsPlace();
			diamondsObj.nextInit();
		}
	},
	toRight : function() {
		var w = diamondsObj.getDiamondsWidth();
		var x = diamondsObj.getDiamondsX();
		if ((x + w) < 9 && (diamondsObj.isHitRightBorder() == 0)
				&& (diamondsObj.isHitDiamondRightBorder() == 0)) {
			diamondsObj.moveToRight();
		}
	},
	toLeft : function() {
		var w = diamondsObj.getDiamondsWidth();
		var x = diamondsObj.getDiamondsX();
		if ((x + w) >= 0 && (diamondsObj.isHitLeftBorder() == 0)
				&& (diamondsObj.isHitDiamondLeftBorder() == 0)) {
			diamondsObj.moveToLeft();
		}
	},
	moveToRight : function() {
		diamondsObj.x++;
	},
	moveToLeft : function() {
		diamondsObj.x--;
	},
	moveToDown : function() {
		diamondsObj.y++;
		diamondsObj.showFallDiamonds();
	},
	isHitRightBorder : function() {
		var dias = diamondsObj.getDiamonds(diamondsObj.getType(), diamondsObj
				.getDir());
		var x = diamondsObj.getDiamondsX();
		for (var h = 0; h < 4; h++) {
			for (var w = 0; w < 4; w++) {
				var index = h * 4 + w;
				if (dias[index] == 1 && (x + w) >= 9) {
					return 1;
				}
			}
		}
		return 0;
	},
	isHitLeftBorder : function() {
		var dias = diamondsObj.getDiamonds(diamondsObj.getType(), diamondsObj
				.getDir());
		var x = diamondsObj.getDiamondsX();
		for (var h = 0; h < 4; h++) {
			for (var w = 0; w < 4; w++) {
				var index = h * 4 + w;
				if (dias[index] == 1 && (x + w) <= 0) {
					return 1;
				}
			}
		}
		return 0;
	},
	isHitBottomBorder : function() {
		var dias = diamondsObj.getDiamonds(diamondsObj.getType(), diamondsObj
				.getDir());
		var y = diamondsObj.getDiamondsY();
		for (var h = 0; h < 4; h++) {
			for (var w = 0; w < 4; w++) {
				var index = h * 4 + w;
				if (dias[index] == 1 && (y + h) >= 19) {
					return 1;
				}
			}
		}
		return 0;
	},
	// 检查是否与已经存在方块的顶部碰撞
	isHitDiamondTopBorder : function() {
		var full = diamondsObj.getFullDiamonds();
		var dias = diamondsObj.getDiamonds(diamondsObj.getType(), diamondsObj
				.getDir());
		var x = diamondsObj.getDiamondsX();
		var y = diamondsObj.getDiamondsY();
		for (var h = 0; h < 4; h++) {
			for (var w = 0; w < 4; w++) {
				var index = h * 4 + w;
				if (dias[index] == 1 && full[y + h + 1][x + w] == 1) {
					return 1;
				}
			}
		}
		return 0;
	},
	// 检查是否与已经存在方块的左边碰撞
	isHitDiamondLeftBorder : function() {
		var full = diamondsObj.getFullDiamonds();
		var dias = diamondsObj.getDiamonds(diamondsObj.getType(), diamondsObj
				.getDir());
		var x = diamondsObj.getDiamondsX();
		var y = diamondsObj.getDiamondsY();
		for (var h = 0; h < 4; h++) {
			for (var w = 0; w < 4; w++) {
				var index = h * 4 + w;
				if (dias[index] == 1 && full[y + h][x + w - 1] == 1) {
					return 1;
				}
			}
		}
		return 0;
	},
	// 检查是否与已经存在方块的右边碰撞
	isHitDiamondRightBorder : function() {
		var full = diamondsObj.getFullDiamonds();
		var dias = diamondsObj.getDiamonds(diamondsObj.getType(), diamondsObj
				.getDir());
		var x = diamondsObj.getDiamondsX();
		var y = diamondsObj.getDiamondsY();
		for (var h = 0; h < 4; h++) {
			for (var w = 0; w < 4; w++) {
				var index = h * 4 + w;
				if (dias[index] == 1 && full[y + h][x + w + 1] == 1) {
					return 1;
				}
			}
		}
		return 0;
	},
	// 是否可以变形
	canChangeDiamondsDir : function(dir) {
		var full = diamondsObj.getFullDiamonds();
		var dias = diamondsObj.getDiamonds(diamondsObj.getType(), dir);
		var x = diamondsObj.getDiamondsX();
		var y = diamondsObj.getDiamondsY();
		var isHit = 0;
		for (var h = 0; h < 4; h++) {
			for (var w = 0; w < 4; w++) {
				var index = h * 4 + w;
					if((dias[index]==1)&&(full[y + h][x + w] == 0)&&(x + w >= 0)&&(x + w <= 9)) {
						isHit ++;
				}
			}
		}
		//alert(isHit);
		return isHit==4;
	},
	checkDiamondsPlace : function() {
		var full = diamondsObj.getFullDiamonds();
		var count = 0;
		for (var h = 0; h < full.length; h++) {
			if (diamondsObj.isFull(full[h])) {
				count++;
				diamondsObj.repalceDiamondsPalce(h);
			}
		}
		if (count == 1) {
			diamondsObj.addRowLine(count);
			diamondsObj.addScore(20);
		} else if (count == 2) {
			diamondsObj.addRowLine(count);
			diamondsObj.addScore(50);
		} else if (count == 3) {
			diamondsObj.addRowLine(count);
			diamondsObj.addScore(90);
		} else if (count == 4) {
			diamondsObj.addRowLine(count);
			diamondsObj.addScore(130);
		}
		if (count > 0) {
			diamondsObj.showScore();
		}
	},
	repalceDiamondsPalce : function(h) {
		var full = diamondsObj.getFullDiamonds();
		for (var i = full.length; i >= 0; i--) {
			if (i < h) {
				full[i + 1] = full[i];
				full[0] = [0,0,0,0,0,0,0,0,0,0];
			}
		}
		return full;
	},
	setAllDiamonds:function(full){
		for(var h = 0; h<diamondsPlace.length;h++){
			for(var w = 0;w<diamondsPlace[h].length;w++){
				diamondsPlace[h][w]=full[h][w];
			}
		}
		
	},
	isFull : function(array) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] == 0) {
				return false;
			}
		}
		return true;
	},
	isEmpty : function(array) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] == 1) {
				return false;
			}
		}
		return true;
	},
	isFailed : function() {
		var full = diamondsObj.getFullDiamonds();
		var emptyCount = 0;
		var waitCount = 0;
		for (var h = 0; h < full.length; h++) {
			if (diamondsObj.isEmpty(full[h])) {
				emptyCount++;
			}else{
				waitCount++;
			}
		}
		diamondsObj.setEmptyLine(emptyCount);
		diamondsObj.setWaitRemoveLine(waitCount);
		return emptyCount==0;
	},
	clearnAllDiamonds:function(){
		var full = diamondsObj.getFullDiamonds();
		for (var h = 0; h < full.length; h++) {
			full[h] = diamondsObj.clearnRow(full[h]);
		}
		return full;
	},
	clearnRow:function(array){
		for (var i = 0; i < array.length; i++) {
			array[i]=0;
		}
		return array;
	},
	// 将方块添加到数组中
	addDiamonds : function(x, y) {
		var full = diamondsObj.getFullDiamonds();
		var dias = diamondsObj.getDiamonds(diamondsObj.getType(), diamondsObj
				.getDir());
		var x = diamondsObj.getDiamondsX();
		var y = diamondsObj.getDiamondsY();
		for (var h = 0; h < 4; h++) {
			for (var w = 0; w < 4; w++) {
				var index = h * 4 + w;
				if (dias[index] == 1) {
					full[y + h][x + w] = 1;
				}
			}
		}
	},
	addRowLine : function(count) {
		var tem = diamondsObj.score.op3;
		diamondsObj.score.op3 = tem + count;
	},
	addScore : function(score) {
		var tem = diamondsObj.score.op2;
		diamondsObj.score.op2 = tem + score;
	},
	clearnTimer : function() {
		clearInterval(diamondsObj.getTimer());
		clearInterval(diamondsObj.getStartTime());
	},
	setTimer : function(callback, delay) {
		clearInterval(diamondsObj.timer);
		diamondsObj.timer = window.setInterval(callback, delay);
	},
	setStartTimer:function(callback, delay) {
		clearInterval(diamondsObj.startTime);
		diamondsObj.startTime = window.setInterval(callback, delay);
	},
	getTimer : function() {
		return diamondsObj.timer;
	},
	setSpeed : function(speed) {
		diamondsObj.speed = speed;
		diamondsObj.setTimer(diamondsObj.toDown, diamondsObj.getSpeed());
	},
	getDefaultSpeed : function() {
		return diamondsObj.defaultSpeed;
	},
	setDefaultSpeed : function() {
		diamondsObj.clearnTimer();
		diamondsObj.setTimer(diamondsObj.toDown(), diamondsObj
				.getDefaultSpeed());
	},
	setOp1 : function(num) {
		diamondsObj.score.op1 = num;
	},
	setOp2 : function(num) {
		diamondsObj.score.op2 = num;
	},
	setOp3 : function(num) {
		diamondsObj.score.op3 = num;
	},
	setOp4 : function(num) {
		diamondsObj.score.op4 = num;
	},
	getOp1 : function() {
		return diamondsObj.score.op1;
	},
	getOp2 : function() {
		return diamondsObj.score.op2;
	},
	getOp3 : function() {
		return diamondsObj.score.op3;
	},
	getOp4 : function() {
		return diamondsObj.score.op4;
	},
	getNextType : function() {
		return diamondsObj.nextType;
	},
	getNextDir : function() {
		return diamondsObj.nextDir;
	},
	getFullDiamonds : function() {
		return diamondsObj.diamondsPlace;
	},
	setNextDiamonds : function() {

	},
	getSpeed : function() {
		return diamondsObj.speed;
	},
	getNextDiamonds : function() {

	},
	getRandomType : function() {
		return Math.floor((Math.random() * 1000) % 7);
	},
	getRandomDir : function() {
		return Math.floor((Math.random() * 1000) % 4);
	},
	// 改变方块
	changeType : function() {
		diamondsObj.type = diamondsObj.getRandomType();
	},
	// 改变下落的形状
	changeDir : function() {
		if (diamondsObj.canChangeDiamondsDir(diamondsObj.enumNextDir())) {
			diamondsObj.dir=diamondsObj.enumNextDir();
		}

		diamondsObj.showFallDiamonds();
	},
	// 改变下一个形状
	changeNextType : function() {
		diamondsObj.nextType = diamondsObj.getRandomType();
	},
	// 下一个的方向随机的
	changeNextDir : function() {
		diamondsObj.nextDir = diamondsObj.getRandomDir();
	},
	setType : function() {
		diamondsObj.type = diamondsObj.getNextType();
	},
	setDir : function() {
		diamondsObj.dir = diamondsObj.getNextDir();
	},
	// 确定下落的图形
	getType : function() {
		return diamondsObj.type;
	},
	// 确定下落的图形的方向
	getDir : function() {
		return diamondsObj.dir;
	},
	setDiamondsLocation : function(w, h) {
		diamondsObj.diamondsWidth = w;
		diamondsObj.diamondsHeight = h;
	},
	getDiamonds : function(type, dir) {
		return diamonds[type][dir];
	},
	getEmptyLine:function(){
		return diamondsObj.emptyLine;
	},
	getWaitRemoveLine:function(){
		return diamondsObj.waitRemoveLine;
	},
	setEmptyLine:function(num){
		diamondsObj.emptyLine=num;
	},
	setWaitRemoveLine:function(num){
		diamondsObj.waitRemoveLine=num;
	},
	getDiamondsWidth : function() {
		return diamondsObj.diamondsWidth;
	},
	getDiamondsHeight : function() {
		return diamondsObj.diamondsHeight;
	},
	getDiamondsX : function() {
		return diamondsObj.x;
	},
	getDiamondsY : function() {
		return diamondsObj.y;
	},
	getWidth : function() {
		return diamondsObj.width;
	},
	getHeight : function() {
		return diamondsObj.height;
	},
	setHitBorder : function(flag) {
		diamondsObj.flag = flag;
	},
	getLocation : function(w, h) {
		var number = 0;
		number = (diamondsObj.y + h) * 10 + (diamondsObj.x + w);
		return number;
	},
	setPuase : function(flag) {
		diamondsObj.puase = flag;
	},
	isPuase : function() {
		return diamondsObj.puase;
	},
	enumNextDir:function(){
		if(diamondsObj.dir==diamondsObj.dirObj.up){
			return diamondsObj.dirObj.left;
		}else if(diamondsObj.dir==diamondsObj.dirObj.left){
			return diamondsObj.dirObj.down;
		}
		else if(diamondsObj.dir==diamondsObj.dirObj.down){
			return diamondsObj.dirObj.right;
		}
		else if(diamondsObj.dir==diamondsObj.dirObj.right){
			return diamondsObj.dirObj.up;
		}
	},
	getItem1:function(){
		return diamondsObj.history.item1;
	},
	getItem2:function(){
		return diamondsObj.history.item2;
	},
	getItem3:function(){
		return diamondsObj.history.item3;
	},
	getItem4:function(){
		return diamondsObj.history.item4;
	},
	
	setHistory:function(){
		diamondsObj.getHistory();
//		$("#his1").text(diamondsObj.getItem1());
//		$("#his2").text(diamondsObj.getItem2());
//		$("#his3").text(diamondsObj.getItem3());
//		$("#his3").text(diamondsObj.getItem4());
	},
	getHistory:function(){
	
	},
	getTimeCount:function(){
		return diamondsObj.timeCount;
	},
	setTimeCount:function(time){
		 diamondsObj.timeCount = time;
	},
	addHistory:function(history){
	},
	setXmlObj:function(obj){
		diamondsObj.xmlObj = obj;
	},
	recordTime:function(){
		var timeCount = diamondsObj.getTimeCount();
		
		var hour = Math.floor(timeCount/(60*60));
		if(hour<10){
			hour = "0"+hour;
		}
		var minute = Math.floor(timeCount/60);
		if(minute>=60){
			minute =Math.floor(minute%60);
		}
		if(minute<10){
			minute = "0"+minute;
		}
		var seconds = diamondsObj.getTimeCount();
		if(seconds>=60){
			seconds = Math.floor(seconds%60);
		}
		if(seconds<10){
			seconds = "0"+seconds;
		}
		
		var showTimeBorder = hour+" : "+minute+" : "+seconds;
		$("#startTime").text(showTimeBorder);
		diamondsObj.timeCount++;
	},
	getStartTime:function(){
		return diamondsObj.startTime;
	},
	/**
	 * 停止键盘的所操作
	 */
	pauseKeyBorder:function(){
		keyBorder = {
				up : 38,
				left : '',
				down : '',
				right : '',
				shift : '',
				enter : '',
				space : 32,
				ctrl : '',
				w : 87,
				a : '',
				s : '',
				d : ''
			};
	},
	initKeyBorder:function(){
		keyBorder = {
				up : 38,
				left : 37,
				down : 40,
				right : 39,
				shift : 16,
				enter : 13,
				space : 32,
				ctrl : 17,
				w : 87,
				a : 65,
				s : 83,
				d : 68
			};
	},
	//返回点击时的坐标
	getClickXY:function(thisObj){
		var currentLocation = $(thisObj).attr("id");
		return {
			x:currentLocation.match(/\d+/g)%10+1,
			y:Math.floor(currentLocation.match(/\d+/g)/10+1)
		};
	},
	//返回下落方块坐标集
	getFallXY:function(){
		var ds = $(".back_center_diamonds");
		return[
			{
				'x':$(ds.get(0)).attr("id").match(/\d+/g)%10+1,
				'y':Math.floor($(ds.get(0)).attr("id").match(/\d+/g)/10+1)
			},
			{
				'x':$(ds.get(1)).attr("id").match(/\d+/g)%10+1,
				'y':Math.floor($(ds.get(1)).attr("id").match(/\d+/g)/10+1)
			},
			{
				'x':$(ds.get(2)).attr("id").match(/\d+/g)%10+1,
				'y':Math.floor($(ds.get(2)).attr("id").match(/\d+/g)/10+1)
			},
			{
				'x':$(ds.get(3)).attr("id").match(/\d+/g)%10+1,
				'y':Math.floor($(ds.get(3)).attr("id").match(/\d+/g)/10+1)
			}
	];
	},
	isClickMove:function(data){
		var fall_x_y = diamondsObj.getFallXY();
		for(var i=0;i<fall_x_y.length;i++){
			if(data.x==fall_x_y[i].x&&(data.y==fall_x_y[i].y||data.y==fall_x_y[i].y-2||data.y==fall_x_y[i].y-1)){
				//alert("data.x = "+data.x+"fall_x_y["+i+"].x="+fall_x_y[i].x);
				return true;
			}
		}
		return false;
	},
	isClickUP:function(data){
		var fall_x_y = diamondsObj.getFallXY();
		for(var i=0;i<fall_x_y.length;i++){
			if(data.y<diamondsObj.fullYTop(fall_x_y)-1){
				//alert("data.x = "+data.x+"fall_x_y["+i+"].x="+fall_x_y[i].x);
				return true;
			}
		}
		return false;
	},
	isClickDOWN:function(data){
		var fall_x_y = diamondsObj.getFallXY();
		for(var i=0;i<fall_x_y.length;i++){
			if(data.x==fall_x_y[i].x&&data.y>fall_x_y[i].y){
				//alert("data.x = "+data.x+"fall_x_y["+i+"].x="+fall_x_y[i].x);
				return true;
			}
		}
		return false;
	},
	isClickLEFT:function(data){
		var fall_x_y = diamondsObj.getFallXY();
		for(var i=0;i<fall_x_y.length;i++){
			if(data.x<fall_x_y[i].x&&data.y>=fall_x_y[i].y){
				//alert("data.x = "+data.x+"fall_x_y["+i+"].x="+fall_x_y[i].x);
				return true;
			}
		}
		return false;
	},
	isClickRIGHT:function(data){
		var fall_x_y = diamondsObj.getFallXY();
		for(var i=0;i<fall_x_y.length;i++){
			if(data.x>fall_x_y[i].x&&data.y>=fall_x_y[i].y){
				//alert("data.x = "+data.x+"fall_x_y["+i+"].x="+fall_x_y[i].x);
				return true;
			}
		}
		return false;
		
	},
	enumOperation:function(clickObj){
		if(diamondsObj.isClickMove(clickObj)){
			return keyBorder.ctrl;
		}else if(diamondsObj.isClickDOWN(clickObj)){
			return keyBorder.down;
		}else if(diamondsObj.isClickUP(clickObj)){
			return keyBorder.up;
		}else if(diamondsObj.isClickLEFT(clickObj)){
			return keyBorder.left;
		}else if(diamondsObj.isClickRIGHT(clickObj)){
			return keyBorder.right;
		} 
		
	},
	fullYTop:function(data){
		for(var i=0;i<data.length;i++){
			for(var k=0;k<data.length-1;k++){
				if(data[i].y>data[k+1].y){
					var temp = data[i];
					data[i]=data[k+1];
					data[k+1]=temp;
				}
			}
		}
		return data[0].y;
	}
};

/**
 * 键盘处理
 * 
 */
var keyBorder = {
	up : 38,
	left : 37,
	down : 40,
	right : 39,
	shift : 16,
	enter : 13,
	space : 32,
	ctrl : 17,
	w : 87,
	a : 65,
	s : 83,
	d : 68
};
