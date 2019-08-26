$(document).ready(function () {

	let mapStatus = false;

	$(".map-btn").on("click", function() {
		if(mapStatus === false) {
			$(this).find("p").text("Скрыть карту");
			$(".map-container").addClass("visible");
			mapStatus = true;
		}
		else if (mapStatus === true) {
			$(this).find("p").text("Развернуть карту");
			$(".map-container").removeClass("visible");
			mapStatus = false;
		}
	})
})