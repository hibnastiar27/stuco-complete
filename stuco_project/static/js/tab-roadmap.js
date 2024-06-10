$(document).ready(function () {
	$("#role").click(function () {
		$("#role").addClass("active");
		$("#skill").removeClass("active");
		$("#best").removeClass("active");

		$("#role-content").removeClass("hidden");
		$("#skill-content").addClass("hidden");
		$("#best-content").addClass("hidden");
	});
	$("#skill").click(function () {
		$("#role").removeClass("active");
		$("#skill").addClass("active");
		$("#best").removeClass("active");

		$("#role-content").addClass("hidden");
		$("#skill-content").removeClass("hidden");
		$("#best-content").addClass("hidden");
	});
	$("#best").click(function () {
		$("#role").removeClass("active");
		$("#skill").removeClass("active");
		$("#best").addClass("active");

		$("#role-content").addClass("hidden");
		$("#skill-content").addClass("hidden");
		$("#best-content").removeClass("hidden");
	});
});
