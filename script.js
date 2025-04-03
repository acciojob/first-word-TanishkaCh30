function firstWord(s) {
s = s.trim(); // Remove leading and trailing spaces
    let index = s.indexOf(" "); // Find the first space
    return index === -1 ? s : s.slice(0, index);
	


// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
