var assetChart1 = document.getElementById("assetsChart1").getContext("2d");
var assetChart2 = document.getElementById("assetsChart2").getContext("2d");

// colors
const assetsColors = {
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

const assetsMiscEquity = [26, 36, 42, 38, 40, 30, 12, 100, 150, 20, 200];
const assetsNetCash = [34, 44, 33, 24, 25, 28, 25, 10, 50, 60, 30];
const assetsInvestments = [16, 13, 25, 33, 40, 33, 45, 20, 30, 40, 50];
const assetsHouseEquity = [5, 9, 10, 9, 18, 19, 20, 5, 10, 30, 30];
const assetsxData = [
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

const assetsChart1 = new Chart(assetChart1, {
	type: "line",
	data: {
		labels: equityxData,
		datasets: [
			{
				label: "House Equity",
				fill: true,
				backgroundColor: assetsColors.purple.fill,
				pointBackgroundColor: assetsColors.purple.stroke,
				borderColor: assetsColors.purple.stroke,
				pointHighlightStroke: assetsColors.purple.stroke,
				borderCapStyle: "butt",
				data: assetsHouseEquity,
			},
			{
				label: "Investments",
				fill: true,
				backgroundColor: assetsColors.darkBlue.fill,
				pointBackgroundColor: assetsColors.darkBlue.stroke,
				borderColor: assetsColors.darkBlue.stroke,
				pointHighlightStroke: assetsColors.darkBlue.stroke,
				borderCapStyle: "butt",
				data: assetsInvestments,
			},
			{
				label: "Net Cash",
				fill: true,
				backgroundColor: assetsColors.lightBlue.fill,
				pointBackgroundColor: assetsColors.lightBlue.stroke,
				borderColor: assetsColors.lightBlue.stroke,
				pointHighlightStroke: assetsColors.lightBlue.stroke,
				borderCapStyle: "butt",
				data: assetsNetCash,
			},
			{
				label: "MiscEquity",
				fill: true,
				backgroundColor: assetsColors.green.fill,
				pointBackgroundColor: assetsColors.green.stroke,
				borderColor: assetsColors.green.stroke,
				pointHighlightStroke: assetsColors.green.stroke,
				data: assetsMiscEquity,
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
					stacked: true,
				},
			],
		},
		animation: {
			duration: 750,
		},
	},
});

var config3 = {
	type: "doughnut",
	data: {
		labels: ["House", "Invest", "NetCash", "Misc.Equity"],
		datasets: [
			{
				label: "Din ledelsesstil",
				backgroundColor: ["#E84B4B", "#39E96C", "#FC974B", "#3b7193"],
				data: [25, 25, 25, 25],
			},
		],
	},
	options: {
		plugins: {
			labels: {
				// render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
				render: function (args) {
					// args will be something like:
					// { label: 'Label', value: 123, percentage: 50, index: 0, dataset: {...} }
					return args.label + args.value + "%";

					// return object if it is image
					// return { src: 'image.png', width: 16, height: 16 };
				},

				// precision for percentage, default is 0
				precision: 0,
				// identifies whether or not labels of value 0 are displayed, default is false
				showZero: true,

				// font size, default is defaultFontSize
				fontSize: 12,

				// font color, can be color array for each data or function for dynamic color, default is defaultFontColor
				fontColor: ["#E84B4B", "#39E96C", "#FC974B", "#3b7193"],

				// font style, default is defaultFontStyle
				fontStyle: "normal",

				// font family, default is defaultFontFamily
				fontFamily: "'Neuton', serif",

				// draw text shadows under labels, default is false
				textShadow: true,

				// text shadow intensity, default is 6
				shadowBlur: 10,

				// text shadow X offset, default is 3
				shadowOffsetX: -5,

				// text shadow Y offset, default is 3
				shadowOffsetY: 5,

				// text shadow color, default is 'rgba(0,0,0,0.3)'
				// shadowColor: "rgba(255,0,0,0.75)",

				// draw label in arc, default is false
				// bar chart ignores this
				arc: true,

				// position to draw label, available value is 'default', 'border' and 'outside'
				// bar chart ignores this
				// default is 'default'
				position: "outside",

				// draw label even it's overlap, default is true
				// bar chart ignores this
				overlap: true,

				// show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
				showActualPercentages: true,

				// set images when `render` is 'image'
				images: [
					{
						src: "image.png",
						width: 16,
						height: 16,
					},
				],

				// add padding when position is `outside`
				// default is 2
				outsidePadding: 0,

				// add margin of text when position is `outside` or `border`
				// default is 2
				textMargin: 0,
			},
		},
		tooltips: { enabled: false },
		hover: { mode: null },
		cutoutPercentage: 50,
		responsive: true,
		legend: {
			display: false,
		},
		elements: {
			center: {
				text: "Equity",
				color: "#1C262F", // Default is #000000
				fontStyle: "Neuton", // Default is Arial
				sidePadding: 20, // Default is 20 (as a percentage)
				minFontSize: 18, // Default is 20 (in px), set to false and text will not wrap.
				lineHeight: 18, // Default is 25 (in px), used for when text wraps
				backgroundColor: "red",
			},
		},
	},
};
var Doughnut = document
	.getElementById("assetsCompositionChart")
	.getContext("2d");
const assetsdoughnutChart = new Chart(Doughnut, config3);

const assetsMiscEquity2 = [26, 36, 42, 38, 40];
const assetsNetCash2 = [34, 44, 33, 24, 25];
const assetsInvestments2 = [16, 13, 25, 33, 40];
const assetsHouseEquity2 = [5, 9, 10, 9, 18];
const assetsxData2 = [2010, 2011, 2012, 2013, 2014];

const assetsmyChart2 = new Chart(assetChart2, {
	type: "line",
	data: {
		labels: assetsxData2,
		datasets: [
			{
				label: "House Equity",
				fill: true,
				backgroundColor: assetsColors.purple.fill,
				pointBackgroundColor: assetsColors.purple.stroke,
				borderColor: assetsColors.purple.stroke,
				pointHighlightStroke: assetsColors.purple.stroke,
				borderCapStyle: "butt",
				data: assetsHouseEquity2,
			},
			{
				label: "Investments",
				fill: true,
				backgroundColor: assetsColors.darkBlue.fill,
				pointBackgroundColor: assetsColors.darkBlue.stroke,
				borderColor: assetsColors.darkBlue.stroke,
				pointHighlightStroke: assetsColors.darkBlue.stroke,
				borderCapStyle: "butt",
				data: assetsInvestments2,
			},
			{
				label: "Net Cash",
				fill: true,
				backgroundColor: assetsColors.lightBlue.fill,
				pointBackgroundColor: assetsColors.lightBlue.stroke,
				borderColor: assetsColors.lightBlue.stroke,
				pointHighlightStroke: assetsColors.lightBlue.stroke,
				borderCapStyle: "butt",
				data: assetsNetCash2,
			},
			{
				label: "MiscEquity",
				fill: true,
				backgroundColor: assetsColors.green.fill,
				pointBackgroundColor: assetsColors.green.stroke,
				borderColor: assetsColors.green.stroke,
				pointHighlightStroke: assetsColors.green.stroke,
				data: assetsMiscEquity2,
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
			display: false,
		},
		// Can't just just `stacked: true` like the docs say
		scales: {
			yAxes: [
				{
					stacked: true,
				},
			],
		},
		animation: {
			duration: 750,
		},
	},
});
