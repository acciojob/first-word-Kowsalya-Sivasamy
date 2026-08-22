function firstWord(str) {
	if (!str) return '';
    
    const trimmedStr = str.trimStart();
    
    const spaceIndex = trimmedStr.indexOf(' ');
    
    if (spaceIndex === -1) {
        return trimmedStr;
    }
    
    return trimmedStr.slice(0, spaceIndex);
}


// Do not change the code below

const str = prompt("Enter String:");
alert(firstWord(s));
