$(function(){
	$(".content").hide();
	$("#recordContent").show();
	getDate();
	initDate();
	initRecordTable();
	initPanel();
	$("#nav li").click(function(){
		var menuName = $(this).attr("id");
		$("#nav li").removeClass("active");
		$(this).addClass("active");
		$(".content").hide();
		$("#"+menuName+"Content").show();
	});
	//添加日程
	$("#addSchedule").click(function(){
		initScheduleHtml();
		showScheduleForm();
	});
	$("#addCheat").click(function(){
		initCheat();
		showCheat();
	});
	$("#addAccount").click(function(){
		initAccount();
		showAccount();
	});
	$("#closeEdit").click(function(){
		$("#schedule").removeClass("col-lg-6").removeClass("col-lg-12").addClass("col-lg-12");
		$("#edit").hide();
	});
});



