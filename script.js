function firstWord(s) {
let word ="";
for(let i =0 ; i<s.length ; i++){
	if(s[i]==" "){
		return word;
	}
	else{
		word+=s[i];
	}
}
}
	


// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
