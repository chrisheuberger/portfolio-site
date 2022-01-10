// document ready

$(function() {

  // Lettering.js

  $(".home-intro-link").lettering('words').children('span').addClass('word').lettering();
  $(".home-intro-link .word span").addClass('char');
  
  lettersInView();

});

let charArray = [];
let wordArray = [];

function lettersInView() {
  $(".char").each(function() {
    charArray.push(this);
  });
  $(".word").each(function() {
    wordArray.push(this);
  });
}

for (let container of document.querySelectorAll(".home-intro-link")) {
  container.addEventListener("mousemove", function (e) {
    container.classList.add("mouseover");
  });
  container.addEventListener("mouseout", function (e) {
    container.classList.remove("mouseover");
  });
}

function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function map(value, low1, high1, low2, high2) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

function findAncestor(el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}

document.addEventListener("mousemove", function (e) {
  for (let i = 0; i < charArray.length; i++) {
    let char = charArray[i];
    let bounds = char.getBoundingClientRect();
    let dist = distance(
      e.clientX,
      e.clientY,
      bounds.left + bounds.width / 2,
      bounds.top + bounds.height / 2
    );
    let ancestor = findAncestor(char, "home-intro-link");
    
    // medium line

    if (dist <= 75) {
      char.classList.remove('medium-bn-75-150', 'medium-bn-150-225', 'medium-bn-225-300', 'medium-more-300');
      char.classList.add('medium-less-75');
    } else if (dist > 75 && dist <= 150) {
      char.classList.remove('medium-less-75', 'medium-bn-150-225', 'medium-bn-225-300', 'medium-more-300');
      char.classList.add('medium-bn-75-150');
    } else if (dist > 150 && dist <= 225) {
      char.classList.remove('medium-less-75', 'medium-bn-75-150', 'medium-bn-225-300', 'medium-more-300');
      char.classList.add('medium-bn-150-225');
    } else if (dist > 225 && dist <= 300) {
      char.classList.remove('medium-less-75', 'medium-bn-75-150', 'medium-bn-150-225', 'medium-more-300');
      char.classList.add('medium-bn-225-300');
    } else if (dist > 300) {
      char.classList.remove('medium-less-75', 'medium-bn-75-150', 'medium-bn-150-225', 'medium-bn-225-300');
      char.classList.add('medium-more-300');
    }

  }
});