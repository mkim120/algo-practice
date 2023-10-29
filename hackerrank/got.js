/*
  Game of Thrones - I
  https://www.hackerrank.com/challenges/game-of-thrones/problem
  
  Dothraki are planning an attack to usurp King Robert's throne. King Robert learns of this conspiracy from Raven and plans to lock the single door through which the enemy can enter his kingdom.
  But, to lock the door he needs a key that is an anagram of a palindrome. He starts to go through his box of strings, checking to see if they can be rearranged into a palindrome. 
  Given a string, determine if it can be rearranged into a palindrome. Return the string YES or NO.

  Sample Input 0: aaabbbb
  Sample Output 0: YES
  Explanation 0: A palindromic permutation of the given string is bbaaabb.
  
  Sample Input 1: cdefghmnopqrstuvw
  Sample Output 1: NO
  Explanation 1: Palindromes longer than 1 character are made up of pairs of characters. There are none here.
  
  Sample Input 2: cdcdcdcdeeeef
  Sample Output 2: YES
  Explanation 2: An example palindrome from the string: ddcceefeeccdd.
*/

/*
    Pseudocode:
    - sort string alphabetically
    - if duplicates are found, proceed with checking for pairs
    - if no pairs exist, return NO
    - if only pairs exist, return YES (pairs exist if number of same characters is EVEN)
    - if only a single character remains after the characters are paired, return YES
    - if mulitple non-matching characters exist after pairing, return NO
*/

function gameOfThrones(s) {
    // Write your code here
    s = s.split("").sort(); // convert string to array and sort alphabetically
    //console.log(s);
    if (s[0] === s[1]) {
        // count duplicate values
        let counts = {};
        s.forEach(function (i) { 
            counts[i] = (counts[i] || 0) + 1; 
            //console.log(counts[i]);
        });
        //console.log(counts);
        let oddCounter = 0; // count number of odd numbered duplicates 
        for (let key in counts) {
            //console.log(counts[key]);
            if (counts[key] % 2 !== 0) {
                oddCounter++;
            }
        }
        console.log(oddCounter);
        if (oddCounter > 1) {
            return "NO";
        } else {
            return "YES";
        }
    } else {
        return "NO";
    }
}

/*
  Post-attempt thoughts:
  After I completed the pseudocode, the actual implementation still proved to be difficult. 
  While I did not research the answer to the actual problem, I did have to look up how to implement some of what I wanted to do that I laid out in the pseudocode.
  Particularly, the duplicate value count and the way to count the number of odd duplicates were difficult to understand.
*/
