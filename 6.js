// 6) Проверить является ли строка палиндромом.
function palindrome(str) {
  //lowercase the string and use the RegExp to remove unwanted characters from it
  var re = /[\W_]/g;

  var lowRegStr = str.toLowerCase().replace(re, '');
  //   use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}
palindrome('A man, a plan, a canal. Panama');
//true
palindrome('notapalindrome');
//false;
