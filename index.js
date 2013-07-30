/*
******* index.js ************
Description: A helper javascript model for encrypting and decrypting the string
Author: Aveg Patekar
version: 1.0
website: www.avegpatekar.webs.com
*/
var keyLower = "qwertyuiopasdfghjklzxcvbnm";
var keyUpper = "QWERTYUIOPASDFGHJKLZXCVBNM";
var txtMessage = document.getElementById("txtMessage");

//Encrypt button click handler
$("#btnEncrypt").click(function () {
    var msg = $("#txtMessage").val();
    $("#txtResult").val(encrypt(msg));
});

//Decrypt button click handler
$("#btnDecrypt").click(function () {
    var cypher = $("#txtMessage").val();
    $("#txtResult").val(decrypt(cypher));
});


//method to encrypt string
var encrypt = function (message) {
    var cypherText = "";
    var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var index = null;
    var ch;

    for (var i = 0; i < message.length; i++) {
        ch = message.charAt(i);

        //checks character case whether lowercase or uppercase 
        var isUpper = ch == ch.toUpperCase();
        isUpper ? index = upperAlphabet.indexOf(ch) : index = lowerAlphabet.indexOf(ch);

        //   if it's not a letter, then add it as it is
        if (index == -1) {
            cypherText = cypherText + ch;
        }
        else {

            // find the corresponding letter in key and add
            isUpper ? cypherText = cypherText + keyUpper.charAt(index) : cypherText = cypherText + keyLower.charAt(index);
        }
    }

    return cypherText;
};

var decrypt = function (cypher) {
    var message = "";
    var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var index = null;
    var ch;

    for (var i = 0; i < cypher.length; i++) {
        ch = cypher.charAt(i);

        //checks character case whether lowercase or uppercase 
        var isUpper = ch == ch.toUpperCase();
        isUpper ? index = keyUpper.indexOf(ch) : index = keyLower.indexOf(ch);

        //   if it's not a letter, then add it as it is
        if (index == -1) {
            message = message + ch;
        }
        else {

            // find the corresponding letter in key and add
            isUpper ? message = message + upperAlphabet.charAt(index) : message = message + lowerAlphabet.charAt(index);
        }
    }

    return message;
};
