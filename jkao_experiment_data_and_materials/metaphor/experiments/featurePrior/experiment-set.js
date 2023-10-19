var NUM_SLIDERS = 16;

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
{"categoryID":1,"determiner":"an","animal":"ant", "set1":"small, strong, busy", "set2":"small, strong, idle", "set3":"small, weak, busy", "set4":"small, weak, idle", "set5":"large, strong, busy", "set6":"large, strong, idle", "set7":"large, weak, busy", "set8":"large, weak, idle", },
{"categoryID":2,"determiner":"a","animal":"bat", "set1":"scary, blind, nocturnal", "set2":"scary, blind, diurnal", "set3":"scary, sighted, nocturnal", "set4":"scary, sighted, diurnal", "set5":"unalarming, blind, nocturnal", "set6":"unalarming, blind, diurnal", "set7":"unalarming, sighted, nocturnal", "set8":"unalarming, sighted, diurnal", },
]
];

var allConditions = 
[
[
{"categoryID":1,"determiner":"an","animal":"ant", "set1":"small, strong, busy", "set2":"small, strong, idle", "set3":"small, weak, busy", "set4":"small, weak, idle", "set5":"large, strong, busy", "set6":"large, strong, idle", "set7":"large, weak, busy", "set8":"large, weak, idle", },
{"categoryID":2,"determiner":"a","animal":"bat", "set1":"scary, blind, nocturnal", "set2":"scary, blind, diurnal", "set3":"scary, sighted, nocturnal", "set4":"scary, sighted, diurnal", "set5":"unalarming, blind, nocturnal", "set6":"unalarming, blind, diurnal", "set7":"unalarming, sighted, nocturnal", "set8":"unalarming, sighted, diurnal", },
{"categoryID":3,"determiner":"a","animal":"bear", "set1":"scary, big, fierce", "set2":"scary, big, nonviolent", "set3":"scary, small, fierce", "set4":"scary, small, nonviolent", "set5":"unalarming, big, fierce", "set6":"unalarming, big, nonviolent", "set7":"unalarming, small, fierce", "set8":"unalarming, small, nonviolent", },
{"categoryID":4,"determiner":"a","animal":"bee", "set1":"busy, small, angry", "set2":"busy, small, unangry", "set3":"busy, large, angry", "set4":"busy, large, unangry", "set5":"idle, small, angry", "set6":"idle, small, unangry", "set7":"idle, large, angry", "set8":"idle, large, unangry", },
{"categoryID":5,"determiner":"a","animal":"bird", "set1":"free, graceful, small", "set2":"free, graceful, large", "set3":"free, awkward, small", "set4":"free, awkward, large", "set5":"unfree, graceful, small", "set6":"unfree, graceful, large", "set7":"unfree, awkward, small", "set8":"unfree, awkward, large", },
{"categoryID":6,"determiner":"a","animal":"buffalo", "set1":"big, strong, wild", "set2":"big, strong, tame", "set3":"big, weak, wild", "set4":"big, weak, tame", "set5":"small, strong, wild", "set6":"small, strong, tame", "set7":"small, weak, wild", "set8":"small, weak, tame", },
{"categoryID":7,"determiner":"a","animal":"cat", "set1":"independent, lazy, soft", "set2":"independent, lazy, hard", "set3":"independent, fast, soft", "set4":"independent, fast, hard", "set5":"dependent, lazy, soft", "set6":"dependent, lazy, hard", "set7":"dependent, fast, soft", "set8":"dependent, fast, hard", },
{"categoryID":8,"determiner":"a","animal":"cow", "set1":"fat, dumb, lazy", "set2":"fat, dumb, fast", "set3":"fat, smart, lazy", "set4":"fat, smart, fast", "set5":"thin, dumb, lazy", "set6":"thin, dumb, fast", "set7":"thin, smart, lazy", "set8":"thin, smart, fast", },
{"categoryID":9,"determiner":"a","animal":"dog", "set1":"loyal, friendly, happy", "set2":"loyal, friendly, unhappy", "set3":"loyal, unfriendly, happy", "set4":"loyal, unfriendly, unhappy", "set5":"disloyal, friendly, happy", "set6":"disloyal, friendly, unhappy", "set7":"disloyal, unfriendly, happy", "set8":"disloyal, unfriendly, unhappy", },
{"categoryID":10,"determiner":"a","animal":"dolphin", "set1":"smart, friendly, playful", "set2":"smart, friendly, unplayful", "set3":"smart, unfriendly, playful", "set4":"smart, unfriendly, unplayful", "set5":"stupid, friendly, playful", "set6":"stupid, friendly, unplayful", "set7":"stupid, unfriendly, playful", "set8":"stupid, unfriendly, unplayful", },
{"categoryID":11,"determiner":"a","animal":"duck", "set1":"loud, cute, quacking", "set2":"loud, cute, non-quacking", "set3":"loud, unattractive, quacking", "set4":"loud, unattractive, non-quacking", "set5":"quiet, cute, quacking", "set6":"quiet, cute, non-quacking", "set7":"quiet, unattractive, quacking", "set8":"quiet, unattractive, non-quacking", },
{"categoryID":12,"determiner":"an","animal":"elephant", "set1":"huge, smart, heavy", "set2":"huge, smart, light", "set3":"huge, stupid, heavy", "set4":"huge, stupid, light", "set5":"small, smart, heavy", "set6":"small, smart, light", "set7":"small, stupid, heavy", "set8":"small, stupid, light", },
{"categoryID":13,"determiner":"a","animal":"fish", "set1":"scaly, wet, smelly", "set2":"scaly, wet, fragrant", "set3":"scaly, dry, smelly", "set4":"scaly, dry, fragrant", "set5":"smooth, wet, smelly", "set6":"smooth, wet, fragrant", "set7":"smooth, dry, smelly", "set8":"smooth, dry, fragrant", },
{"categoryID":14,"determiner":"a","animal":"fox", "set1":"sly, smart, pretty", "set2":"sly, smart, ugly", "set3":"sly, stupid, pretty", "set4":"sly, stupid, ugly", "set5":"artless, smart, pretty", "set6":"artless, smart, ugly", "set7":"artless, stupid, pretty", "set8":"artless, stupid, ugly", },
{"categoryID":15,"determiner":"a","animal":"frog", "set1":"slimy, noisy, jumpy", "set2":"slimy, noisy, relaxed", "set3":"slimy, quiet, jumpy", "set4":"slimy, quiet, relaxed", "set5":"nonslippery, noisy, jumpy", "set6":"nonslippery, noisy, relaxed", "set7":"nonslippery, quiet, jumpy", "set8":"nonslippery, quiet, relaxed", },
{"categoryID":16,"determiner":"a","animal":"goat", "set1":"funny, hungry, loud", "set2":"funny, hungry, quiet", "set3":"funny, full, loud", "set4":"funny, full, quiet", "set5":"humorless, hungry, loud", "set6":"humorless, hungry, quiet", "set7":"humorless, full, loud", "set8":"humorless, full, quiet", },
{"categoryID":17,"determiner":"a","animal":"goose", "set1":"loud, mean, annoying", "set2":"loud, mean, agreeable", "set3":"loud, nice, annoying", "set4":"loud, nice, agreeable", "set5":"quiet, mean, annoying", "set6":"quiet, mean, agreeable", "set7":"quiet, nice, annoying", "set8":"quiet, nice, agreeable", },
{"categoryID":18,"determiner":"a","animal":"horse", "set1":"fast, strong, beautiful", "set2":"fast, strong, ugly", "set3":"fast, weak, beautiful", "set4":"fast, weak, ugly", "set5":"slow, strong, beautiful", "set6":"slow, strong, ugly", "set7":"slow, weak, beautiful", "set8":"slow, weak, ugly", },
{"categoryID":19,"determiner":"a","animal":"kangaroo", "set1":"jumpy, bouncy, cute", "set2":"jumpy, bouncy, unattractive", "set3":"jumpy, inelastic, cute", "set4":"jumpy, inelastic, unattractive", "set5":"relaxed, bouncy, cute", "set6":"relaxed, bouncy, unattractive", "set7":"relaxed, inelastic, cute", "set8":"relaxed, inelastic, unattractive", },
{"categoryID":20,"determiner":"a","animal":"lion", "set1":"ferocious, scary, strong", "set2":"ferocious, scary, weak", "set3":"ferocious, unalarming, strong", "set4":"ferocious, unalarming, weak", "set5":"nonviolent, scary, strong", "set6":"nonviolent, scary, weak", "set7":"nonviolent, unalarming, strong", "set8":"nonviolent, unalarming, weak", },
{"categoryID":21,"determiner":"a","animal":"monkey", "set1":"funny, smart, playful", "set2":"funny, smart, unplayful", "set3":"funny, stupid, playful", "set4":"funny, stupid, unplayful", "set5":"humorless, smart, playful", "set6":"humorless, smart, unplayful", "set7":"humorless, stupid, playful", "set8":"humorless, stupid, unplayful", },
{"categoryID":22,"determiner":"an","animal":"owl", "set1":"wise, quiet, nocturnal", "set2":"wise, quiet, diurnal", "set3":"wise, loud, nocturnal", "set4":"wise, loud, diurnal", "set5":"foolish, quiet, nocturnal", "set6":"foolish, quiet, diurnal", "set7":"foolish, loud, nocturnal", "set8":"foolish, loud, diurnal", },
{"categoryID":23,"determiner":"an","animal":"ox", "set1":"strong, big, slow", "set2":"strong, big, fast", "set3":"strong, small, slow", "set4":"strong, small, fast", "set5":"weak, big, slow", "set6":"weak, big, fast", "set7":"weak, small, slow", "set8":"weak, small, fast", },
{"categoryID":24,"determiner":"a","animal":"penguin", "set1":"cold, cute, funny", "set2":"cold, cute, humorless", "set3":"cold, unattractive, funny", "set4":"cold, unattractive, humorless", "set5":"hot, cute, funny", "set6":"hot, cute, humorless", "set7":"hot, unattractive, funny", "set8":"hot, unattractive, humorless", },
{"categoryID":25,"determiner":"a","animal":"pig", "set1":"dirty, fat, smelly", "set2":"dirty, fat, fragrant", "set3":"dirty, thin, smelly", "set4":"dirty, thin, fragrant", "set5":"clean, fat, smelly", "set6":"clean, fat, fragrant", "set7":"clean, thin, smelly", "set8":"clean, thin, fragrant", },
{"categoryID":26,"determiner":"a","animal":"rabbit", "set1":"fast, furry, cute", "set2":"fast, furry, unattractive", "set3":"fast, hairless, cute", "set4":"fast, hairless, unattractive", "set5":"slow, furry, cute", "set6":"slow, furry, unattractive", "set7":"slow, hairless, cute", "set8":"slow, hairless, unattractive", },
{"categoryID":27,"determiner":"a","animal":"shark", "set1":"scary, dangerous, mean", "set2":"scary, dangerous, nice", "set3":"scary, safe, mean", "set4":"scary, safe, nice", "set5":"unalarming, dangerous, mean", "set6":"unalarming, dangerous, nice", "set7":"unalarming, safe, mean", "set8":"unalarming, safe, nice", },
{"categoryID":28,"determiner":"a","animal":"sheep", "set1":"wooly, fluffy, dumb", "set2":"wooly, fluffy, smart", "set3":"wooly, hard, dumb", "set4":"wooly, hard, smart", "set5":"hairless, fluffy, dumb", "set6":"hairless, fluffy, smart", "set7":"hairless, hard, dumb", "set8":"hairless, hard, smart", },
{"categoryID":29,"determiner":"a","animal":"tiger", "set1":"striped, fierce, scary", "set2":"striped, fierce, unalarming", "set3":"striped, nonviolent, scary", "set4":"striped, nonviolent, unalarming", "set5":"unpatterned, fierce, scary", "set6":"unpatterned, fierce, unalarming", "set7":"unpatterned, nonviolent, scary", "set8":"unpatterned, nonviolent, unalarming", },
{"categoryID":30,"determiner":"a","animal":"whale", "set1":"large, graceful, majestic", "set2":"large, graceful, inferior", "set3":"large, awkward, majestic", "set4":"large, awkward, inferior", "set5":"small, graceful, majestic", "set6":"small, graceful, inferior", "set7":"small, awkward, majestic", "set8":"small, awkward, inferior", },
{"categoryID":31,"determiner":"a","animal":"wolf", "set1":"scary, mean, angry", "set2":"scary, mean, unangry", "set3":"scary, nice, angry", "set4":"scary, nice, unangry", "set5":"unalarming, mean, angry", "set6":"unalarming, mean, unangry", "set7":"unalarming, nice, angry", "set8":"unalarming, nice, unangry", },
{"categoryID":32,"determiner":"a","animal":"zebra", "set1":"striped, exotic, fast", "set2":"striped, exotic, slow", "set3":"striped, native, fast", "set4":"striped, native, slow", "set5":"unpatterned, exotic, fast", "set6":"unpatterned, exotic, slow", "set7":"unpatterned, native, fast", "set8":"unpatterned, native, slow", },]
];

var debug = false;
if(debug) { allConditions = debugConditions; }


var numConditions = allConditions.length;
var chooseCondition = random(0, numConditions-1);
var allTrialOrders = allConditions[chooseCondition];
var numTrials = allTrialOrders.length / 2;
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
    names: new Array(numTrials),
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

  	set1probs_people: new Array(numTrials),
    set2probs_people: new Array(numTrials),
    set3probs_people: new Array(numTrials),
    set4probs_people: new Array(numTrials),
    set5probs_people: new Array(numTrials),
    set6probs_people: new Array(numTrials),
    set7probs_people: new Array(numTrials),
    set8probs_people: new Array(numTrials),

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
    var gen = getRadioCheckedValue(2, "genderButton");
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
      experiment.animals[currentTrialNum] = trial.animal;
      experiment.names[currentTrialNum] = speaker;
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

      experiment.set1probs_people[currentTrialNum] = parseInt(document.getElementById("hiddenSliderValue9").value) / 40.00;
      experiment.set2probs_people[currentTrialNum] = parseInt(document.getElementById("hiddenSliderValue10").value) / 40.00;
      experiment.set3probs_people[currentTrialNum] = parseInt(document.getElementById("hiddenSliderValue11").value) / 40.00;
      experiment.set4probs_people[currentTrialNum] = parseInt(document.getElementById("hiddenSliderValue12").value) / 40.00;
      experiment.set5probs_people[currentTrialNum] = parseInt(document.getElementById("hiddenSliderValue13").value) / 40.00;
      experiment.set6probs_people[currentTrialNum] = parseInt(document.getElementById("hiddenSliderValue14").value) / 40.00;
      experiment.set7probs_people[currentTrialNum] = parseInt(document.getElementById("hiddenSliderValue15").value) / 40.00;
      experiment.set8probs_people[currentTrialNum] = parseInt(document.getElementById("hiddenSliderValue16").value) / 40.00;

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

      $("#f1-person").html(trial.set1);
      $("#f2-person").html(trial.set2);
      $("#f3-person").html(trial.set3);
      $("#f4-person").html(trial.set4);
      $("#f5-person").html(trial.set5);
      $("#f6-person").html(trial.set6);
      $("#f7-person").html(trial.set7);
      $("#f8-person").html(trial.set8);

      $("#determiner").html(trial.determiner);
      $("#animal").html(trial.animal);
      $("#name").html(speaker);
      
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
$("#slider9").slider({
               animate: true,
               
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider9 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue9').attr('value', ui.value);
                   $("#slider9").css({"background":"#99D6EB"});
                   $("#slider9 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
$("#slider10").slider({
               animate: true,
               
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider10 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue10').attr('value', ui.value);
                   $("#slider10").css({"background":"#99D6EB"});
                   $("#slider10 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
$("#slider11").slider({
               animate: true,
               
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider11 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue11').attr('value', ui.value);
                   $("#slider11").css({"background":"#99D6EB"});
                   $("#slider11 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
$("#slider12").slider({
               animate: true,
               
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider12 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue12').attr('value', ui.value);
                   $("#slider12").css({"background":"#99D6EB"});
                   $("#slider12 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
$("#slider13").slider({
               animate: true,
               
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider13 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue13').attr('value', ui.value);
                   $("#slider13").css({"background":"#99D6EB"});
                   $("#slider13 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
$("#slider14").slider({
               animate: true,
               
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider14 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue14').attr('value', ui.value);
                   $("#slider14").css({"background":"#99D6EB"});
                   $("#slider14 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
$("#slider15").slider({
               animate: true,
               
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider15 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue15').attr('value', ui.value);
                   $("#slider15").css({"background":"#99D6EB"});
                   $("#slider15 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
$("#slider16").slider({
               animate: true,
               
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider16 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue16').attr('value', ui.value);
                   $("#slider16").css({"background":"#99D6EB"});
                   $("#slider16 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
