// tabs

function openTabs(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// tab slider

$slideLine = $(".slidebar");
$currentItem = $slideLine.siblings(".active");

$(function () {
  // if ($currentItem[0]) {
  //   $slideLine.css({
  //     width: $currentItem.width(),
  //     left: $currentItem.position().left,
  //   });
  // }
  $(".tablinks").click(function () {
    $(this)
      .siblings(".slidebar")
      .css({
        width: $(this).width(),
        left: $(this).position().left,
      });
  });
});

// sliding bar in side panels

$slideLine1 = $(".slide-bar");
$currentItem1 = $(".assumbtion-bar.active");

$(function () {
  if ($currentItem1[0]) {
    $slideLine1.css({
      width: "33.3%",
      left: $currentItem1.position().left,
    });
  }
  $(".assumbtion-bar").click(function () {
    $(this)
      .siblings(".slide-bar")
      .css({
        width: $(this).width(),
        left: $(this).position().left,
      });
  });
});

// growth

const openGrowthAssumption = document.getElementById("growth");
const openGrowthCard = document.querySelector(".card.assumbtion");

changeSetting(openGrowthAssumption, openGrowthCard);

function changeSetting(button, element) {
  button.addEventListener("click", () => {
    element.classList.remove("hide");
  });
}

// open report

const reportButton = document.querySelector("#openReport");

const reportCard = document.querySelector(".card.report");

changeSetting(reportButton, reportCard);

//  range slider

$(function () {
  // $('.slider').on('input change', function () {
  //     $(this).next($('.slider_label')).html(this.value);
  // });
  $(".slider_label").each(function () {
    var value = $(this).prev().attr("value");
    $(this).html(value);
  });
});
