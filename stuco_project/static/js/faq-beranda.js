$(document).ready(function () {
	$(".faq-question").click(function () {
		var answer = $(this).next(".content");
		$(".content").not(answer).slideUp();
		answer.slideToggle();
	});
});
