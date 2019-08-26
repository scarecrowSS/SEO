$(document).ready(function () {

	let overflowVisible = false;

	$(".action").on("click", function() {
		if(overflowVisible == false) {
			$(".overflow").addClass("overflow_status_visible");
			overflowVisible = true;
		}
	});

	$(".close-btn").on("click", function() {
		if(overflowVisible == true) {
			$(".overflow").removeClass("overflow_status_visible");
			overflowVisible = false;
		}
	});


});