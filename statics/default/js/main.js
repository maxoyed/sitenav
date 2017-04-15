$(document).ready(function(){
	$(".list_item").click(function(){
		$(this).siblings().attr("id", "");
		$(this).attr("id", "active");
		$(".list_title").attr("id", "list_title");
		var name = $(this).attr("name");
		$("#"+name).css("display", "flex");
		$("#"+name).siblings().css("display", "none");
	});
});