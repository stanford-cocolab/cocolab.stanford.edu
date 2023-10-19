var NUM_SLIDERS = 11;

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
  for(var i=0; i<NUM_SLIDERS; i++)
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

function randomizeSharpOffset()
{
  
  var r = Math.floor((Math.random()*6)+1);
  if (r < 4) { return r; }
  else { return 3-r; }
  /*
  var r = Math.floor((Math.random()*3)+1);
  return r;
  */
}

var allPricePoints = [50,500,1000,5000,10000];
var currentUtteredPriceSliderIndex;

var allConditions = 
[
[
{"sentenceID":1,"domain":"electric kettle","modifier":"an","number":"round","utterance":50,"condition":1,"buyer":"Alex"},
{"sentenceID":2,"domain":"electric kettle","modifier":"an","number":"round","utterance":500,"condition":1,"buyer":"Bob"},
{"sentenceID":3,"domain":"electric kettle","modifier":"an","number":"round","utterance":1000,"condition":1,"buyer":"Calvin"},
{"sentenceID":4,"domain":"electric kettle","modifier":"an","number":"round","utterance":5000,"condition":1,"buyer":"David"},
{"sentenceID":5,"domain":"electric kettle","modifier":"an","number":"round","utterance":10000,"condition":1,"buyer":"Eric"},
{"sentenceID":6,"domain":"electric kettle","modifier":"an","number":"sharp","utterance":50,"condition":1,"buyer":"Frank"},
{"sentenceID":7,"domain":"electric kettle","modifier":"an","number":"sharp","utterance":500,"condition":1,"buyer":"George"},
{"sentenceID":8,"domain":"electric kettle","modifier":"an","number":"sharp","utterance":1000,"condition":1,"buyer":"Harry"},
{"sentenceID":9,"domain":"electric kettle","modifier":"an","number":"sharp","utterance":5000,"condition":1,"buyer":"Ivan"},
{"sentenceID":10,"domain":"electric kettle","modifier":"an","number":"sharp","utterance":10000,"condition":1,"buyer":"Jake"},
{"sentenceID":11,"domain":"watch","modifier":"a","number":"round","utterance":50,"condition":1,"buyer":"Kenneth"},
{"sentenceID":12,"domain":"watch","modifier":"a","number":"round","utterance":500,"condition":1,"buyer":"Luke"},
{"sentenceID":13,"domain":"watch","modifier":"a","number":"round","utterance":1000,"condition":1,"buyer":"Matt"},
{"sentenceID":14,"domain":"watch","modifier":"a","number":"round","utterance":5000,"condition":1,"buyer":"Nathan"},
{"sentenceID":15,"domain":"watch","modifier":"a","number":"round","utterance":10000,"condition":1,"buyer":"Owen"},
{"sentenceID":16,"domain":"watch","modifier":"a","number":"sharp","utterance":50,"condition":1,"buyer":"Patrick"},
{"sentenceID":17,"domain":"watch","modifier":"a","number":"sharp","utterance":500,"condition":1,"buyer":"Quinn"},
{"sentenceID":18,"domain":"watch","modifier":"a","number":"sharp","utterance":1000,"condition":1,"buyer":"Robert"},
{"sentenceID":19,"domain":"watch","modifier":"a","number":"sharp","utterance":5000,"condition":1,"buyer":"Steve"},
{"sentenceID":20,"domain":"watch","modifier":"a","number":"sharp","utterance":10000,"condition":1,"buyer":"Tom"},
{"sentenceID":21,"domain":"laptop","modifier":"a","number":"round","utterance":50,"condition":1,"buyer":"Victor"},
{"sentenceID":22,"domain":"laptop","modifier":"a","number":"round","utterance":500,"condition":1,"buyer":"Winston"},
{"sentenceID":23,"domain":"laptop","modifier":"a","number":"round","utterance":1000,"condition":1,"buyer":"Zach"},
{"sentenceID":24,"domain":"laptop","modifier":"a","number":"round","utterance":5000,"condition":1,"buyer":"Albert"},
{"sentenceID":25,"domain":"laptop","modifier":"a","number":"round","utterance":10000,"condition":1,"buyer":"Barry"},
{"sentenceID":26,"domain":"laptop","modifier":"a","number":"sharp","utterance":50,"condition":1,"buyer":"Charles"},
{"sentenceID":27,"domain":"laptop","modifier":"a","number":"sharp","utterance":500,"condition":1,"buyer":"Daniel"},
{"sentenceID":28,"domain":"laptop","modifier":"a","number":"sharp","utterance":1000,"condition":1,"buyer":"Ethan"},
{"sentenceID":29,"domain":"laptop","modifier":"a","number":"sharp","utterance":5000,"condition":1,"buyer":"Fred"},
{"sentenceID":30,"domain":"laptop","modifier":"a","number":"sharp","utterance":10000,"condition":1,"buyer":"Gary"},
]
];

/*
var debugConditions =
[
[
{"sentenceID":1,"domain":"electric kettle","modifier":"an","number":"round","utterance":20,"buyer":"Alex"},
{"sentenceID":2,"domain":"electric kettle","modifier":"an","number":"round","utterance":50,"buyer":"Bob"},
{"sentenceID":3,"domain":"electric kettle","modifier":"an","number":"round","utterance":100,"buyer":"Calvin"},
{"sentenceID":4,"domain":"electric kettle","modifier":"an","number":"round","utterance":200,"buyer":"Dave"},
{"sentenceID":5,"domain":"electric kettle","modifier":"an","number":"round","utterance":500,"buyer":"Ed"},
{"sentenceID":6,"domain":"electric kettle","modifier":"an","number":"round","utterance":1000,"buyer":"Frank"},
{"sentenceID":7,"domain":"electric kettle","modifier":"an","number":"round","utterance":2000,"buyer":"George"},
{"sentenceID":8,"domain":"electric kettle","modifier":"an","number":"round","utterance":10000,"buyer":"Harry"},
{"sentenceID":9,"domain":"electric kettle","modifier":"an","number":"sharp","utterance":20,"buyer":"Ivan"}
]
];
*/

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
var buyer;

showSlide("instructions");
$("#trial-num").html(numComplete);
$("#total-num").html(numTrials);


var experiment = {
	condition: chooseCondition + 1,
	sentenceIDs: new Array(numTrials),
	utteredPrices: new Array(numTrials),
	utteredPricesRounded: new Array(numTrials),
  
  affects: new Array(numTrials),
  orders: new Array(numTrials),
  domains: new Array(numTrials),
  buyers: new Array(numTrials),
  numberTypes: new Array(numTrials),
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
      //var price = 0;//parseFloat(document.price.score.value) + parseFloat(document.price.score1.value) / 100.00;
      
      
      var probAffect = parseInt(document.getElementById("hiddenSliderValue10").value) / 40.00;
      
      
      
      experiment.affects[currentTrialNum] = probAffect;
      experiment.orders[currentTrialNum] = numComplete;
      experiment.sentenceIDs[currentTrialNum] = trial.sentenceID;
      experiment.domains[currentTrialNum] = trial.domain;
      experiment.buyers[currentTrialNum] = trial.buyer;
      experiment.utteredPrices[currentTrialNum] = document.getElementById("cost").innerHTML;
      experiment.utteredPricesRounded[currentTrialNum] = trial.utterance;
      experiment.numberTypes[currentTrialNum] = trial.number;
        	
      clearForm(document.forms[0]);
      clearForm(document.forms[1]);
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
//     	currentTrialNum = shuffledOrder[numComplete];
//     	trial = allTrialOrders[currentTrialNum];
    	buyer = trial.buyer;
      showSlide("stage");
      $("#buyer1").html(buyer);
      $("#buyer2").html(buyer);
      $("#buyer3").html(buyer);
      $("#buyer4").html(buyer);
      $("#domain1").html(trial.domain);
      $("#domain2").html(trial.domain);
      $("#domain3").html(trial.domain);
      $("#domain4").html(trial.domain);
      $("#domain5").html(trial.domain);
      $("#domain6").html(trial.domain);
      $("#modifier").html(trial.modifier);
      
      for (var i = 0; i <= 4; i++)
      {
        var j = i*2;
        
        
        $("#cost" + j).html(numberWithCommas(allPricePoints[i]));
        j = j+1;
        $("#cost" + j).html(numberWithCommas(allPricePoints[i] + randomizeSharpOffset()));
      }

      for (var i = 0; i <= 4; i++)
      {
        if ( allPricePoints[i] == trial.utterance )
        {
          currentUtteredPriceSliderIndex = 2*i;
        } 
      }
      
      var currentUtteredPrice;
      if ( trial.number == "round" )
      { currentUtteredPrice = trial.utterance; }
      else
      { 
        currentUtteredPrice = trial.utterance + randomizeSharpOffset();
        currentUtteredPriceSliderIndex = currentUtteredPriceSliderIndex + 1;
      }
      
      
      $("#cost").html(numberWithCommas(currentUtteredPrice));
      //var utteredSliderIndexName = "#cost" + currentUtteredPriceSliderIndex;
      //$(utteredSliderIndexName).html(numberWithCommas(currentUtteredPrice));
      numComplete++;
    }
  }
}

// scripts for sliders
$("#slider0").slider({
               animate: true,
               orientation: "vertical",
               max: 40 , min: 0, step: 1, value: 20,
               slide: function( event, ui ) {
                   $("#slider0 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                   });
               },
               change: function( event, ui ) {
                   $('#hiddenSliderValue0').attr('value', ui.value);
                   $("#slider0").css({"background":"#99D6EB"});
                   $("#slider0 .ui-slider-handle").css({
                     "background":"#667D94",
                     "border-color": "#001F29" });
               }});
$("#slider1").slider({
               animate: true,
               orientation: "vertical",
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
               orientation: "vertical",
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
               orientation: "vertical",
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
               orientation: "vertical",
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
               orientation: "vertical",
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
               orientation: "vertical",
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
               orientation: "vertical",
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
               orientation: "vertical",
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
               orientation: "vertical",
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

