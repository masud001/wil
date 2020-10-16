var combooChart1 = document.getElementById("comboChart1").getContext("2d");
// var combooChart2 = document.getElementById("comboChart2").getContext("2d");
// var Doughnut = document
// 	.getElementById("comboCompositionChart")
// 	.getContext("2d");
// colors
const comboColors = {
	green: {
		fill: "#59A2CE",
		stroke: "#59A2CE",
	},
	lightBlue: {
		fill: "#FC974B",
		stroke: "#FC974B",
	},
	darkBlue: {
		fill: "#39E96C",
		stroke: "#39E96C",
	},
	purple: {
		fill: "#E84B4B",
		stroke: "#E84B4B",
	},
};

const comboMiscEquity = [
	-240,
	-240,
	-80,
	-40,
	-160,
	-152,
	-144,
	-72,
	-80,
	-72,
	-30,
	-5,
	5,
	30,
	72,
	80,
	72,
	144,
	152,
	160,
	40,
	80,
	240,
	240,
];
const comboNetCash = [
	-15,
	-36,
	-40,
	-36,
	-72,
	-76,
	-80,
	-20,
	-40,
	-120,
	-120,
	15,
	36,
	40,
	36,
	72,
	76,
	80,
	20,
	40,
	120,
	120,
];
const comboInvestments = [
	-10,
	-18,
	-20,
	-18,
	-36,
	-38,
	-40,
	-10,
	-20,
	-60,
	-60,
	10,
	18,
	20,
	18,
	36,
	38,
	40,
	10,
	20,
	60,
	60,
];
const comboHouseEquity = [
	-5,
	-9,
	-10,
	-9,
	-18,
	-19,
	-20,
	-5,
	-10,
	-30,
	-30,
	5,
	9,
	10,
	9,
	18,
	19,
	20,
	5,
	10,
	30,
	30,
];
const comboxData = [
	2010,
	2011,
	2012,
	2013,
	2014,
	2015,
	2016,
	2017,
	2018,
	2019,
	2020,
];

const comboChart1 = new Chart(combooChart1, {
	type: "line",
	data: {
		labels: comboxData,
		datasets: [
			{
				label: "House Equity",
				fill: true,
				backgroundColor: comboColors.purple.fill,
				pointBackgroundColor: comboColors.purple.stroke,
				borderColor: comboColors.purple.stroke,
				pointHighlightStroke: comboColors.purple.stroke,
				borderCapStyle: "butt",
				data: comboHouseEquity,
			},
			{
				label: "Investments",
				fill: true,
				backgroundColor: comboColors.darkBlue.fill,
				pointBackgroundColor: comboColors.darkBlue.stroke,
				borderColor: comboColors.darkBlue.stroke,
				pointHighlightStroke: comboColors.darkBlue.stroke,
				borderCapStyle: "butt",
				data: comboInvestments,
			},
			{
				label: "Net Cash",
				fill: true,
				backgroundColor: comboColors.lightBlue.fill,
				pointBackgroundColor: comboColors.lightBlue.stroke,
				borderColor: comboColors.lightBlue.stroke,
				pointHighlightStroke: comboColors.lightBlue.stroke,
				borderCapStyle: "butt",
				data: comboNetCash,
			},
			{
				label: "MiscEquity",
				fill: true,
				backgroundColor: comboColors.green.fill,
				pointBackgroundColor: comboColors.green.stroke,
				borderColor: comboColors.green.stroke,
				pointHighlightStroke: comboColors.green.stroke,
				data: comboMiscEquity,
			},
		],
	},
	options: {
		tooltips: { enabled: false },
		hover: { mode: null },
		responsive: true,
		elements: {
			point: {
				radius: 0,
			},
		},
		legend: {
			position: "bottom",
			align: "center",
			labels: {
				fontSize: 10,
				boxWidth: 10,
			},
		},
		// Can't just just `stacked: true` like the docs say
		scales: {
			yAxes: [
				{
					ticks: {
						reverse: true,
						beginAtZero: true,
					},
				},
			],
			xAxes: [
				{
					ticks: {
						reverse: true,
						beginAtZero: true,
					},
				},
			],
		},
		animation: {
			duration: 750,
		},
	},
});

// const combodoughnutChart = new Chart(Doughnut, {
// 	type: "doughnut",
// 	data: {
// 		labels: ["HouseEquity", "Investments", "NetCash", "MiscEquity"],
// 		datasets: [
// 			{
// 				label: "Din ledelsesstil",
// 				backgroundColor: ["#E84B4B", "#39E96C", "#FC974B", "#FC974B"],
// 				data: [54, 12, 9, 23],
// 			},
// 		],
// 	},
// 	options: {
// 		tooltips: { enabled: false },
// 		hover: { mode: null },
// 		responsive: true,
// 		legend: {
// 			display: false,
// 		},
// 	},
// });

// const comboMiscEquity2 = [26, 36, 42, 38, 40];
// const comboNetCash2 = [34, 44, 33, 24, 25];
// const comboInvestments2 = [16, 13, 25, 33, 40];
// const comboHouseEquity2 = [5, 9, 10, 9, 18];
// const comboxData2 = [2010, 2011, 2012, 2013, 2014];

// const combomyChart2 = new Chart(combooChart2, {
// 	type: "line",
// 	data: {
// 		labels: comboxData2,
// 		datasets: [
// 			{
// 				label: "House Equity",
// 				fill: true,
// 				backgroundColor: comboColors.purple.fill,
// 				pointBackgroundColor: comboColors.purple.stroke,
// 				borderColor: comboColors.purple.stroke,
// 				pointHighlightStroke: comboColors.purple.stroke,
// 				borderCapStyle: "butt",
// 				data: comboHouseEquity2,
// 			},
// 			{
// 				label: "Investments",
// 				fill: true,
// 				backgroundColor: comboColors.darkBlue.fill,
// 				pointBackgroundColor: comboColors.darkBlue.stroke,
// 				borderColor: comboColors.darkBlue.stroke,
// 				pointHighlightStroke: comboColors.darkBlue.stroke,
// 				borderCapStyle: "butt",
// 				data: comboInvestments2,
// 			},
// 			{
// 				label: "Net Cash",
// 				fill: true,
// 				backgroundColor: comboColors.lightBlue.fill,
// 				pointBackgroundColor: comboColors.lightBlue.stroke,
// 				borderColor: comboColors.lightBlue.stroke,
// 				pointHighlightStroke: comboColors.lightBlue.stroke,
// 				borderCapStyle: "butt",
// 				data: comboNetCash2,
// 			},
// 			{
// 				label: "MiscEquity",
// 				fill: true,
// 				backgroundColor: comboColors.green.fill,
// 				pointBackgroundColor: comboColors.green.stroke,
// 				borderColor: comboColors.green.stroke,
// 				pointHighlightStroke: comboColors.green.stroke,
// 				data: comboMiscEquity2,
// 			},
// 		],
// 	},
// 	options: {
// 		tooltips: { enabled: false },
// 		hover: { mode: null },
// 		responsive: true,
// 		elements: {
// 			point: {
// 				radius: 0,
// 			},
// 		},
// 		legend: {
// 			display: false,
// 		},
// 		// Can't just just `stacked: true` like the docs say
// 		scales: {
// 			yAxes: [
// 				{
// 					stacked: true,
// 				},
// 			],
// 		},
// 		animation: {
// 			duration: 750,
// 		},
// 	},
// });
