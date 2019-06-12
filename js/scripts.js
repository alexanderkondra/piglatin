$("document").ready (function(){
  $(".pigLatinForm").submit(function(event){
    event.preventDefault();
    var sentence = $("#sentenceInput").val();
    var convertedSentence = convertSentence(sentence);
    convertedSentence.forEach(function(word){
      $("#result").append(word + " ");
    })
  });
});

// function checkWordForVowel(checkWord){

//   result = checkWord.split('');
//   for(var i = 0; i < result.length; i++){
//     if(vowel.includes(result[i])){
//       console.log("fizz");
//     }
//     else{
//       console.log("buzz");
//     }
//   }
// }
// console.log(checkWordForVowel("asdflkjasdf"));

function convertSentence(sentence){
  //Split the sentence into an array of words
  //"This is a sentence" becomes ["This", "is", "a", "sentence"]
  var words = sentence.split(" ");
  var convertedSentence = [];

  for(var i = 0; i < words.length; ++i){
    var word = words[i];
    var convertedWord = convertWord(word);
    convertedSentence.push(convertedWord);
  }

  return convertedSentence;
}

var vowels = ['a','i','e','u','o' ];

function convertWord(word){
  var chars = word.split("")
  if(vowels.includes(word.charAt(0))){
    return word + "way";
  } else {
      var index = 0
      while(index < word.length && !vowels.includes(word[index])){
        ++index;
      }
      return chars.slice(index, chars.length).join("") + chars.slice(0, index).join("") + "ay";
  }
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // function checkYear(year){
// //   if(year%400 === 0)
// //     return true
// //   else if(year%100 ===0)
// //     return false
// //   else if (year%4 ===0)
// //     return true
// //   else
// //     return false
// //
// //   // //same thing
// //   //
// //   // return year%4 === 0;
// // }
// //
// // console.log(checkYear(1904));
// //
// // $("document").ready(function(){
// //   $(".inputYear").submit(function(event){
// //     event.preventDefault();
// //
// //     var year = $("#inputOne").val();
// //     var result = checkYear(year);
// //
// //     $(".result").show()
// //     $("#year").text(year)
// //     if(!result){
// //       console.log("here")
// //       $("#notAYear").text(" not ");
// //     }
// //     else{
// //       $("#notAYear").hide();
// //     }
// //   })
// // })
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// function latinConvert(str){
//   var vowels = ['a','e','i','o','u'],
//   result = str.split('');
//   if(vowels.includes(str.charAt(0))){
//     return str += 'way';
//
//
//   }else {
//     for(var i = 0; i < str.length; i++){
//       if(!vowels.includes(str[i])){
//         result.push(result.shift());
//       } else {
//         result.push('ay');
//         return result.join('');
