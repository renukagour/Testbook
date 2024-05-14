is_Blank = function (input) {
    if (input.length === 0)
        return true;
    else
        return false;
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));

string_to_array = function (str) {
    return str.split(" ");
};
console.log(string_to_array("Hello World"));

function isUpperCaseAt(str, index) {
    return str.charAt(index).toUpperCase() === str.charAt(index);
}
console.log(isUpperCaseAt('JavaScript', 0));

abbrev_name = function (str1) {
    var split_names = str1.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    return split_names[0];
};
console.log(abbrev_name("Virat Kohli"));


function test(text) {
    if (text.length === 0) {
        return 'String should not be empty!'
    }
    if (typeof text !== 'string') {
        return 'It must be a string.'
    }
    
    text = " " + text;
    var reverse_word = "";
    var word = "";
    for (var i = text.length - 1; i >= 0; i--) {
        if (text[i] === ' ') {
            reverse_word = word + " " + reverse_word;
            word = "";
          
        }
        else {
            word += text[i];
            // console.log(word);
        }
    }
    return reverse_word
}
console.log(test("abc"))
console.log(test("Hello World"))
console.log(test(1234))
