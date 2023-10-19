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
{"condition":8,"uniqueID":2,"sentence":"I get my large circumference from too much pi."},
{"condition":8,"uniqueID":10,"sentence":"It was not school john disliked. It was just the principal of it."},
{"condition":8,"uniqueID":18,"sentence":"Authors in jail have their prose and cons."},
{"condition":8,"uniqueID":26,"sentence":"A cardboard belt would be a waist of paper."},
{"condition":8,"uniqueID":34,"sentence":"If you say you have bad skin I would say that was a pore excuse."},
]
*/
/* full trials */
[
{"condition":1,"uniqueID":3,"sentence":"Bakers trade bread recipes on a knead to know basis."},
{"condition":1,"uniqueID":11,"sentence":"Some music stores are in a CD part of town."},
{"condition":1,"uniqueID":19,"sentence":"Do not expect to eat something fancy when you are flying because it is plane food."},
{"condition":1,"uniqueID":27,"sentence":"Being able to fit size fourteen shoes is quite a feet."},
{"condition":1,"uniqueID":35,"sentence":"People who like gold paint have a gilt complex."},
{"condition":1,"uniqueID":45,"sentence":"We didn't know whether to keep our biology program or cell it."},
{"condition":1,"uniqueID":53,"sentence":"He injured his foot and now it just won't heel."},
{"condition":1,"uniqueID":61,"sentence":"The butcher was very glad we could meat."},
{"condition":1,"uniqueID":66,"sentence":"Nationalism is a non prophet organization."},
{"condition":1,"uniqueID":74,"sentence":"I always prayed before my biology tests. I was hoping for a sine from above."},
{"condition":1,"uniqueID":82,"sentence":"A teacher having a tough time longs for the end of the school daze."},
{"condition":1,"uniqueID":90,"sentence":"When an actress saw her first wrinkle she thought she would dye."},
{"condition":1,"uniqueID":98,"sentence":"Tomato gardeners who work extra get thyme and a half."},
{"condition":1,"uniqueID":112,"sentence":"The old man is alone all the time and is bored to tears."},
{"condition":1,"uniqueID":120,"sentence":"Karl Marx was a german philosopher."},
{"condition":1,"uniqueID":128,"sentence":"He puts a collar on his dog before walking it."},
{"condition":1,"uniqueID":136,"sentence":"Cached copies of the web pages are stored in the database."},
{"condition":1,"uniqueID":144,"sentence":"My desk lamp uses a sixty watt light bulb."},
{"condition":1,"uniqueID":146,"sentence":"It's easy to tie a double knot."},
{"condition":1,"uniqueID":154,"sentence":"He tried to steal honey but was stung by an angry bee."},
{"condition":1,"uniqueID":162,"sentence":"That famous movie star is my idol."},
{"condition":1,"uniqueID":170,"sentence":"He tripped over a tree's root."},
{"condition":1,"uniqueID":176,"sentence":"She raised a flag up the pole. "},
{"condition":1,"uniqueID":184,"sentence":"She taught mathematics to college students."},
{"condition":1,"uniqueID":192,"sentence":"She bought a roll of silk to make a dress."},
{"condition":1,"uniqueID":200,"sentence":"There was all manner of food at the party."},
{"condition":1,"uniqueID":208,"sentence":"The ship is in the mid-atlantic on the high seas."},
{"condition":1,"uniqueID":218,"sentence":"You're such a dear friend."},
{"condition":1,"uniqueID":226,"sentence":"Come in the room and close the door."},
{"condition":1,"uniqueID":234,"sentence":"That mouse could easily be the eagle's prey."},
{"condition":1,"uniqueID":237,"sentence":"I get my large circumference from too much pie."},
{"condition":1,"uniqueID":245,"sentence":"It was not school john disliked. It was just the principle of it."},
{"condition":1,"uniqueID":253,"sentence":"Authors in jail have their pros and cons."},
{"condition":1,"uniqueID":261,"sentence":"A cardboard belt would be a waste of paper."},
{"condition":1,"uniqueID":269,"sentence":"If you say you have bad skin I would say that was a poor excuse."},
{"condition":1,"uniqueID":279,"sentence":"I'm blind so I can't see."},
{"condition":1,"uniqueID":287,"sentence":"The driver at the toll insisted it wasn't fair."},
{"condition":1,"uniqueID":295,"sentence":"He cried when he woke up. It was morning."},
{"condition":1,"uniqueID":308,"sentence":"Did you know that dolmas were first made in grease?"},
{"condition":1,"uniqueID":316,"sentence":"A boy who instinctively takes risks has a natural high."},
{"condition":1,"uniqueID":324,"sentence":"Bodybuilders have muscles of steel."},
{"condition":1,"uniqueID":332,"sentence":"Britain is a wet place since the autumn has had a long rain."},
{"condition":1,"uniqueID":340,"sentence":"When the mayor wanted to balance the budget he turned to a fund raiser."},
{"condition":1,"uniqueID":344,"sentence":"The fisherman dipped the or in the river."},
{"condition":1,"uniqueID":352,"sentence":"The hair ran rapidly through the fields."},
{"condition":1,"uniqueID":360,"sentence":"That beaver is building a damn with logs and sticks."},
{"condition":1,"uniqueID":368,"sentence":"The student read her poem allowed in class."},
{"condition":1,"uniqueID":376,"sentence":"Prince William is err to the british throne."},
{"condition":1,"uniqueID":386,"sentence":"That cent is unpleasant."},
{"condition":1,"uniqueID":394,"sentence":"We sang a him in church."},
{"condition":1,"uniqueID":402,"sentence":"You need to real in the fish."},
{"condition":1,"uniqueID":410,"sentence":"Tiers ran down her cheeks as she watched a sad movie."},
{"condition":1,"uniqueID":418,"sentence":"That boy is a knotty child."},
{"condition":1,"uniqueID":426,"sentence":"I fell and now my leg hertz."},
{"condition":1,"uniqueID":434,"sentence":"She looks pail and sick."},
{"condition":1,"uniqueID":442,"sentence":"The son rises every morning and sets every evening."},
{"condition":1,"uniqueID":452,"sentence":"You have very course hair."},
{"condition":1,"uniqueID":460,"sentence":"He no's almost every word in the dictionary."},
{"condition":1,"uniqueID":468,"sentence":"I have a pear of matching socks."},
]
, 
[
{"condition":2,"uniqueID":4,"sentence":"The indecisive rower could not choose either oar."},
{"condition":2,"uniqueID":12,"sentence":"The magician got so mad he pulled his hare out."},
{"condition":2,"uniqueID":20,"sentence":"I saw a beaver movie last night. It was the best dam movie I have ever seen."},
{"condition":2,"uniqueID":28,"sentence":"The mime wanted to say something but he was not aloud."},
{"condition":2,"uniqueID":36,"sentence":"To heir is human."},
{"condition":2,"uniqueID":46,"sentence":"It will cost you more than a scent to get rid of that smell."},
{"condition":2,"uniqueID":54,"sentence":"I wrote a song about my priest so that I could perform it for hymn."},
{"condition":2,"uniqueID":62,"sentence":"The fisherman couldn't believe what he caught; he didn't think it was reel."},
{"condition":2,"uniqueID":67,"sentence":"I get my large waistline from too much pi."},
{"condition":2,"uniqueID":75,"sentence":"It was not church john disliked. It was just the principal of it."},
{"condition":2,"uniqueID":83,"sentence":"Bankers in jail have their prose and cons."},
{"condition":2,"uniqueID":91,"sentence":"A cardboard fort would be a waist of paper."},
{"condition":2,"uniqueID":99,"sentence":"If you say you have bad teeth I would say that was a pore excuse."},
{"condition":2,"uniqueID":113,"sentence":"Greece is a country in the the southern portion of Europe."},
{"condition":2,"uniqueID":121,"sentence":"He waved at me to say hi."},
{"condition":2,"uniqueID":129,"sentence":"The little boy wanted to steal his friend's candy but decided not to."},
{"condition":2,"uniqueID":137,"sentence":"The king's reign ended and his heir took over."},
{"condition":2,"uniqueID":145,"sentence":"He used a razor to shave his beard."},
{"condition":2,"uniqueID":147,"sentence":"We get our wood from trees."},
{"condition":2,"uniqueID":155,"sentence":"Cars should brake slowly."},
{"condition":2,"uniqueID":163,"sentence":"I hired a maid to clean."},
{"condition":2,"uniqueID":177,"sentence":"He has a meeting with the company's board of directors."},
{"condition":2,"uniqueID":185,"sentence":"She got high marks in high school."},
{"condition":2,"uniqueID":193,"sentence":"The caller on the phone is from your bank."},
{"condition":2,"uniqueID":201,"sentence":"She bought stocks for ten years and then cashed in her chips."},
{"condition":2,"uniqueID":209,"sentence":"The teacher told the students what to do."},
{"condition":2,"uniqueID":211,"sentence":"Let's do this at but not that."},
{"condition":2,"uniqueID":219,"sentence":"I will be okay; don't worry."},
{"condition":2,"uniqueID":227,"sentence":"You're just sitting there doing nothing; don't be idle."},
{"condition":2,"uniqueID":235,"sentence":"Take the faster route on your way home."},
{"condition":2,"uniqueID":238,"sentence":"Bakers trade bread recipes on a need to know basis."},
{"condition":2,"uniqueID":246,"sentence":"Some music stores are in a seedy part of town."},
{"condition":2,"uniqueID":254,"sentence":"Do not expect to eat something fancy when you are flying because it is plain food."},
{"condition":2,"uniqueID":262,"sentence":"Being able to fit size fourteen shoes is quite a feat."},
{"condition":2,"uniqueID":270,"sentence":"People who like gold paint have a guilt complex."},
{"condition":2,"uniqueID":280,"sentence":"We didn't know whether to keep our biology program or sell it."},
{"condition":2,"uniqueID":288,"sentence":"He injured his foot and now it just won't heal."},
{"condition":2,"uniqueID":296,"sentence":"The butcher was very glad we could meet."},
{"condition":2,"uniqueID":301,"sentence":"Nationalism is a non profit organization."},
{"condition":2,"uniqueID":309,"sentence":"I always prayed before my biology tests. I was hoping for a sign from above."},
{"condition":2,"uniqueID":317,"sentence":"A teacher having a tough time longs for the end of the school days."},
{"condition":2,"uniqueID":325,"sentence":"When an actress saw her first wrinkle she thought she would die."},
{"condition":2,"uniqueID":333,"sentence":"Tomato gardeners who work extra get time and a half."},
{"condition":2,"uniqueID":345,"sentence":"Boxes are stacked in tears in the warehouse."},
{"condition":2,"uniqueID":353,"sentence":"That cabin is made of naughty pine."},
{"condition":2,"uniqueID":361,"sentence":"This computer has a processing speed of thirty-three mega hurts."},
{"condition":2,"uniqueID":369,"sentence":"A worker filled a pale with water to clean the floor."},
{"condition":2,"uniqueID":377,"sentence":"They have a sun and a daughter."},
{"condition":2,"uniqueID":387,"sentence":"I took a coarse in school."},
{"condition":2,"uniqueID":395,"sentence":"I answered with a string of no's."},
{"condition":2,"uniqueID":403,"sentence":"She ate a pair and two apples."},
{"condition":2,"uniqueID":411,"sentence":"She raised a flag up the poll. "},
{"condition":2,"uniqueID":419,"sentence":"She taut mathematics to college students."},
{"condition":2,"uniqueID":427,"sentence":"She bought a role of silk to make a dress."},
{"condition":2,"uniqueID":435,"sentence":"There was all manor of food at the party."},
{"condition":2,"uniqueID":443,"sentence":"The ship is in the mid-atlantic on the high c's."},
{"condition":2,"uniqueID":453,"sentence":"You're such a deer friend."},
{"condition":2,"uniqueID":461,"sentence":"Come inn the room and close the door."},
{"condition":2,"uniqueID":469,"sentence":"That mouse could easily be the eagle's pray."},
],
[
{"condition":3,"uniqueID":5,"sentence":"It was an emotional wedding. Even the cake was in tiers."},
{"condition":3,"uniqueID":13,"sentence":"The young pine sapling was admonished by his father. Apparently he had been knotty."},
{"condition":3,"uniqueID":21,"sentence":"My computer is so slow it hertz."},
{"condition":3,"uniqueID":29,"sentence":"Those who carry too many buckets start feeling pail."},
{"condition":3,"uniqueID":37,"sentence":"When their boy was little they only got rest after son down."},
{"condition":3,"uniqueID":47,"sentence":"I tried to stick with the rough class but it was just too course for my liking."},
{"condition":3,"uniqueID":55,"sentence":"Mother no's best."},
{"condition":3,"uniqueID":63,"sentence":"If I were brave enough to be a fruit farmer I would grow a pear."},
{"condition":3,"uniqueID":68,"sentence":"Mothers trade cake recipes on a knead to know basis."},
{"condition":3,"uniqueID":76,"sentence":"Some grocery stores are in a CD part of town."},
{"condition":3,"uniqueID":84,"sentence":"Do not expect to eat something fancy when you are driving because it is plane food."},
{"condition":3,"uniqueID":92,"sentence":"Being able to fit size fourteen pants is quite a feet."},
{"condition":3,"uniqueID":100,"sentence":"People who like purple paint have a gilt complex."},
{"condition":3,"uniqueID":106,"sentence":"Daniel is a biblical prophet known for interpreting dreams."},
{"condition":3,"uniqueID":114,"sentence":"In mathematics the sine function is a function of an angle."},
{"condition":3,"uniqueID":122,"sentence":"She was in a daze after learning the bad news."},
{"condition":3,"uniqueID":130,"sentence":"Some people do not like to dye their hair."},
{"condition":3,"uniqueID":138,"sentence":"One of my favorite meals is chicken in a creamy sauce flavored with thyme."},
{"condition":3,"uniqueID":148,"sentence":"A grader was hired to score all of the tests."},
{"condition":3,"uniqueID":156,"sentence":"We use different kinds of flours in baking."},
{"condition":3,"uniqueID":164,"sentence":"The nun was very pious and kind."},
{"condition":3,"uniqueID":178,"sentence":"There was too much grease on the plate."},
{"condition":3,"uniqueID":186,"sentence":"The statue is ten feet high."},
{"condition":3,"uniqueID":194,"sentence":"That ship is made of wood and steel."},
{"condition":3,"uniqueID":202,"sentence":"Rain fell on the city last night."},
{"condition":3,"uniqueID":210,"sentence":"That girl organized a fund raiser at her local church."},
{"condition":3,"uniqueID":212,"sentence":"Her father would not let her go to the party."},
{"condition":3,"uniqueID":220,"sentence":"Break a leg on your performance."},
{"condition":3,"uniqueID":228,"sentence":"You made that cake all by yourself?"},
{"condition":3,"uniqueID":239,"sentence":"The indecisive rower could not choose either or."},
{"condition":3,"uniqueID":247,"sentence":"The magician got so mad he pulled his hair out."},
{"condition":3,"uniqueID":255,"sentence":"I saw a beaver movie last night. It was the best damn movie I have ever seen."},
{"condition":3,"uniqueID":263,"sentence":"The mime wanted to say something but he was not allowed."},
{"condition":3,"uniqueID":271,"sentence":"To err is human."},
{"condition":3,"uniqueID":281,"sentence":"It will cost you more than a cent to get rid of that smell."},
{"condition":3,"uniqueID":289,"sentence":"I wrote a song about my priest so that I could perform it for him."},
{"condition":3,"uniqueID":297,"sentence":"The fisherman couldn't believe what he caught; he didn't think it was real."},
{"condition":3,"uniqueID":302,"sentence":"I get my large waistline from too much pie."},
{"condition":3,"uniqueID":310,"sentence":"It was not church John disliked. It was just the principle of it."},
{"condition":3,"uniqueID":318,"sentence":"Bankers in jail have their pros and cons."},
{"condition":3,"uniqueID":326,"sentence":"A cardboard fort would be a waste of paper."},
{"condition":3,"uniqueID":334,"sentence":"If you say you have bad teeth I would say that was a poor excuse."},
{"condition":3,"uniqueID":346,"sentence":"Pollsters conducted a pole on the popularity of the political candidates."},
{"condition":3,"uniqueID":354,"sentence":"The clothesline hangs taught between two poles."},
{"condition":3,"uniqueID":362,"sentence":"She plays the leading roll in a television show."},
{"condition":3,"uniqueID":370,"sentence":"Those wealthy people live in a huge manner."},
{"condition":3,"uniqueID":378,"sentence":"It is hard even for a soprano to sing the high seas."},
{"condition":3,"uniqueID":388,"sentence":"There are dear in the forest."},
{"condition":3,"uniqueID":396,"sentence":"We stayed at an in."},
{"condition":3,"uniqueID":404,"sentence":"It is customary for Christians to prey before bed."},
{"condition":3,"uniqueID":412,"sentence":"He has a meeting with the company's bored of directors."},
{"condition":3,"uniqueID":420,"sentence":"She got high Marx in high school."},
{"condition":3,"uniqueID":428,"sentence":"The collar on the phone is from your bank."},
{"condition":3,"uniqueID":436,"sentence":"She bought stocks for ten years and then cached in her chips."},
{"condition":3,"uniqueID":444,"sentence":"The teacher told the students watt to do."},
{"condition":3,"uniqueID":446,"sentence":"Let's do this at but knot that."},
{"condition":3,"uniqueID":454,"sentence":"I will bee okay; don't worry."},
{"condition":3,"uniqueID":462,"sentence":"You're just sitting there doing nothing; don't be idol."},
{"condition":3,"uniqueID":470,"sentence":"Take the faster root on your way home."},
],
[
{"condition":4,"uniqueID":6,"sentence":"A new country decided to conduct a flag poll."},
{"condition":4,"uniqueID":14,"sentence":"To learn rope tricks you have to be taut."},
{"condition":4,"uniqueID":22,"sentence":"The actors had one great movie after another. They were on a role."},
{"condition":4,"uniqueID":30,"sentence":"A man's home is his castle in a manor of speaking."},
{"condition":4,"uniqueID":38,"sentence":"Novice pirates make terrible singers because they cannot hit the high Cs."},
{"condition":4,"uniqueID":48,"sentence":"Our pet is very deer to us."},
{"condition":4,"uniqueID":56,"sentence":"When I stayed at the hotel I made sure I didn't sleep inn."},
{"condition":4,"uniqueID":64,"sentence":"All the birds in the parish were birds of pray."},
{"condition":4,"uniqueID":69,"sentence":"The indecisive customer could not choose either oar."},
{"condition":4,"uniqueID":77,"sentence":"The professor got so mad he pulled his hare out."},
{"condition":4,"uniqueID":85,"sentence":"I saw a horror movie last night. It was the best dam movie I have ever seen."},
{"condition":4,"uniqueID":93,"sentence":"The intern wanted to say something but he was not aloud."},
{"condition":4,"uniqueID":101,"sentence":"To heir is careless."},
{"condition":4,"uniqueID":107,"sentence":"He can recite the number pi up to ten decimal places."},
{"condition":4,"uniqueID":115,"sentence":"Ms. Wu is the principal of our local high school."},
{"condition":4,"uniqueID":123,"sentence":"Novels and essays are written in prose."},
{"condition":4,"uniqueID":131,"sentence":"She must have a small waist; look how tiny her belt is!"},
{"condition":4,"uniqueID":139,"sentence":"A pore is a very small opening on the surface of your skin."},
{"condition":4,"uniqueID":149,"sentence":"I was poked in the eye."},
{"condition":4,"uniqueID":157,"sentence":"The fare had to be paid."},
{"condition":4,"uniqueID":165,"sentence":"We were in mourning after our loved one died."},
{"condition":4,"uniqueID":171,"sentence":"That business made one million dollars in profit last year."},
{"condition":4,"uniqueID":179,"sentence":"The sign on our store says the clothes boutique."},
{"condition":4,"uniqueID":187,"sentence":"There are seven days in a week."},
{"condition":4,"uniqueID":195,"sentence":"He is very scared that he will die of a heart attack. "},
{"condition":4,"uniqueID":203,"sentence":"We have time to have lunch before the meeting."},
{"condition":4,"uniqueID":213,"sentence":"The cheese grater slices the cheese."},
{"condition":4,"uniqueID":221,"sentence":"I picked some pretty flowers that were growing among weeds."},
{"condition":4,"uniqueID":229,"sentence":"None of it made any sense."},
{"condition":4,"uniqueID":240,"sentence":"It was an emotional wedding. Even the cake was in tears."},
{"condition":4,"uniqueID":248,"sentence":"The young pine sapling was admonished by his father. Apparently he had been naughty."},
{"condition":4,"uniqueID":256,"sentence":"My computer is so slow it hurts."},
{"condition":4,"uniqueID":264,"sentence":"Those who carry too many buckets start feeling pale."},
{"condition":4,"uniqueID":272,"sentence":"When their boy was little they only got rest after sun down."},
{"condition":4,"uniqueID":282,"sentence":"I tried to stick with the rough class but it was just too coarse for my liking."},
{"condition":4,"uniqueID":290,"sentence":"Mother knows best."},
{"condition":4,"uniqueID":298,"sentence":"If I were brave enough to be a fruit farmer I would grow a pair."},
{"condition":4,"uniqueID":303,"sentence":"Mothers trade cake recipes on a need to know basis."},
{"condition":4,"uniqueID":311,"sentence":"Some grocery stores are in a seedy part of town."},
{"condition":4,"uniqueID":319,"sentence":"Do not expect to eat something fancy when you are driving because it is plain food."},
{"condition":4,"uniqueID":327,"sentence":"Being able to fit size fourteen pants is quite a feat."},
{"condition":4,"uniqueID":335,"sentence":"People who like purple paint have a guilt complex."},
{"condition":4,"uniqueID":347,"sentence":"The old man is alone all the time and is board to tears."},
{"condition":4,"uniqueID":355,"sentence":"Karl marks was a german philosopher."},
{"condition":4,"uniqueID":363,"sentence":"He puts a caller on his dog before walking it."},
{"condition":4,"uniqueID":371,"sentence":"Cashed copies of the web pages are stored in the database."},
{"condition":4,"uniqueID":379,"sentence":"My desk lamp uses a sixty what light bulb."},
{"condition":4,"uniqueID":381,"sentence":"It's easy to tie a double not."},
{"condition":4,"uniqueID":389,"sentence":"He tried to steal honey but was stung by an angry be."},
{"condition":4,"uniqueID":397,"sentence":"That famous movie star is my idle."},
{"condition":4,"uniqueID":405,"sentence":"He tripped over a tree's route."},
{"condition":4,"uniqueID":413,"sentence":"There was too much Greece on the plate."},
{"condition":4,"uniqueID":421,"sentence":"The statue is ten feet hi."},
{"condition":4,"uniqueID":429,"sentence":"That ship is made of wood and steal."},
{"condition":4,"uniqueID":437,"sentence":"Reign fell on the city last night."},
{"condition":4,"uniqueID":445,"sentence":"That girl organized a fund razor at her local church."},
{"condition":4,"uniqueID":447,"sentence":"Her father wood not let her go to the party."},
{"condition":4,"uniqueID":455,"sentence":"Brake a leg on your performance."},
{"condition":4,"uniqueID":463,"sentence":"You maid that cake all by yourself?"},
],
[
{"condition":5,"uniqueID":7,"sentence":"At some executive meetings there is a chairman of the bored."},
{"condition":5,"uniqueID":15,"sentence":"I dropped out of communism class because of lousy Marx."},
{"condition":5,"uniqueID":23,"sentence":"The man put his name on the neck of his shirt so he would have collar ID."},
{"condition":5,"uniqueID":31,"sentence":"An online poker tournament ended suddenly when the computer cached in its chips."},
{"condition":5,"uniqueID":39,"sentence":"An electrician is a bright spark who knows what's watt."},
{"condition":5,"uniqueID":41,"sentence":"Boyscouts know which ropes to tie and what knot.  "},
{"condition":5,"uniqueID":49,"sentence":"You don't want to bee around a hive for too long."},
{"condition":5,"uniqueID":57,"sentence":"We spent some time looking for the celebrity before she realized she didn't want to idol."},
{"condition":5,"uniqueID":65,"sentence":"If you want to make it all the way to a tree farm you had better take a different root."},
{"condition":5,"uniqueID":70,"sentence":"It was an emotional wedding. Even the mother-in-law was in tiers."},
{"condition":5,"uniqueID":78,"sentence":"The young boy was admonished by his father. Apparently he had been knotty."},
{"condition":5,"uniqueID":86,"sentence":"My horse is so slow it hertz."},
{"condition":5,"uniqueID":94,"sentence":"Those who carry too many burdens start feeling pail."},
{"condition":5,"uniqueID":102,"sentence":"When their parrot was little they only got rest after son down."},
{"condition":5,"uniqueID":108,"sentence":"Bakers knead flour and milk together to make bread dough."},
{"condition":5,"uniqueID":116,"sentence":"I bought a new CD today in classical music."},
{"condition":5,"uniqueID":124,"sentence":"Our plane landed at the airport."},
{"condition":5,"uniqueID":132,"sentence":"These new shoes are hurting my feet."},
{"condition":5,"uniqueID":140,"sentence":"She covered the frame with gilt."},
{"condition":5,"uniqueID":150,"sentence":"We learned about how a cell works in biology."},
{"condition":5,"uniqueID":158,"sentence":"His heel was bruised from walking too much."},
{"condition":5,"uniqueID":166,"sentence":"Vegetarians don't like meat."},
{"condition":5,"uniqueID":172,"sentence":"Would you like some apple pie for dessert?"},
{"condition":5,"uniqueID":180,"sentence":"I believe in the principle of physics."},
{"condition":5,"uniqueID":188,"sentence":"What are the pros and cons of social networking sites?"},
{"condition":5,"uniqueID":196,"sentence":"Dealing with him is a waste of time."},
{"condition":5,"uniqueID":204,"sentence":"That family is so poor they cannot afford to buy food."},
{"condition":5,"uniqueID":214,"sentence":"I don't know the answer."},
{"condition":5,"uniqueID":222,"sentence":"The rules of this game are not fair."},
{"condition":5,"uniqueID":230,"sentence":"I woke up in the morning and the sun was shining."},
{"condition":5,"uniqueID":241,"sentence":"A new country decided to conduct a flag pole."},
{"condition":5,"uniqueID":249,"sentence":"To learn rope tricks you have to be taught."},
{"condition":5,"uniqueID":257,"sentence":"The actors had one great movie after another. They were on a roll."},
{"condition":5,"uniqueID":265,"sentence":"A man's home is his castle in a manner of speaking."},
{"condition":5,"uniqueID":273,"sentence":"Novice pirates make terrible singers because they cannot hit the high seas."},
{"condition":5,"uniqueID":283,"sentence":"Our pet is very dear to us."},
{"condition":5,"uniqueID":291,"sentence":"When I stayed at the hotel I made sure I didn't sleep in."},
{"condition":5,"uniqueID":299,"sentence":"All the birds in the parish were birds of prey."},
{"condition":5,"uniqueID":304,"sentence":"The indecisive customer could not choose either or."},
{"condition":5,"uniqueID":312,"sentence":"The professor got so mad he pulled his hair out."},
{"condition":5,"uniqueID":320,"sentence":"I saw a horror movie last night. It was the best damn movie I have ever seen."},
{"condition":5,"uniqueID":328,"sentence":"The intern wanted to say something but he was not allowed."},
{"condition":5,"uniqueID":336,"sentence":"To err is careless."},
{"condition":5,"uniqueID":348,"sentence":"Grease is a country in the the southern portion of Europe."},
{"condition":5,"uniqueID":356,"sentence":"He waved at me to say high."},
{"condition":5,"uniqueID":364,"sentence":"The little boy wanted to steel his friend's candy but decided not to."},
{"condition":5,"uniqueID":372,"sentence":"The king's rain ended and his heir took over."},
{"condition":5,"uniqueID":380,"sentence":"He used a raiser to shave his beard."},
{"condition":5,"uniqueID":382,"sentence":"We get our would from trees."},
{"condition":5,"uniqueID":390,"sentence":"Cars should break slowly."},
{"condition":5,"uniqueID":398,"sentence":"I hired a made to clean."},
{"condition":5,"uniqueID":406,"sentence":"That business made one million dollars in prophet last year."},
{"condition":5,"uniqueID":414,"sentence":"The sine on our store says the clothes boutique."},
{"condition":5,"uniqueID":422,"sentence":"There are seven daze in a week."},
{"condition":5,"uniqueID":430,"sentence":"He is very scared that he will dye of a heart attack. "},
{"condition":5,"uniqueID":438,"sentence":"We have thyme to have lunch before the meeting."},
{"condition":5,"uniqueID":448,"sentence":"The cheese grader slices the cheese."},
{"condition":5,"uniqueID":456,"sentence":"I picked some pretty flours that were growing among weeds."},
{"condition":5,"uniqueID":464,"sentence":"Nun of it made any sense."},
],
[
{"condition":6,"uniqueID":8,"sentence":"Did you know that donuts were first made in Greece?"},
{"condition":6,"uniqueID":16,"sentence":"A boy who instinctively waves at people has a natural hi."},
{"condition":6,"uniqueID":24,"sentence":"Thieves have muscles of steal."},
{"condition":6,"uniqueID":32,"sentence":"Britain is a wet place since the queen has had a long reign."},
{"condition":6,"uniqueID":40,"sentence":"When the mayor wanted to slash the budget he turned to a fund razor."},
{"condition":6,"uniqueID":42,"sentence":"If you could ask someone anything about trees what wood you ask?"},
{"condition":6,"uniqueID":50,"sentence":"You should run really fast but be careful not to brake anything."},
{"condition":6,"uniqueID":58,"sentence":"She didn't want to clean up but I maid her."},
{"condition":6,"uniqueID":71,"sentence":"A new country decided to conduct a gallup poll."},
{"condition":6,"uniqueID":79,"sentence":"To learn skateboard tricks you have to be taut."},
{"condition":6,"uniqueID":87,"sentence":"The directors had one great movie after another. They were on a role."},
{"condition":6,"uniqueID":95,"sentence":"A man's family is his anchor in a manor of speaking."},
{"condition":6,"uniqueID":103,"sentence":"Novice choristers make terrible singers because they cannot hit the high C's."},
{"condition":6,"uniqueID":109,"sentence":"The fisherman dipped the oar in the river."},
{"condition":6,"uniqueID":117,"sentence":"The hare ran rapidly through the fields."},
{"condition":6,"uniqueID":125,"sentence":"That beaver is building a dam with logs and sticks."},
{"condition":6,"uniqueID":133,"sentence":"The student read her poem aloud in class."},
{"condition":6,"uniqueID":141,"sentence":"Prince William is heir to the british throne."},
{"condition":6,"uniqueID":151,"sentence":"That scent is unpleasant."},
{"condition":6,"uniqueID":159,"sentence":"We sang a hymn in church."},
{"condition":6,"uniqueID":167,"sentence":"You need to reel in the fish."},
{"condition":6,"uniqueID":173,"sentence":"The company has a need for computer programmers."},
{"condition":6,"uniqueID":181,"sentence":"The seedy bar was full of drunken and unwashed people."},
{"condition":6,"uniqueID":189,"sentence":"She felt plain next to her beautiful sister."},
{"condition":6,"uniqueID":197,"sentence":"Passing that exam without studying was a real feat!"},
{"condition":6,"uniqueID":205,"sentence":"A jury decides the guilt or innocence of an accused person."},
{"condition":6,"uniqueID":215,"sentence":"I must sell my car for a good price."},
{"condition":6,"uniqueID":223,"sentence":"It just takes time for wounds to heal."},
{"condition":6,"uniqueID":231,"sentence":"The two pen pals were finally able to meet."},
{"condition":6,"uniqueID":242,"sentence":"At some executive meetings there is a chairman of the board."},
{"condition":6,"uniqueID":250,"sentence":"I dropped out of communism class because of lousy marks."},
{"condition":6,"uniqueID":258,"sentence":"The man put his name on the neck of his shirt so he would have caller ID."},
{"condition":6,"uniqueID":266,"sentence":"An online poker tournament ended suddenly when the computer cashed in its chips."},
{"condition":6,"uniqueID":274,"sentence":"An electrician is a bright spark who knows what's what."},
{"condition":6,"uniqueID":276,"sentence":"Boyscouts know which ropes to tie and what not.  "},
{"condition":6,"uniqueID":284,"sentence":"You don't want to be around a hive for too long."},
{"condition":6,"uniqueID":292,"sentence":"We spent some time looking for the celebrity before she realized she didn't want to idle."},
{"condition":6,"uniqueID":300,"sentence":"If you want to make it all the way to a tree farm you had better take a different route."},
{"condition":6,"uniqueID":305,"sentence":"It was an emotional wedding. Even the mother-in-law was in tears."},
{"condition":6,"uniqueID":313,"sentence":"The young boy was admonished by his father. Apparently he had been naughty."},
{"condition":6,"uniqueID":321,"sentence":"My horse is so slow it hurts."},
{"condition":6,"uniqueID":329,"sentence":"Those who carry too many burdens start feeling pale."},
{"condition":6,"uniqueID":337,"sentence":"When their parrot was little they only got rest after sun down."},
{"condition":6,"uniqueID":341,"sentence":"Daniel is a biblical profit known for interpreting dreams."},
{"condition":6,"uniqueID":349,"sentence":"In mathematics the sign function is a function of an angle."},
{"condition":6,"uniqueID":357,"sentence":"She was in a days after learning the bad news."},
{"condition":6,"uniqueID":365,"sentence":"Some people do not like to die their hair."},
{"condition":6,"uniqueID":373,"sentence":"One of my favorite meals is chicken in a creamy sauce flavored with time."},
{"condition":6,"uniqueID":383,"sentence":"A grater was hired to score all of the tests."},
{"condition":6,"uniqueID":391,"sentence":"We use different kinds of flowers in baking."},
{"condition":6,"uniqueID":399,"sentence":"The none was very pious and kind."},
{"condition":6,"uniqueID":407,"sentence":"Would you like some apple pi for dessert?"},
{"condition":6,"uniqueID":415,"sentence":"I believe in the principal of physics."},
{"condition":6,"uniqueID":423,"sentence":"What are the prose and cons of social networking sites?"},
{"condition":6,"uniqueID":431,"sentence":"Dealing with him is a waist of time."},
{"condition":6,"uniqueID":439,"sentence":"That family is so pore they cannot afford to buy food."},
{"condition":6,"uniqueID":449,"sentence":"Eye don't know the answer."},
{"condition":6,"uniqueID":457,"sentence":"The rules of this game are not fare."},
{"condition":6,"uniqueID":465,"sentence":"I woke up in the mourning and the sun was shining."},
],
[
{"condition":7,"uniqueID":1,"sentence":"Atheism is a non prophet organization."},
{"condition":7,"uniqueID":9,"sentence":"I always prayed before my trigonometry tests. I was hoping for a sine from above."},
{"condition":7,"uniqueID":17,"sentence":"A teacher having a tough time longs for the end of the school daze."},
{"condition":7,"uniqueID":25,"sentence":"When an actress saw her first strands of gray hair she thought she would dye."},
{"condition":7,"uniqueID":33,"sentence":"Herb gardeners who work extra get thyme and a half."},
{"condition":7,"uniqueID":43,"sentence":"The person that Colby Jack and Cheddar Jr. were most afraid of in school was the cheese grader."},
{"condition":7,"uniqueID":51,"sentence":"The pastry chef brought his girlfriend flours on Valentine's Day."},
{"condition":7,"uniqueID":59,"sentence":"When the new church opened nun of us cared."},
{"condition":7,"uniqueID":72,"sentence":"At some executive galas there is a chairman of the bored."},
{"condition":7,"uniqueID":80,"sentence":"I dropped out of math class because of lousy Marx."},
{"condition":7,"uniqueID":88,"sentence":"The man put his name on the pocket of his shirt so he would have collar ID."},
{"condition":7,"uniqueID":96,"sentence":"An online poker tournament ended suddenly when the competitor cached in his chips."},
{"condition":7,"uniqueID":104,"sentence":"An optometrist is a bright spark who knows what's watt."},
{"condition":7,"uniqueID":110,"sentence":"Boxes are stacked in tiers in the warehouse."},
{"condition":7,"uniqueID":118,"sentence":"That cabin is made of knotty pine."},
{"condition":7,"uniqueID":126,"sentence":"This computer has a processing speed of thirty-three mega hertz."},
{"condition":7,"uniqueID":134,"sentence":"A worker filled a pail with water to clean the floor."},
{"condition":7,"uniqueID":142,"sentence":"They have a son and a daughter."},
{"condition":7,"uniqueID":152,"sentence":"I took a course in school."},
{"condition":7,"uniqueID":160,"sentence":"I answered with a string of no's."},
{"condition":7,"uniqueID":168,"sentence":"She ate a pear and two apples."},
{"condition":7,"uniqueID":174,"sentence":"Take care of your car or else you will have problems."},
{"condition":7,"uniqueID":182,"sentence":"Most people have lots of hair on their heads."},
{"condition":7,"uniqueID":190,"sentence":"I do not give a damn what you say."},
{"condition":7,"uniqueID":198,"sentence":"We allowed our son to use the family car."},
{"condition":7,"uniqueID":206,"sentence":"It is better to err on the side of being too safe."},
{"condition":7,"uniqueID":216,"sentence":"He is so stingy that he would not even let me borrow a cent."},
{"condition":7,"uniqueID":224,"sentence":"John likes Sarah but she doesn't like him back."},
{"condition":7,"uniqueID":232,"sentence":"That diamond is not real; it is just a very good counterfeit. "},
{"condition":7,"uniqueID":243,"sentence":"Did you know that donuts were first made in grease?"},
{"condition":7,"uniqueID":251,"sentence":"A boy who instinctively waves at people has a natural high."},
{"condition":7,"uniqueID":259,"sentence":"Thieves have muscles of steel."},
{"condition":7,"uniqueID":267,"sentence":"Britain is a wet place since the queen has had a long rain."},
{"condition":7,"uniqueID":275,"sentence":"When the mayor wanted to slash the budget he turned to a fund raiser."},
{"condition":7,"uniqueID":277,"sentence":"If you could ask someone anything about trees what would you ask?"},
{"condition":7,"uniqueID":285,"sentence":"You should run really fast but be careful not to break anything."},
{"condition":7,"uniqueID":293,"sentence":"She didn't want to clean up but I made her."},
{"condition":7,"uniqueID":306,"sentence":"A new country decided to conduct a gallup pole."},
{"condition":7,"uniqueID":314,"sentence":"To learn skateboard tricks you have to be taught."},
{"condition":7,"uniqueID":322,"sentence":"The directors had one great movie after another. They were on a roll."},
{"condition":7,"uniqueID":330,"sentence":"A man's family is his anchor in a manor of speaking."},
{"condition":7,"uniqueID":338,"sentence":"Novice choristers make terrible singers because they cannot hit the high sea's."},
{"condition":7,"uniqueID":342,"sentence":"He can recite the number pie up to ten decimal places."},
{"condition":7,"uniqueID":350,"sentence":"Ms. Wu is the principle of our local high school."},
{"condition":7,"uniqueID":358,"sentence":"Novels and essays are written in pros."},
{"condition":7,"uniqueID":366,"sentence":"She must have a small waste; look how tiny her belt is!"},
{"condition":7,"uniqueID":374,"sentence":"A poor is a very small opening on the surface of your skin."},
{"condition":7,"uniqueID":384,"sentence":"I was poked in the I."},
{"condition":7,"uniqueID":392,"sentence":"The fair had to be paid."},
{"condition":7,"uniqueID":400,"sentence":"We were in morning after our loved one died."},
{"condition":7,"uniqueID":408,"sentence":"The company has a knead for computer programmers."},
{"condition":7,"uniqueID":416,"sentence":"The CD bar was full of drunken and unwashed people."},
{"condition":7,"uniqueID":424,"sentence":"She felt plane next to her beautiful sister."},
{"condition":7,"uniqueID":432,"sentence":"Passing that exam without studying was a real feet!"},
{"condition":7,"uniqueID":440,"sentence":"A jury decides the gilt or innocence of an accused person."},
{"condition":7,"uniqueID":450,"sentence":"I must cell my car for a good price."},
{"condition":7,"uniqueID":458,"sentence":"It just takes time for wounds to heel."},
{"condition":7,"uniqueID":466,"sentence":"The two pen pals were finally able to meat."},
],
[
{"condition":8,"uniqueID":2,"sentence":"I get my large circumference from too much pi."},
{"condition":8,"uniqueID":10,"sentence":"It was not school john disliked. It was just the principal of it."},
{"condition":8,"uniqueID":18,"sentence":"Authors in jail have their prose and cons."},
{"condition":8,"uniqueID":26,"sentence":"A cardboard belt would be a waist of paper."},
{"condition":8,"uniqueID":34,"sentence":"If you say you have bad skin I would say that was a pore excuse."},
{"condition":8,"uniqueID":44,"sentence":"I'm blind so eye can't see."},
{"condition":8,"uniqueID":52,"sentence":"The driver at the toll insisted it wasn't fare."},
{"condition":8,"uniqueID":60,"sentence":"He cried when he woke up. It was mourning."},
{"condition":8,"uniqueID":73,"sentence":"Did you know that dolmas were first made in Greece?"},
{"condition":8,"uniqueID":81,"sentence":"A boy who instinctively takes risks has a natural hi."},
{"condition":8,"uniqueID":89,"sentence":"Bodybuilders have muscles of steal."},
{"condition":8,"uniqueID":97,"sentence":"Britain is a wet place since the autumn has had a long reign."},
{"condition":8,"uniqueID":105,"sentence":"When the mayor wanted to balance the budget he turned to a fund razor."},
{"condition":8,"uniqueID":111,"sentence":"Pollsters conducted a poll on the popularity of the political candidates."},
{"condition":8,"uniqueID":119,"sentence":"The clothesline hangs taut between two poles."},
{"condition":8,"uniqueID":127,"sentence":"She plays the leading role in a television show."},
{"condition":8,"uniqueID":135,"sentence":"Those wealthy people live in a huge manor."},
{"condition":8,"uniqueID":143,"sentence":"It is hard even for a soprano to sing the high C's."},
{"condition":8,"uniqueID":153,"sentence":"There are deer in the forest."},
{"condition":8,"uniqueID":161,"sentence":"We stayed at an inn."},
{"condition":8,"uniqueID":169,"sentence":"It is customary for Christians to pray before bed."},
{"condition":8,"uniqueID":175,"sentence":"Tears ran down her cheeks as she watched a sad movie."},
{"condition":8,"uniqueID":183,"sentence":"That boy is a naughty child."},
{"condition":8,"uniqueID":191,"sentence":"I fell and now my leg hurts."},
{"condition":8,"uniqueID":199,"sentence":"She looks pale and sick."},
{"condition":8,"uniqueID":207,"sentence":"The sun rises every morning and sets every evening."},
{"condition":8,"uniqueID":217,"sentence":"You have very coarse hair."},
{"condition":8,"uniqueID":225,"sentence":"He knows almost every word in the dictionary."},
{"condition":8,"uniqueID":233,"sentence":"I have a pair of matching socks."},
{"condition":8,"uniqueID":236,"sentence":"Atheism is a non prophet organization."},
{"condition":8,"uniqueID":244,"sentence":"I always prayed before my trigonometry tests. I was hoping for a sign from above."},
{"condition":8,"uniqueID":252,"sentence":"A teacher having a tough time longs for the end of the school days."},
{"condition":8,"uniqueID":260,"sentence":"When an actress saw her first strands of gray hair she thought she would die."},
{"condition":8,"uniqueID":268,"sentence":"Herb gardeners who work extra get time and a half."},
{"condition":8,"uniqueID":278,"sentence":"The person that Colby Jack and Cheddar Jr. were most afraid of in school was the cheese grater."},
{"condition":8,"uniqueID":286,"sentence":"The pastry chef brought his girlfriend flowers on Valentine's Day."},
{"condition":8,"uniqueID":294,"sentence":"When the new church opened none of us cared."},
{"condition":8,"uniqueID":307,"sentence":"At some executive galas there is a chairman of the board."},
{"condition":8,"uniqueID":315,"sentence":"I dropped out of math class because of lousy marks."},
{"condition":8,"uniqueID":323,"sentence":"The man put his name on the pocket of his shirt so he would have caller ID."},
{"condition":8,"uniqueID":331,"sentence":"An online poker tournament ended suddenly when the competitor cashed in his chips."},
{"condition":8,"uniqueID":339,"sentence":"An optometrist is a bright spark who knows what's what."},
{"condition":8,"uniqueID":343,"sentence":"Bakers need flour and milk together to make bread dough."},
{"condition":8,"uniqueID":351,"sentence":"I bought a new seedy today in classical music."},
{"condition":8,"uniqueID":359,"sentence":"Our plain landed at the airport."},
{"condition":8,"uniqueID":367,"sentence":"These new shoes are hurting my feat."},
{"condition":8,"uniqueID":375,"sentence":"She covered the frame with guilt."},
{"condition":8,"uniqueID":385,"sentence":"We learned about how a sell works in biology."},
{"condition":8,"uniqueID":393,"sentence":"His heal was bruised from walking too much."},
{"condition":8,"uniqueID":401,"sentence":"Vegetarians don't like meet."},
{"condition":8,"uniqueID":409,"sentence":"Take care of your car oar else you will have problems."},
{"condition":8,"uniqueID":417,"sentence":"Most people have lots of hare on their heads."},
{"condition":8,"uniqueID":425,"sentence":"I do not give a dam what you say."},
{"condition":8,"uniqueID":433,"sentence":"We aloud our son to use the family car."},
{"condition":8,"uniqueID":441,"sentence":"It is better to heir on the side of being too safe."},
{"condition":8,"uniqueID":451,"sentence":"He is so stingy that he would not even let me borrow a scent."},
{"condition":8,"uniqueID":459,"sentence":"John likes Sarah but she doesn't like hymn back."},
{"condition":8,"uniqueID":467,"sentence":"That diamond is not reel; it is just a very good counterfeit."},
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
	condition: chooseCondition,
	
	// An array of subjects' responses to each trial (NOTE: in the order in which
	// you initially listed the trials, not in the order in which they appeared)
    funninessResults: new Array(numTrials),
    sensiblenessResults: new Array(numTrials),
    
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
        var gen = getRadioCheckedValue(2, "genderButton");
        var ag = document.age.ageRange.value;
        var lan = document.language.nativeLanguage.value;
        var comm = document.comments.input.value;
        experiment.gender = gen;
        experiment.age = ag;
        experiment.nativeLanguage = lan;
        experiment.comments = comm;
        clearForm(document.forms[2]);
        clearForm(document.forms[3]);
        clearForm(document.forms[4]);
        clearForm(document.forms[5]);
        
        // Show finished slide
        showSlide("finished");
        setTimeout(function() {turk.submit(experiment) }, 1500);
    },
    // Goes to next trial
    next: function() {
    
    // If this is not the first trial, record variables
    	if (numComplete > 0) {
    		var funniness = parseInt(getRadioCheckedValue(0, "funniness"));
    		var sensibleness = parseInt(getRadioCheckedValue(1, "sensibleness"));
        	experiment.funninessResults[currentTrialNum] = funniness;
        	experiment.sensiblenessResults[currentTrialNum] = sensibleness;
        	experiment.orders[currentTrialNum] = numComplete;
        	experiment.uniqueIDs[currentTrialNum] = trial.uniqueID;
        	clearForm(document.funninessForm);
        	clearForm(document.sensiblenessForm);
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
    		$("#condition").html(experiment.condition);
    		currentTrialNum = shuffledOrder[numComplete];
    		trial = allTrialOrders[currentTrialNum];
        	showSlide("stage");
        	
        	$("#sentence").html(trial.sentence);
        	
        	numComplete++;
        }
    }
}


