$(document).ready(function () {
	$(".silabus").click(function () {
		var answer = $(this).next(".content");
		$(".content").not(answer).slideUp();
		answer.slideToggle();
	});
});
