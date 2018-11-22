var today = new Array('日','一','二','三','四','五','六');
var date = new Date();
var curDate,curYear,curMonth,curDay,curWeek;
var curMonthFirstDate,curMonthLastDate,curStartDate,curEndDate,firstDateWeek;
//计算日历的第一天和最后一天
function initDate(){
	//当前月的第一天
	curMonthFirstDate = new Date(curDate.getTime());
	curMonthFirstDate.setDate(1);
	//当前月第一天星期
	firstDateWeek = curMonthFirstDate.getDay();
	//当前月日历第一天
	curStartDate = new Date(curDate.getTime());
	//如果星期不为0 即 不为星期日 当月日历第一天不是当前天
		curStartDate.setDate(1);
		curStartDate.setDate(-(firstDateWeek-1));
//	if(firstDateWeek !=0){
//	}
	var ddate = getLastDate(curYear,curMonth);
	curMonthLastDate = new Date(curDate.getTime());
	curMonthLastDate.setDate(ddate);
//	console.log(firstDateWeek);
//	console.log(curStartDate.getMonth()+1+"/"+curStartDate.getDate());
//	console.log(curMonthFirstDate.getMonth()+1+"/"+curMonthFirstDate.getDate());
//	console.log(curMonthLastDate.getMonth()+1+"/"+curMonthLastDate.getDate());
	
}
//当前日历的时间
function getDate(interval,number){
	if(interval== undefined || interval == null || interval == ''){
		
	}else{
		switch (interval) {
		    case "y": {
		        date.setFullYear(date.getFullYear() + number);
		        break;
		    }
		    case "q": {
		        date.setMonth(date.getMonth() + number * 3);
		        break;
		    }
		    case "m": {
		        date.setMonth(date.getMonth() + number);
		        break;
		    }
		    case "w": {
		        date.setDate(date.getDate() + number * 7);
		        break;
		    }
		    case "d": {
		        date.setDate(date.getDate() + number);
		        break;
		    }
		    case "h": {
		        date.setHours(date.getHours() + number);
		        break;
		    }
		    case "m": {
		        date.setMinutes(date.getMinutes() + number);
		        break;
		    }
		    case "s": {
		        date.setSeconds(date.getSeconds() + number);
		        break;
		    }
		    default: {
		        date.setDate(d.getDate() + number);
		        break;
		    }
    	}
	}
	curDate = date;
	curYear = date.getFullYear();//得到当前日期年份
	curMonth = date.getMonth() + 1;//得到当前日期月份（注意： getMonth()方法一月为 0, 二月为 1, 以此类推。）
	curMonth = (curMonth<10 ? "0"+curMonth:curMonth);//10月以下的月份自动加0
	curDay = date.getDate();//得到当前某日日期（1-31）
	curWeek = date.getDay();
//	console.log(curMonth+"-"+curDay);
	return date;
}

function initRecordTable(){
	var tableCaption = "<caption>"
						+"<button type=\"button\" class=\"btn btn-info captionLeft\" data-toggle=\"button\" onclick='getLeft()'>-</button>"
						+curYear+"年"+curMonth+"月"
						+"<button type=\"button\" class=\"btn btn-info captionRight\" data-toggle=\"button\" onclick='getRight()'>+</button>"
						+"</caption>";
	$("#recordContent").find("table").html(tableCaption);
	//星期
	var thead = "<thead>"
				+"<tr>";
	for(var i=0;i<today.length;i++){
		var weekClass = "info";
		if(i==0 || i==6){
			weekClass = "warning";
		}
		thead += "<td class='"+weekClass+"'>"+today[i]+"</td>";
	}
	thead +="</tr>"
			+"</thead>";
	var dateTmp = new Date();
	var todayClass = "";
	//上月尾巴
	var table = "<tr>";
	if(curStartDate<curMonthFirstDate){
		var week = curStartDate.getDay();
		for(var i=curStartDate.getDate();i<=getLastDate(curStartDate.getYear(),curStartDate.getMonth()+1);i++){
			var weekClass = "info";
			if(week==0 || week==6){
				weekClass = "warning";
			}
			if(curStartDate.getFullYear()==dateTmp.getFullYear() && curStartDate.getMonth()==dateTmp.getMonth() && i == dateTmp.getDate()){
				todayClass = "red";
			}else{
				todayClass = "gray";
			}
			var monthTemp = curStartDate.getMonth()+1;
			monthTemp = (monthTemp<10 ? "0"+monthTemp:monthTemp);
			var id = curStartDate.getFullYear()+"/"+monthTemp+"/"+(i<10 ? "0"+i:i);
			table+= "<td class=' "+todayClass+" "+weekClass+"' id='"+id+"' onclick='getDataInfo(\""+id+"\")'>"+(i)+"</td>"
			if(week==6){
				table += "</tr>";
				week = 0;
			}else{
				week++;
			}
		}
		
	}
	//当月
	var week = curMonthFirstDate.getDay();
	for(var i=curMonthFirstDate.getDate();i<=curMonthLastDate.getDate();i++){
//		console.log(i);console.log(week);
		var weekClass = "info";
		if(week==0 || week==6){
			weekClass = "warning";
		}
		if(curMonthFirstDate.getFullYear()==dateTmp.getFullYear() && curMonthFirstDate.getMonth()==dateTmp.getMonth() && i == dateTmp.getDate()){
			todayClass = "red";
		}else{
			todayClass = "";
		}
		var monthTemp = curMonthFirstDate.getMonth()+1;
		monthTemp = (monthTemp<10 ? "0"+monthTemp:monthTemp);
		var id = +curMonthFirstDate.getFullYear()+"/"+monthTemp+"/"+(i<10 ? "0"+i:i);
		table+= "<td class=' "+todayClass+" "+weekClass+"' id='"+id+"' onclick='getDataInfo(\""+id+"\")'>"+(i)+"</td>"
		if(week==6){
			table += "</tr>";
			week = 0;
		}else{
			week++;
		}
	}
	//下个月的开始
	var num = 1;
	for(var i =week;i <= 6 && week !=0;i++){
		var weekClass = "info";
		if(i==0 || i==6){
			weekClass = "warning";
		}
		var day = num++;
		var nextMonth = curMonthFirstDate.getMonth()+2;
		var nextYear = curMonthFirstDate.getFullYear();
		if(nextMonth == 13){
			nextMonth = 1;
			nextYear = nextYear+1;
		}
		nextMonth = (nextMonth<10 ? "0"+nextMonth:nextMonth);
		if(nextYear==dateTmp.getFullYear() && nextMonth==dateTmp.getMonth() && day == dateTmp.getDate()){
			todayClass = "red";
		}else{
			todayClass = "gray";
		}
		var id = nextYear+"/"+nextMonth+"/"+(day<10 ? "0"+day:day);
		table+= "<td class=' "+todayClass+" "+weekClass+"' id='"+id+"' onclick='getDataInfo(\""+id+"\")'>"+(day)+"</td>"
	}
	thead +="</tr>"
	$("#recordContent").find("caption").after(thead+table);
}

function getLeft(){
	//减法
	getDate('m',-1);
	initDate();
	initRecordTable();
}
function getRight(){
	//减法
	getDate('m',1);
	initDate();
	initRecordTable();
}

function getDataInfo(dataId){
	initPanel();
	if(dataId != undefined && dataId != null && dataId != ""){
		$("#myRecordLabel").html(dataId);
		$('#collapseOne').collapse('show');
		$('#collapseTwo').collapse('hide');
		$('#collapseThree').collapse('hide');
		
		$('#myRecord').modal('show');
	}
}

function initPanel(){
	$("#schedule").removeClass("col-lg-6");
	$("#schedule").addClass("col-lg-12");
	$("#edit").hide();
}
function initScheduleHtml(){
	var html = "";
	html ="<div class=\"form-horizontal\" role=\"form\">"
		//事件标题
		+"<div class=\"col-lg-12 paddingBotton10\">"
			+"<input type=\"text\" class=\"form-control\" id=\"eventName\" placeholder=\"请输入事件标题\">"
		+"</div>"
		//事件主题
		+"<div class=\"col-lg-12 paddingBotton10\">"
			+"<div class=\"switch\"  id=\"theme\">"
			+"启用主题<input type=\"checkbox\" value=\"2\"/>"
			+"</div>"
		+"</div>"
		//主题下拉
		+"<div class=\"col-lg-12 paddingBotton10\"  id=\"scheduleThemeSelect\" >"
//			+"<div class=\"radio\">"
//			+"<label><input type=\"radio\" name=\"scheduleTheme\" id=\"scheduleTheme1\" value=\"1\">猫咪</label>"
//			+"<label><input type=\"radio\" name=\"scheduleTheme\" id=\"scheduleThemeOther\" value=\"other\"><input id=\"newTheme\" placeholder=\"请输入新主题\"/></label>"
//			+"</div>"
			+"<select class=\"form-control\" onchange=\"changetheme(this)\">"
			+"<option value='1'>猫咪</option>"
			+"<option value='other'>其他</option>"
			+"</select>"
		+"</div>"
		//新主题
		+"<div class=\"col-lg-12 paddingBotton10\"  id=\"otherThemeDiv\" >"
		+"<input id=\"newTheme\" class=\"form-control\" placeholder=\"请输入新主题\"/>"
		+"</div>"
		//全天事件
		+"<div class=\"col-lg-12 paddingBotton10\">"
			+"<div class=\"switch\"  id=\"eventType\">"
			+"全天事件<input type=\"checkbox\" id=\"isAllDay\" value=\"2\"/>"
			+"</div>"
		+"</div>"
		//事件开始时间
		+"<div class=\"col-lg-12 paddingBotton10\">"
			+"<input type=\"text\"  class=\"form-control\" id=\"startRecordTime\" placeholder=\"开始时间\">"
		+"</div>"
		//事件结束时间
		+"<div class=\"col-lg-12 paddingBotton10\">"
			+"<input type=\"text\"  class=\"form-control\" id=\"endRecordTime\" placeholder=\"结束时间\">"
		+"</div>"
		//提醒
//		+"<div class=\"col-lg-12 paddingBotton10\">"
//			+"<div class=\"switch\"  id=\"remind\">"
//			+"提醒<input type=\"checkbox\" />"
//			+"</div>"
//		+"</div>"
		//提醒时间
//		+"<div class=\"col-lg-12 paddingBotton10\" id=\"remindSelect\">"
//			+"<select class=\"form-control\">"
//			+"<option>活动开始前</option>"
//			+"<option>5分钟前</option>"
//			+"<option>10分钟前</option>"
//			+"<option>15分钟前</option>"
//			+"<option>30分钟前</option>"
//			+"<option>1小时前</option>"
//			+"<option>1天前</option>"
//			+"<option>2天前</option>"
//			+"<option>1周前</option>"
//			+"</select>"
//		+"</div>"
		//重复
		+"<div class=\"col-lg-12 paddingBotton10\">"
			+"<div class=\"switch\"  id=\"repeat\">"
			+"重复<input type=\"checkbox\" value=\"2\"/>"
			+"</div>"
		+"</div>"
		//重复规则
		+"<div class=\"col-lg-12 paddingBotton10\" id=\"repeatSelect\">"
			+"<select class=\"form-control\">"
			+"<option value='1'>每天</option>"
			+"<option value='2'>每个工作日(周一至周五)</option>"
			+"<option value='3'>每周</option>"
			+"<option value='4'>每月</option>"
			+"<option value='5'>每年</option>"
//			+"<option>自定义</option>"
			+"</select>"
		+"</div>"
		//备注
		+"<div class=\"col-lg-12 paddingBotton10\">"
			+"<textarea class=\"form-control\" rows=\"3\" placeholder=\"请输入备注\" id = \"remmark\"></textarea>"
		+"</div>"
		//保存按钮
		+"<div class=\"col-lg-12 paddingTop10\" style=\"text-align: center;\">"
			+"<button type=\"button\" class=\"btn btn-default\">取消</button>"
			+"&nbsp;&nbsp;&nbsp;&nbsp;"
			+"<button type=\"button\" onclick=\"saveSchedule()\" class=\"btn btn-default\">保存</button>"
		+"</div>"
		+"</div>";
	$("#edit").find(".panel-body").html(html);
//	$("#schedule").removeClass("col-lg-12").removeClass("col-lg-6").addClass("col-lg-6");
//	$("#editTitle").html("添加日程");
//	$("#addScheduleThemeRadio").hide();
//	$("#edit").show();
}
function showScheduleForm(){
	$('#theme input').bootstrapSwitch("destroy");
	$('#eventType input').bootstrapSwitch("destroy");
//	$('#remind input').bootstrapSwitch("destroy");
	$('#repeat input').bootstrapSwitch("destroy");
	//选择主题
	$('#theme input').bootstrapSwitch({
		state:false,
		onText:"<i class='glyphicon glyphicon-ok'></i>",
		offText:"",
		onColor:"success",
		offColor:"default",
		size:"mini",
		onSwitchChange:function(event,state){
			if(state==true){
				$(this).val("1");
				$("#scheduleThemeSelect").show();
			}else{
				$(this).val("2");
				$("#scheduleThemeSelect").hide();
			}
			$("#otherThemeDiv").hide();
			$("#newTheme").val('');
			$("#scheduleThemeSelect select").find("option").first().attr('selected',true);
		}
	});
	//是否为全天事件
	$("#eventType input").bootstrapSwitch({
		state:false,
		onText:"<i class='glyphicon glyphicon-ok'></i>",
		offText:"",
		onColor:"success",
		offColor:"default",
		size:"mini",
		onSwitchChange:function(event,state){
			$('#startRecordTime').datetimepicker('remove');
			$('#endRecordTime').datetimepicker('remove');
			if(state==true){
				$(this).val("1");
				changeDateTimePicker('allDay','startRecordTime');
				changeDateTimePicker('allDay','endRecordTime');
			}else{
				$(this).val("2");
				changeDateTimePicker('','startRecordTime');
				changeDateTimePicker('','endRecordTime');
			}
		}
	});
	//提醒
//	$("#remind input").bootstrapSwitch({
//		state:false,
//		onText:"<i class='glyphicon glyphicon-ok'></i>",
//		offText:"",
//		onColor:"success",
//		offColor:"default",
//		size:"mini",
//		onSwitchChange:function(event,state){
//			if(state==true){
//				$(this).val("1");
//				$("#remindSelect").show();
//			}else{
//				$(this).val("2");
//				$("#remindSelect").hide();
//			}
//		}
//	});
	//重复
	$("#repeat input").bootstrapSwitch({
		state:false,
		onText:"<i class='glyphicon glyphicon-ok'></i>",
		offText:"",
		onColor:"success",
		offColor:"default",
		size:"mini",
		onSwitchChange:function(event,state){
			if(state==true){
				$(this).val("1");
				$("#repeatSelect").show();
			}else{
				$(this).val("2");
				$("#repeatSelect").hide();
			}
			$("#repeatSelect select").find("option").first().attr("selected",true);
		}
	});
	$("#scheduleThemeSelect").hide();
	$("#repeatSelect").hide();
	$("#remindSelect").hide();
	$("#otherThemeDiv").hide();
	changeDateTimePicker('','startRecordTime');
	changeDateTimePicker('','endRecordTime');
	
	$("#schedule").removeClass("col-lg-12").removeClass("col-lg-6").addClass("col-lg-6");
	$("#editTitle").html("添加日程");
	$("#addScheduleThemeRadio").hide();
	$("#collapseOne").removeClass("in").addClass("in");
	$("#collapseTwo").removeClass("in");
	$("#collapseThree").removeClass("in");
	$("#edit").show();
}
function changetheme(obj){
	var changeVal = $(obj).val();
	if(changeVal == 'other'){
		$("#otherThemeDiv").show();
	}else{
		$("#otherThemeDiv").hide();
	}
}
function saveSchedule(){
	console.log('saveSchedule');
	//日程添加时间
	var eventDate = $("#myRecordLabel").html();
	//事件名称
	var eventName = $("#eventName").val();
	//是否启用主题
	var isTheme = $("#theme input").val();
	//已存在主题id
	var themeId = $("#scheduleThemeSelect select").val();
	//自定义主题名称
	var otherThmeName = $("#newTheme").val();
	//是否为全天事件
	var isAllDay = $("#eventType input[type='checkbox']").val();
	//开始时间
	var startRecordTime = $("#startRecordTime").val();
	//结束时间
	var endRecordTime = $("#endRecordTime").val();
	//是否重复
	var repeat = $("#repeat input").val();
	var repeatOpt = $("#repeatSelect select").val();
	if(isTheme == 1){
		//启用主题
	}
}
function getLastDate(year,mon){
	//当前月最后一天
	var isrun=year%400==0||(year%4==0&year%100!=0); //是否闰年
	var ddate=30;//月末日期,默认30号
	if(mon==1||mon==3||mon==5||mon==7||mon==8||mon==10||mon==12){
	ddate=31; //大月31号
	}else if(mon==2){ //二月
	ddate=isrun?29:28; //闰年29号,平年28号
	}
	return ddate;
}
function initCheat(){
	var html = "";
	html ="<form class=\"form-horizontal\" role=\"form\">"
		//事件主题
		+"<div class=\"col-lg-12 paddingBotton10\">"
			+"<div class=\"switch\"  id=\"cheatTheme\">"
			+"启用主题<input type=\"checkbox\" />"
			+"</div>"
		+"</div>"
		//主题redio
		+"<div class=\"col-lg-12 paddingBotton10\"  id=\"addCheatThemeRadio\" >"
			+"<div class=\"radio\">"
			+"<label><input type=\"radio\" name=\"scheduleTheme\" id=\"cheatTheme1\" value=\"1\">猫咪</label>"
			+"<label><input type=\"radio\" name=\"scheduleTheme\" id=\"cheatThemeOther\" value=\"other\"><input id=\"newTheme\" placeholder=\"请输入新主题\"/></label>"
			+"</div>"
		+"</div>"
		+"<div class=\"col-lg-12 paddingBotton10\" style=\"padding-left: 0px;padding-right: 0px;\">"
		+"<textarea id=\"summernote\" name=\"editordata\"></textarea>"
		+"</div>"
		//保存按钮
		+"<div class=\"col-lg-12 paddingTop10\" style=\"text-align: center;\">"
			+"<button type=\"button\" class=\"btn btn-default\">取消</button>"
			+"&nbsp;&nbsp;&nbsp;&nbsp;"
			+"<button type=\"button\" onclick=\"saveCheat()\" class=\"btn btn-default\">保存</button>"
		+"</div>"
		+"</form>";
	$("#edit").find(".panel-body").html(html);
	$('#summernote').summernote('destroy');
	$('#cheatTheme input').bootstrapSwitch("destroy");
	$('#summernote').summernote({
        placeholder: '请输入备忘内容',
        focus: true,
        height: 200,
        lang: 'zh-CN'
      });
      //选择主题
	$('#cheatTheme input').bootstrapSwitch({
		state:false,
		onText:"<i class='glyphicon glyphicon-ok'></i>",
		offText:"",
		onColor:"success",
		offColor:"default",
		size:"mini",
		onSwitchChange:function(event,state){
			if(state==true){
				$(this).val("1");
				$("#addCheatThemeRadio").show();
			}else{
				$(this).val("2");
				$("#addCheatThemeRadio").hide();
			}
		}
	});
	$("#addCheatThemeRadio").hide();
}
function showCheat(){
	$("#schedule").removeClass("col-lg-12").removeClass("col-lg-6").addClass("col-lg-6");
	$("#editTitle").html("添加备忘");
	$("#collapseOne").removeClass("in");
	$("#collapseTwo").removeClass("in").addClass("in");
	$("#collapseThree").removeClass("in");
	$("#edit").show();
}
function saveCheat(){
	var markupStr = $('#summernote').summernote('code');
	console.log(markupStr);
}
function initAccount(){
	var html = "";
	html ="<form class=\"form-horizontal\" role=\"form\">"
	//账单类型
		+"<div class=\"col-lg-12 paddingBotton10\" id=\"accountType\">"
			+"<select class=\"form-control\">"
			+"<option>收入</option>"
			+"<option>支出</option>"
			+"</select>"
		+"</div>"
		//事件主题
		+"<div class=\"col-lg-12 paddingBotton10\">"
			+"<div class=\"switch\"  id=\"theme\">"
			+"启用主题<input type=\"checkbox\" />"
			+"</div>"
		+"</div>"
		//主题redio
		+"<div class=\"col-lg-12 paddingBotton10\"  id=\"addAccountThemeRadio\" >"
			+"<div class=\"radio\">"
			+"<label><input type=\"radio\" name=\"scheduleTheme\" id=\"accountTheme1\" value=\"1\">猫咪</label>"
			+"<label><input type=\"radio\" name=\"scheduleTheme\" id=\"accountThemeOther\" value=\"other\"></label>"
			+"</div>"
		+"</div>"
		//新增主题
		+"<div class=\"col-lg-12 paddingBotton10\">"
			+"</div>"
		+"</div>"
		//金额
		+"<div class=\"col-lg-12 paddingBotton10\">"
			+"<input type=\"text\" class=\"form-control\" id=\"accountMoney\" placeholder=\"请输入金额\">"
		+"</div>"
		+"</form>";
	$("#edit").find(".panel-body").html(html);
}
function showAccount(){
	$("#schedule").removeClass("col-lg-12").removeClass("col-lg-6").addClass("col-lg-6");
	$("#editTitle").html("添加账单");
	$("#collapseOne").removeClass("in");
	$("#collapseTwo").removeClass("in")
	$("#collapseThree").removeClass("in").addClass("in");;
	$("#edit").show();
}
function changeDateTimePicker(type,id,dateStr){
	var myRecordLabel = $("#myRecordLabel").html();
	var splitRecordDate = myRecordLabel.split('/');
	var initDate = new Date();
	var initYear = splitRecordDate[0];
	var initMonth = splitRecordDate[1];
//	initMonth = (initMonth<10 ? "0"+initMonth:initMonth);
	var initDay = splitRecordDate[2];
	var initHour = initDate.getHours();
	var initMin = initDate.getMinutes();
	$("#"+id).datetimepicker('remove');
	if(type=='allDay'){
		//使用年月日
		$('#'+id).val(initYear+'-'+initMonth+'-'+initDay);
		$('#'+id).datetimepicker({
			language:  'zh-CN',
			weekStart: 1,
			todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 2,
			minView: 2,
			forceParse: 0,
			format:'yyyy-mm-dd'
		});
	}else{
		$('#'+id).val(initYear+'-'+initMonth+'-'+initDay+' '+initHour+':'+initMin);
		//使用年月日时分
		$('#'+id).datetimepicker({
	        language:  'zh-CN',
	        weekStart: 1,
	        todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 2,
			forceParse: 0,
        	showMeridian: 1,
			format:'yyyy-mm-dd hh:ii'
    	});
	}
}