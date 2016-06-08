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
var vowels;
var transVowel
var pigTranslate = function(translate){
   beginWithVowel= translate[0];
  vowels = ['a', 'e', 'i', 'o', 'u'];
  for (i=0; i<= vowels.length; i++){
    if (vowels[i]=== beginWithVowel){
      transVowel=  translate + "ay";
    }
    


  }
  return transVowel;
}
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
