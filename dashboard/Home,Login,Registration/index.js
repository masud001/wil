const buttonLogIn = document.querySelector(".logIn");

const loginForm = document.getElementsByClassName("login-form")[0];

buttonLogIn.addEventListener("click", () => {
  loginForm.classList.remove("hide");
});

const close = document.querySelectorAll(".close");

for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", (e) => {
    e.target.parentNode.parentNode.classList.add("hide");
  });
}

// tab

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
$currentItem = $(".tablinks.active");

$(function () {
  if ($currentItem[0]) {
    $slideLine.css({
      width: $currentItem.width(),
      left: $currentItem.position().left,
    });
  }
  $(".tablinks").click(function () {
    $(this)
      .siblings(".slidebar")
      .css({
        width: $(this).width(),
        left: $(this).position().left,
      });
  });
});
