// Implement a function to check if a given string is a palindrome.

function isPalindrome(s, i){
    if(i > s.length/2){
        return true;
    }
    return s[i] == s[s.length-i-1] && isPalindrome(s, i+1);
}
let str = "geeg";
let ans = isPalindrome(str, 0);
if(ans == true){
    console.log("String is Palindrome");
}else{
    console.log("String is not palindrome");
}

