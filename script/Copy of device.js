$().ready(function(){
	//戳中空白区域
	$(".back_center_nothing").unbind("mousedown");
	$(".back_center_nothing").bind("mousedown",function(){
		var clickLocation = diamondsObj.getClickXY(this);
		//var fallLocation = diamondsObj.getFallXY();
		//alert(fallLocation.fallX+"\n"+fallLocation.fallY);
		//如果点击到下落的方块就变形
		switch(diamondsObj.enumOperation(clickLocation)){
		//up pause
		case 38:
		case 87:
		case 32:	
			diamondsObj.pause();
			return false;
		//left
		case 65:
		case 37:
			   diamondsObj.toLeft();
			   diamondsObj.showFallDiamonds();
			return false;
		//down
		case 83:
		case 40:
			diamondsObj.setSpeed(10);
			return false;
			//right
		case 68:
		case 39:
		     diamondsObj.toRight();
			 diamondsObj.showFallDiamonds();
			return false;
		//control
		case 17:
			diamondsObj.changeDir();
			return false;
		}
	
	});
	//戳中下落的方块
//	$(".back_center_diamonds").unbind("click");
//	$(".back_center_diamonds").bind("click",function(){
//		  diamond(Obj.changeDir());
//	});
});