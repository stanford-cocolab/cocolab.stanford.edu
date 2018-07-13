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
var allBuyers = ["Alex", "Bob", "Calvin", "David", "Eric", "Frank", "George", 
"Harry", "Ivan", "Jake", "Kenneth", "Luke", "Matt", "Nathan", "Owen",
"Patrick", "Quinn", "Robert", "Steve", "Tom", "Victor", 
"Winston", "Zach", "Albert", "Barry", "Charles", "Daniel", "Ethan", "Fred", "Gary"];
var currentUtteredPriceSliderIndex;

var allConditions = 
[
[
/*
{"sentenceID":1,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":50,"actualNumberType":"round","actual":50},
{"sentenceID":2,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":500,"actualNumberType":"round","actual":500},
{"sentenceID":3,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":1000,"actualNumberType":"round","actual":1000},
{"sentenceID":4,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":5000,"actualNumberType":"round","actual":5000},
{"sentenceID":5,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":10000,"actualNumberType":"round","actual":10000},
{"sentenceID":6,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":10000,"actualNumberType":"round","actual":50},
{"sentenceID":7,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":10000,"actualNumberType":"round","actual":500},
{"sentenceID":8,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":10000,"actualNumberType":"round","actual":1000},
{"sentenceID":9,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":10000,"actualNumberType":"round","actual":5000},

*/
{"sentenceID":1,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":50,"actualNumberType":"round","actual":50},
{"sentenceID":2,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":50,"actualNumberType":"sharp","actual":50},
{"sentenceID":3,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":500,"actualNumberType":"round","actual":50},
{"sentenceID":4,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":500,"actualNumberType":"round","actual":500},
{"sentenceID":5,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":500,"actualNumberType":"sharp","actual":50},
{"sentenceID":6,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":500,"actualNumberType":"sharp","actual":500},
{"sentenceID":7,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":1000,"actualNumberType":"round","actual":50},
{"sentenceID":8,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":1000,"actualNumberType":"round","actual":500},
{"sentenceID":9,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":1000,"actualNumberType":"round","actual":1000},
{"sentenceID":10,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":1000,"actualNumberType":"sharp","actual":50},
{"sentenceID":11,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":1000,"actualNumberType":"sharp","actual":500},
{"sentenceID":12,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":1000,"actualNumberType":"sharp","actual":1000},
{"sentenceID":13,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":5000,"actualNumberType":"round","actual":50},
{"sentenceID":14,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":5000,"actualNumberType":"round","actual":500},
{"sentenceID":15,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":5000,"actualNumberType":"round","actual":1000},
{"sentenceID":16,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":5000,"actualNumberType":"round","actual":5000},
{"sentenceID":17,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":5000,"actualNumberType":"sharp","actual":50},
{"sentenceID":18,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":5000,"actualNumberType":"sharp","actual":500},
{"sentenceID":19,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":5000,"actualNumberType":"sharp","actual":1000},
{"sentenceID":20,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":5000,"actualNumberType":"sharp","actual":5000},
{"sentenceID":21,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":10000,"actualNumberType":"round","actual":50},
{"sentenceID":22,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":10000,"actualNumberType":"round","actual":500},
{"sentenceID":23,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":10000,"actualNumberType":"round","actual":1000},
{"sentenceID":24,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":10000,"actualNumberType":"round","actual":5000},
{"sentenceID":25,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":10000,"actualNumberType":"round","actual":10000},
{"sentenceID":26,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":10000,"actualNumberType":"sharp","actual":50},
{"sentenceID":27,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":10000,"actualNumberType":"sharp","actual":500},
{"sentenceID":28,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":10000,"actualNumberType":"sharp","actual":1000},
{"sentenceID":29,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":10000,"actualNumberType":"sharp","actual":5000},
{"sentenceID":30,"domain":"electric kettle","modifier":"an","utteredNumberType":"round","uttered":10000,"actualNumberType":"sharp","actual":10000},
{"sentenceID":31,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":50,"actualNumberType":"round","actual":50},
{"sentenceID":32,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":50,"actualNumberType":"sharp","actual":50},
{"sentenceID":33,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":500,"actualNumberType":"round","actual":50},
{"sentenceID":34,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":500,"actualNumberType":"round","actual":500},
{"sentenceID":35,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":500,"actualNumberType":"sharp","actual":50},
{"sentenceID":36,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":500,"actualNumberType":"sharp","actual":500},
{"sentenceID":37,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":1000,"actualNumberType":"round","actual":50},
{"sentenceID":38,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":1000,"actualNumberType":"round","actual":500},
{"sentenceID":39,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":1000,"actualNumberType":"round","actual":1000},
{"sentenceID":40,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":1000,"actualNumberType":"sharp","actual":50},
{"sentenceID":41,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":1000,"actualNumberType":"sharp","actual":500},
{"sentenceID":42,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":1000,"actualNumberType":"sharp","actual":1000},
{"sentenceID":43,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"round","actual":50},
{"sentenceID":44,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"round","actual":500},
{"sentenceID":45,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"round","actual":1000},
{"sentenceID":46,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"round","actual":5000},
{"sentenceID":47,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"sharp","actual":50},
{"sentenceID":48,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"sharp","actual":500},
{"sentenceID":49,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"sharp","actual":1000},
{"sentenceID":50,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"sharp","actual":5000},
{"sentenceID":51,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"round","actual":50},
{"sentenceID":52,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"round","actual":500},
{"sentenceID":53,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"round","actual":1000},
{"sentenceID":54,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"round","actual":5000},
{"sentenceID":55,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"round","actual":10000},
{"sentenceID":56,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"sharp","actual":50},
{"sentenceID":57,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"sharp","actual":500},
{"sentenceID":58,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"sharp","actual":1000},
{"sentenceID":59,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"sharp","actual":5000},
{"sentenceID":60,"domain":"electric kettle","modifier":"an","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"sharp","actual":10000},
{"sentenceID":61,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":50,"actualNumberType":"round","actual":50},
{"sentenceID":62,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":50,"actualNumberType":"sharp","actual":50},
{"sentenceID":63,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":500,"actualNumberType":"round","actual":50},
{"sentenceID":64,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":500,"actualNumberType":"round","actual":500},
{"sentenceID":65,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":500,"actualNumberType":"sharp","actual":50},
{"sentenceID":66,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":500,"actualNumberType":"sharp","actual":500},
{"sentenceID":67,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":1000,"actualNumberType":"round","actual":50},
{"sentenceID":68,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":1000,"actualNumberType":"round","actual":500},
{"sentenceID":69,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":1000,"actualNumberType":"round","actual":1000},
{"sentenceID":70,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":1000,"actualNumberType":"sharp","actual":50},
{"sentenceID":71,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":1000,"actualNumberType":"sharp","actual":500},
{"sentenceID":72,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":1000,"actualNumberType":"sharp","actual":1000},
{"sentenceID":73,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":5000,"actualNumberType":"round","actual":50},
{"sentenceID":74,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":5000,"actualNumberType":"round","actual":500},
{"sentenceID":75,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":5000,"actualNumberType":"round","actual":1000},
{"sentenceID":76,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":5000,"actualNumberType":"round","actual":5000},
{"sentenceID":77,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":5000,"actualNumberType":"sharp","actual":50},
{"sentenceID":78,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":5000,"actualNumberType":"sharp","actual":500},
{"sentenceID":79,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":5000,"actualNumberType":"sharp","actual":1000},
{"sentenceID":80,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":5000,"actualNumberType":"sharp","actual":5000},
{"sentenceID":81,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":10000,"actualNumberType":"round","actual":50},
{"sentenceID":82,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":10000,"actualNumberType":"round","actual":500},
{"sentenceID":83,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":10000,"actualNumberType":"round","actual":1000},
{"sentenceID":84,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":10000,"actualNumberType":"round","actual":5000},
{"sentenceID":85,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":10000,"actualNumberType":"round","actual":10000},
{"sentenceID":86,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":10000,"actualNumberType":"sharp","actual":50},
{"sentenceID":87,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":10000,"actualNumberType":"sharp","actual":500},
{"sentenceID":88,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":10000,"actualNumberType":"sharp","actual":1000},
{"sentenceID":89,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":10000,"actualNumberType":"sharp","actual":5000},
{"sentenceID":90,"domain":"watch","modifier":"a","utteredNumberType":"round","uttered":10000,"actualNumberType":"sharp","actual":10000},
{"sentenceID":91,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":50,"actualNumberType":"round","actual":50},
{"sentenceID":92,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":50,"actualNumberType":"sharp","actual":50},
{"sentenceID":93,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":500,"actualNumberType":"round","actual":50},
{"sentenceID":94,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":500,"actualNumberType":"round","actual":500},
{"sentenceID":95,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":500,"actualNumberType":"sharp","actual":50},
{"sentenceID":96,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":500,"actualNumberType":"sharp","actual":500},
{"sentenceID":97,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":1000,"actualNumberType":"round","actual":50},
{"sentenceID":98,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":1000,"actualNumberType":"round","actual":500},
{"sentenceID":99,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":1000,"actualNumberType":"round","actual":1000},
{"sentenceID":100,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":1000,"actualNumberType":"sharp","actual":50},
{"sentenceID":101,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":1000,"actualNumberType":"sharp","actual":500},
{"sentenceID":102,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":1000,"actualNumberType":"sharp","actual":1000},
{"sentenceID":103,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"round","actual":50},
{"sentenceID":104,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"round","actual":500},
{"sentenceID":105,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"round","actual":1000},
{"sentenceID":106,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"round","actual":5000},
{"sentenceID":107,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"sharp","actual":50},
{"sentenceID":108,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"sharp","actual":500},
{"sentenceID":109,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"sharp","actual":1000},
{"sentenceID":110,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"sharp","actual":5000},
{"sentenceID":111,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"round","actual":50},
{"sentenceID":112,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"round","actual":500},
{"sentenceID":113,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"round","actual":1000},
{"sentenceID":114,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"round","actual":5000},
{"sentenceID":115,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"round","actual":10000},
{"sentenceID":116,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"sharp","actual":50},
{"sentenceID":117,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"sharp","actual":500},
{"sentenceID":118,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"sharp","actual":1000},
{"sentenceID":119,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"sharp","actual":5000},
{"sentenceID":120,"domain":"watch","modifier":"a","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"sharp","actual":10000},
{"sentenceID":121,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":50,"actualNumberType":"round","actual":50},
{"sentenceID":122,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":50,"actualNumberType":"sharp","actual":50},
{"sentenceID":123,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":500,"actualNumberType":"round","actual":50},
{"sentenceID":124,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":500,"actualNumberType":"round","actual":500},
{"sentenceID":125,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":500,"actualNumberType":"sharp","actual":50},
{"sentenceID":126,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":500,"actualNumberType":"sharp","actual":500},
{"sentenceID":127,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":1000,"actualNumberType":"round","actual":50},
{"sentenceID":128,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":1000,"actualNumberType":"round","actual":500},
{"sentenceID":129,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":1000,"actualNumberType":"round","actual":1000},
{"sentenceID":130,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":1000,"actualNumberType":"sharp","actual":50},
{"sentenceID":131,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":1000,"actualNumberType":"sharp","actual":500},
{"sentenceID":132,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":1000,"actualNumberType":"sharp","actual":1000},
{"sentenceID":133,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":5000,"actualNumberType":"round","actual":50},
{"sentenceID":134,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":5000,"actualNumberType":"round","actual":500},
{"sentenceID":135,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":5000,"actualNumberType":"round","actual":1000},
{"sentenceID":136,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":5000,"actualNumberType":"round","actual":5000},
{"sentenceID":137,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":5000,"actualNumberType":"sharp","actual":50},
{"sentenceID":138,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":5000,"actualNumberType":"sharp","actual":500},
{"sentenceID":139,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":5000,"actualNumberType":"sharp","actual":1000},
{"sentenceID":140,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":5000,"actualNumberType":"sharp","actual":5000},
{"sentenceID":141,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":10000,"actualNumberType":"round","actual":50},
{"sentenceID":142,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":10000,"actualNumberType":"round","actual":500},
{"sentenceID":143,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":10000,"actualNumberType":"round","actual":1000},
{"sentenceID":144,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":10000,"actualNumberType":"round","actual":5000},
{"sentenceID":145,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":10000,"actualNumberType":"round","actual":10000},
{"sentenceID":146,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":10000,"actualNumberType":"sharp","actual":50},
{"sentenceID":147,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":10000,"actualNumberType":"sharp","actual":500},
{"sentenceID":148,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":10000,"actualNumberType":"sharp","actual":1000},
{"sentenceID":149,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":10000,"actualNumberType":"sharp","actual":5000},
{"sentenceID":150,"domain":"laptop","modifier":"a","utteredNumberType":"round","uttered":10000,"actualNumberType":"sharp","actual":10000},
{"sentenceID":151,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":50,"actualNumberType":"round","actual":50},
{"sentenceID":152,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":50,"actualNumberType":"sharp","actual":50},
{"sentenceID":153,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":500,"actualNumberType":"round","actual":50},
{"sentenceID":154,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":500,"actualNumberType":"round","actual":500},
{"sentenceID":155,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":500,"actualNumberType":"sharp","actual":50},
{"sentenceID":156,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":500,"actualNumberType":"sharp","actual":500},
{"sentenceID":157,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":1000,"actualNumberType":"round","actual":50},
{"sentenceID":158,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":1000,"actualNumberType":"round","actual":500},
{"sentenceID":159,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":1000,"actualNumberType":"round","actual":1000},
{"sentenceID":160,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":1000,"actualNumberType":"sharp","actual":50},
{"sentenceID":161,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":1000,"actualNumberType":"sharp","actual":500},
{"sentenceID":162,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":1000,"actualNumberType":"sharp","actual":1000},
{"sentenceID":163,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"round","actual":50},
{"sentenceID":164,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"round","actual":500},
{"sentenceID":165,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"round","actual":1000},
{"sentenceID":166,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"round","actual":5000},
{"sentenceID":167,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"sharp","actual":50},
{"sentenceID":168,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"sharp","actual":500},
{"sentenceID":169,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"sharp","actual":1000},
{"sentenceID":170,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":5000,"actualNumberType":"sharp","actual":5000},
{"sentenceID":171,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"round","actual":50},
{"sentenceID":172,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"round","actual":500},
{"sentenceID":173,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"round","actual":1000},
{"sentenceID":174,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"round","actual":5000},
{"sentenceID":175,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"round","actual":10000},
{"sentenceID":176,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"sharp","actual":50},
{"sentenceID":177,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"sharp","actual":500},
{"sentenceID":178,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"sharp","actual":1000},
{"sentenceID":179,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"sharp","actual":5000},
{"sentenceID":180,"domain":"laptop","modifier":"a","utteredNumberType":"sharp","uttered":10000,"actualNumberType":"sharp","actual":10000},
]
];


var debug = false;
if(debug) { allConditions = debugConditions; }


var numConditions = allConditions.length;
var chooseCondition = random(0, numConditions-1);
var allTrialOrders = allConditions[chooseCondition];
var numTrials = allTrialOrders.length/6;
var shuffledOrder = shuffledSampleArray(allTrialOrders.length, numTrials);
var shuffledBuyerOrder = shuffledSampleArray(numTrials, numTrials);
var currentTrialNum = 0;
var trial;
var numComplete = 0;
var buyer;

showSlide("instructions");
$("#trial-num").html(numComplete);
$("#total-num").html(numTrials);


var experiment = {
	sentenceIDs: new Array(numTrials),
	utteredPrices: new Array(numTrials),
	utteredPricesRounded: new Array(numTrials),
	utteredTypes: new Array(numTrials),
  	actualPrices: new Array(numTrials),
  	actualPricesRounded: new Array(numTrials),
  	actualTypes: new Array(numTrials),
  	affects: new Array(numTrials),
  	orders: new Array(numTrials),
  	domains: new Array(numTrials),
  	buyers: new Array(numTrials),
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
      experiment.buyers[currentTrialNum] = allBuyers[shuffledBuyerOrder[numComplete-1]];
      experiment.utteredPrices[currentTrialNum] = document.getElementById("uttered").innerHTML;
      experiment.utteredPricesRounded[currentTrialNum] = trial.uttered;
      experiment.utteredTypes[currentTrialNum] = trial.utteredNumberType;
      experiment.actualPrices[currentTrialNum] = document.getElementById("actual").innerHTML;
      experiment.actualPricesRounded[currentTrialNum] = trial.actual;
      experiment.actualTypes[currentTrialNum] = trial.actualNumberType;
        	
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
    	buyer = allBuyers[shuffledBuyerOrder[numComplete]];
      showSlide("stage");
      $("#buyer1").html(buyer);
      $("#buyer2").html(buyer);
      $("#buyer3").html(buyer);
      $("#buyer4").html(buyer);
      $("#domain1").html(trial.domain);
      $("#domain2").html(trial.domain);
      $("#domain3").html(trial.domain);
      $("#domain4").html(trial.domain);
      $("#modifier").html(trial.modifier);
      
      var currentUtteredPrice;
      if ( trial.utteredNumberType == "round" )
      { currentUtteredPrice = trial.uttered; }
      else
      { 
        currentUtteredPrice = trial.uttered + randomizeSharpOffset();
      }
      $("#uttered").html(numberWithCommas(currentUtteredPrice));
      
      var currentActualPrice;
      if ( trial.actualNumberType == "round" )
      { currentActualPrice = trial.actual; }
      else if (trial.actual == trial.uttered && trial.actualNumberType == trial.utteredNumberType) {
      	currentActualPrice = currentUtteredPrice;
      }
      else
      { 
        currentActualPrice = trial.actual + randomizeSharpOffset();
      }
      $("#actual").html(numberWithCommas(currentActualPrice));
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

