// UTILITY FUNCTIONS

function getRandomFromArray(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function getAverage(arr) {
	let sum = 0.0;
	for(let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
}

function getModifier(score) {
	if(score == 18) {
		return 3;
	} else if(score >= 16) {
		return +2;
	} else if(score >= 13) {
		return +1;
	} else if(score >= 9) {
		return 0;
	} else if(score >= 6) {
		return -1;
	} else if(score >= 4) {
		return -2;
	} else if(score == 3) {
		return -3;
	} else {
		console.error(`Invalid score! ${score}`);
	}
}

function getModifierString(mod) {
	return mod > 0 ? "+" + mod : "" + mod;
}

function writeLabel(id, name, value) {
	document.getElementById(id).innerHTML = `${name}: ${value}`;
}

export {getRandomFromArray, getAverage, getModifier, getModifierString, writeLabel};
