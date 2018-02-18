function checkPalindrome(inputString) {
    var reversedinputString = inputString.split("").reverse().join("");
    console.log(inputString);
    console.log(reversedinputString);
    if (inputString == reversedinputString) {
        return true;
        else {
            return false;
        }
    }
}
