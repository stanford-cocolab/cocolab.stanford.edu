var NUM_SLIDERS = 8;

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function showSlide(id) {
  $(".slide").hide();
  $("#"+id).show();
}

function random(a,b) {
  if (typeof b == "undefined") {
    a = a || 2;
    return Math.floor(Math.random()*a);
  } else {
    return Math.floor(Math.random()*(b-a+1)) + a;
  }
}

function clearForm(oForm) {
  var sliderVar = "";
  for(var i=1; i<= NUM_SLIDERS; i++)
  {
    sliderVar = "#slider" + i;
    $(sliderVar).slider("value", 20);
    $(sliderVar).css({"background":"#FFFFFF"});
    $(sliderVar + " .ui-slider-handle").css({
        "background":"#FAFAFA",
        "border-color": "#CCCCCC" });
    sliderVar = "slider" + i;
    document.getElementById(sliderVar).style.background = "";
  }
  
  var elements = oForm.elements; 
  
  oForm.reset();

  for(var i=0; i<elements.length; i++) {
    field_type = elements[i].type.toLowerCase();
    switch(field_type) {
    
      case "text": 
      case "password": 
      case "textarea":
            case "hidden":	
        
        elements[i].value = ""; 
        break;
          
      case "radio":
      case "checkbox":
          if (elements[i].checked) {
            elements[i].checked = false; 
        }
        break;
  
      case "select-one":
      case "select-multi":
                  elements[i].selectedIndex = -1;
        break;
  
      default: 
        break;
    }
  }
}
Array.prototype.random = function() {
  return this[random(this.length)];
}

function setQuestion(array) {
    var i = random(0, array.length - 1);
    var q = array[i];
    return q;
}

function shuffledArray(arrLength)
{
  var j, tmp;
  var arr = new Array(arrLength);
  for (i = 0; i < arrLength; i++)
  {
    arr[i] = i;
  }
  for (i = 0; i < arrLength-1; i++)
  {
    j = Math.floor((Math.random() * (arrLength - 1 - i)) + 0.99) + i;
    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function shuffledSampleArray(arrLength, sampleLength)
{
  var arr = shuffledArray(arrLength);
  var beginIndex = Math.floor(Math.random() * (arrLength-sampleLength+1));
  return arr.slice(beginIndex, beginIndex+sampleLength);
}

function getRadioCheckedValue(formNum, radio_name)
{
   var oRadio = document.forms[formNum].elements[radio_name];
   for(var i = 0; i < oRadio.length; i++)
   {
      if(oRadio[i].checked)
      {
         return oRadio[i].value;
      }
   }
   return '';
}

var allSpeakers = ["Alex", "Bob", "Calvin", "David", "Eric", "Frank", "George", 
"Harry", "Ivan", "Jake", "Kenneth", "Luke", "Matt", "Nathan", "Owen",
"Patrick", "Quinn", "Robert", "Steve", "Tom", "Victor", 
"Winston", "Zach", "Albert", "Barry", "Charles", "Daniel", "Ethan", "Fred", "Gary", "Henry",
"Jeff"];

var debugConditions = 
[
[
{"categoryID":29,"origAnimal":"whale","determiner":"a","altAnimal":"cheetah", "set1":"large, graceful, majestic", "set2":"large, graceful, inferior", "set3":"large, awkward, majestic", "set4":"large, awkward, inferior", "set5":"small, graceful, majestic", "set6":"small, graceful, inferior", "set7":"small, awkward, majestic", "set8":"small, awkward, inferior", },
{"categoryID":29,"origAnimal":"whale","determiner":"a","altAnimal":"deer", "set1":"large, graceful, majestic", "set2":"large, graceful, inferior", "set3":"large, awkward, majestic", "set4":"large, awkward, inferior", "set5":"small, graceful, majestic", "set6":"small, graceful, inferior", "set7":"small, awkward, majestic", "set8":"small, awkward, inferior", },
]
];

var allConditions = 
[
[
{"categoryID":29,"origAnimal":"whale","determiner":"a","altAnimal":"cheetah", "set1":"large, graceful, majestic", "set2":"large, graceful, inferior", "set3":"large, awkward, majestic", "set4":"large, awkward, inferior", "set5":"small, graceful, majestic", "set6":"small, graceful, inferior", "set7":"small, awkward, majestic", "set8":"small, awkward, inferior", },
{"categoryID":29,"origAnimal":"whale","determiner":"a","altAnimal":"deer", "set1":"large, graceful, majestic", "set2":"large, graceful, inferior", "set3":"large, awkward, majestic", "set4":"large, awkward, inferior", "set5":"small, graceful, majestic", "set6":"small, graceful, inferior", "set7":"small, awkward, majestic", "set8":"small, awkward, inferior", },
{"categoryID":29,"origAnimal":"whale","determiner":"an","altAnimal":"eagle", "set1":"large, graceful, majestic", "set2":"large, graceful, inferior", "set3":"large, awkward, majestic", "set4":"large, awkward, inferior", "set5":"small, graceful, majestic", "set6":"small, graceful, inferior", "set7":"small, awkward, majestic", "set8":"small, awkward, inferior", },
{"categoryID":29,"origAnimal":"whale","determiner":"an","altAnimal":"elephant", "set1":"large, graceful, majestic", "set2":"large, graceful, inferior", "set3":"large, awkward, majestic", "set4":"large, awkward, inferior", "set5":"small, graceful, majestic", "set6":"small, graceful, inferior", "set7":"small, awkward, majestic", "set8":"small, awkward, inferior", },
{"categoryID":29,"origAnimal":"whale","determiner":"a","altAnimal":"gazelle", "set1":"large, graceful, majestic", "set2":"large, graceful, inferior", "set3":"large, awkward, majestic", "set4":"large, awkward, inferior", "set5":"small, graceful, majestic", "set6":"small, graceful, inferior", "set7":"small, awkward, majestic", "set8":"small, awkward, inferior", },
{"categoryID":29,"origAnimal":"whale","determiner":"a","altAnimal":"giraffe", "set1":"large, graceful, majestic", "set2":"large, graceful, inferior", "set3":"large, awkward, majestic", "set4":"large, awkward, inferior", "set5":"small, graceful, majestic", "set6":"small, graceful, inferior", "set7":"small, awkward, majestic", "set8":"small, awkward, inferior", },
{"categoryID":29,"origAnimal":"whale","determiner":"a","altAnimal":"hippo", "set1":"large, graceful, majestic", "set2":"large, graceful, inferior", "set3":"large, awkward, majestic", "set4":"large, awkward, inferior", "set5":"small, graceful, majestic", "set6":"small, graceful, inferior", "set7":"small, awkward, majestic", "set8":"small, awkward, inferior", },
{"categoryID":29,"origAnimal":"whale","determiner":"a","altAnimal":"horse", "set1":"large, graceful, majestic", "set2":"large, graceful, inferior", "set3":"large, awkward, majestic", "set4":"large, awkward, inferior", "set5":"small, graceful, majestic", "set6":"small, graceful, inferior", "set7":"small, awkward, majestic", "set8":"small, awkward, inferior", },
{"categoryID":29,"origAnimal":"whale","determiner":"a","altAnimal":"lion", "set1":"large, graceful, majestic", "set2":"large, graceful, inferior", "set3":"large, awkward, majestic", "set4":"large, awkward, inferior", "set5":"small, graceful, majestic", "set6":"small, graceful, inferior", "set7":"small, awkward, majestic", "set8":"small, awkward, inferior", },
{"categoryID":29,"origAnimal":"whale","determiner":"a","altAnimal":"peacock", "set1":"large, graceful, majestic", "set2":"large, graceful, inferior", "set3":"large, awkward, majestic", "set4":"large, awkward, inferior", "set5":"small, graceful, majestic", "set6":"small, graceful, inferior", "set7":"small, awkward, majestic", "set8":"small, awkward, inferior", },
{"categoryID":29,"origAnimal":"whale","determiner":"a","altAnimal":"person", "set1":"large, graceful, majestic", "set2":"large, graceful, inferior", "set3":"large, awkward, majestic", "set4":"large, awkward, inferior", "set5":"small, graceful, majestic", "set6":"small, graceful, inferior", "set7":"small, awkward, majestic", "set8":"small, awkward, inferior", },
{"categoryID":29,"origAnimal":"whale","determiner":"a","altAnimal":"rhino", "set1":"large, graceful, majestic", "set2":"large, graceful, inferior", "set3":"large, awkward, majestic", "set4":"large, awkward, inferior", "set5":"small, graceful, majestic", "set6":"small, graceful, inferior", "set7":"small, awkward, majestic", "set8":"small, awkward, inferior", },
{"categoryID":29,"origAnimal":"whale","determiner":"a","altAnimal":"swan", "set1":"large, graceful, majestic", "set2":"large, graceful, inferior", "set3":"large, awkward, majestic", "set4":"large, awkward, inferior", "set5":"small, graceful, majestic", "set6":"small, graceful, inferior", "set7":"small, awkward, majestic", "set8":"small, awkward, inferior", },
{"categoryID":29,"origAnimal":"whale","determiner":"a","altAnimal":"whale", "set1":"large, graceful, majestic", "set2":"large, graceful, inferior", "set3":"large, awkward, majestic", "set4":"large, awkward, inferior", "set5":"small, graceful, majestic", "set6":"small, graceful, inferior", "set7":"small, awkward, majestic", "set8":"small, awkward, inferior", },
]
];

var debug = false;
if(debug) { allConditions = debugConditions; }


var numConditions = allConditions.length;
var chooseCondition = random(0, numConditions-1);
var allTrialOrders = allConditions[chooseCondition];
var numTrials = allTrialOrders.length;
var shuffledOrder = shuffledSampleArray(allTrialOrders.length, numTrials);
var currentTrialNum = 0;
var trial;
var numComplete = 0;
var shuffledSpeakerOrder = shuffledSampleArray(allTrialOrders.length, numTrials);
var speaker;

showSlide("instructions");
$("#trial-num").html(numComplete);
$("#total-num").html(numTrials);


var experiment = {
	condition:chooseCondition + 1,
	categoryIDs: new Array(numTrials),
  	orders: new Array(numTrials),
  	animals: new Array(numTrials),
    //names: new Array(numTrials),
  	set1s: new Array(numTrials),
  	set2s: new Array(numTrials),
  	set3s: new Array(numTrials),
    set4s: new Array(numTrials),
    set5s: new Array(numTrials),
    set6s: new Array(numTrials),
    set7s: new Array(numTrials),
    set8s: new Array(numTrials),

  	set1probs_animals: new Array(numTrials),
  	set2probs_animals: new Array(numTrials),
  	set3probs_animals: new Array(numTrials),
    set4probs_animals: new Array(numTrials),
    set5probs_animals: new Array(numTrials),
    set6probs_animals: new Array(numTrials),
    set7probs_animals: new Array(numTrials),
    set8probs_animals: new Array(numTrials),

  	gender: "",
  	age:"",
  	income:"",
  	nativeLanguage:"",
  	comments:"",
  	description: function() {
    showSlide("description");
    $("#tot-num").html(numTrials);	
  },
  end: function() {
    var gen = getRadioCheckedValue(1, "genderButton");
    var ag = document.age.ageRange.value;
    var lan = document.language.nativeLanguage.value;
    var comm = document.comments.input.value;
    var incomeVal = document.income.incomeRange.value;
    experiment.gender = gen;
    experiment.age = ag;
    experiment.nativeLanguage = lan;
    experiment.comments = comm;
    experiment.income = incomeVal;
    clearForm(document.forms[1]);
    clearForm(document.forms[2]);
    clearForm(document.forms[3]);
    clearForm(document.forms[4]);
    clearForm(document.forms[5]);    
    showSlide("finished");
    setTimeout(function() {turk.submit(experiment) }, 1500);
  },
  next: function() {
    if (numComplete > 0) {
      //experiment.adjectives[currentTrialNum] = document.adjective.adj.value;    
      experiment.orders[currentTrialNum] = numComplete;
      experiment.categoryIDs[currentTrialNum] = trial.categoryID;
      experiment.animals[currentTrialNum] = trial.altAnimal;
      //experiment.names[currentTrialNum] = speaker;
      experiment.set1s[currentTrialNum] = trial.set1;
      experiment.set2s[currentTrialNum] = trial.set2;
      experiment.set3s[currentTrialNum] = trial.set3;
      experiment.set4s[currentTrialNum] = trial.set4;
      experiment.set5s[currentTrialNum] = trial.set5;
      experiment.set6s[currentTrialNum] = trial.set6;
      experiment.set7s[currentTrialNum] = trial.set7;
      experiment.set8s[currentTrialNum] = trial.set8;

      experiment.set1probs_animals[currentTrialNum] = parseInt(document.getElementById("hiddenSliderValue1").value) / 40.00;
      experiment.set2probs_animals[currentTrialNum] = parseInt(document.getElementById("hiddenSliderValue2").value) / 40.00;
      experiment.set3probs_animals[currentTrialNum] = parseInt(document.getElementById("hiddenSliderValue3").value) / 40.00;
      experiment.set4probs_animals[currentTrialNum] = parseInt(document.getElementById("hiddenSliderValue4").value) / 40.00;
      experiment.set5probs_animals[currentTrialNum] = parseInt(document.getElementById("hiddenSliderValue5").value) / 40.00;
      experiment.set6probs_animals[currentTrialNum] = parseInt(document.getElementById("hiddenSliderValue6").value) / 40.00;
      experiment.set7probs_animals[currentTrialNum] = parseInt(document.getElementById("hiddenSliderValue7").value) / 40.00;
      experiment.set8probs_animals[currentTrialNum] = parseInt(document.getElementById("hiddenSliderValue8").value) / 40.00;

      clearForm(document.forms[0]);
    }
    if (numComplete >= numTrials) {
    	$('.bar').css('width', (200.0 * numComplete/numTrials) + 'px');
    	$("#trial-num").html(numComplete);
    	$("#total-num").html(numTrials);
    	showSlide("askInfo");
    } else {
    	$('.bar').css('width', (200.0 * numComplete/numTrials) + 'px');
    	$("#trial-num").html(numComplete);
    	$("#total-num").html(numTrials);
    	currentTrialNum = numComplete;
    	trial = allTrialOrders[shuffledOrder[numComplete]];
    	speaker = allSpeakers[shuffledSpeakerOrder[numComplete]];
      showSlide("stage");
      $("#f1-animal").html(trial.set1);
      $("#f2-animal").html(trial.set2);
      $("#f3-animal").html(trial.set3);
      $("#f4-animal").html(trial.set4);
      $("#f5-animal").html(trial.set5);
      $("#f6-animal").html(trial.set6);
      $("#f7-animal").html(trial.set7);
      $("#f8-animal").html(trial.set8);


      $("#determiner").html(trial.determiner);
      $("#animal").html(trial.altAnimal);
      //$("#name").html(speaker);
      
      numComplete++;
    }
  }
}

// scripts for sliders
               

$("#slider1").slider({
               animate: true,
               
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider1 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue1').attr('value', ui.value);
                   $("#slider1").css({"background":"#99D6EB"});
                   $("#slider1 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
               
$("#slider2").slider({
               animate: true,
               
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider2 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue2').attr('value', ui.value);
                   $("#slider2").css({"background":"#99D6EB"});
                   $("#slider2 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
               
$("#slider3").slider({
               animate: true,
               
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider3 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue3').attr('value', ui.value);
                   $("#slider3").css({"background":"#99D6EB"});
                   $("#slider3 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
$("#slider4").slider({
               animate: true,
               
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider4 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue4').attr('value', ui.value);
                   $("#slider4").css({"background":"#99D6EB"});
                   $("#slider4 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
$("#slider5").slider({
               animate: true,
               
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider5 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue5').attr('value', ui.value);
                   $("#slider5").css({"background":"#99D6EB"});
                   $("#slider5 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
$("#slider6").slider({
               animate: true,
               
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider6 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue6').attr('value', ui.value);
                   $("#slider6").css({"background":"#99D6EB"});
                   $("#slider6 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
$("#slider7").slider({
               animate: true,
               
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider7 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue7').attr('value', ui.value);
                   $("#slider7").css({"background":"#99D6EB"});
                   $("#slider7 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
$("#slider8").slider({
               animate: true,
               
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider8 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue8').attr('value', ui.value);
                   $("#slider8").css({"background":"#99D6EB"});
                   $("#slider8 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
