$(document).ready(function(){
  let myWords = [];
  let pigWords = [];
  const vowelArr = ['a', 'e', 'i', 'o', 'u'];
  const vowelArrY = ['a', 'e', 'i', 'o', 'u', 'y'];

  $('#plForm').submit(function(event){
    event.preventDefault();
    arrayReset();
    var inputSentence = $('#myString').val();
    myWords = inputSentence.split(' ');
    var n = myWords.length;
    console.log(myWords);
    console.log(n);
    changeWords(myWords, n);
    console.log(pigWords);

  });
  function changeWords(myArr, len){
    var vowelFlag = false;
    console.log('changeWords is being called for the array [' + myArr + "], which has a length of " + len);
    for(var i = 0; i < len; i++){
      var pigWord;
      vowelFlag = checkVowel(myArr[i]);
      if(vowelFlag){
        pigWord = vowelLogic(myArr[i]);
        console.log('pigWord for case vowel is ' + pigWord);
        pigWords[i] = pigWord;
      }else{
        pigWord = consonantLogic(myArr[i]);
        console.log('pigWord for case consonant is ' + pigWord);
        pigWords[i] = pigWord;
      }
    }
  };
  function checkVowel(myStr){
    console.log('checkVowel is being called for string ' + myStr);
    var isVowel = false;
    var firstChar = myStr.substring(0,1);
    for(var i = 0; i < vowelArr.length; i++ ){
      if(firstChar === vowelArr[i]){
        isVowel = true;
        break;
      }
    }
    console.log("isVowel is " + isVowel);
    return isVowel;
  };
  function checkVowelChar(myChar){
    var isVowel = false;
    for(var i = 0; i < vowelArrY.length; i++){
      if(myChar === vowelArrY[i]){
        isVowel = true;
        break;
      }
    }
    return isVowel;
  };
  function vowelLogic(myStr){
    var pigStr;
    console.log('vowelLogic is being called for the string ' + myStr);
    pigStr = myStr + 'way';
    return pigStr;
  };
  function qCheck(myChar){
    var isQ = false;
    if(myChar === 'q' || myChar === 'Q'){
      isQ = true;
    }
    return isQ;
  };
  function consonantLogic(myStr){
     var consBlock = '';
     var isVowel = false;
     var isQ = false;
     var consBlockLen = 0;
     var answerStr = '';
     var ending = 'ay';
     for(var i = 0; i < myStr.length; i++){
       isVowel = checkVowelChar(myStr[i]);
       isQ = qCheck(myStr[i]);
       if(isQ){
         consBlock += (myStr[i] + myStr[i + 1]);
         consBlockLen += 2;
         break;
       }
       if(!isVowel){
         consBlock += myStr[i];
         consBlockLen++;
       }else{
         break;
       }
     }
     myStr = myStr.substring(consBlockLen);
     answerStr += myStr;
     answerStr += consBlock;
     answerStr += ending;
     return answerStr;
  };
  function arrayReset(){
    myWords = [];
    pigWords = [];
    console.log('Arrays have been reset!');
  }
});
