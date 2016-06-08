//business logic
// var isnumbers= parseInt(translate);
// var includesNumbers = function(isnumbers){
//
//   if (isnumbers){
//   return true;
// }
// };
var arrayForstring=[]
var stringHasNumbers= function(translate){
  var isNumber;
  var isLetter;
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

//front-end logic
$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();
    var translate = $("input#translator").val();

    if (stringHasNumbers(translate)){
      $("p").text("Please enter a word only")
    }
    else{
      $(".translator").text(translate)
      $(".piglatin").text(translate);

    }


  });
});
