// DICE FUNCTIONS

function roll3d6() {
	return rollDice(3, 6);
}

function roll4d6dl() {
	let rolls = [];
	for(let i = 0; i < 4; i++) {
		rolls.push(rollDice(1, 6));
	}

	let lowest = rolls[0];
	let lowestIdx = 0;
	for(let i = 0; i < rolls.length; i++) {
		if(rolls[i] < lowest) {
			lowest = rolls[i];
			lowestIdx = i;
		}
	}
	rolls.splice(lowestIdx, 1);
	let total = 0;
	for(let i = 0; i < rolls.length; i++) {
		total += rolls[i];
	}
	return total;

}

function rollDice(count, sides) {
	let total = 0;
	for(let i = 0; i < count; i++) {
		total += Math.floor(1 + Math.random() * sides);
	}
	return total;
}

export {roll3d6, roll4d6dl, rollDice};
