$(document).ready(
		function() {
			var userAgent = navigator.userAgent;
			if(!!navigator.userAgent.match(/AppleWebKit.*Mobile.*/)||!!navigator.userAgent.match(/AppleWebKit/)){
				//是移动端
				
			}else{
				//不是移动端
				changeLeftView();
				changeMessageView();
			}
			function changeLeftView(){
				
				$("#left_view").css("display",'none');
				$("#left_view").attr("class","unknow");
				$("#his1").val("");
				$("#left_view").css("display",'block');
			}
			function changeMessageView(){
				$("#messages").css("display","none");
				$("#messages").attr("class",'deviceView');
			}
			$("#msg_send_btn").unbind("click");
			$("#msg_send_btn")
					.bind(
							"click",
							function() {
								var model = {
										appinfor: navigator.userAgent,
									content : $(
											"textarea[name='msg_txt_input']")
											.val(),
											clearText:function(){
												$(
												"textarea[name='msg_txt_input']")
												.val('');
											},
									appname : function() {
										var coreInfor = this.appinfor;
										if(coreInfor.indexOf('Windows')>-1){
											return 'windows';
										}else if(coreInfor.indexOf('Android')>-1 || coreInfor.indexOf('Linux')>-1){
											return '安卓终端';
										}else if(coreInfor.indexOf('iPhone')>-1 || coreInfor.indexOf('Mac')>-1){
											return '苹果手机端';
										}else if(coreInfor.indexOf('iPad')>-1){
											return 'ipad平板电脑端';
										}else if(!!coreInfor.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
											return 'IOS端';
										}else{
											return '未知';
										}
									},
									showDeviceDIV:function(){
										//alert('device');
									}
								};

								var data = "content=" + model.content + "&"
										+ "appname=" + model.appname()+ "&"
										+ "appinfor=" + model.appinfor;
								$.ajax({
									type : "POST",
									url : "../dao/ReceiveSendMsg.php",
									data : data,
									success : function(msg) {
										//发送成时返回的数据
										model.clearText();
									//alert(msg);
									}
								});
							});
		});
   