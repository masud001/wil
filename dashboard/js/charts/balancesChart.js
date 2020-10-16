var balancesChart = document.getElementById("balancesChart").getContext("2d");
var balancesChart2 = document.getElementById("balancesChart2").getContext("2d");

// colors
const colors = {
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

const MiscEquity = [26, 36, 42, 38, 40, 30, 12, 100, 150, 20, 200];
const NetCash = [34, 44, 33, 24, 25, 28, 25, 10, 50, 60, 30];
const Investments = [16, 13, 25, 33, 40, 33, 45, 20, 30, 40, 50];
const HouseEquity = [5, 9, 10, 9, 18, 19, 20, 5, 10, 30, 30];
const xData = [
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

const MiscEquity2 = [26, 36, 42, 38, 40];
const NetCash2 = [34, 44, 33, 24, 25];
const Investments2 = [16, 13, 25, 33, 40];
const HouseEquity2 = [5, 9, 10, 9, 18];
const xData2 = [2010, 2011, 2012, 2013, 2014];

const myChart = new Chart(balancesChart, {
	type: "line",
	data: {
		labels: xData,
		datasets: [
			{
				label: "House Equity",
				fill: true,
				backgroundColor: colors.purple.fill,
				pointBackgroundColor: colors.purple.stroke,
				borderColor: colors.purple.stroke,
				pointHighlightStroke: colors.purple.stroke,
				borderCapStyle: "butt",
				data: HouseEquity,
			},
			{
				label: "Investments",
				fill: true,
				backgroundColor: colors.darkBlue.fill,
				pointBackgroundColor: colors.darkBlue.stroke,
				borderColor: colors.darkBlue.stroke,
				pointHighlightStroke: colors.darkBlue.stroke,
				borderCapStyle: "butt",
				data: Investments,
			},
			{
				label: "Net Cash",
				fill: true,
				backgroundColor: colors.lightBlue.fill,
				pointBackgroundColor: colors.lightBlue.stroke,
				borderColor: colors.lightBlue.stroke,
				pointHighlightStroke: colors.lightBlue.stroke,
				borderCapStyle: "butt",
				data: NetCash,
			},
			{
				label: "MiscEquity",
				fill: true,
				backgroundColor: colors.green.fill,
				pointBackgroundColor: colors.green.stroke,
				borderColor: colors.green.stroke,
				pointHighlightStroke: colors.green.stroke,
				data: MiscEquity,
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

// centered text for doughnut chart
Chart.pluginService.register({
	beforeDraw: function (chart) {
		if (chart.config.options.elements.center) {
			// Get ctx from string
			var ctx = chart.chart.ctx;

			// Get options from the center object in options
			var centerConfig = chart.config.options.elements.center;
			var fontStyle = centerConfig.fontStyle || "Arial";
			var txt = centerConfig.text;
			var color = centerConfig.color || "#000";
			var maxFontSize = centerConfig.maxFontSize || 75;
			var sidePadding = centerConfig.sidePadding || 20;
			var sidePaddingCalculated =
				(sidePadding / 100) * (chart.innerRadius * 2);
			// Start with a base font of 30px
			ctx.font = "30px " + fontStyle;

			// Get the width of the string and also the width of the element minus 10 to give it 5px side padding
			var stringWidth = ctx.measureText(txt).width;
			var elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

			// Find out how much the font can grow in width.
			var widthRatio = elementWidth / stringWidth;
			var newFontSize = Math.floor(30 * widthRatio);
			var elementHeight = chart.innerRadius * 2;

			// Pick a new font size so it will not be larger than the height of label.
			var fontSizeToUse = Math.min(
				newFontSize,
				elementHeight,
				maxFontSize
			);
			var minFontSize = centerConfig.minFontSize;
			var lineHeight = centerConfig.lineHeight || 25;
			var wrapText = false;

			if (minFontSize === undefined) {
				minFontSize = 20;
			}

			if (minFontSize && fontSizeToUse < minFontSize) {
				fontSizeToUse = minFontSize;
				wrapText = true;
			}

			// Set font settings to draw it correctly.
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
			var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
			ctx.font = fontSizeToUse + "px " + fontStyle;
			ctx.fillStyle = color;

			if (!wrapText) {
				ctx.fillText(txt, centerX, centerY);
				return;
			}

			var words = txt.split(" ");
			var line = "";
			var lines = [];

			// Break words up into multiple lines if necessary
			for (var n = 0; n < words.length; n++) {
				var testLine = line + words[n] + " ";
				var metrics = ctx.measureText(testLine);
				var testWidth = metrics.width;
				if (testWidth > elementWidth && n > 0) {
					lines.push(line);
					line = words[n] + " ";
				} else {
					line = testLine;
				}
			}

			// Move the center up depending on line height and number of lines
			centerY -= (lines.length / 2) * lineHeight;

			for (var n = 0; n < lines.length; n++) {
				ctx.fillText(lines[n], centerX, centerY);
				centerY += lineHeight;
			}
			//Draw text in center
			ctx.fillText(line, centerX, centerY);
		}
	},
});

var config0 = {
	type: "doughnut",
	data: {
		labels: ["HouseEquity", "Investments", "NetCash", "MiscEquity"],
		datasets: [
			{
				label: "",
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
				fontSize: 0,

				// font color, can be color array for each data or function for dynamic color, default is defaultFontColor
				fontColor: ["#E84B4B", "#39E96C", "#FC974B", "#3b7193"],

				// font style, default is defaultFontStyle
				fontStyle: "500",

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
				arc: false,

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
		rotation: 180,
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
	.getElementById("balancesCompositionChart")
	.getContext("2d");
const doughnutChart = new Chart(Doughnut, config0);

const myChart2 = new Chart(balancesChart2, {
	type: "line",
	data: {
		labels: xData2,
		datasets: [
			{
				label: "House Equity",
				fill: true,
				backgroundColor: colors.purple.fill,
				pointBackgroundColor: colors.purple.stroke,
				borderColor: colors.purple.stroke,
				pointHighlightStroke: colors.purple.stroke,
				borderCapStyle: "butt",
				data: HouseEquity2,
			},
			{
				label: "Investments",
				fill: true,
				backgroundColor: colors.darkBlue.fill,
				pointBackgroundColor: colors.darkBlue.stroke,
				borderColor: colors.darkBlue.stroke,
				pointHighlightStroke: colors.darkBlue.stroke,
				borderCapStyle: "butt",
				data: Investments2,
			},
			{
				label: "Net Cash",
				fill: true,
				backgroundColor: colors.lightBlue.fill,
				pointBackgroundColor: colors.lightBlue.stroke,
				borderColor: colors.lightBlue.stroke,
				pointHighlightStroke: colors.lightBlue.stroke,
				borderCapStyle: "butt",
				data: NetCash2,
			},
			{
				label: "MiscEquity",
				fill: true,
				backgroundColor: colors.green.fill,
				pointBackgroundColor: colors.green.stroke,
				borderColor: colors.green.stroke,
				pointHighlightStroke: colors.green.stroke,
				data: MiscEquity2,
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
