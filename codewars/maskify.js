/*
  Credit Card Mask
  https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

  Description:
  Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. 
  However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

  Your task is to write a function maskify, which changes all but the last four characters into '#'.
  
  Examples (input --> output):
  "4556364607935616" --> "############5616"
       "64607935616" -->      "#######5616"
                 "1" -->                "1"
                  "" -->                 ""
  
  // "What was the name of your first pet?"
  "Skippy" --> "##ippy"
  "Nananananananananananananananana Batman!" --> "####################################man!"
*/

/*
  Pseudocode:
  if input length > 5 {
    - let (length - 4) be the number of mask characters needed
    - create string of # mask characters based on input length 
    - get the last 4 digits
    - append mask characters to last 4 digits
    - return result
  } else {
    - return input
  }
*/

// return masked string
function maskify(cc) {
  if (cc.length >= 5) { 
    let maskNum = cc.length - 4;
    let maskChars = "";
    for (i = 0; i < maskNum; i++) { // loop until i < maskNum since if maskNum = 5, i loops from 0 to 4 which is 5 characters
      maskChars += "#";
    }
    //console.log(maskChars);
    let lastFour = cc.slice(-4); // 
    //console.log(lastFour);
    return maskChars + lastFour; 
  } else {
    return cc;
  }
}

/*
  Post-attempt thoughts:
  - I thought about how I could replace the mask characters "directly" without any loops before the last 4 characters but wasn't sure how to.
  - I was onto something with the splice but didn't consider the replace method with regex.
  
  function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }

  Regex:
  /. - Any char except new line.
  /g - Global replace. Replace all instances of the matched string in the provided text.
*/
