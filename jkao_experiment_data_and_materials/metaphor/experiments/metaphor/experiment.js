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


var allConditions = 
[
[
{"categoryID":1,"question":"What is he like?","answer":"He is small.","animal":"ant","f1":"small","f2":"strong","f3":"busy"},
{"categoryID":2,"question":"What is he like?","answer":"He is scary.","animal":"bat","f1":"scary","f2":"blind","f3":"nocturnal"},
{"categoryID":3,"question":"What is he like?","answer":"He is scary.","animal":"bear","f1":"scary","f2":"big","f3":"fierce"},
{"categoryID":4,"question":"What is he like?","answer":"He is busy.","animal":"bee","f1":"busy","f2":"small","f3":"angry"},
{"categoryID":5,"question":"What is he like?","answer":"He is small.","animal":"bird","f1":"small","f2":"graceful","f3":"free"},
{"categoryID":6,"question":"What is he like?","answer":"He is big.","animal":"buffalo","f1":"big","f2":"strong","f3":"wild"},
{"categoryID":7,"question":"What is he like?","answer":"He is independent.","animal":"cat","f1":"independent","f2":"lazy","f3":"soft"},
{"categoryID":8,"question":"What is he like?","answer":"He is fat.","animal":"cow","f1":"fat","f2":"lazy","f3":"dumb"},
{"categoryID":9,"question":"What is he like?","answer":"He is loyal.","animal":"dog","f1":"loyal","f2":"friendly","f3":"happy"},
{"categoryID":10,"question":"What is he like?","answer":"He is smart.","animal":"dolphin","f1":"smart","f2":"friendly","f3":"playful"},
{"categoryID":11,"question":"What is he like?","answer":"He is loud.","animal":"duck","f1":"loud","f2":"cute","f3":"quacking"},
{"categoryID":12,"question":"What is he like?","answer":"He is huge.","animal":"elephant","f1":"huge","f2":"smart","f3":"heavy"},
{"categoryID":13,"question":"What is he like?","answer":"He is scaly.","animal":"fish","f1":"scaly","f2":"wet","f3":"smelly"},
{"categoryID":14,"question":"What is he like?","answer":"He is sly.","animal":"fox","f1":"sly","f2":"smart","f3":"pretty"},
{"categoryID":15,"question":"What is he like?","answer":"He is slimy.","animal":"frog","f1":"slimy","f2":"noisy","f3":"jumpy"},
{"categoryID":16,"question":"What is he like?","answer":"He is funny.","animal":"goat","f1":"funny","f2":"hungry","f3":"loud"},
{"categoryID":17,"question":"What is he like?","answer":"He is loud.","animal":"goose","f1":"loud","f2":"mean","f3":"annoying"},
{"categoryID":18,"question":"What is he like?","answer":"He is fast.","animal":"horse","f1":"fast","f2":"strong","f3":"beautiful"},
{"categoryID":19,"question":"What is he like?","answer":"He is jumpy.","animal":"kangaroo","f1":"jumpy","f2":"bouncy","f3":"cute"},
{"categoryID":20,"question":"What is he like?","answer":"He is scary.","animal":"lion","f1":"scary","f2":"strong","f3":"ferocious"},
{"categoryID":21,"question":"What is he like?","answer":"He is funny.","animal":"monkey","f1":"funny","f2":"smart","f3":"playful"},
{"categoryID":22,"question":"What is he like?","answer":"He is wise.","animal":"owl","f1":"wise","f2":"quiet","f3":"nocturnal"},
{"categoryID":23,"question":"What is he like?","answer":"He is strong.","animal":"ox","f1":"strong","f2":"big","f3":"slow"},
{"categoryID":24,"question":"What is he like?","answer":"He is cold.","animal":"penguin","f1":"cold","f2":"cute","f3":"funny"},
{"categoryID":25,"question":"What is he like?","answer":"He is dirty.","animal":"pig","f1":"dirty","f2":"fat","f3":"smelly"},
{"categoryID":26,"question":"What is he like?","answer":"He is fast.","animal":"rabbit","f1":"fast","f2":"furry","f3":"cute"},
{"categoryID":27,"question":"What is he like?","answer":"He is scary.","animal":"shark","f1":"scary","f2":"mean","f3":"dangerous"},
{"categoryID":28,"question":"What is he like?","answer":"He is wooly.","animal":"sheep","f1":"wooly","f2":"fluffy","f3":"dumb"},
{"categoryID":29,"question":"What is he like?","answer":"He is striped.","animal":"tiger","f1":"striped","f2":"fierce","f3":"scary"},
{"categoryID":30,"question":"What is he like?","answer":"He is large.","animal":"whale","f1":"large","f2":"graceful","f3":"majestic"},
{"categoryID":31,"question":"What is he like?","answer":"He is scary.","animal":"wolf","f1":"scary","f2":"mean","f3":"angry"},
{"categoryID":32,"question":"What is he like?","answer":"He is striped.","animal":"zebra","f1":"striped","f2":"exotic","f3":"fast"},
],
[
{"categoryID":1,"question":"What is he like?","answer":"He is an ant.","animal":"ant","f1":"small","f2":"strong","f3":"busy"},
{"categoryID":2,"question":"What is he like?","answer":"He is a bat.","animal":"bat","f1":"scary","f2":"blind","f3":"nocturnal"},
{"categoryID":3,"question":"What is he like?","answer":"He is a bear.","animal":"bear","f1":"scary","f2":"big","f3":"fierce"},
{"categoryID":4,"question":"What is he like?","answer":"He is a bee.","animal":"bee","f1":"busy","f2":"small","f3":"angry"},
{"categoryID":5,"question":"What is he like?","answer":"He is a bird.","animal":"bird","f1":"small","f2":"graceful","f3":"free"},
{"categoryID":6,"question":"What is he like?","answer":"He is a buffalo.","animal":"buffalo","f1":"big","f2":"strong","f3":"wild"},
{"categoryID":7,"question":"What is he like?","answer":"He is a cat.","animal":"cat","f1":"independent","f2":"lazy","f3":"soft"},
{"categoryID":8,"question":"What is he like?","answer":"He is a cow.","animal":"cow","f1":"fat","f2":"lazy","f3":"dumb"},
{"categoryID":9,"question":"What is he like?","answer":"He is a dog.","animal":"dog","f1":"loyal","f2":"friendly","f3":"happy"},
{"categoryID":10,"question":"What is he like?","answer":"He is a dolphin.","animal":"dolphin","f1":"smart","f2":"friendly","f3":"playful"},
{"categoryID":11,"question":"What is he like?","answer":"He is a duck.","animal":"duck","f1":"loud","f2":"cute","f3":"quacking"},
{"categoryID":12,"question":"What is he like?","answer":"He is an elephant.","animal":"elephant","f1":"huge","f2":"smart","f3":"heavy"},
{"categoryID":13,"question":"What is he like?","answer":"He is a fish.","animal":"fish","f1":"scaly","f2":"wet","f3":"smelly"},
{"categoryID":14,"question":"What is he like?","answer":"He is a fox.","animal":"fox","f1":"sly","f2":"smart","f3":"pretty"},
{"categoryID":15,"question":"What is he like?","answer":"He is a frog.","animal":"frog","f1":"slimy","f2":"noisy","f3":"jumpy"},
{"categoryID":16,"question":"What is he like?","answer":"He is a goat.","animal":"goat","f1":"funny","f2":"hungry","f3":"loud"},
{"categoryID":17,"question":"What is he like?","answer":"He is a goose.","animal":"goose","f1":"loud","f2":"mean","f3":"annoying"},
{"categoryID":18,"question":"What is he like?","answer":"He is a horse.","animal":"horse","f1":"fast","f2":"strong","f3":"beautiful"},
{"categoryID":19,"question":"What is he like?","answer":"He is a kangaroo.","animal":"kangaroo","f1":"jumpy","f2":"bouncy","f3":"cute"},
{"categoryID":20,"question":"What is he like?","answer":"He is a lion.","animal":"lion","f1":"scary","f2":"strong","f3":"ferocious"},
{"categoryID":21,"question":"What is he like?","answer":"He is a monkey.","animal":"monkey","f1":"funny","f2":"smart","f3":"playful"},
{"categoryID":22,"question":"What is he like?","answer":"He is an owl.","animal":"owl","f1":"wise","f2":"quiet","f3":"nocturnal"},
{"categoryID":23,"question":"What is he like?","answer":"He is an ox.","animal":"ox","f1":"strong","f2":"big","f3":"slow"},
{"categoryID":24,"question":"What is he like?","answer":"He is a penguin.","animal":"penguin","f1":"cold","f2":"cute","f3":"funny"},
{"categoryID":25,"question":"What is he like?","answer":"He is a pig.","animal":"pig","f1":"dirty","f2":"fat","f3":"smelly"},
{"categoryID":26,"question":"What is he like?","answer":"He is a rabbit.","animal":"rabbit","f1":"fast","f2":"furry","f3":"cute"},
{"categoryID":27,"question":"What is he like?","answer":"He is a shark.","animal":"shark","f1":"scary","f2":"mean","f3":"dangerous"},
{"categoryID":28,"question":"What is he like?","answer":"He is a sheep.","animal":"sheep","f1":"wooly","f2":"fluffy","f3":"dumb"},
{"categoryID":29,"question":"What is he like?","answer":"He is a tiger.","animal":"tiger","f1":"striped","f2":"fierce","f3":"scary"},
{"categoryID":30,"question":"What is he like?","answer":"He is a whale.","animal":"whale","f1":"large","f2":"graceful","f3":"majestic"},
{"categoryID":31,"question":"What is he like?","answer":"He is a wolf.","animal":"wolf","f1":"scary","f2":"mean","f3":"angry"},
{"categoryID":32,"question":"What is he like?","answer":"He is a zebra.","animal":"zebra","f1":"striped","f2":"exotic","f3":"fast"},
],
[
{"categoryID":1,"question":"Is he small?","answer":"Yes.","animal":"ant","f1":"small","f2":"strong","f3":"busy"},
{"categoryID":2,"question":"Is he scary?","answer":"Yes.","animal":"bat","f1":"scary","f2":"blind","f3":"nocturnal"},
{"categoryID":3,"question":"Is he scary?","answer":"Yes.","animal":"bear","f1":"scary","f2":"big","f3":"fierce"},
{"categoryID":4,"question":"Is he busy?","answer":"Yes.","animal":"bee","f1":"busy","f2":"small","f3":"angry"},
{"categoryID":5,"question":"Is he small?","answer":"Yes.","animal":"bird","f1":"small","f2":"graceful","f3":"free"},
{"categoryID":6,"question":"Is he big?","answer":"Yes.","animal":"buffalo","f1":"big","f2":"strong","f3":"wild"},
{"categoryID":7,"question":"Is he independent?","answer":"Yes.","animal":"cat","f1":"independent","f2":"lazy","f3":"soft"},
{"categoryID":8,"question":"Is he fat?","answer":"Yes.","animal":"cow","f1":"fat","f2":"lazy","f3":"dumb"},
{"categoryID":9,"question":"Is he loyal?","answer":"Yes.","animal":"dog","f1":"loyal","f2":"friendly","f3":"happy"},
{"categoryID":10,"question":"Is he smart?","answer":"Yes.","animal":"dolphin","f1":"smart","f2":"friendly","f3":"playful"},
{"categoryID":11,"question":"Is he loud?","answer":"Yes.","animal":"duck","f1":"loud","f2":"cute","f3":"quacking"},
{"categoryID":12,"question":"Is he huge?","answer":"Yes.","animal":"elephant","f1":"huge","f2":"smart","f3":"heavy"},
{"categoryID":13,"question":"Is he scaly?","answer":"Yes.","animal":"fish","f1":"scaly","f2":"wet","f3":"smelly"},
{"categoryID":14,"question":"Is he sly?","answer":"Yes.","animal":"fox","f1":"sly","f2":"smart","f3":"pretty"},
{"categoryID":15,"question":"Is he slimy?","answer":"Yes.","animal":"frog","f1":"slimy","f2":"noisy","f3":"jumpy"},
{"categoryID":16,"question":"Is he funny?","answer":"Yes.","animal":"goat","f1":"funny","f2":"hungry","f3":"loud"},
{"categoryID":17,"question":"Is he loud?","answer":"Yes.","animal":"goose","f1":"loud","f2":"mean","f3":"annoying"},
{"categoryID":18,"question":"Is he fast?","answer":"Yes.","animal":"horse","f1":"fast","f2":"strong","f3":"beautiful"},
{"categoryID":19,"question":"Is he jumpy?","answer":"Yes.","animal":"kangaroo","f1":"jumpy","f2":"bouncy","f3":"cute"},
{"categoryID":20,"question":"Is he scary?","answer":"Yes.","animal":"lion","f1":"scary","f2":"strong","f3":"ferocious"},
{"categoryID":21,"question":"Is he funny?","answer":"Yes.","animal":"monkey","f1":"funny","f2":"smart","f3":"playful"},
{"categoryID":22,"question":"Is he wise?","answer":"Yes.","animal":"owl","f1":"wise","f2":"quiet","f3":"nocturnal"},
{"categoryID":23,"question":"Is he strong?","answer":"Yes.","animal":"ox","f1":"strong","f2":"big","f3":"slow"},
{"categoryID":24,"question":"Is he cold?","answer":"Yes.","animal":"penguin","f1":"cold","f2":"cute","f3":"funny"},
{"categoryID":25,"question":"Is he dirty?","answer":"Yes.","animal":"pig","f1":"dirty","f2":"fat","f3":"smelly"},
{"categoryID":26,"question":"Is he fast?","answer":"Yes.","animal":"rabbit","f1":"fast","f2":"furry","f3":"cute"},
{"categoryID":27,"question":"Is he scary?","answer":"Yes.","animal":"shark","f1":"scary","f2":"mean","f3":"dangerous"},
{"categoryID":28,"question":"Is he wooly?","answer":"Yes.","animal":"sheep","f1":"wooly","f2":"fluffy","f3":"dumb"},
{"categoryID":29,"question":"Is he striped?","answer":"Yes.","animal":"tiger","f1":"striped","f2":"fierce","f3":"scary"},
{"categoryID":30,"question":"Is he large?","answer":"Yes.","animal":"whale","f1":"large","f2":"graceful","f3":"majestic"},
{"categoryID":31,"question":"Is he scary?","answer":"Yes.","animal":"wolf","f1":"scary","f2":"mean","f3":"angry"},
{"categoryID":32,"question":"Is he striped?","answer":"Yes.","animal":"zebra","f1":"striped","f2":"exotic","f3":"fast"},
],
[
{"categoryID":1,"question":"Is he small?","answer":"He is an ant.","animal":"ant","f1":"small","f2":"strong","f3":"busy"},
{"categoryID":2,"question":"Is he scary?","answer":"He is a bat.","animal":"bat","f1":"scary","f2":"blind","f3":"nocturnal"},
{"categoryID":3,"question":"Is he scary?","answer":"He is a bear.","animal":"bear","f1":"scary","f2":"big","f3":"fierce"},
{"categoryID":4,"question":"Is he busy?","answer":"He is a bee.","animal":"bee","f1":"busy","f2":"small","f3":"angry"},
{"categoryID":5,"question":"Is he small?","answer":"He is a bird.","animal":"bird","f1":"small","f2":"graceful","f3":"free"},
{"categoryID":6,"question":"Is he big?","answer":"He is a buffalo.","animal":"buffalo","f1":"big","f2":"strong","f3":"wild"},
{"categoryID":7,"question":"Is he independent?","answer":"He is a cat.","animal":"cat","f1":"independent","f2":"lazy","f3":"soft"},
{"categoryID":8,"question":"Is he fat?","answer":"He is a cow.","animal":"cow","f1":"fat","f2":"lazy","f3":"dumb"},
{"categoryID":9,"question":"Is he loyal?","answer":"He is a dog.","animal":"dog","f1":"loyal","f2":"friendly","f3":"happy"},
{"categoryID":10,"question":"Is he smart?","answer":"He is a dolphin.","animal":"dolphin","f1":"smart","f2":"friendly","f3":"playful"},
{"categoryID":11,"question":"Is he loud?","answer":"He is a duck.","animal":"duck","f1":"loud","f2":"cute","f3":"quacking"},
{"categoryID":12,"question":"Is he huge?","answer":"He is an elephant.","animal":"elephant","f1":"huge","f2":"smart","f3":"heavy"},
{"categoryID":13,"question":"Is he scaly?","answer":"He is a fish.","animal":"fish","f1":"scaly","f2":"wet","f3":"smelly"},
{"categoryID":14,"question":"Is he sly?","answer":"He is a fox.","animal":"fox","f1":"sly","f2":"smart","f3":"pretty"},
{"categoryID":15,"question":"Is he slimy?","answer":"He is a frog.","animal":"frog","f1":"slimy","f2":"noisy","f3":"jumpy"},
{"categoryID":16,"question":"Is he funny?","answer":"He is a goat.","animal":"goat","f1":"funny","f2":"hungry","f3":"loud"},
{"categoryID":17,"question":"Is he loud?","answer":"He is a goose.","animal":"goose","f1":"loud","f2":"mean","f3":"annoying"},
{"categoryID":18,"question":"Is he fast?","answer":"He is a horse.","animal":"horse","f1":"fast","f2":"strong","f3":"beautiful"},
{"categoryID":19,"question":"Is he jumpy?","answer":"He is a kangaroo.","animal":"kangaroo","f1":"jumpy","f2":"bouncy","f3":"cute"},
{"categoryID":20,"question":"Is he scary?","answer":"He is a lion.","animal":"lion","f1":"scary","f2":"strong","f3":"ferocious"},
{"categoryID":21,"question":"Is he funny?","answer":"He is a monkey.","animal":"monkey","f1":"funny","f2":"smart","f3":"playful"},
{"categoryID":22,"question":"Is he wise?","answer":"He is an owl.","animal":"owl","f1":"wise","f2":"quiet","f3":"nocturnal"},
{"categoryID":23,"question":"Is he strong?","answer":"He is an ox.","animal":"ox","f1":"strong","f2":"big","f3":"slow"},
{"categoryID":24,"question":"Is he cold?","answer":"He is a penguin.","animal":"penguin","f1":"cold","f2":"cute","f3":"funny"},
{"categoryID":25,"question":"Is he dirty?","answer":"He is a pig.","animal":"pig","f1":"dirty","f2":"fat","f3":"smelly"},
{"categoryID":26,"question":"Is he fast?","answer":"He is a rabbit.","animal":"rabbit","f1":"fast","f2":"furry","f3":"cute"},
{"categoryID":27,"question":"Is he scary?","answer":"He is a shark.","animal":"shark","f1":"scary","f2":"mean","f3":"dangerous"},
{"categoryID":28,"question":"Is he wooly?","answer":"He is a sheep.","animal":"sheep","f1":"wooly","f2":"fluffy","f3":"dumb"},
{"categoryID":29,"question":"Is he striped?","answer":"He is a tiger.","animal":"tiger","f1":"striped","f2":"fierce","f3":"scary"},
{"categoryID":30,"question":"Is he large?","answer":"He is a whale.","animal":"whale","f1":"large","f2":"graceful","f3":"majestic"},
{"categoryID":31,"question":"Is he scary?","answer":"He is a wolf.","animal":"wolf","f1":"scary","f2":"mean","f3":"angry"},
{"categoryID":32,"question":"Is he striped?","answer":"He is a zebra.","animal":"zebra","f1":"striped","f2":"exotic","f3":"fast"},
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
    	trial = allTrialOrders[shuffledOrder[numComplete]];
    	speaker = allSpeakers[shuffledSpeakerOrder[numComplete]];
      showSlide("stage");
      $("#speaker1").html(speaker);
      $("#speaker2").html(speaker);
      $("#speaker3").html(speaker);
      $("#question").html(trial.question);
      $("#answer").html(trial.answer);
      $("#f1").html(trial.f1);
      $("#f2").html(trial.f2);
      $("#f3").html(trial.f3);
      $("#det").html(trial.det);
      $("#animal").html(trial.animal);
      
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
