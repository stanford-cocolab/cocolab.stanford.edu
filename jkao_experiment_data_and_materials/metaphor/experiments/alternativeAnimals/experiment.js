//var NUM_SLIDERS = 11;

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


var allConditions = 
[
[
{"feature":"angry"},
{"feature":"loyal"},
{"feature":"wise"},
{"feature":"free"},
{"feature":"majestic"},
{"feature":"strong"},
{"feature":"blind"},
{"feature":"friendly"},
{"feature":"busy"},
{"feature":"sly"},
{"feature":"fat"},
{"feature":"lazy"},
{"feature":"ferocious"},
{"feature":"scaly"},
{"feature":"jumpy"},
{"feature":"slimy"},
{"feature":"soft"},
{"feature":"cold"},
{"feature":"dangerous"},
{"feature":"fluffy"},
{"feature":"furry"},
{"feature":"quacking"}
/*
{"feature":"annoying"},
{"feature":"beautiful"},
{"feature":"big"},
{"feature":"blind"},
{"feature":"bouncy"},
{"feature":"busy"},
{"feature":"cold"},
{"feature":"cute"},
{"feature":"dangerous"},
{"feature":"dirty"},
{"feature":"dumb"},
{"feature":"exotic"},
{"feature":"fast"},
{"feature":"fat"},
{"feature":"ferocious"},
{"feature":"fierce"},
{"feature":"fluffy"},
{"feature":"free"},
{"feature":"friendly"},
{"feature":"funny"},
{"feature":"furry"},
{"feature":"graceful"},
{"feature":"happy"},
{"feature":"heavy"},
{"feature":"huge"},
{"feature":"hungry"},
{"feature":"independent"},
{"feature":"jumpy"},
{"feature":"large"},
{"feature":"lazy"},
{"feature":"loud"},
{"feature":"loyal"},
{"feature":"majestic"},
{"feature":"mean"},
{"feature":"nocturnal"},
{"feature":"noisy"},
{"feature":"playful"},
{"feature":"pretty"},
{"feature":"quacking"},
{"feature":"quiet"},
{"feature":"scaly"},
{"feature":"scary"},
{"feature":"slimy"},
{"feature":"slow"},
{"feature":"sly"},
{"feature":"small"},
{"feature":"smart"},
{"feature":"smelly"},
{"feature":"soft"},
{"feature":"striped"},
{"feature":"strong"},
{"feature":"wet"},
{"feature":"wild"},
{"feature":"wise"},
{"feature":"wooly"},
*/
]
];

var debug = false;
if(debug) { allConditions = debugConditions; }


var numConditions = allConditions.length;
var chooseCondition = random(0, numConditions-1);
var allTrialOrders = allConditions[chooseCondition];
var numTrials = allTrialOrders.length;
//numTrials = 28;
var shuffledOrder = shuffledSampleArray(allTrialOrders.length, numTrials);
var currentTrialNum = 0;
var trial;
var numComplete = 0;
var buyer;

showSlide("instructions");
$("#trial-num").html(numComplete);
$("#total-num").html(numTrials);


var experiment = {
	//categoryIDs: new Array(numTrials),
  //origAnimals: new Array(numTrials),
  //featureNums: new Array(numTrials),
	features: new Array(numTrials),
  altAnimals: new Array(numTrials),
  	orders: new Array(numTrials),
  	
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
      experiment.altAnimals[currentTrialNum] = document.animal.anim.value;    

      experiment.orders[currentTrialNum] = numComplete;
      //experiment.categoryIDs[currentTrialNum] = trial.categoryID;
      //experiment.origAnimals[currentTrialNum] = trial.origAnimal;
      experiment.features[currentTrialNum] = trial.feature;
      //experiment.featureNums[currentTrialNum] = trial.featureNum;
        	
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
      showSlide("stage");
      $("#adjective").html(trial.feature);
      numComplete++;
    }
  }
}