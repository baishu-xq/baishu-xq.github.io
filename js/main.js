$(function(){
	$("footer .footer-bot .about-link .link-tit").on('click', function() {
		if ($(this).siblings('.sub-box').is(':hidden')) {
			$(this).siblings('.sub-box').stop().slideDown();
		}else{
			$(this).siblings('.sub-box').stop().slideUp();
		}
	});

	$("footer dt").on('click', function() {
		if ($(this).siblings('dd').is(':hidden')) {
			$(this).siblings('dd').stop().slideDown().parent("dl").siblings('dl').children('dd').stop().slideUp();
		};
	});

	$("header .s-navbtn").on('click', function() {
		if ($(this).hasClass('hover')) {
			$(this).removeClass('hover');
			$(this).find('.line-top,.line-bot').transition({rotate: 0}, 200);
			$(this).find('.line-cent').stop().fadeIn(300);
			$(".m-header-sub").stop().fadeOut();
		}else{
			$(this).addClass('hover');
			$(this).find('.line-top').transition({rotate: 45}, 200);
			$(this).find('.line-bot').transition({rotate: -45}, 200);
			$(this).find('.line-cent').stop().fadeOut(300);
			$(".m-header-sub").stop().fadeIn();
		}
	});

	$(window).scroll(function() {
		if ($(window).scrollTop() > 0) {
			$('.header-main-wrap').addClass('fixed');
		}else{
			$('.header-main-wrap').removeClass('fixed');
		}
	});
	if ($(window).scrollTop() > 0) {
		$('.header-main-wrap').addClass('fixed');
	}else{
		$('.header-main-wrap').removeClass('fixed');
	}
	
	$("header .nav li.subli").on('click', function() {
		if ($(".header-sub").is(':hidden')) {
			var n = $(this).index()-1;
			$(".header-sub").stop(true,true).show(1,function(){
				$(".header-sub .sub-list").eq(n).stop(true,true).slideDown(800);
			});
		}else{
			$(".header-sub").stop(true,true).slideUp(800,function(){
				$(".header-sub .sub-list").hide();
			});
		}
	});
	$("header .nav li.subli").hover(function() {
		if (!$(".header-sub").is(':hidden')){
			var n = $(this).index()-1;
			$(".header-sub .sub-list").eq(n).stop(true,true).show().siblings('.sub-list').hide();
		}
	});

	$("header .nav li").hover(function() {
		$(this).addClass('hover').siblings('li').removeClass('hover');
	},function(){
		
	});
	// $("header .header-sub").hover(function() {
	// 	$(this).show();
	// 	var n = $("header .nav li.subli.hover").index()-1;
	// 	$(".header-sub .sub-list").eq(n).stop(true,true).show().siblings('.sub-list').hide();
	// }, function() {
	// 	$("header .header-sub,.header-sub .sub-list").stop(true,true).hide();
	// 	$("header .nav li.subli").removeClass('hover');
	// });
	$("header").hover(function() {
		
	},function(){
		$("header .nav li").removeClass('hover');
	});

	$(".m-header-sub .nav-list .first").on('click', function() {
		if ($(this).siblings('dl').is(':hidden')) {
			$(this).siblings('dl').stop().slideDown().parent("li").siblings('').children('dl').stop().slideUp();
		}else{
			$(this).siblings('dl').stop().slideUp();
		}
	});

	$("header .right-link .search-btn,header .m-search-btn").on('click', function() {
		$(".search-bg,.searchbox,.close-search").stop().fadeIn();
	});
	$(".close-search").on('click', function() {
		$(".search-bg,.searchbox,.close-search").stop().fadeOut();
	});

	$(".m-ins-nav .right .tit").on('click', function() {
		if ($(this).siblings('.subbox').is(':hidden')) {
			$(this).siblings('.subbox').stop().slideDown();
			$(".black-bg-nav").stop().show();
		}else{
			$(this).siblings('.subbox').stop().slideUp();
			$(".black-bg-nav").stop().hide();
		}
	});
});
var isIE = function(){
	if ((navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/7./i)=="7.") || (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i)=="8.") || (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/9./i)=="9.")) {
		return true;
	}else{
		return false;
	}
}