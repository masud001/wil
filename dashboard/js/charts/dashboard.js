$(document).ready(function () {
	// js for balances__item btn
	$(".balances__item").click(function () {
		$(this).toggleClass("balances__item_design");
	});
	// container full/short on click function
	$(".balances__item").click(function () {
		var columns_container = $(".dynamic-columns");
		if (!columns_container.hasClass("expanded")) {
			$(".balances_chart_toggle").removeClass("col-lg-9");
			$(".balances_chart_toggle").addClass("col-lg-7 offset-lg-2");
			$(".balances_chart_toggle_combo").removeClass("col-lg-12");
			$(".balances_chart_toggle_combo").addClass("col-lg-10 offset-lg-2");
			// card text alignment
			$(".single__wizards span.h6").removeClass("align-self-end");
			$(".single__wizards span.h6").addClass("align-self-center");
			columns_container.toggleClass("expanded");
		} else {
			$(".balances_chart_toggle").removeClass("col-lg-7 offset-lg-2");
			$(".balances_chart_toggle").addClass("col-lg-9");
			$(".balances_chart_toggle_combo").removeClass(
				"col-lg-10 offset-lg-2"
			);
			$(".balances_chart_toggle_combo").addClass("col-lg-12");
			// card text alignment
			$(".single__wizards span.h6").addClass("align-self-end");
			$(".single__wizards span.h6").removeClass("align-self-center");
			columns_container.toggleClass("expanded");
		}
	});

	// setting__tools_area hide / show
	$(".first_menu").click(function () {
		let setting__tools_area = $(".setting__tools_area");
		setting__tools_area.addClass("visible");
		setting__tools_area.removeClass("invisible");
	});
	$(".second_menu").click(function () {
		let setting__tools_area = $(".setting__tools_area");
		setting__tools_area.addClass("invisible");
		setting__tools_area.removeClass("visible");
	});

	// datepicker js

	// $("#datetimepicker01").datetimepicker();
	$("#datetimepicker02").datetimepicker();
});
