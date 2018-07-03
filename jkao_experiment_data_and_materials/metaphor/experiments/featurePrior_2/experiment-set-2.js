var NUM_SLIDERS = 4;

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
{"categoryID":1,"determiner":"an","animal":"ant", "set1":"small, strong", "set2":"small, weak", "set3":"large, strong", "set4":"large, weak", },
{"categoryID":2,"determiner":"a","animal":"bat", "set1":"scary, blind", "set2":"scary, sighted", "set3":"unalarming, blind", "set4":"unalarming, sighted", },
{"categoryID":3,"determiner":"a","animal":"bear", "set1":"scary, big", "set2":"scary, small", "set3":"unalarming, big", "set4":"unalarming, small", },
{"categoryID":4,"determiner":"a","animal":"bee", "set1":"busy, small", "set2":"busy, large", "set3":"idle, small", "set4":"idle, large", },
{"categoryID":5,"determiner":"a","animal":"bird", "set1":"free, graceful", "set2":"free, awkward", "set3":"unfree, graceful", "set4":"unfree, awkward", },
{"categoryID":6,"determiner":"a","animal":"buffalo", "set1":"big, strong", "set2":"big, weak", "set3":"small, strong", "set4":"small, weak", },
{"categoryID":7,"determiner":"a","animal":"cat", "set1":"independent, lazy", "set2":"independent, fast", "set3":"dependent, lazy", "set4":"dependent, fast", },
{"categoryID":8,"determiner":"a","animal":"cow", "set1":"fat, dumb", "set2":"fat, smart", "set3":"thin, dumb", "set4":"thin, smart", },
{"categoryID":9,"determiner":"a","animal":"dog", "set1":"loyal, friendly", "set2":"loyal, unfriendly", "set3":"disloyal, friendly", "set4":"disloyal, unfriendly", },
{"categoryID":10,"determiner":"a","animal":"dolphin", "set1":"smart, friendly", "set2":"smart, unfriendly", "set3":"stupid, friendly", "set4":"stupid, unfriendly", },
{"categoryID":11,"determiner":"a","animal":"duck", "set1":"loud, cute", "set2":"loud, unattractive", "set3":"quiet, cute", "set4":"quiet, unattractive", },
{"categoryID":12,"determiner":"an","animal":"elephant", "set1":"huge, smart", "set2":"huge, stupid", "set3":"small, smart", "set4":"small, stupid", },
{"categoryID":13,"determiner":"a","animal":"fish", "set1":"scaly, wet", "set2":"scaly, dry", "set3":"smooth, wet", "set4":"smooth, dry", },
{"categoryID":14,"determiner":"a","animal":"fox", "set1":"sly, smart", "set2":"sly, stupid", "set3":"artless, smart", "set4":"artless, stupid", },
{"categoryID":15,"determiner":"a","animal":"frog", "set1":"slimy, noisy", "set2":"slimy, quiet", "set3":"nonslippery, noisy", "set4":"nonslippery, quiet", },
{"categoryID":16,"determiner":"a","animal":"goat", "set1":"funny, hungry", "set2":"funny, full", "set3":"humorless, hungry", "set4":"humorless, full", },
{"categoryID":17,"determiner":"a","animal":"goose", "set1":"loud, mean", "set2":"loud, nice", "set3":"quiet, mean", "set4":"quiet, nice", },
{"categoryID":18,"determiner":"a","animal":"horse", "set1":"fast, strong", "set2":"fast, weak", "set3":"slow, strong", "set4":"slow, weak", },
{"categoryID":19,"determiner":"a","animal":"kangaroo", "set1":"jumpy, bouncy", "set2":"jumpy, inelastic", "set3":"relaxed, bouncy", "set4":"relaxed, inelastic", },
{"categoryID":20,"determiner":"a","animal":"lion", "set1":"ferocious, scary", "set2":"ferocious, unalarming", "set3":"nonviolent, scary", "set4":"nonviolent, unalarming", },
{"categoryID":21,"determiner":"a","animal":"monkey", "set1":"funny, smart", "set2":"funny, stupid", "set3":"humorless, smart", "set4":"humorless, stupid", },
{"categoryID":22,"determiner":"an","animal":"owl", "set1":"wise, quiet", "set2":"wise, loud", "set3":"foolish, quiet", "set4":"foolish, loud", },
{"categoryID":23,"determiner":"an","animal":"ox", "set1":"strong, big", "set2":"strong, small", "set3":"weak, big", "set4":"weak, small", },
{"categoryID":24,"determiner":"a","animal":"penguin", "set1":"cold, cute", "set2":"cold, unattractive", "set3":"hot, cute", "set4":"hot, unattractive", },
{"categoryID":25,"determiner":"a","animal":"pig", "set1":"dirty, fat", "set2":"dirty, thin", "set3":"clean, fat", "set4":"clean, thin", },
{"categoryID":26,"determiner":"a","animal":"rabbit", "set1":"fast, furry", "set2":"fast, hairless", "set3":"slow, furry", "set4":"slow, hairless", },
{"categoryID":27,"determiner":"a","animal":"shark", "set1":"scary, dangerous", "set2":"scary, safe", "set3":"unalarming, dangerous", "set4":"unalarming, safe", },
{"categoryID":28,"determiner":"a","animal":"sheep", "set1":"wooly, fluffy", "set2":"wooly, hard", "set3":"hairless, fluffy", "set4":"hairless, hard", },
{"categoryID":29,"determiner":"a","animal":"tiger", "set1":"striped, fierce", "set2":"striped, nonviolent", "set3":"unpatterned, fierce", "set4":"unpatterned, nonviolent", },
{"categoryID":30,"determiner":"a","animal":"whale", "set1":"large, graceful", "set2":"large, awkward", "set3":"small, graceful", "set4":"small, awkward", },
{"categoryID":31,"determiner":"a","animal":"wolf", "set1":"scary, mean", "set2":"scary, nice", "set3":"unalarming, mean", "set4":"unalarming, nice", },
{"categoryID":32,"determiner":"a","animal":"zebra", "set1":"striped, exotic", "set2":"striped, native", "set3":"unpatterned, exotic", "set4":"unpatterned, native", },
]
];


var numConditions = allConditions.length;
var chooseCondition = random(0, numConditions-1);
var allTrialOrders = allConditions[chooseCondition];
var numTrials = allTrialOrders.length/2;
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
    conditions: new Array(numTrials),
  	set1s: new Array(numTrials),
  	set2s: new Array(numTrials),
  	set3s: new Array(numTrials),
    set4s: new Array(numTrials),

  	set1probs: new Array(numTrials),
  	set2probs: new Array(numTrials),
  	set3probs: new Array(numTrials),
    set4probs: new Array(numTrials),

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
      experiment.animals[currentTrialNum] = trial.animal;
      //experiment.names[currentTrialNum] = speaker;
      experiment.conditions[currentTrialNum] = conditionType;
      experiment.set1s[currentTrialNum] = trial.set1;
      experiment.set2s[currentTrialNum] = trial.set2;
      experiment.set3s[currentTrialNum] = trial.set3;
      experiment.set4s[currentTrialNum] = trial.set4;
      

      experiment.set1probs[currentTrialNum] = parseInt(document.getElementById("hiddenSliderValue".concat(shuffledSetOrder[0] + 1)).value) / 40.00;
      experiment.set2probs[currentTrialNum] = parseInt(document.getElementById("hiddenSliderValue".concat(shuffledSetOrder[1] + 1)).value) / 40.00;
      experiment.set3probs[currentTrialNum] = parseInt(document.getElementById("hiddenSliderValue".concat(shuffledSetOrder[2] + 1)).value) / 40.00;
      experiment.set4probs[currentTrialNum] = parseInt(document.getElementById("hiddenSliderValue".concat(shuffledSetOrder[3] + 1)).value) / 40.00;
      

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

      shuffledSetOrder = shuffledArray(4);
      $("#set".concat(shuffledSetOrder[0] + 1)).html(trial.set1);
      $("#set".concat(shuffledSetOrder[1] + 1)).html(trial.set2);
      $("#set".concat(shuffledSetOrder[2] + 1)).html(trial.set3);
      $("#set".concat(shuffledSetOrder[3] + 1)).html(trial.set4);

      // Person or animal
      conditionType = "";
      condition = random(0, 1);
      if (condition == 0) {
        conditionType = "animal";
        $("#determiner").html(trial.determiner);
        $("#animal").html(trial.animal);
      } else {
        conditionType = "person";
        $("#determiner").html("a");
        $("#animal").html("person");
      }

      
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
