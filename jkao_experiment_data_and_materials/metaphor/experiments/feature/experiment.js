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
{"categoryID":1,"animal":"ANT"},
{"categoryID":2,"animal":"BAT"},
{"categoryID":3,"animal":"BEAR"},
{"categoryID":4,"animal":"BEE"},
{"categoryID":5,"animal":"BIRD"},
{"categoryID":6,"animal":"BUFFALO"},
{"categoryID":7,"animal":"CAT"},
{"categoryID":8,"animal":"COW"},
{"categoryID":9,"animal":"DOG"},
{"categoryID":10,"animal":"DOLPHIN"},
{"categoryID":11,"animal":"DUCK"},
{"categoryID":12,"animal":"ELEPHANT"},
{"categoryID":13,"animal":"FISH"},
{"categoryID":14,"animal":"FOX"},
{"categoryID":15,"animal":"FROG"},
{"categoryID":16,"animal":"GOOSE"},
{"categoryID":17,"animal":"GOAT"},
{"categoryID":18,"animal":"HORSE"},
{"categoryID":19,"animal":"KANGAROO"},
{"categoryID":20,"animal":"LION"},
{"categoryID":21,"animal":"MONKEY"},
{"categoryID":22,"animal":"OWL"},
{"categoryID":23,"animal":"OX"},
{"categoryID":24,"animal":"PENGUIN"},
{"categoryID":25,"animal":"PIG"},
{"categoryID":26,"animal":"RABBIT"},
{"categoryID":27,"animal":"SHEEP"},
{"categoryID":28,"animal":"TIGER"},
{"categoryID":29,"animal":"WHALE"},
{"categoryID":30,"animal":"WOLF"},
{"categoryID":31,"animal":"ZEBRA"},
{"categoryID":32,"animal":"SHARK"},
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
var buyer;

showSlide("instructions");
$("#trial-num").html(numComplete);
$("#total-num").html(numTrials);


var experiment = {
	categoryIDs: new Array(numTrials),
	adjectives: new Array(numTrials),
  	orders: new Array(numTrials),
  	animals: new Array(numTrials),
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
      experiment.adjectives[currentTrialNum] = document.adjective.adj.value;    

      experiment.orders[currentTrialNum] = numComplete;
      experiment.categoryIDs[currentTrialNum] = trial.categoryID;
      experiment.animals[currentTrialNum] = trial.animal;
        	
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
      $("#animal").html(trial.animal);
      numComplete++;
    }
  }
}
