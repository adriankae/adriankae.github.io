var action_before;
let box_interval = 4
var timeleft = box_interval;
var time_elpased = 0;
var elapsed_timer_string = "";
var hours = 0;
var minutes = 0;
var seconds = 0;
var breathing_function;
var stop_flag = false;
var session_time;


function startTimer() {
  // make button unclickable so that timer doesn't start another time in parallel
  //document.getElementById('start_pause_button').onclick = null;
  console.log("startTimer() has been called")

  setValues();
  console.log("box_interval after setValues() is: " + box_interval);
  console.log(" after setValues() is: " + box_interval);

  // update the button text from start to pause
  if (document.getElementById("start_pause_span").innerHTML == "Start") {
    document.getElementById("start_pause_span").innerHTML = "Pause";
    stop_flag = false;
  } else {
    document.getElementById("start_pause_span").innerHTML = "Start";
    stop_flag = true;
  }

  if (stop_flag == false) {
    breathing_function = setInterval(function() {
      if (stop_flag == true) {
        clearInterval(breathing_function);
        return;
      }
      // set the main timer
      console.log("timeleft is: " + timeleft);
      console.log("session_time is: " + session_time);
      document.getElementById("main_timer").innerHTML = timeleft;

      // set the action header
      if (timeleft == box_interval) {
        setAction()
        play();
        console.log("audio played");
      }

      updateElapsedTime();

      // increase elapsed time
      time_elpased += 1;
      timeleft -= 1;


      updateSessionTime();
      session_time -= 1;

      if (session_time == 0){
        updateSessionTime();
        updateElapsedTime();
        document.getElementById("main_timer").innerHTML = timeleft;
        console.log("updated both timers");
        display_message = true;
        clearInterval(breathing_function);
        console.log("cleared breathing_function");
        // if (Math.random() < 0.8) {
        //   alert("Congratulations.\nSo good, that you care for your body and mind!");
        // }
      }

      if (timeleft < 1) {
        timeleft = box_interval;
      }
    },1000);
  } else {
    clearInterval(breathing_function);
  }
}

function updateElapsedTime(){
  // set the elapsed time timer
  // Calculating the days, hours, minutes and seconds left
  //var days = Math.floor(time_elpased / (1000 * 60 * 60 * 24));
  hours = Math.floor((time_elpased % (60 * 60 * 24)) / (60 * 60));
  minutes = Math.floor((time_elpased % (60 * 60)) / (60));
  seconds = Math.floor(time_elpased % (60));

  // parse string for elapsed_timer
  elapsed_timer_string = hours + "h " + minutes + "m " + seconds + "s";

  // update the elapsed timer
  document.getElementById("elapsed_timer").innerHTML = elapsed_timer_string;

}

function setValues(){
  console.log("setValues() has been called");
  box_interval = document.getElementById("breathing_interval").value;
  console.log("Assigned user input to variable box_interval");
  document.getElementById("main_timer").innerHTML = box_interval;
  timeleft = box_interval;
  session_time = (document.getElementById("session_time").value) * 60;
  console.log("Session Time is: " + session_time);
}

function setAction(){
  console.log("setAction() has been called");
  if (document.getElementById("action_header").innerHTML == "inhale"){
    console.log("action is hold");
    document.getElementById("action_header").innerHTML = "hold";
    document.getElementById("item1").style.backgroundColor = 'grey';
    action_before = "inhale";
  } else if (document.getElementById("action_header").innerHTML == "hold" && action_before == "inhale") {
    console.log("action is exhale");
    document.getElementById("action_header").innerHTML = "exhale";
    document.getElementById("item1").style.backgroundColor = '#FA8072';
  } else if (document.getElementById("action_header").innerHTML == "exhale") {
    console.log("action is hold");
    document.getElementById("action_header").innerHTML = "hold";
    document.getElementById("item1").style.backgroundColor = 'grey';
    action_before = "exhale";
  } else {
    console.log("action is inhale");
    document.getElementById("action_header").innerHTML = "inhale"
    document.getElementById("item1").style.backgroundColor = 'lightgreen';
  }
}

function reset() {
  console.log("reset() has been called");
  stop_flag = true;
  timeleft = box_interval;
  time_elpased = 0;
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  document.getElementById("main_timer").innerHTML = box_interval;
  document.getElementById("action_header").innerHTML = "";
  document.getElementById("elapsed_timer").innerHTML = "0h 0m 0s";
  document.getElementById("rest_timer").innerHTML = "0h 0m 0s";
  document.getElementById("item1").style.backgroundColor = 'white';
  document.getElementById("start_pause_span").innerHTML = "Start";
}

function updateSessionTime(){

  session_time_hours = Math.floor((session_time % (60 * 60 * 24)) / (60 * 60));
  session_time_minutes = Math.floor((session_time % (60 * 60)) / (60));
  session_time_seconds = Math.floor(session_time % (60));
  console.log("session_time is within updateSessionTime(): " + session_time);
  console.log("session_time_seconds is within updateSessionTime(): " + session_time_seconds);

  rest_timer_string = session_time_hours + "h " + session_time_minutes + "m " + session_time_seconds + "s";

  document.getElementById("rest_timer").innerHTML = rest_timer_string;
  console.log("rest_timer_string is: " + rest_timer_string);
}

function play() {
  if (document.getElementById("sounds").value == "ding") {
    var audio = document.getElementById("ding1");
    audio.play();
  }
}
