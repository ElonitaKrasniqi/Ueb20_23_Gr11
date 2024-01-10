function animatedImage() {
  var image = document.getElementById("animeImg");
  image.style.opacity = 1;
}
window.addEventListener("load", animatedImage);

$("#costum_link").hover(
  function () {
    $(this).css({
      "background-color": "#c58f59",
      color: "white",
      transition: "background-color 0.3s, color 0.3s",
    });
  },
  function () {
    $(this).css({
      "background-color": "",
      color: "",
      transition: "background-color 0.3s, color 0.3s",
    });
  }
);

document.addEventListener("DOMContentLoaded", function () {
  var phoneInput = document.getElementById("phone");

  phoneInput.addEventListener("input", function () {
    try {
      var regex = /^[0-9+]+$/;
      if (!regex.test(phoneInput.value)) {
        throw new Error("Numri qe shenuat nuk eshte valid");
      }
      console.log("Inputi valid: " + phoneInput.value);
    } catch (error) {
      alert(error.message);
    }
  });
});

let kornizaprodukti = document.getElementsByClassName("imageMenu");
let slider = document.getElementById("slider");

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

function autoPlay() {
  if (slider.scrollLeft > maxScrollLeft - 1) {
    slider.scrollLeft -= maxScrollLeft;
  } else {
    slider.scrollLeft += 1;
  }
}

let play = setInterval(autoPlay, 7);

for (var i = 0; i < kornizaprodukti.length; i++) {
  kornizaprodukti[i].addEventListener("mouseover", function () {
    clearInterval(play);
  });
  kornizaprodukti[i].addEventListener("mouseout", function () {
    return (play = setInterval(autoPlay, 10));
  });
}

var originalValues = [];

function populateAndReduce() {
  var elements = document.querySelectorAll(".qmimi");

  if (originalValues.length === 0) {
    originalValues = Array.from(elements).map(function (element) {
      return element.textContent;
    });
  }

  var reducedArray = Array.from(elements).map(function (element, index) {
    var originalValue = parseFloat(originalValues[index]);
    var reducedValue = (originalValue * 0.85).toFixed(2);

    element.textContent = reducedValue;

    return reducedValue;
  });

  console.log("Reduced Array:", reducedArray);
}

function restoreOriginalValues() {
  var elements = document.querySelectorAll(".qmimi");

  Array.from(elements).forEach(function (element, index) {
    element.textContent = originalValues[index];
  });

  console.log("Original values restored:", originalValues);
}

function handleCheckboxChange() {
  var checkbox = document.getElementById("applyReduction");

  if (checkbox.checked) {
    populateAndReduce();
  } else {
    restoreOriginalValues();
  }
}
