//business logic
// var isnumbers= parseInt(translate);
// var includesNumbers = function(isnumbers){
//
//   if (isnumbers){
//   return true;
// }
// };
var arrayForstring;
var stringHasNumbers= function(translate){
  var isNumber;
   arrayForstring= translate.split("");
  arrayForstring.forEach(function(char){
    if (parseInt(char)){
      isNumber = true;
    } else {
      isNumber = false;
    }
  });
  return isNumber;

};
var beginWithVowel;
var doubleconsonant;
var vowels;
var translation;
var pigTranslate = function(translate){
  var firstLetter= translate[0];
  var twoLetter= translate[0] + translate[1];
  var firstvowel;
  vowels = ['a', 'e', 'i', 'o', 'u'];
  consonants=['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
  for (var i =translate.length; i>=0  ; i--){
    for(var j =0; j< vowels.length; j++){
       if (vowels[j] === translate[i]){
         firstvowel = i;
         
         //break;
       }
     }
  }

  var firstConsonants = translate.slice(0, firstvowel);
  translate =  translate.slice(firstvowel, translate.length);
  translation = translate + firstConsonants + "ay";
  return translation;
};
//front-end logic
$(document).ready(function(){
  $("form#pig-latin").submit(function(event){

    event.preventDefault();
    var translate = $("input#translator").val();

    if (stringHasNumbers(translate)){
      $("p").text("Please enter a word only")
    }
    else{
      $("p").text(pigTranslate(translate));
    }

    // $(".translator").text(translate)
    // $(".piglatin").text(translate);
  });
});
