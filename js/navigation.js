$(document).ready(function () {

	let menuStatus = false;

	$(".hamb-btn").on("click", function () {	
		menuStatus = menuStatus === true ? hideMenu() : showMenu();
	});
	
	if ($(window).width() < 769) {

		$(document).mouseup(function (e){ 
			var div = $(".nav, .hamb-btn"); 
			if (!div.is(e.target)) { 
				hideMenu();
				menuStatus = false; 
			};
		});

	};
});

function hideMenu() {
	$(".nav__list").removeClass("nav__list_status_visible");
	return false;
};

function showMenu() {
	$(".nav__list").addClass("nav__list_status_visible");
	return true;
};
