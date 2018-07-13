var NUM_SLIDERS = 3;

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

// directly returns a shuffled array
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
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

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var allSpeakers = ["Alex", "Bob", "Calvin", "David", "Eric", "Frank", "George", 
"Harry", "Ivan", "Jake", "Kenneth", "Luke", "Matt", "Nathan", "Owen",
"Patrick", "Quinn", "Robert", "Steve", "Tom", "Victor", 
"Winston", "Zach", "Albert", "Barry", "Charles", "Daniel", "Ethan", "Fred", "Gary", "Henry",
"Jeff"];

var debugConditions = 
[
[
{"categoryID":1,"det":"an","animal":"ant","f1":"small","f2":"strong","f3":"busy"},
{"categoryID":2,"det":"a","animal":"bat","f1":"scary","f2":"blind","f3":"nocturnal"},
{"categoryID":3,"det":"a","animal":"bear","f1":"scary","f2":"big","f3":"fierce"},
{"categoryID":4,"det":"a","animal":"bee","f1":"busy","f2":"small","f3":"angry"},
{"categoryID":5,"det":"a","animal":"bird","f1":"small","f2":"graceful","f3":"free"},
{"categoryID":6,"det":"a","animal":"buffalo","f1":"big","f2":"strong","f3":"wild"},
{"categoryID":7,"det":"a","animal":"cat","f1":"independent","f2":"lazy","f3":"soft"},
{"categoryID":8,"det":"a","animal":"cow","f1":"fat","f2":"lazy","f3":"dumb"},
]
];

var allConditions = 
[
[
{"categoryID":1,"det":"an","animal":"ant","f1":"small","f2":"strong","f3":"busy"},
{"categoryID":2,"det":"a","animal":"bat","f1":"scary","f2":"blind","f3":"nocturnal"},
{"categoryID":3,"det":"a","animal":"bear","f1":"scary","f2":"big","f3":"fierce"},
{"categoryID":4,"det":"a","animal":"bee","f1":"busy","f2":"small","f3":"angry"},
{"categoryID":5,"det":"a","animal":"bird","f1":"small","f2":"graceful","f3":"free"},
{"categoryID":6,"det":"a","animal":"buffalo","f1":"big","f2":"strong","f3":"wild"},
{"categoryID":7,"det":"a","animal":"cat","f1":"independent","f2":"lazy","f3":"soft"},
{"categoryID":8,"det":"a","animal":"cow","f1":"fat","f2":"lazy","f3":"dumb"},
{"categoryID":9,"det":"a","animal":"dog","f1":"loyal","f2":"friendly","f3":"happy"},
{"categoryID":10,"det":"a","animal":"dolphin","f1":"smart","f2":"friendly","f3":"playful"},
{"categoryID":11,"det":"a","animal":"duck","f1":"loud","f2":"cute","f3":"quacking"},
{"categoryID":12,"det":"an","animal":"elephant","f1":"huge","f2":"smart","f3":"heavy"},
{"categoryID":13,"det":"a","animal":"fish","f1":"scaly","f2":"wet","f3":"smelly"},
{"categoryID":14,"det":"a","animal":"fox","f1":"sly","f2":"smart","f3":"cunning"},
{"categoryID":15,"det":"a","animal":"frog","f1":"slimy","f2":"noisy","f3":"jumpy"},
{"categoryID":16,"det":"a","animal":"goat","f1":"funny","f2":"hungry","f3":"loud"},
{"categoryID":17,"det":"a","animal":"goose","f1":"loud","f2":"mean","f3":"annoying"},
{"categoryID":18,"det":"a","animal":"horse","f1":"fast","f2":"strong","f3":"beautiful"},
{"categoryID":19,"det":"a","animal":"kangaroo","f1":"jumpy","f2":"bouncy","f3":"cute"},
{"categoryID":20,"det":"a","animal":"lion","f1":"scary","f2":"strong","f3":"ferocious"},
{"categoryID":21,"det":"a","animal":"monkey","f1":"funny","f2":"smart","f3":"playful"},
{"categoryID":22,"det":"an","animal":"owl","f1":"wise","f2":"quiet","f3":"nocturnal"},
{"categoryID":23,"det":"an","animal":"ox","f1":"strong","f2":"big","f3":"slow"},
{"categoryID":24,"det":"a","animal":"penguin","f1":"cold","f2":"cute","f3":"funny"},
{"categoryID":25,"det":"a","animal":"pig","f1":"dirty","f2":"fat","f3":"smelly"},
{"categoryID":26,"det":"a","animal":"rabbit","f1":"fast","f2":"furry","f3":"cute"},
{"categoryID":27,"det":"a","animal":"shark","f1":"scary","f2":"mean","f3":"dangerous"},
{"categoryID":28,"det":"a","animal":"sheep","f1":"wooly","f2":"fluffy","f3":"dumb"},
{"categoryID":29,"det":"a","animal":"tiger","f1":"striped","f2":"fierce","f3":"scary"},
{"categoryID":30,"det":"a","animal":"whale","f1":"large","f2":"graceful","f3":"majestic"},
{"categoryID":31,"det":"a","animal":"wolf","f1":"scary","f2":"mean","f3":"angry"},
{"categoryID":32,"det":"a","animal":"zebra","f1":"striped","f2":"exotic","f3":"fast"},
]
];


var debug = false;
if(debug) { allConditions = debugConditions; }


var numConditions = allConditions.length;
var chooseCondition = random(0, numConditions-1);
var allTrialOrders = allConditions[chooseCondition];
var numTrials = allTrialOrders.length;
var shuffledOrder = shuffledSampleArray(allTrialOrders.length, numTrials);
// randomize order of trials to split into conditions
var shuffledConditions = shuffledSampleArray(allTrialOrders.length, numTrials);
var numConditions = 4;
var numPerCondition = numTrials / numConditions;
var condition1 = shuffledConditions.slice(0*numPerCondition, 1*numPerCondition);
var condition2 = shuffledConditions.slice(1*numPerCondition, 2*numPerCondition);
var condition3 = shuffledConditions.slice(2*numPerCondition, 3*numPerCondition);
var condition4 = shuffledConditions.slice(3*numPerCondition, 4*numPerCondition);
var currentTrialNum = 0;
var trial;
var numComplete = 0;
var shuffledSpeakerOrder = shuffledSampleArray(allTrialOrders.length, numTrials);
var speaker;
var trialIndex;
var question;
var answer;
var trialCondition;

showSlide("instructions");
$("#trial-num").html(numComplete);
$("#total-num").html(numTrials);


var experiment = {
	categoryIDs: new Array(numTrials),
  	orders: new Array(numTrials),
  	animals: new Array(numTrials),
  	conditions: new Array(numTrials),
  	f1s: new Array(numTrials),
  	f2s: new Array(numTrials),
  	f3s: new Array(numTrials),
  	f1probs: new Array(numTrials),
  	f2probs: new Array(numTrials),
  	f3probs: new Array(numTrials),
  	speakers: new Array(numTrials),
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
	  experiment.speakers[currentTrialNum] = speaker;
      experiment.orders[currentTrialNum] = numComplete;
      experiment.categoryIDs[currentTrialNum] = trial.categoryID;
      experiment.animals[currentTrialNum] = trial.animal;
      experiment.conditions[currentTrialNum] = trialCondition;
      experiment.f1s[currentTrialNum] = trial.f1;
      experiment.f2s[currentTrialNum] = trial.f2;
      experiment.f3s[currentTrialNum] = trial.f3;
      var prob1 = parseInt(document.getElementById("hiddenSliderValue1").value) / 40.00;
      var prob2 = parseInt(document.getElementById("hiddenSliderValue2").value) / 40.00;
      var prob3 = parseInt(document.getElementById("hiddenSliderValue3").value) / 40.00;
      experiment.f1probs[currentTrialNum] = prob1;
      experiment.f2probs[currentTrialNum] = prob2;
      experiment.f3probs[currentTrialNum] = prob3;
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
    	trialIndex = shuffledOrder[numComplete];
    	trial = allTrialOrders[trialIndex];
    	speaker = allSpeakers[shuffledSpeakerOrder[numComplete]];
      showSlide("stage");
      $("#speaker1").html(speaker);
      $("#speaker2").html(speaker);
      $("#speaker3").html(speaker);
      if (condition1.indexOf(trialIndex) > -1) {
        question = "What is he like?";
        answer = "He is " + trial.f1 + ".";
        trialCondition = 1;
      } else if (condition2.indexOf(trialIndex) > -1){
      	question = "What is he like?";
      	answer = "He is " + trial.det + " " + trial.animal + ".";
      	trialCondition = 2;
      } else if (condition3.indexOf(trialIndex) > -1) {
      	question = "Is he " + trial.f1 + "?";
      	answer = "Yes.";
      	trialCondition = 3;
      } else if (condition4.indexOf(trialIndex) > -1) {
      	question = "Is he " + trial.f1 + "?";
      	answer = "He is " + trial.det + " " + trial.animal + ".";
      	trialCondition = 4;
      }
      $("#question").html(question);
      $("#answer").html(answer);
      $("#f1").html(trial.f1);
      $("#f2").html(trial.f2);
      $("#f3").html(trial.f3);
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
