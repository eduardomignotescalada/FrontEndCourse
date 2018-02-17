function checkPalindrome(inputString) {
    var reversedinputString = inputString.split("").reverse().join("");
    console.log(inputString);
    console.log(reversedinputString);
    Boolean(inputString == reversedinputString);
}
