$().ready(function(){
    $("#pause_start").unbind("click");
    $("#pause_start").bind("click", function(){
    	if(!diamondsObj.isRunning){
    		diamondsObj.start();
    		diamondsObj.isRunning=true;
    	}
		
    });
    $("#history_btn").unbind("click");
    $("#history_btn").bind("click", function(){
    	//alert(diamondsObj.recordTime());
    });
});
//触发键盘事件处理
function keyDown(e){
	 
    var eventObj = window.event || e;
    //alert(eventObj);
    var keycode = eventObj.keyCode;
    switch (keycode) {
        case keyBorder.up:
        case keyBorder.w:
        case keyBorder.space:
        	diamondsObj.pause();
            return false;
        case keyBorder.down:
        case keyBorder.s:
        	diamondsObj.setSpeed(10);
        	 return false;
        case keyBorder.left:
        case keyBorder.a:
           diamondsObj.toLeft();
		   diamondsObj.showFallDiamonds();
		   return false;
        case keyBorder.right:
        case keyBorder.d:
             diamondsObj.toRight();
			 diamondsObj.showFallDiamonds();
			 return false;
        case keyBorder.ctrl:
          diamondsObj.changeDir();
          return false;
    }

}

document.onkeydown = keyDown;
