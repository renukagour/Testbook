var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
// prompt("Enter a name to search for: ");
// var name = readline();
var name=prompt("Enter a name to search for: ");
var position = names.indexOf(name);
if (position >= 0) {
    9
    print("Found " + name + " at position " + position);
} else {
    print(name + " not found in array.");
}

