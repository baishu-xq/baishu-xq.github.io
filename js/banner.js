function banner(){
	//初始化banner样式
	var listN = $(".banner li").length;
	$(".loader").stop().fadeOut(1000);
	$(".banner li").eq(0).fadeIn(1000);
	for (var i = 0; i < listN; i++) {
		$(".banner .btns").append('<span class="span'+i+' fl"></span>');
		$(".i-ban li").eq(i).addClass('li' + i);
	};
	$(".banner .btns").css("margin-left",-$(".btns").width()/2);
	$(".banner .btns span").eq(0).addClass("cur");
	
	$(".banner").hover(function() {
		$(".banner .butn").stop(true,true).fadeIn(600);
	}, function() {
		$(".banner .butn").stop(true,true).hide();
	});

	// 执行效果
	var sw = 0;
	$(".banner .btns span").mouseover(function(){
		sw = $(this).index();
		myShow(sw);
	});
	function myShow(i){
		$(".banner .btns span").eq(i).addClass("cur").siblings("span").removeClass("cur");
		$(".banner li").eq(i).stop(true,true).fadeIn(1000).siblings().stop(true,true).fadeOut(1000);
	}

	$(".i-ban .btns span").hover(function() {
		var n = $(this).index();
		$(".i-ban li").eq(n).find('.cont-box').stop(true,true).fadeIn(600);
	}, function() {
		$(".i-ban li .cont-box").hide();
	});


	$(".banner .prev").click(function(){
        sw = $(".btns span.cur").index();
        if ( sw == 0){
            sw = $(".btns span").length-1
        }else{
            sw--
        }
        myShow(sw);
    });

    $(".banner .next").click(function(){
      	sw = $(".btns span.cur").index();
        if (sw == $(".btns span").length-1) {
            sw =0
        }else{
            sw++
        };
        myShow(sw);
    });

	// 滑入停止动画，滑出开始动画
	$(".banner .butn").hover(function(){
		if(myTime){
		   clearInterval(myTime);
		}
	},function(){
		clearInterval(myTime);
		myTime = setInterval(function(){
			myShow(sw);
			sw++;
			if(sw == listN){sw = 0;}
		}, 5000);
	});
	// 自动开始, 创建定时器
	var myTime = setInterval(function(){
		myShow(sw);
		sw++;
		if(sw == listN){sw = 0;}
	}, 5000);
}
$(function(){
	var n = $(".banner li").length
	$(".banner li").each(function(){
		var _this = $(this),
			src = _this.attr("data-img"),
			img = new Image();
		img.src = src;
		//处理ff下会自动读取缓存图片
		if(img.complete || img.width){
			_this.attr("style","background:url("+src+") no-repeat center");
			n -- ;
			if(n == 0){
				banner();
			}
		    return;
		}
		$(img).load(function(){
			_this.attr("style","background:url("+src+") no-repeat center");
			n -- ;
			if(n == 0){
				banner();
			}
		});
	})
})