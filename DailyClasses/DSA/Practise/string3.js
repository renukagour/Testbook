function truncate(str, no_words) {
    return str.split(" ").splice(0, no_words).join(" ");
}
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));

function remove_first_occurrence(str, searchstr) {
    var index = str.indexOf(searchstr);
    if (index === -1) {
        return str;
    }
    return str.slice(0, index) + str.slice(index + searchstr.length);
}
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

// 3
function search_word(text, word) {
    var x = 0, y = 0;
    for (i = 0; i < text.length; i++) {
        if (text[i] == word[0]) {
            for (j = i; j < i + word.length; j++) {
                if (text[j] == word[j - i]) {
                    y++;
                }
                if (y == word.length) {
                    x++;
                }
            }
            y = 0;
        }
    }
    return "'" + word + "' was found " + x + " times.";
}
console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));

// 4
const test = (text) => {
    if (typeof text !== 'string') {
        return 'It must be a string.'
    }
    const pattern = /^[a-z]*$/
    return pattern.test(text)
}
console.log(test('JavaScriptExercises'))
console.log(test('javascriptexercises'))
console.log(test(12356))
