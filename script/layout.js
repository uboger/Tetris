$().ready(function(){
    //改变按钮图标
    $("#pause_start").unbind("mouseover");
    $("#pause_start").bind("mouseover", function(){
        $(this).attr("class", "pause_start_over");
        return false;
    });
    $("#pause_start").unbind("mouseout");
    $("#pause_start").bind("mouseout", function(){
        $(this).attr("class", "pause_start_btn");
        return false;
    });
	/**
	 * 下一个方块布局
	 */
	for(var i=0;i<16;i++){
		var $diaDIV = $("<div/>");
		$diaDIV.attr("class","next_right_nothing");
		$diaDIV.attr("id","right"+i);
		$diaDIV.appendTo($("#diamonds"));
	}
		for(var i=0;i<200;i++){
		var $diaDIV = $("<div/>");
		$diaDIV.attr("class","back_center_nothing");
		$diaDIV.attr("id","center"+i);
		$diaDIV.appendTo($("#back_center"));
	}
});
