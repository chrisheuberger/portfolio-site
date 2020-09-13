(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-53787405-1', 'auto');
ga('send', 'pageview');

let msg = new SpeechSynthesisUtterance();
let button = document.getElementById('start-button');

let exercises = [
  { "message"  : "arm/neck rolls",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "waist rotations",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "high leg kicks",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "knee ups",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "butt kicks",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "skater plyo",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "rest",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "burpees",
    "countdown" : "count30",
    "time" : 32000
  },
  { "message"  : "rest",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "squat jumps with 180˚ turn",
    "countdown" : "count30",
    "time" : 32000
  },
  { "message"  : "rest",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "jump squats with pulse",
    "countdown" : "count30",
    "time" : 32000
  },
  { "message"  : "rest",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "alternating heel touch squats",
    "countdown" : "count30",
    "time" : 32000
  },
  { "message"  : "rest",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "mountain climbers",
    "countdown" : "count30",
    "time" : 32000
  },
  { "message"  : "rest",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "side-to-side mountain climbers",
    "countdown" : "count30",
    "time" : 32000
  },
  { "message"  : "rest",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "mason twists",
    "countdown" : "count30",
    "time" : 32000
  },
  { "message"  : "rest",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "hollow body windshield wipers",
    "countdown" : "count30",
    "time" : 32000
  },
  { "message"  : "rest",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "v-up tuck",
    "countdown" : "count30",
    "time" : 32000
  },
  { "message"  : "rest",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "abs halo",
    "countdown" : "count30",
    "time" : 32000
  },
  { "message"  : "rest",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "alternating reverse lunges",
    "countdown" : "count30",
    "time" : 32000
  },
  { "message"  : "rest",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "alternating sprinter lunges",
    "countdown" : "count30",
    "time" : 32000
  },
  { "message"  : "rest",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "Russian steps",
    "countdown" : "count30",
    "time" : 32000
  },
  { "message"  : "rest",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "blast-off push-ups",
    "countdown" : "count30",
    "time" : 32000
  },
  { "message"  : "rest",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "spiderman push-ups",
    "countdown" : "count30",
    "time" : 32000
  },
  { "message"  : "rest",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "power pushaways",
    "countdown" : "count30",
    "time" : 32000
  },
  { "message"  : "rest",
    "countdown" : "count15",
    "time" : 17000
  },
  { "message"  : "angels and devils",
    "countdown" : "count30",
    "time" : 32000
  },
  { "message"  : "Workout complete. Good Job Chris.",
    "time" : 32000
  }
]

// radial timer

let countdownNumberEl = document.getElementById('countdown-number');

function count30() {
  let countdown30 = 30;
  let stopMark30 = 0;
  $(".countdown-svg-wrapper").addClass("counting-30");
  countdownNumberEl.textContent = countdown30;
  let countdownInterval30 = setInterval(function() {
    countdown30 = --countdown30 <= -1 ? 30 : countdown30;
    countdownNumberEl.textContent = countdown30;
    if (countdown30 === 0) {
      $(".countdown-svg-wrapper").removeClass("counting-30");
    }
    if (countdown30 === -1) {
      window.clearInterval(countdownInterval30);
      countdownNumberEl.textContent = "";
    }
  }, 1000);
}

function count15() {
  let countdown15 = 15;
  let stopMark15 = 0;
  $(".countdown-svg-wrapper").addClass("counting-15");
  countdownNumberEl.textContent = countdown15;
  let countdownInterval15 = setInterval(function() {
    countdown15 = --countdown15 < -1 ? 15 : countdown15;
    countdownNumberEl.textContent = countdown15;
    if (countdown15 === 0) {
      $(".countdown-svg-wrapper").removeClass("counting-15");
    }
    if (countdown15 === -1) {
      window.clearInterval(countdownInterval15);
      countdownNumberEl.textContent = "";
    }
  }, 1000);
}

$(function(){

  button.addEventListener('click', function(e) {
    let exercise = $(".exercise-name");

    $("#start-button").hide();
    $(".exercise-name-wrapper").show();
    
    msg.text = 'seal jacks';
    exercise.text(msg.text);
    window.speechSynthesis.speak(msg);
    
    count15();
    
    function orderExercises(currentNumber) {
      let numberOfExercises = exercises.length - 1;
      let remainingNumber = currentNumber + 1;
      setTimeout(function() {

        msg.text = exercises[currentNumber].message;
        exercise.text(msg.text);
        window.speechSynthesis.speak(msg);
        
        if (exercises[currentNumber].countdown) {
          window[exercises[currentNumber].countdown]()
        }
        
        if (currentNumber < numberOfExercises) {
          orderExercises(remainingNumber);
        } else {
          console.log("completed");
        }
      }, exercises[currentNumber].time); 
    }
    
    orderExercises(0);
    
  });

});
