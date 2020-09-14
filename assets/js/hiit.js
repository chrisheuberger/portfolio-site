(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-53787405-1', 'auto');
ga('send', 'pageview');

let msg = new SpeechSynthesisUtterance();
let button = document.getElementById('start-button');

let exercises = [
  "seal jacks",
  "arm/neck rolls",
  "waist rotations",
  "high leg kicks",
  "hip flexor rotations",
  "knee ups",
  "butt kicks",
  "skater plyo",
  "rest",
  "burpees",
  "rest",
  "squat jumps with 180˚ turn",
  "rest",
  "jump squats with pulse",
  "rest",
  "alternating heel touch squats",
  "rest",
  "mountain climbers",
  "rest",
  "side-to-side mountain climbers",
  "rest",
  "mason twists",
  "rest",
  "hollow body windshield wipers",
  "rest",
  "v-up tuck",
  "rest",
  "abs halo",
  "rest",
  "alternating reverse lunges",
  "rest",
  "alternating sprinter lunges",
  "rest",
  "Russian steps",
  "rest",
  "blast-off push-ups",
  "rest",
  "spiderman push-ups",
  "rest",
  "power pushaways",
  "rest",
  "angels and devils",
  "Workout complete. Good Job Chris."
]

// radial timer

let countdownNumberEl = document.getElementById('countdown-number');

function count30() {
  let countdown30 = 30;
  $("#countdown").append('<div class="countdown-svg-wrapper counting-30"><svg class="countdown-svg"><circle r="90" cx="100" cy="100"></circle></svg></div>');
  countdownNumberEl.textContent = countdown30;
  let countdownInterval30 = setInterval(function() {
    countdown30 = --countdown30 <= -1 ? 30 : countdown30;
    countdownNumberEl.textContent = countdown30;
    if (countdown30 === 0) {
      $(".countdown-svg-wrapper").remove();
      window.clearInterval(countdownInterval30);
      countdownNumberEl.textContent = "0";
    }
  }, 1000);
}

// show timed exercises

function orderExercises(currentNumber) {
  let exercise = $(".exercise-name");
  let numberOfExercises = exercises.length - 1;
  let remainingNumber = currentNumber + 1;
  setTimeout(function() {

    msg.text = exercises[currentNumber];
    exercise.text(msg.text);
    window.speechSynthesis.speak(msg);

    count30();

    if (currentNumber < numberOfExercises) {
      orderExercises(remainingNumber);
    } else {
      console.log("completed");
    }
    
  }, 32000); 
}

$(function(){

  button.addEventListener('click', function(e) {
    let exercise = $(".exercise-name");
    $("#start-button").hide();
    $(".exercise-name-wrapper").show();
    
    msg.text = exercises[0];
    exercise.text(msg.text);
    window.speechSynthesis.speak(msg);

    count30();
    orderExercises(1);
  });

});
