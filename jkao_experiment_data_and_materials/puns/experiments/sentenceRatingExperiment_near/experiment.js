/*
Displays each slide
*/

function showSlide(id) {
  $(".slide").hide();
  $("#"+id).show();
}

/* 
Returns random number between a and b, inclusive
*/

function random(a,b) {
  if (typeof b == "undefined") {
    a = a || 2;
    return Math.floor(Math.random()*a);
  } else {
    return Math.floor(Math.random()*(b-a+1)) + a;
  }
}

/* 
Randomly shuffles elements in an array
*/

Array.prototype.random = function() {
  return this[random(this.length)];
}

/* 
Returns random number between a and b, inclusive
*/

function setQuestion(array) {
    var i = random(0, array.length - 1);
    var q = array[i];
    return q;
}

/* 
Produces an array with numbers 0~arrLength
in random order. Kind of spurious--use 
Array.prototype.random instead
*/

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

/* 
Gets the value of the checked radio button
*/

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

/* 
Clears value from form
*/

function clearForm(oForm) {
    
  var elements = oForm.elements; 
    
  oForm.reset();

  for(i=0; i<elements.length; i++) {
      
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


/*
Text input for your experiment. Each array is a condition.
Record all necessary information you may need for each input.
*/

var allConditions = [
/* short trials for debugging 
[
{"condition":1,"uniqueID":1,"sentence":"A circus truck driver refused to tow the lion."},
{"condition":1,"uniqueID":2,"sentence":"A dentist has to tell a patient the whole tooth."},
{"condition":1,"uniqueID":3,"sentence":"A handlebar mustache may look ridiculous, but symmetrical eyelashes are even cilia."},
{"condition":1,"uniqueID":4,"sentence":"A man used money that he had inherited from his late father and put an addition on his house. It was an heir extension."},
]
*/
/* full trials */
[
{"condition":1,"uniqueID":1,"sentence":"A circus truck driver refused to tow the lion."},
{"condition":1,"uniqueID":2,"sentence":"A dentist has to tell a patient the whole tooth."},
{"condition":1,"uniqueID":3,"sentence":"A handlebar mustache may look ridiculous, but symmetrical eyelashes are even cilia."},
{"condition":1,"uniqueID":4,"sentence":"A man used money that he had inherited from his late father and put an addition on his house. It was an heir extension."},
{"condition":1,"uniqueID":5,"sentence":"A men's wear store has opening and clothing times."},
{"condition":1,"uniqueID":6,"sentence":"A paramedic got a new job as a chauffeur: an ambiance driver."},
{"condition":1,"uniqueID":7,"sentence":"A pet store had a bird contest with no perches necessary."},
{"condition":1,"uniqueID":8,"sentence":"A pun is its own reword."},
{"condition":1,"uniqueID":9,"sentence":"A rubber band pistol was confiscated from algebra class because it was a weapon of math disruption."},
{"condition":1,"uniqueID":10,"sentence":"A thief who stole cutlery without leaving a clue was called the 'stainless stealer.'"},
{"condition":1,"uniqueID":91,"sentence":"After getting pranked by his friends and getting hit with a basket, Aron knew they had a wicked sense of humor."},
{"condition":1,"uniqueID":92,"sentence":"Aliens are lovable because they're so special."},
{"condition":1,"uniqueID":93,"sentence":"An astronaut gets to take a turn as a world traveler."},
{"condition":1,"uniqueID":94,"sentence":"As a young boy, Brutus' mother often cautioned him not to run with scissors."},
{"condition":1,"uniqueID":95,"sentence":"Astronauts like to do lunch."},
{"condition":1,"uniqueID":96,"sentence":"At a flower show the first prize is often a blue ribbon."},
{"condition":1,"uniqueID":97,"sentence":"At a pet store: 'buy one dog, get one free'."},
{"condition":1,"uniqueID":98,"sentence":"Be kind to your dentist because he has feelings too."},
{"condition":1,"uniqueID":99,"sentence":"Bell, Bark and Kennel, a novel by Ivan Pavlov, chronicles the birth of the Salvation Army."},
{"condition":1,"uniqueID":100,"sentence":"Dentists don't like a hard day at the office."},
{"condition":1,"uniqueID":191,"sentence":"I like a latte in the morning to wake me up."},
{"condition":1,"uniqueID":192,"sentence":"The tabloid newspaper libeled a movie star."},
{"condition":1,"uniqueID":193,"sentence":"The lovers go away to the country for weekend trysts."},
{"condition":1,"uniqueID":194,"sentence":"He burns propane gas in his stove."},
{"condition":1,"uniqueID":195,"sentence":"He saw her leafing through the pages of an old book."},
{"condition":1,"uniqueID":196,"sentence":"Some people eat yams with their turkey."},
{"condition":1,"uniqueID":197,"sentence":"Tolkien wrote Lord of the Rings."},
{"condition":1,"uniqueID":198,"sentence":"She is a coal and iron magnate from Australia."},
{"condition":1,"uniqueID":199,"sentence":"A raven is a large black bird."},
{"condition":1,"uniqueID":200,"sentence":"He tried out an alkaline diet to maintain the body's ideal pH balance."},
{"condition":1,"uniqueID":311,"sentence":"He couldn't wait to open his Christmas presents."},
{"condition":1,"uniqueID":312,"sentence":"The next time that you're late, you'll be in trouble."},
{"condition":1,"uniqueID":313,"sentence":"A hurricane causes great destruction to buildings and trees."},
{"condition":1,"uniqueID":314,"sentence":"Butter is made from cream."},
{"condition":1,"uniqueID":315,"sentence":"He was able to see clearly after getting glasses."},
{"condition":1,"uniqueID":316,"sentence":"They are very considerate and always offer to give me a ride."},
{"condition":1,"uniqueID":317,"sentence":"I love to eat chocolate sauce on vanilla ice cream."},
{"condition":1,"uniqueID":318,"sentence":"That company pays its employees every two weeks."},
{"condition":1,"uniqueID":319,"sentence":"She should learn to express her feelings better."},
{"condition":1,"uniqueID":320,"sentence":"He has a good sense for business."},
],
[
{"condition":2,"uniqueID":11,"sentence":"After getting pranked by his friends and getting hit with a basket, Aron knew they had a wicker sense of humor."},
{"condition":2,"uniqueID":12,"sentence":"Aliens are lovable because they're so spatial."},
{"condition":2,"uniqueID":13,"sentence":"An astronaut gets to take a turn as a whirled traveler."},
{"condition":2,"uniqueID":14,"sentence":"As a young boy, Brutus' mother often cautioned him not to run with Caesars."},
{"condition":2,"uniqueID":15,"sentence":"Astronauts like to do launch."},
{"condition":2,"uniqueID":16,"sentence":"At a flower show the first prize is often a bloom ribbon."},
{"condition":2,"uniqueID":17,"sentence":"At a pet store: 'buy one dog, get one flea'."},
{"condition":2,"uniqueID":18,"sentence":"Be kind to your dentist because he has fillings too."},
{"condition":2,"uniqueID":19,"sentence":"Bell, Bark and Kennel, a novel by Ivan Pavlov, chronicles the birth of the Salivation Army."},
{"condition":2,"uniqueID":20,"sentence":"Dentists don't like a hard day at the orifice."},
{"condition":2,"uniqueID":81,"sentence":"A circus truck driver refused to tow the line."},
{"condition":2,"uniqueID":82,"sentence":"A dentist has to tell a patient the whole truth."},
{"condition":2,"uniqueID":83,"sentence":"A handlebar mustache may look ridiculous, but symmetrical eyelashes are even sillier."},
{"condition":2,"uniqueID":84,"sentence":"A man used money that he had inherited from his late father and put an addition on his house. It was an hair extension."},
{"condition":2,"uniqueID":85,"sentence":"A men's wear store has opening and closing times."},
{"condition":2,"uniqueID":86,"sentence":"A paramedic got a new job as a chauffeur: an ambulance driver."},
{"condition":2,"uniqueID":87,"sentence":"A pet store had a bird contest with no purchase necessary."},
{"condition":2,"uniqueID":88,"sentence":"A pun is its own reward."},
{"condition":2,"uniqueID":89,"sentence":"A rubber band pistol was confiscated from algebra class because it was a weapon of mass disruption."},
{"condition":2,"uniqueID":90,"sentence":"A thief who stole cutlery without leaving a clue was called the 'stainless steeler.'"},
{"condition":2,"uniqueID":181,"sentence":"He reads braille with his fingertips."},
{"condition":2,"uniqueID":182,"sentence":"He decided to donate his sperm."},
{"condition":2,"uniqueID":183,"sentence":"The city's buildings are covered with grime."},
{"condition":2,"uniqueID":184,"sentence":"The end of the nuclear arms race began a new epoch of peace and cooperation."},
{"condition":2,"uniqueID":185,"sentence":"Our company pays everyone a bonus at the end of the year."},
{"condition":2,"uniqueID":186,"sentence":"My favorite creatures in Lord of the Rings are hobbits."},
{"condition":2,"uniqueID":187,"sentence":"She started screaming when the man pulled out a knife."},
{"condition":2,"uniqueID":188,"sentence":"Ohms are used to measure electrical resistance."},
{"condition":2,"uniqueID":189,"sentence":"Kant was a German philosopher."},
{"condition":2,"uniqueID":190,"sentence":"The barista used a tamper to press down the coffee."},
{"condition":2,"uniqueID":301,"sentence":"The amount that her business makes is always doubling every year."},
{"condition":2,"uniqueID":302,"sentence":"He was sent to prison for robbing a bank."},
{"condition":2,"uniqueID":303,"sentence":"Trains go across a bridge over the river."},
{"condition":2,"uniqueID":304,"sentence":"The leader of a Native American tribe is known as the chief."},
{"condition":2,"uniqueID":305,"sentence":"Everyone admired his resolution when he quit smoking."},
{"condition":2,"uniqueID":306,"sentence":"Her legs were cold, so she put on a pair of pants."},
{"condition":2,"uniqueID":307,"sentence":"Insider trading can get you into a lot of trouble."},
{"condition":2,"uniqueID":308,"sentence":"Great minds think alike."},
{"condition":2,"uniqueID":309,"sentence":"She was caught littering and had to pay a fine."},
{"condition":2,"uniqueID":310,"sentence":"She has a good attitude toward work"},
],
[
{"condition":3,"uniqueID":21,"sentence":"Even though Ashley was blind and under arrest, she still had hope that someone would braille her out."},
{"condition":3,"uniqueID":22,"sentence":"Even though he contributes either the X or Y chromosome, when a father chooses the sex of his child it's just a sperm of the moment decision."},
{"condition":3,"uniqueID":23,"sentence":"For children to eat without washing their hands would be a grime."},
{"condition":3,"uniqueID":24,"sentence":"Grandparents' faces are full of epoch marks."},
{"condition":3,"uniqueID":25,"sentence":"He labored so hard that he worked his fingers to the bonus."},
{"condition":3,"uniqueID":26,"sentence":"I keep reading 'The Lord of the Rings' over and over. I guess it's just force of hobbit."},
{"condition":3,"uniqueID":27,"sentence":"I like the latest horror movie so much that I've arranged a private screaming."},
{"condition":3,"uniqueID":28,"sentence":"I like to stay current with the electrifying adventures of Sherlock ohms."},
{"condition":3,"uniqueID":29,"sentence":"I need to do my philosophy homework but I just Kant."},
{"condition":3,"uniqueID":30,"sentence":"If a barista is not allowed to make espresso she will lose her tamper."},
{"condition":3,"uniqueID":111,"sentence":"If you spend too much time in the coffee shop you'll be late for work."},
{"condition":3,"uniqueID":112,"sentence":"If you write bad things about me I am liable to sue you."},
{"condition":3,"uniqueID":113,"sentence":"In the novel, there is an unexpected secret meeting of the lovers. It is a plot twist."},
{"condition":3,"uniqueID":114,"sentence":"Inflammatory talk is often seen as profane language."},
{"condition":3,"uniqueID":115,"sentence":"John plans to retire in the spring and, like the trees around us, will be leaving."},
{"condition":3,"uniqueID":116,"sentence":"Just in time for Thanksgiving: a blockbuster movie about sweet potatoes called 'The Silence of the Lambs'."},
{"condition":3,"uniqueID":117,"sentence":"Last night, I kept dreaming that I had written Lord of the Rings. The wife said I'd been talking in my sleep."},
{"condition":3,"uniqueID":118,"sentence":"Many people are strongly attracted to a magnet."},
{"condition":3,"uniqueID":119,"sentence":"Many people think that Edgar Allan Poe was a raving madman."},
{"condition":3,"uniqueID":120,"sentence":"My battery had an alcohol problem, so it went to AA meetings."},
{"condition":3,"uniqueID":171,"sentence":"That chair is made of wicker."},
{"condition":3,"uniqueID":172,"sentence":"She has good spatial skills; she knows how to build a house from plans on paper."},
{"condition":3,"uniqueID":173,"sentence":"Dancers whirled on the stage."},
{"condition":3,"uniqueID":174,"sentence":"The owner behaves like a little Caesar with his employees."},
{"condition":3,"uniqueID":175,"sentence":"The space launch took place this morning."},
{"condition":3,"uniqueID":176,"sentence":"Our apple tree was in bloom last week."},
{"condition":3,"uniqueID":177,"sentence":"His dog has fleas."},
{"condition":3,"uniqueID":178,"sentence":"The dentist replaced two fillings I had lost."},
{"condition":3,"uniqueID":179,"sentence":"The dog's salivation was all over the carpet."},
{"condition":3,"uniqueID":180,"sentence":"The mouth is an orifice."},
{"condition":3,"uniqueID":291,"sentence":"It has been a long time since we saw each other."},
{"condition":3,"uniqueID":292,"sentence":"She arranged the newspapers in order by their dates."},
{"condition":3,"uniqueID":293,"sentence":"He decided to leave his car in the parking lot."},
{"condition":3,"uniqueID":294,"sentence":"She is the best student in the class."},
{"condition":3,"uniqueID":295,"sentence":"That drinking glass has a crack in it."},
{"condition":3,"uniqueID":296,"sentence":"There was a lag in communications, so he did not hear the news until many days later."},
{"condition":3,"uniqueID":297,"sentence":"Tooth decay can result from poor dental hygiene."},
{"condition":3,"uniqueID":298,"sentence":"The car accident was a very traumatic experience for her."},
{"condition":3,"uniqueID":299,"sentence":"That traumatic incident left her scarred."},
{"condition":3,"uniqueID":300,"sentence":"That driver has a hostile attitude."},
],
[
{"condition":4,"uniqueID":31,"sentence":"If you spend too much time in the coffee shop you'll be latte for work."},
{"condition":4,"uniqueID":32,"sentence":"If you write bad things about me I am libel to sue you."},
{"condition":4,"uniqueID":33,"sentence":"In the novel, there is an unexpected secret meeting of the lovers. It is a plot tryst."},
{"condition":4,"uniqueID":34,"sentence":"Inflammatory talk is often seen as propane language."},
{"condition":4,"uniqueID":35,"sentence":"John plans to retire in the spring and, like the trees around us, will be leafing."},
{"condition":4,"uniqueID":36,"sentence":"Just in time for Thanksgiving: a blockbuster movie about sweet potatoes, called 'The Silence of the Yams'."},
{"condition":4,"uniqueID":37,"sentence":"Last night, I kept dreaming that I had written Lord of the Rings. The wife said I'd been Tolkien in my sleep."},
{"condition":4,"uniqueID":38,"sentence":"Many people are strongly attracted to a magnate."},
{"condition":4,"uniqueID":39,"sentence":"Many people think that Edgar Allan Poe was a raven madman."},
{"condition":4,"uniqueID":40,"sentence":"My battery had an alkaline problem, so it went to AA meetings."},
{"condition":4,"uniqueID":101,"sentence":"Even though Ashley was blind and under arrest, she still had hope that someone would bail her out."},
{"condition":4,"uniqueID":102,"sentence":"Even though he contributes either the X or Y chromosome, when a father chooses the sex of his child it's just a spur of the moment decision."},
{"condition":4,"uniqueID":103,"sentence":"For children to eat without washing their hands would be a crime."},
{"condition":4,"uniqueID":104,"sentence":"Grandparents' faces are full of pock marks."},
{"condition":4,"uniqueID":105,"sentence":"He labored so hard that he worked his fingers to the bones."},
{"condition":4,"uniqueID":106,"sentence":"I keep reading 'The Lord of the Rings' over and over. I guess it's just force of habit."},
{"condition":4,"uniqueID":107,"sentence":"I like the latest horror movie so much that I've arranged a private screening."},
{"condition":4,"uniqueID":108,"sentence":"I like to stay current with the electrifying adventures of Sherlock Holmes."},
{"condition":4,"uniqueID":109,"sentence":"I need to do my philosophy homework but I just can't."},
{"condition":4,"uniqueID":110,"sentence":"If a barista is not allowed to make espresso she will lose her temper."},
{"condition":4,"uniqueID":161,"sentence":"The owner takes the lion's share of profits from the company."},
{"condition":4,"uniqueID":162,"sentence":"A dentist examines one tooth at a time."},
{"condition":4,"uniqueID":163,"sentence":"Cilia are hairlike projections on the surface of some cells."},
{"condition":4,"uniqueID":164,"sentence":"Prince William is heir to the British throne."},
{"condition":4,"uniqueID":165,"sentence":"Food and clothing are basic necessities."},
{"condition":4,"uniqueID":166,"sentence":"The ambiance in that hotel is one of warmth and charm."},
{"condition":4,"uniqueID":167,"sentence":"Pigeons use the sunny sides of roofs as perches."},
{"condition":4,"uniqueID":168,"sentence":"The mayor reworded his speech, because his advisors told him to do so."},
{"condition":4,"uniqueID":169,"sentence":"I have a math exam today at school."},
{"condition":4,"uniqueID":170,"sentence":"He is a stealer of hearts."},
{"condition":4,"uniqueID":281,"sentence":"The boss told us to work late on a holiday; he is a slave driver."},
{"condition":4,"uniqueID":282,"sentence":"My back is aching from too much sitting."},
{"condition":4,"uniqueID":283,"sentence":"He tried to hide his irritation but it showed on his face."},
{"condition":4,"uniqueID":284,"sentence":"We made an offer to buy a house, but the owner upped the ante."},
{"condition":4,"uniqueID":285,"sentence":"No one knows what will happen in the future."},
{"condition":4,"uniqueID":286,"sentence":"She tells a story to her child each night."},
{"condition":4,"uniqueID":287,"sentence":"He asked her how's everything going."},
{"condition":4,"uniqueID":288,"sentence":"We sat around the fire to keep warm."},
{"condition":4,"uniqueID":289,"sentence":"I gave my friend some help with her homework."},
{"condition":4,"uniqueID":290,"sentence":"The dog was just guarding his house; he didn't mean to scare you."},
],
[
{"condition":5,"uniqueID":41,"sentence":"My boss does not tolerate any beards or mustaches. He is a real shave driver."},
{"condition":5,"uniqueID":42,"sentence":"My heart starts Aiken when Clay sings."},
{"condition":5,"uniqueID":43,"sentence":"My neighbor's sprinkler is a constant irrigation to me."},
{"condition":5,"uniqueID":44,"sentence":"My two uncles bet who would get married first. Then one upped the auntie."},
{"condition":5,"uniqueID":45,"sentence":"New years resolution for the bankrupt gardener was to forget the past and rely on the fuchsia."},
{"condition":5,"uniqueID":46,"sentence":"On organic farms they till it like it is."},
{"condition":5,"uniqueID":47,"sentence":"One real estate agent said to another, House it going?"},
{"condition":5,"uniqueID":48,"sentence":"People have a happy time vacationing in Ireland because they are walking on Eire."},
{"condition":5,"uniqueID":49,"sentence":"People in Switzerland can't learn to ski without a lot of Alp."},
{"condition":5,"uniqueID":50,"sentence":"Scarecrows are always garden their patch."},
{"condition":5,"uniqueID":131,"sentence":"Selling coffee has its perks for those who have been so lucky."},
{"condition":5,"uniqueID":132,"sentence":"Sign on a broken perfume bottle, Out of order."},
{"condition":5,"uniqueID":133,"sentence":"Sign: 'Please turn out the lights. Thanks a lot.'"},
{"condition":5,"uniqueID":134,"sentence":"Some children are often on their best behavior."},
{"condition":5,"uniqueID":135,"sentence":"Some people have to get up for work at the crack of dawn."},
{"condition":5,"uniqueID":136,"sentence":"Some planes are so cramped that passengers suffer jet lag."},
{"condition":5,"uniqueID":137,"sentence":"Ten years without brushing causes horrible tooth decay."},
{"condition":5,"uniqueID":138,"sentence":"The actor was never quite right after he retired. He had Post Traumatic Stress Disorder."},
{"condition":5,"uniqueID":139,"sentence":"The English Teacher felt odd after being fired: it was post traumatic stress disorder."},
{"condition":5,"uniqueID":140,"sentence":"The garden club visited the nursery and found themselves in a hostile environment."},
{"condition":5,"uniqueID":231,"sentence":"The general has great presence."},
{"condition":5,"uniqueID":232,"sentence":"She wore a scarf around her neck."},
{"condition":5,"uniqueID":233,"sentence":"She has good digestion; she can eat anything!"},
{"condition":5,"uniqueID":234,"sentence":"Our office uses 20 reams of paper each week."},
{"condition":5,"uniqueID":235,"sentence":"I seized his arm so he couldn't run away."},
{"condition":5,"uniqueID":236,"sentence":"Cervantes is one of the most famous authors in the Spanish language."},
{"condition":5,"uniqueID":237,"sentence":"The source of our difficulties is not having enough money."},
{"condition":5,"uniqueID":238,"sentence":"She used paste to put pictures in her notebook."},
{"condition":5,"uniqueID":239,"sentence":"I like an espresso after dinner."},
{"condition":5,"uniqueID":240,"sentence":"The scent of flowers relaxes me."},
{"condition":5,"uniqueID":271,"sentence":"She was late for our meeting."},
{"condition":5,"uniqueID":272,"sentence":"Rental contracts state that tenants are liable for damages that they cause to the property."},
{"condition":5,"uniqueID":273,"sentence":"I twisted two pieces of thread on a needle."},
{"condition":5,"uniqueID":274,"sentence":"That man uses profane language."},
{"condition":5,"uniqueID":275,"sentence":"He is leaving work right now."},
{"condition":5,"uniqueID":276,"sentence":"The family had roast leg of lamb for dinner."},
{"condition":5,"uniqueID":277,"sentence":"I was talking to my friend the whole time."},
{"condition":5,"uniqueID":278,"sentence":"I have a magnet on my desk that holds paper clips."},
{"condition":5,"uniqueID":279,"sentence":"A raving mad man frightened those near him."},
{"condition":5,"uniqueID":280,"sentence":"Alcohol burns easily."},
],
[
{"condition":6,"uniqueID":51,"sentence":"Selling coffee has its perks for those who have bean so lucky."},
{"condition":6,"uniqueID":52,"sentence":"Sign on a broken perfume bottle, Out of odor."},
{"condition":6,"uniqueID":53,"sentence":"Sign: 'Please turn out the lights. Thanks a watt.'"},
{"condition":6,"uniqueID":54,"sentence":"Some children are often on their pest behavior."},
{"condition":6,"uniqueID":55,"sentence":"Some people have to get up for work at the crank of dawn."},
{"condition":6,"uniqueID":56,"sentence":"Some planes are so cramped that passengers suffer jet leg."},
{"condition":6,"uniqueID":57,"sentence":"Ten years without brushing causes horrible tooth decade."},
{"condition":6,"uniqueID":58,"sentence":"The actor was never quite right after he retired. He had Post Dramatic Stress Disorder."},
{"condition":6,"uniqueID":59,"sentence":"The English Teacher felt odd after being fired: it was post grammatic stress disorder."},
{"condition":6,"uniqueID":60,"sentence":"The garden club visited the nursery and found themselves in a hosta environment."},
{"condition":6,"uniqueID":121,"sentence":"My boss does not tolerate any beards or mustaches. He is a real slave driver."},
{"condition":6,"uniqueID":122,"sentence":"My heart starts aching when Clay sings."},
{"condition":6,"uniqueID":123,"sentence":"My neighbor's sprinkler is a constant irritation to me."},
{"condition":6,"uniqueID":124,"sentence":"My two uncles bet who would get married first. Then one upped the ante."},
{"condition":6,"uniqueID":125,"sentence":"New years resolution for the bankrupt gardener was to forget the past and rely on the future."},
{"condition":6,"uniqueID":126,"sentence":"On organic farms they tell it like it is."},
{"condition":6,"uniqueID":127,"sentence":"One real estate agent said to another, How's it going?"},
{"condition":6,"uniqueID":128,"sentence":"People have a happy time vacationing in Ireland because they are walking on fire."},
{"condition":6,"uniqueID":129,"sentence":"People in Switzerland can't learn to ski without a lot of help."},
{"condition":6,"uniqueID":130,"sentence":"Scarecrows are always guarding their patch."},
{"condition":6,"uniqueID":221,"sentence":"Dublin is the capital of Ireland."},
{"condition":6,"uniqueID":222,"sentence":"Prisms can be used to reflect and split light."},
{"condition":6,"uniqueID":223,"sentence":"I put the milk and meat in the fridge."},
{"condition":6,"uniqueID":224,"sentence":"A thief stole my luggage at the airport."},
{"condition":6,"uniqueID":225,"sentence":"The Industrial Revolution changed how people worked and lived."},
{"condition":6,"uniqueID":226,"sentence":"Humans and animals could not live without plants."},
{"condition":6,"uniqueID":227,"sentence":"Rats tore into the meat with their strong incisors."},
{"condition":6,"uniqueID":228,"sentence":"The mimes were very skilled at imitating people."},
{"condition":6,"uniqueID":229,"sentence":"Her jewels were glittering in the sun."},
{"condition":6,"uniqueID":230,"sentence":"Our airplane is flying at an altitude of 35,000 feet."},
{"condition":6,"uniqueID":261,"sentence":"He posted $5,000 bail for his brother's release from jail."},
{"condition":6,"uniqueID":262,"sentence":"The boss called his workers together on the spur of the moment."},
{"condition":6,"uniqueID":263,"sentence":"The police fight crime, murder, theft, and drug dealing."},
{"condition":6,"uniqueID":264,"sentence":"Smallpox left him with many pock marks."},
{"condition":6,"uniqueID":265,"sentence":"Our bones give us our shape."},
{"condition":6,"uniqueID":266,"sentence":"Smoking is a bad habit."},
{"condition":6,"uniqueID":267,"sentence":"They went to the movie screening together."},
{"condition":6,"uniqueID":268,"sentence":"I really like reading Sherlock Holmes books."},
{"condition":6,"uniqueID":269,"sentence":"I can't remember the last time that happened."},
{"condition":6,"uniqueID":270,"sentence":"He has a bad temper and is easily angered."},
],
[
{"condition":7,"uniqueID":61,"sentence":"The Irish should be rich because their capital is always Dublin."},
{"condition":7,"uniqueID":62,"sentence":"The optical scientist who stole his colleague's bifocals was sentenced to three years in a state prism."},
{"condition":7,"uniqueID":63,"sentence":"The plumber explained that the problem in my kitchen was just water under the fridge."},
{"condition":7,"uniqueID":64,"sentence":"The robber baron was a commander in thief."},
{"condition":7,"uniqueID":65,"sentence":"The satellite went into orbit on January 1st causing a new year's revolution."},
{"condition":7,"uniqueID":66,"sentence":"The twin girls rented flora to offices. They called their business 'Sisterhood of the Traveling Plants'."},
{"condition":7,"uniqueID":67,"sentence":"There was a dentist who was convicted of incisor trading."},
{"condition":7,"uniqueID":68,"sentence":"They were the quietest burglars in the history of New York City. The newspapers called them 'Criminal Mimes.'"},
{"condition":7,"uniqueID":69,"sentence":"Tinker Bell was arrested for being suspiciously high. But in the end she was only fined for glittering."},
{"condition":7,"uniqueID":70,"sentence":"To become a pilot requires a good altitude."},
{"condition":7,"uniqueID":151,"sentence":"To some Christmas is about other people's presents."},
{"condition":7,"uniqueID":152,"sentence":"Vampires are always looking for their next victim."},
{"condition":7,"uniqueID":153,"sentence":"What does a villain call his silverware? Weapons of mass destruction."},
{"condition":7,"uniqueID":154,"sentence":"What would be the brand name of the highest quality copy paper money could buy? The cream of the crop!"},
{"condition":7,"uniqueID":155,"sentence":"What you see is what you get."},
{"condition":7,"uniqueID":156,"sentence":"When she made Mario Puzo's books required reading for her class, she made him an offer they couldn't refuse."},
{"condition":7,"uniqueID":157,"sentence":"When the crop was destroyed, there was no more cranberry sauce."},
{"condition":7,"uniqueID":158,"sentence":"When you use glue in class it pays to be careful."},
{"condition":7,"uniqueID":159,"sentence":"Why are Italians so good at making coffee? Because they really know how to express themselves."},
{"condition":7,"uniqueID":160,"sentence":"Women who wear $200.00 perfume obviously are known to have no common sense."},
{"condition":7,"uniqueID":211,"sentence":"I like to eat lima beans and black beans."},
{"condition":7,"uniqueID":212,"sentence":"The odor of old fish filled the air."},
{"condition":7,"uniqueID":213,"sentence":"My desk lamp uses a 60-watt light bulb."},
{"condition":7,"uniqueID":214,"sentence":"Rats, mice, and flies are regarded as pests."},
{"condition":7,"uniqueID":215,"sentence":"He is often a crank in the morning."},
{"condition":7,"uniqueID":216,"sentence":"Runners need strong legs."},
{"condition":7,"uniqueID":217,"sentence":"A decade is a pretty long time."},
{"condition":7,"uniqueID":218,"sentence":"He has written dramatic works for the stage."},
{"condition":7,"uniqueID":219,"sentence":"That sentence has an unusual grammatic structure."},
{"condition":7,"uniqueID":220,"sentence":"The hosta is a beautiful plant."},
{"condition":7,"uniqueID":251,"sentence":"A wicked man took the child from his parents."},
{"condition":7,"uniqueID":252,"sentence":"A birthday party is a special occasion."},
{"condition":7,"uniqueID":253,"sentence":"It is possible to fly around the world in an airplane."},
{"condition":7,"uniqueID":254,"sentence":"Hairdressers use scissors to cut people's hair."},
{"condition":7,"uniqueID":255,"sentence":"I had a sandwich for lunch."},
{"condition":7,"uniqueID":256,"sentence":"Blue and yellow make green."},
{"condition":7,"uniqueID":257,"sentence":"After twenty years in prison, he was a free man."},
{"condition":7,"uniqueID":258,"sentence":"Her strong criticism hurt her daughter's feelings."},
{"condition":7,"uniqueID":259,"sentence":"The minister prayed for the evil woman's salvation."},
{"condition":7,"uniqueID":260,"sentence":"His office is in a skyscraper."},
],
[
{"condition":8,"uniqueID":71,"sentence":"To some Christmas is about other people's presence."},
{"condition":8,"uniqueID":72,"sentence":"Vampires are always looking for their necks victim."},
{"condition":8,"uniqueID":73,"sentence":"What does a villain call his silverware? Weapons of mass digestion."},
{"condition":8,"uniqueID":74,"sentence":"What would be the brand name of the highest quality copy paper money could buy? The ream of the crop!"},
{"condition":8,"uniqueID":75,"sentence":"What you seize is what you get."},
{"condition":8,"uniqueID":76,"sentence":"When she made Mario Puzo's books required reading for her class, she made him an author they couldn't refuse."},
{"condition":8,"uniqueID":77,"sentence":"When the crop was destroyed, there was no more cranberry source."},
{"condition":8,"uniqueID":78,"sentence":"When you use glue in class it paste to be careful."},
{"condition":8,"uniqueID":79,"sentence":"Why are Italians so good at making coffee? Because they really know how to espresso themselves."},
{"condition":8,"uniqueID":80,"sentence":"Women who wear $200.00 perfume obviously are known to have no common scents."},
{"condition":8,"uniqueID":141,"sentence":"The Irish should be rich because their capital is always doubling."},
{"condition":8,"uniqueID":142,"sentence":"The optical scientist who stole his colleague's bifocals was sentenced to three years in a state prison."},
{"condition":8,"uniqueID":143,"sentence":"The plumber explained that the problem in my kitchen was just water under the bridge."},
{"condition":8,"uniqueID":144,"sentence":"The robber baron was a commander in chief."},
{"condition":8,"uniqueID":145,"sentence":"The satellite went into orbit on January 1st causing a new year's resolution."},
{"condition":8,"uniqueID":146,"sentence":"The twin girls rented flora to offices. They called their business 'Sisterhood of the Traveling Pants'."},
{"condition":8,"uniqueID":147,"sentence":"There was a dentist who was convicted of insider trading."},
{"condition":8,"uniqueID":148,"sentence":"They were the quietest burglars in the history of New York City. The newspapers called them 'Criminal minds.'"},
{"condition":8,"uniqueID":149,"sentence":"Tinker Bell was arrested for being suspiciously high. But in the end she was only fined for littering."},
{"condition":8,"uniqueID":150,"sentence":"To become a pilot requires a good attitude."},
{"condition":8,"uniqueID":201,"sentence":"Your beard is growing too long; you need a shave."},
{"condition":8,"uniqueID":202,"sentence":"Clay Aiken rose to fame after he won American Idol. "},
{"condition":8,"uniqueID":203,"sentence":"Irrigation is the artificial application of water to the land or soil"},
{"condition":8,"uniqueID":204,"sentence":"My Auntie Betty is my mother's sister."},
{"condition":8,"uniqueID":205,"sentence":"Her favorite flower is the fuchsia."},
{"condition":8,"uniqueID":206,"sentence":"Farmers till the soil in the springtime."},
{"condition":8,"uniqueID":207,"sentence":"Our house is located on the corner."},
{"condition":8,"uniqueID":208,"sentence":"Eire is a former name for the Republic of Ireland."},
{"condition":8,"uniqueID":209,"sentence":"An alp is a very high mountain."},
{"condition":8,"uniqueID":210,"sentence":"We have a small flower garden behind our house."},
{"condition":8,"uniqueID":241,"sentence":"My notebook has thin blue lines printed on each page."},
{"condition":8,"uniqueID":242,"sentence":"She always speaks the truth."},
{"condition":8,"uniqueID":243,"sentence":"When he drinks wine, he starts acting sillier."},
{"condition":8,"uniqueID":244,"sentence":"I found a cat hair in my food."},
{"condition":8,"uniqueID":245,"sentence":"The chairman made some closing remarks at the end of the meeting."},
{"condition":8,"uniqueID":246,"sentence":"An ambulance came to the car accident in two minutes."},
{"condition":8,"uniqueID":247,"sentence":"She decided to purchase a new car."},
{"condition":8,"uniqueID":248,"sentence":"She gave herself a reward for working hard all year."},
{"condition":8,"uniqueID":249,"sentence":"A mass of people were in the town square for the concert."},
{"condition":8,"uniqueID":250,"sentence":"A steeler is something that is covered in steel."},
]
];


/*
Set variables
*/

// Number of conditions in experiment
var numConditions = allConditions.length;

// Randomly select a condition number for this particular participant
var chooseCondition = random(0, numConditions-1);

// Based on condition number, choose set of input (trials)
var allTrialOrders = allConditions[chooseCondition];

// Number of trials in each condition
var numTrials = allTrialOrders.length;

// Produce random order in which the trials will occur
var shuffledOrder = shuffledArray(numTrials);

// Keep track of current trial 
var currentTrialNum = 0;

// trial = allTrialOrders[currentTrialNum]
var trial;

// Keep track of how many trials have been completed
var numComplete = 0;

// Show instruction slide
showSlide("instructions");

// Updates the progress bar
$("#trial-num").html(numComplete);
$("#total-num").html(numTrials);

/*
The actual variable that will be returned to MTurk.
An experiment object with various variables that you
want to keep track of and return as results.
*/
var experiment = {
	// Which condition was run
	condition: chooseCondition + 1,
	
	// An array of subjects' responses to each trial (NOTE: in the order in which
	// you initially listed the trials, not in the order in which they appeared)
    funninessResults: new Array(numTrials),
    
    // The order in which each trial appeared
    orders: new Array(numTrials),
    
    /* 
    Special for this experiment
    */
    // array of uniqueIDs for each sentence in the condition (the order in which you
    // initially listed the trials, not the order in which they appeared)
    uniqueIDs: new Array(numTrials),

    
    // Demographics
    gender: "",
    age:"",
    nativeLanguage:"",
    comments:"",
    
    /* 
    Functions for the experiment. Gets called from html
    when people press a button to the next page or to submit
    results, etc
    */
    
    // Goes to description slide
    description: function() {
    	showSlide("description");
    	$("#tot-num").html(numTrials);	
    },
    
    
    // Reaches end of survey, submits results
    end: function() {
    
	// Records demographics
        var gen = getRadioCheckedValue(1, "genderButton");
        var ag = document.age.ageRange.value;
        var lan = document.language.nativeLanguage.value;
        var comm = document.comments.input.value;
        experiment.gender = gen;
        experiment.age = ag;
        experiment.nativeLanguage = lan;
        experiment.comments = comm;
        clearForm(document.forms[1]);
        clearForm(document.forms[2]);
        clearForm(document.forms[3]);
        clearForm(document.forms[4]);
        
        // Show finished slide
        showSlide("finished");
        setTimeout(function() {turk.submit(experiment) }, 1500);
    },
    // Goes to next trial
    next: function() {
    
    // If this is not the first trial, record variables
    	if (numComplete > 0) {
    		var funniness = parseInt(getRadioCheckedValue(0, "funniness"));
        	experiment.funninessResults[currentTrialNum] = funniness;
        	experiment.orders[currentTrialNum] = numComplete;
        	
        	
        	experiment.uniqueIDs[currentTrialNum] = trial.uniqueID;
        	clearForm(document.funninessForm);
        }
    	// If subject has completed all trials, update progress bar and
    	// show slide to ask for demographic info
    	if (numComplete >= numTrials) {
    		$('.bar').css('width', (200.0 * numComplete/numTrials) + 'px');
    		$("#trial-num").html(numComplete);
    		$("#total-num").html(numTrials);
    		showSlide("askInfo");
    	// Otherwise, if trials not completed yet, update progress bar
    	// and go to next trial based on the order in which trials are supposed
    	// to occur
    	} else {
    		$('.bar').css('width', (200.0 * numComplete/numTrials) + 'px');
    		$("#trial-num").html(numComplete);
    		$("#total-num").html(numTrials);
    		//$("#condition").html(experiment.condition);
    		currentTrialNum = shuffledOrder[numComplete];
    		trial = allTrialOrders[currentTrialNum];
        	showSlide("stage");
        	
        	$("#sentence").html(trial.sentence);
        	
        	numComplete++;
        }
    }
}


