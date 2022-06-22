import {roll3d6, roll4d6dl, rollDice} from './dice.js';
import {getRandomFromArray, getAverage, getModifier, getModifierString, writeLabel} from './utility.js';
import {randInventory, randName, randNoble, randClergy, randMerchant, 
	randGovtOfficial, randSkilledWorker, randParentOccupation, randGuardian, 
	randMilitaryService, randCrime, randReligiousExperience, randVice, 
	randMagicalOccurance, randVirtue, randYoungAdulthood, randUpbringing, 
	randRelative, randNoun, randOtherService} from './generators.js';

function buildChar() {
	// randomizes a character and returns it as a json object
	// param: None
	// returns: JSON Object representing character
	let rollMethodSelector = document.getElementById("method");
	let rollMethodChosen = rollMethodSelector.options[rollMethodSelector.selectedIndex].value;
	let rollMethodFunc;
	if(rollMethodChosen == "3d6") {
		rollMethodFunc = roll3d6;
	} else if(rollMethodChosen == "4d6") {
		rollMethodFunc = roll4d6dl;
	} else if(rollMethodChosen == "4d6any") {
		rollMethodFunc = roll4d6dl;
	} else {
		console.error(`Error in getting roll method! ${rollMethodChosen}`);
	}

	let ourPC = {
		'name': randName(),
		'stre': rollMethodFunc(),
		'inte': rollMethodFunc(),
		'wisd': rollMethodFunc(),
		'dext': rollMethodFunc(),
		'cons': rollMethodFunc(),
		'cha': rollMethodFunc(),
		'rollMethod': rollMethodChosen
	};

	const classRequirements = [
		{'name': 'acrobat', 'reqs': {}},
		{'name': 'assassin', 'reqs': {}},
		{'name': 'barbarian', 'reqs': {'stre': 9}},
		{'name': 'bard', 'reqs': {'dext': 9, 'inte': 9}},
		{'name': 'cleric', 'reqs': {}},
		{'name': 'drow', 'reqs': {'inte': 9}},
		{'name': 'druid', 'reqs': {}},
		{'name': 'duergar', 'reqs': {'cons': 9, 'inte': 9}},
		{'name': 'dwarf', 'reqs': {'cons': 9}},
		{'name': 'elf', 'reqs': {'int': 9}},
		{'name': 'fighter', 'reqs': {}},
		{'name': 'gnome', 'reqs': {'cons': 9}},
		{'name': 'half-elf', 'reqs': {'cons': 9, 'cha': 9}},
		{'name': 'halfling', 'reqs': {'cons': 9, 'dex': 9}},
		{'name': 'half-orc', 'reqs': {}},
		{'name': 'illusionist', 'reqs': {'dext': 9}},
		{'name': 'knight', 'reqs': {'cons': 9, 'dext': 9}},
		{'name': 'magic-user', 'reqs': {}},
		{'name': 'paladin', 'reqs': {'cha': 9}},
		{'name': 'ranger', 'reqs': {'cons': 9, 'wisd': 9}},
		{'name': 'svirfneblin', 'reqs': {'cons': 9}},
		{'name': 'thief', 'reqs': {}}
	];

	// Generate a new array that this PC qualifies for
	const eligableClasses = classRequirements.filter((c) => {
		for (let stat in c['reqs']) {
			// console.log(`if(ourPC[${stat}] < c['reqs'][${stat}])`);
			if(ourPC[stat] < c['reqs'][stat]) {
				return false;
			}
		}
		return true;
	});

	ourPC['strem'] = getModifier(ourPC['stre']);
	ourPC['intem'] = getModifier(ourPC['inte']);
	ourPC['wisdm'] = getModifier(ourPC['wisd']);
	ourPC['dextm'] = getModifier(ourPC['dext']);
	ourPC['consm'] = getModifier(ourPC['cons']);
	ourPC['cham'] = getModifier(ourPC['cha']);
	ourPC['clas'] = ourPC['rollMethod'] == "4d6any" ? "N/A" : getRandomFromArray(eligableClasses)['name'];

	ourPC['inv'] = randInventory();

	// Flavor gen
	const birthValues = [ "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth" ];
	let birth = birthValues[Math.floor(Math.random() * birthValues.length)];
	let parentOccupation = randParentOccupation();

	ourPC['history'] = `You are the <b>${birth}</b> child of a <b>${parentOccupation}</b>.  During your childhood...<br />`;

	let upbringing = [];
	let upbringingCount = Math.floor(Math.random() * 4) + 1
	for(let i = 0; i < upbringingCount; i++) {
		upbringing.push(randUpbringing());
	}
	for(let i = 0; i < upbringing.length; i++) {
		ourPC['history'] += `...<b>${upbringing[i]}</b>. <br />`
	}

	let adulthood = [];
	let adulthoodCount = Math.floor(Math.random() * 4) + 1
	for(let i = 0; i < adulthoodCount; i++) {
		adulthood.push(randYoungAdulthood());
	}
	ourPC['history'] += `During your adulthood...<br />`;
	for(let i = 0; i < adulthood.length; i++) {
		ourPC['history'] += `...<b>${adulthood[i]}</b> <br />`;
	}

	return ourPC;
}

function updatePage(ourPC) {
	// Generate inventory string
	let invString = "";
	for(let i = 0; i < ourPC['inv'].length; i++) {
		invString += ourPC['inv'][i] + "<br />";
	}

	// What should we label each stat?
	let strLabel = ourPC['rollMethod'] == "4d6any" ? 'Ability 1' : 'Strength';
	let intLabel = ourPC['rollMethod'] == "4d6any" ? 'Ability 2' : 'Intelligence';
	let wisLabel = ourPC['rollMethod'] == "4d6any" ? 'Ability 3' : 'Wisdom';
	let dexLabel = ourPC['rollMethod'] == "4d6any" ? 'Ability 4' : 'Dexterity';
	let conLabel = ourPC['rollMethod'] == "4d6any" ? 'Ability 5' : 'Constitution';
	let chaLabel = ourPC['rollMethod'] == "4d6any" ? 'Ability 6' : 'Charisma';


	writeLabel('name', 'Name', ourPC['name']);
	writeLabel('class', 'Class', ourPC['clas']);
	writeLabel('astr', strLabel, ourPC['stre'] + " " + getModifierString(ourPC['strem']));
	writeLabel('aint', intLabel, ourPC['inte'] + " " + getModifierString(ourPC['intem']));
	writeLabel('awis', wisLabel, ourPC['wisd'] + " " + getModifierString(ourPC['wisdm']));
	writeLabel('adex', dexLabel, ourPC['dext'] + " " + getModifierString(ourPC['dextm']));
	writeLabel('acon', conLabel, ourPC['cons'] + " " + getModifierString(ourPC['consm']));
	writeLabel('acha', chaLabel, ourPC['cha'] + " " + getModifierString(ourPC['cham']));
	writeLabel('avgs', '(Average Score)', getAverage([ourPC['stre'], ourPC['inte'], ourPC['wisd'], ourPC['dext'], ourPC['cons'], ourPC['cha']]).toFixed(2));
	writeLabel('inv', 'Inventory', invString);
	document.getElementById('bg').innerHTML = ourPC['history'];
}

function generateCharacter() {
	let pc = buildChar();
	updatePage(pc);
}

generateCharacter();

document.getElementById('generateCharacterButton').addEventListener('click', generateCharacter, false);
