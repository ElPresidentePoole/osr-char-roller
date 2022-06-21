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

// UTILITY FUNCTIONS

function getRandomFromArray(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function getAverage(arr) {
	sum = 0.0;
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

// GENERATORS

function randInventory() {
	let inventory = [];
	// armors chart
	const armors = ["leather armor", "chainmail"];
	inventory.push(getRandomFromArray(armors));
	// melee weapons chart
	let wRoll = rollDice(1, 6);
	if(wRoll <= 2) {
		const lowTierWeapons = ["dagger", "hand-axe", "short sword", "mace", "club", "staff"];
		inventory.push(getRandomFromArray(lowTierWeapons));
	} else if(wRoll <= 5) {
		const midTierWeapons = ["long sword", "battle axe", "spear", "warhammer"];
		inventory.push(getRandomFromArray(midTierWeapons));
	} else {
		const twoHandedWeapons = ["greatsword", "polearm"];
		inventory.push(getRandomFromArray(twoHandedWeapons));
	}

	const rangedWeapons = ["sling", "light crossbow", "short bow", Math.random() < 0.5 ? "throwing axe" : "throwing spear", "heavy crossbow", "long bow"];
	inventory.push(getRandomFromArray(rangedWeapons));

	const bundleA = ["10 oil flasks", "hooded lantern", "shovel", "12 iron spikes", "whistle"];
	const bundleB = ["10 torches", "4 oil flasks", "10 pieces of chalk/charcoal", "blank scroll", "mirror", "crowbar"];
	const bundleC = ["5 torches", "5 oil flasks", "50 ft. hemp rope", "grappling hook", "wooden pole"];

	let bRoll = rollDice(1, 3);
	if(bRoll == 1) {
		for(let i = 0; i < bundleA.length; i++) {
			inventory.push(bundleA[i]);
		}
	} else if(bRoll == 2) {
		for(let i = 0; i < bundleB.length; i++) {
			inventory.push(bundleB[i]);
		}
	} else if(bRoll == 3) {
		for(let i = 0; i < bundleC.length; i++) {
			inventory.push(bundleC[i]);
		}
	}

	return inventory
}

function randName() {
	const boyLastNames = [
		// {{{ LOTS OF NAMES
		"Alaric",
		"Aldous",
		"Archibald",
		"Arne",
		"Arthur",
		"Bahram",
		"Bard",
		"Bartholomew",
		"Benedict",
		"Bertram",
		"Björn",
		"Burchard",
		"Cassian",
		"Cathasach",
		"Charibert",
		"Conrad",
		"Crispin",
		"Cyprian",
		"Daegal",
		"Drogo",
		"Drustan",
		"Dustin",
		"Elric",
		"Emil",
		"Finnian",
		"Florian",
		"Galileo",
		"Gandalf",
		"Gerold",
		"Godfrey",
		"Godwin",
		"Gomes",
		"Gregory",
		"Grimwald",
		"Hamlin",
		"Hawk",
		"Hildebald",
		"Jeremiah",
		"Kazamir",
		"Kenric",
		"Lancaster",
		"Leif",
		"Leoric",
		"Lothar",
		"Lunden",
		"Maurin",
		"Morcant",
		"Neville",
		"Njal",
		"Odel",
		"Orvyn",
		"Osric",
		"Pascal",
		"Piers",
		"Randolf",
		"Ricard",
		"Svend",
		"Theodoric",
		"Torsten",
		"Wilkin",
		"Wolf",
		"Wymond",
		"Zemislav",
		"Asmi", // Gender neutral names from here on
		"Clement",
		"Drew",
		"Felize",
		"Peregrine",
		"Quentin",
		"Rogue",
		"Stace"//}}}
	];

	const boyFirstNames = [
		// {{{ LOTS OF NAMES
		"Liam",
		"Noah",
		"Oliver",
		"Elijah",
		"James",
		"William",
		"Benjamin",
		"Lucas",
		"Henry",
		"Theodore",
		"Jack",
		"Levi",
		"Alexander",
		"Jackson",
		"Mateo",
		"Daniel",
		"Michael",
		"Mason",
		"Sebastian",
		"Ethan",
		"Logan",
		"Owen",
		"Samuel",
		"Jacob",
		"Asher",
		"Aiden",
		"John",
		"Joseph",
		"Wyatt",
		"David",
		"Leo",
		"Luke",
		"Julian",
		"Hudson",
		"Grayson",
		"Matthew",
		"Ezra",
		"Gabriel",
		"Carter",
		"Isaac",
		"Jayden",
		"Luca",
		"Anthony",
		"Dylan",
		"Lincoln",
		"Thomas",
		"Maverick",
		"Elias",
		"Josiah",
		"Charles",
		"Caleb",
		"Christopher",
		"Ezekiel",
		"Miles",
		"Jaxon",
		"Isaiah",
		"Andrew",
		"Joshua",
		"Nathan",
		"Nolan",
		"Adrian",
		"Cameron",
		"Santiago",
		"Eli",
		"Aaron",
		"Ryan",
		"Angel",
		"Cooper",
		"Waylon",
		"Easton",
		"Kai",
		"Christian",
		"Landon",
		"Colton",
		"Roman",
		"Axel",
		"Brooks",
		"Jonathan",
		"Robert",
		"Jameson",
		"Ian",
		"Everett",
		"Greyson",
		"Wesley",
		"Jeremiah",
		"Hunter",
		"Leonardo",
		"Jordan",
		"Jose",
		"Bennett",
		"Silas",
		"Nicholas",
		"Parker",
		"Beau",
		"Weston",
		"Austin",
		"Connor",
		"Carson",
		"Dominic",
		"Xavier",
		"Jaxson",
		"Jace",
		"Emmett",
		"Adam",
		"Declan",
		"Rowan",
		"Micah",
		"Kayden",
		"Gael",
		"River",
		"Ryder",
		"Kingston",
		"Damian",
		"Sawyer",
		"Luka",
		"Evan",
		"Vincent",
		"Legend",
		"Myles",
		"Harrison",
		"August",
		"Bryson",
		"Amir",
		"Giovanni",
		"Chase",
		"Diego",
		"Milo",
		"Jasper",
		"Walker",
		"Jason",
		"Brayden",
		"Cole",
		"Nathaniel",
		"George",
		"Lorenzo",
		"Zion",
		"Luis",
		"Archer",
		"Enzo",
		"Jonah",
		"Thiago",
		"Theo",
		"Ayden",
		"Zachary",
		"Calvin",
		"Braxton",
		"Ashton",
		"Rhett",
		"Atlas",
		"Jude",
		"Bentley",
		"Carlos",
		"Ryker",
		"Adriel",
		"Arthur",
		"Ace",
		"Tyler",
		"Jayce",
		"Max",
		"Elliot",
		"Graham",
		"Kaiden",
		"Maxwell",
		"Juan",
		"Dean",
		"Matteo",
		"Malachi",
		"Ivan",
		"Elliott",
		"Jesus",
		"Emiliano",
		"Messiah",
		"Gavin",
		"Maddox",
		"Camden",
		"Hayden",
		"Leon",
		"Antonio",
		"Justin",
		"Tucker",
		"Brandon",
		"Kevin",
		"Judah",
		"Finn",
		"King",
		"Brody",
		"Xander",
		"Nicolas",
		"Charlie",
		"Arlo",
		"Emmanuel",
		"Barrett",
		"Felix",
		"Alex",
		"Miguel",
		"Abel",
		"Alan",
		"Beckett",
		"Amari",
		"Karter",
		"Timothy",
		"Abraham",
		"Jesse",
		"Zayden",
		"Blake",
		"Alejandro",
		"Dawson",
		"Tristan",
		"Victor",
		"Avery",
		"Joel",
		"Grant",
		"Eric",
		"Patrick",
		"Peter",
		"Richard",
		"Edward",
		"Andres",
		"Emilio",
		"Colt",
		"Knox",
		"Beckham",
		"Adonis",
		"Kyrie",
		"Matias",
		"Oscar",
		"Lukas",
		"Marcus",
		"Hayes",
		"Caden",
		"Remington",
		"Griffin",
		"Nash",
		"Israel",
		"Steven",
		"Holden",
		"Rafael",
		"Zane",
		"Jeremy",
		"Kash",
		"Preston",
		"Kyler",
		"Jax",
		"Jett",
		"Kaleb",
		"Riley",
		"Simon",
		"Phoenix",
		"Javier",
		"Bryce",
		"Louis",
		"Mark",
		"Cash",
		"Lennox",
		"Paxton",
		"Malakai",
		"Paul",
		"Kenneth",
		"Nico",
		"Kaden",
		"Lane",
		"Kairo",
		"Maximus",
		"Omar",
		"Finley",
		"Atticus",
		"Crew",
		"Brantley",
		"Colin",
		"Dallas",
		"Walter",
		"Brady",
		"Callum",
		"Ronan",
		"Hendrix",
		"Jorge",
		"Tobias",
		"Clayton",
		"Emerson",
		"Damien",
		"Zayn",
		"Malcolm",
		"Kayson",
		"Bodhi",
		"Bryan",
		"Aidan",
		"Cohen",
		"Brian",
		"Cayden",
		"Andre",
		"Niko",
		"Maximiliano",
		"Zander",
		"Khalil",
		"Rory",
		"Francisco",
		"Cruz",
		"Kobe",
		"Reid",
		"Daxton",
		"Derek",
		"Martin",
		"Jensen",
		"Karson",
		"Tate",
		"Muhammad",
		"Jaden",
		"Joaquin",
		"Josue",
		"Gideon",
		"Dante",
		"Cody",
		"Bradley",
		"Orion",
		"Spencer",
		"Angelo",
		"Erick",
		"Jaylen",
		"Julius",
		"Manuel",
		"Ellis",
		"Colson",
		"Cairo",
		"Gunner",
		"Wade",
		"Chance",
		"Odin",
		"Anderson",
		"Kane",
		"Raymond",
		"Cristian",
		"Aziel",
		"Prince",
		"Ezequiel",
		"Jake",
		"Otto",
		"Eduardo",
		"Rylan",
		"Ali",
		"Cade",
		"Stephen",
		"Ari",
		"Kameron",
		"Dakota",
		"Warren",
		"Ricardo",
		"Killian",
		"Mario",
		"Romeo",
		"Cyrus",
		"Ismael",
		"Russell",
		"Tyson",
		"Edwin",
		"Desmond",
		"Nasir",
		"Remy",
		"Tanner",
		"Fernando",
		"Hector",
		"Titus",
		"Lawson",
		"Sean",
		"Kyle",
		"Elian",
		"Corbin",
		"Bowen",
		"Wilder",
		"Armani",
		"Royal",
		"Stetson",
		"Briggs",
		"Sullivan",
		"Leonel",
		"Callan",
		"Finnegan",
		"Jay",
		"Zayne",
		"Marshall",
		"Kade",
		"Travis",
		"Sterling",
		"Raiden",
		"Sergio",
		"Tatum",
		"Cesar",
		"Zyaire",
		"Milan",
		"Devin",
		"Gianni",
		"Kamari",
		"Royce",
		"Malik",
		"Jared",
		"Franklin",
		"Clark",
		"Noel",
		"Marco",
		"Archie",
		"Apollo",
		"Pablo",
		"Garrett",
		"Oakley",
		"Memphis",
		"Quinn",
		"Onyx",
		"Alijah",
		"Baylor",
		"Edgar",
		"Nehemiah",
		"Winston",
		"Major",
		"Rhys",
		"Forrest",
		"Jaiden",
		"Reed",
		"Santino",
		"Troy",
		"Caiden",
		"Harvey",
		"Collin",
		"Solomon",
		"Donovan",
		"Damon",
		"Jeffrey",
		"Kason",
		"Sage",
		"Grady",
		"Kendrick",
		"Leland",
		"Luciano",
		"Pedro",
		"Hank",
		"Hugo",
		"Esteban",
		"Johnny",
		"Kashton",
		"Ronin",
		"Ford",
		"Mathias",
		"Porter",
		"Erik",
		"Johnathan",
		"Frank",
		"Tripp",
		"Casey",
		"Fabian",
		"Leonidas",
		"Baker",
		"Matthias",
		"Philip",
		"Jayceon",
		"Kian",
		"Saint",
		"Ibrahim",
		"Jaxton",
		"Augustus",
		"Callen",
		"Trevor",
		"Ruben",
		"Adan",
		"Conor",
		"Dax",
		"Braylen",
		"Kaison",
		"Francis",
		"Kyson",
		"Andy",
		"Lucca",
		"Mack",
		"Peyton",
		"Alexis",
		"Deacon",
		"Kasen",
		"Kamden",
		"Frederick",
		"Princeton",
		"Braylon",
		"Wells",
		"Nikolai",
		"Iker",
		"Bo",
		"Dominick",
		"Moshe",
		"Cassius",
		"Gregory",
		"Lewis",
		"Kieran",
		"Isaias",
		"Seth",
		"Marcos",
		"Omari",
		"Shane",
		"Keegan",
		"Jase",
		"Asa",
		"Sonny",
		"Uriel",
		"Pierce",
		"Jasiah",
		"Eden",
		"Rocco",
		"Banks",
		"Cannon",
		"Denver",
		"Zaiden",
		"Roberto",
		"Shawn",
		"Drew",
		"Emanuel",
		"Kolton",
		"Ayaan",
		"Ares",
		"Conner",
		"Jalen",
		"Alonzo",
		"Enrique",
		"Dalton",
		"Moses",
		"Koda",
		"Bodie",
		"Jamison",
		"Phillip",
		"Zaire",
		"Jonas",
		"Kylo",
		"Moises",
		"Shepherd",
		"Allen",
		"Kenzo",
		"Mohamed",
		"Keanu",
		"Dexter",
		"Conrad",
		"Bruce",
		"Sylas",
		"Soren",
		"Raphael",
		"Rowen",
		"Gunnar",
		"Sutton",
		"Quentin",
		"Jaziel",
		"Emmitt",
		"Makai",
		"Koa",
		"Maximilian",
		"Brixton",
		"Dariel",
		"Zachariah",
		"Roy",
		"Armando",
		"Corey",
		"Saul",
		"Izaiah",
		"Danny",
		"Davis",
		"Ridge",
		"Yusuf",
		"Ariel",
		"Valentino",
		"Jayson",
		"Ronald",
		"Albert",
		"Gerardo",
		"Ryland",
		"Dorian",
		"Drake",
		"Gage",
		"Rodrigo",
		"Hezekiah",
		"Kylan",
		"Boone",
		"Ledger",
		"Santana",
		"Jamari",
		"Jamir",
		"Lawrence",
		"Reece",
		"Kaysen",
		"Shiloh",
		"Arjun",
		"Marcelo",
		"Abram",
		"Benson",
		"Huxley",
		"Nikolas",
		"Zain",
		"Kohen",
		"Samson",
		"Miller",
		"Donald",
		"Finnley",
		"Kannon",
		"Lucian",
		"Watson",
		"Keith",
		"Westin",
		"Tadeo",
		"Sincere",
		"Boston",
		"Axton",
		"Amos",
		"Chandler",
		"Leandro",
		"Raul",
		"Scott",
		"Reign",
		"Alessandro",
		"Camilo",
		"Derrick",
		"Morgan",
		"Julio",
		"Clay",
		"Edison",
		"Jaime",
		"Augustine",
		"Julien",
		"Zeke",
		"Marvin",
		"Bellamy",
		"Landen",
		"Dustin",
		"Jamie",
		"Krew",
		"Kyree",
		"Colter",
		"Johan",
		"Houston",
		"Layton",
		"Quincy",
		"Case",
		"Atreus",
		"Cayson",
		"Aarav",
		"Darius",
		"Harlan",
		"Justice",
		"Abdiel",
		"Layne",
		"Raylan",
		"Arturo",
		"Taylor",
		"Anakin",
		"Ander",
		"Hamza",
		"Otis",
		"Azariah",
		"Leonard",
		"Colby",
		"Duke",
		"Flynn",
		"Trey",
		"Gustavo",
		"Fletcher",
		"Issac",
		"Sam",
		"Trenton",
		"Callahan",
		"Chris",
		"Mohammad",
		"Rayan",
		"Lionel",
		"Bruno",
		"Jaxxon",
		"Zaid",
		"Brycen",
		"Roland",
		"Dillon",
		"Lennon",
		"Ambrose",
		"Rio",
		"Mac",
		"Ahmed",
		"Samir",
		"Yosef",
		"Tru",
		"Creed",
		"Tony",
		"Alden",
		"Aden",
		"Alec",
		"Carmelo",
		"Dario",
		"Marcel",
		"Roger",
		"Ty",
		"Ahmad",
		"Emir",
		"Landyn",
		"Skyler",
		"Mohammed",
		"Dennis",
		"Kareem",
		"Nixon",
		"Rex",
		"Uriah",
		"Lee",
		"Louie",
		"Rayden",
		"Reese",
		"Alberto",
		"Cason",
		"Quinton",
		"Kingsley",
		"Chaim",
		"Alfredo",
		"Mauricio",
		"Caspian",
		"Legacy",
		"Ocean",
		"Ozzy",
		"Briar",
		"Wilson",
		"Forest",
		"Grey",
		"Joziah",
		"Salem",
		"Neil",
		"Remi",
		"Bridger",
		"Harry",
		"Jefferson",
		"Lachlan",
		"Nelson",
		"Casen",
		"Salvador",
		"Magnus",
		"Tommy",
		"Marcellus",
		"Maximo",
		"Jerry",
		"Clyde",
		"Aron",
		"Keaton",
		"Eliam",
		"Lian",
		"Trace",
		"Douglas",
		"Junior",
		"Titan",
		"Cullen",
		"Cillian",
		"Musa",
		"Mylo",
		"Hugh",
		"Tomas",
		"Vincenzo",
		"Westley",
		"Langston",
		"Byron",
		"Kiaan",
		"Loyal",
		"Orlando",
		"Kyro",
		"Amias",
		"Amiri",
		"Jimmy",
		"Vicente",
		"Khari",
		"Brendan",
		"Rey",
		"Ben",
		"Emery",
		"Zyair",
		"Bjorn",
		"Evander",
		"Ramon",
		"Alvin",
		"Ricky",
		"Jagger",
		"Brock",
		"Dakari",
		"Eddie",
		"Blaze",
		"Gatlin",
		"Alonso",
		"Curtis",
		"Kylian",
		"Nathanael",
		"Devon",
		"Wayne",
		"Zakai",
		"Mathew",
		"Rome",
		"Riggs",
		"Aryan",
		"Avi",
		"Hassan",
		"Lochlan",
		"Stanley",
		"Dash",
		"Kaiser",
		"Benicio",
		"Bryant",
		"Talon",
		"Rohan",
		"Wesson",
		"Joe",
		"Noe",
		"Melvin",
		"Vihaan",
		"Zayd",
		"Darren",
		"Enoch",
		"Mitchell",
		"Jedidiah",
		"Brodie",
		"Castiel",
		"Ira",
		"Lance",
		"Guillermo",
		"Thatcher",
		"Ermias",
		"Misael",
		"Jakari",
		"Emory",
		"Mccoy",
		"Rudy",
		"Thaddeus",
		"Valentin",
		"Yehuda",
		"Bode",
		"Madden",
		"Kase",
		"Bear",
		"Boden",
		"Jiraiya",
		"Maurice",
		"Alvaro",
		"Ameer",
		"Demetrius",
		"Eliseo",
		"Kabir",
		"Kellan",
		"Allan",
		"Azrael",
		"Calum",
		"Niklaus",
		"Ray",
		"Damari",
		"Elio",
		"Jon",
		"Leighton",
		"Axl",
		"Dane",
		"Eithan",
		"Eugene",
		"Kenji",
		"Jakob",
		"Colten",
		"Eliel",
		"Nova",
		"Santos",
		"Zahir",
		"Idris",
		"Ishaan",
		"Kole",
		"Korbin",
		"Seven",
		"Alaric",
		"Kellen",
		"Bronson",
		"Franco",
		"Wes",
		"Larry",
		"Mekhi",
		"Jamal",
		"Dilan",
		"Elisha",
		"Brennan",
		"Kace",
		"Van",
		"Felipe",
		"Fisher",
		"Cal",
		"Dior",
		"Judson",
		"Alfonso",
		"Deandre",
		"Rocky",
		"Henrik",
		"Reuben",
		"Anders",
		"Arian",
		"Damir",
		"Jacoby",
		"Khalid",
		"Kye",
		"Mustafa",
		"Jadiel",
		"Stefan",
		"Yousef",
		"Aydin",
		"Jericho",
		"Robin",
		"Wallace",
		"Alistair",
		"Davion",
		"Alfred",
		"Ernesto",
		"Kyng",
		"Everest",
		"Gary",
		"Leroy",
		"Yahir",
		"Braden",
		"Kelvin",
		"Kristian",
		"Adler",
		"Avyaan",
		"Brayan",
		"Jones",
		"Truett",
		"Aries",
		"Joey",
		"Randy",
		"Jaxx",
		"Jesiah",
		"Jovanni",
		"Azriel",
		"Brecken",
		"Harley",
		"Zechariah",
		"Gordon",
		"Jakai",
		"Carl",
		"Graysen",
		"Kylen",
		"Ayan",
		"Branson",
		"Crosby",
		"Dominik",
		"Jabari",
		"Jaxtyn",
		"Kristopher",
		"Ulises",
		"Zyon",
		"Fox",
		"Howard",
		"Salvatore",
		"Turner",
		"Vance",
		"Harlem",
		"Jair",
		"Jakobe",
		"Jeremias",
		"Osiris",
		"Azael",
		"Bowie",
		"Canaan",
		"Elon",
		"Granger",
		"Karsyn",
		"Zavier",
		"Cain",
		"Dangelo",
		"Heath",
		"Yisroel",
		"Gian",
		"Shepard",
		"Harold",
		"Kamdyn",
		"Rene",
		"Rodney",
		"Yaakov",
		"Adrien",
		"Kartier",
		"Cassian",
		"Coleson",
		"Ahmir",
		"Darian",
		"Genesis",
		"Kalel",
		"Agustin",
		"Wylder",
		"Yadiel",
		"Ephraim",
		"Kody",
		"Neo",
		"Ignacio",
		"Osman",
		"Aldo",
		"Abdullah",
		"Cory",
		"Blaine",
		"Dimitri",
		"Khai",
		"Landry",
		"Palmer",
		"Benedict",
		"Leif",
		"Koen",
		"Maxton",
		"Mordechai",
		"Zev",
		"Atharv",
		"Bishop",
		"Blaise",
		"Davian"
		// }}}
	];

	return getRandomFromArray(boyFirstNames) + " " + getRandomFromArray(boyLastNames);
}

function randNoble() {
	/*
	let nobleLottery = rollDice(1, 20);
	if(nobleLottery == 20) {
		return "king";
	} else if(nobleLottery == 19) {
		return "arch duke" // /"arch prince"
	} else if(nobleLottery == 18) {
		return "duke"
	} else if(nobleLottery == 17) {
		return "marquis" // "margrave"
	} else if(nobleLottery == 16) {
		return "count"
	} else if(nobleLottery >= 11) {
		return "baron" // "landgraf"
	} else if(nobleLottery >= 7) {
		return "knight"
	} else if(nobleLottery >= 4) {
		return "knight banneret"
	} else {
		return "landless knight"
	}*/
	const nobles = [
		"king",
		"arch duke",
		"duke",
		"marquis",
		"count",
		"baron",
		"baron",
		"baron",
		"baron",
		"baron",
		"knight",
		"knight",
		"knight",
		"knight",
		"knight banneret",
		"knight banneret",
		"knight banneret",
		"knight banneret",
		"landless knight",
		"landless knight",
		"landless knight",
	];
	return getRandomFromArray(nobles);
}

function randClergy() {
	let clergyLottery = rollDice(1, 6);
	if(clergyLottery == 1 || clergyLottery == 2) {
		return "member of the lower clergy of a mainstream religion"; // "parish"
	} else if(clergyLottery == 3) {
		return "member of the upper clergy of a mainstream religion";
	} else if(clergyLottery == 4) {
		return "member of the clergy of a heretical religion";
	} else if(clergyLottery == 5) {
		return "member of a pagan religion";
	} else if(clergyLottery == 6) {
		return "elder god"; // gods?
	}
}

function randMerchant() {
	// Table 2C
	let merchantLottery = rollDice(1, 6);
	if(merchantLottery == 6) {
		return "long-distance trader";
	} else if(merchantLottery == 5) {
		return "local trader";
	} else if(merchantLottery == 4) {
		return "innkeeper";
	} else if(merchantLottery == 3) {
		return "shopkeeper of exotic goods";
	} else if(merchantLottery == 2) {
		return "shopkeeper of dry goods";
	} else if(merchantLottery == 1) {
		return "shopkeeper of foodstuffs";
	}
}

function randGovtOfficial() {
	// Table 2B
	let govtLottery = rollDice(1, 8);
	if(govtLottery == 8) {
		return "royal advisor"; // ducal advisor
	} else if(govtLottery == 7) {
		return "city mayor";
	} else if(govtLottery == 6) {
		return "town mayor";
	} else if(govtLottery == 5) {
		return "magistrate";
	} else if(govtLottery == 4) {
		return "forest warden";
	} else if(govtLottery == 3) {
		return "sheriff"; // shrive?
	} else if(govtLottery == 2 || govtLottery == 1) {
		return "tax collector";
	}
}

function randSkilledWorker() {
	let craftLottery = rollDice(1, 20);
	if(craftLottery == 1) {
		return "tailor";
	} else if(craftLottery == 2) {
		return "fletcher"; // bowyer
	} else if(craftLottery == 3) {
		return "glass blower";
	} else if(craftLottery == 4) {
		return "carpenter";
	} else if(craftLottery == 5) {
		return "animal trainer"; // beast master
	} else if(craftLottery == 6) {
		return "cartographer";
	} else if(craftLottery == 7) {
		return "smith";
	} else if(craftLottery == 8) {
		return "cobbler";
	} else if(craftLottery == 9) {
		return "weaver";
	} else if(craftLottery == 10) {
		return "armorer"; // weaponsmith
	} else if(craftLottery == 11) {
		return "brewer"; // baker
	} else if(craftLottery == 12) {
		return "mason";
	} else if(craftLottery == 13) {
		return "potter";
	} else if(craftLottery == 14) {
		return "miller";
	} else if(craftLottery == 15) {
		return "dyer";
	} else if(craftLottery == 16) {
		return "shipwright";
	} else if(craftLottery == 17) {
		return "jeweler";
	} else if(craftLottery == 18) {
		return "sculptor"; // artist
	} else if(craftLottery == 19) {
		return "musician";
	} else if(craftLottery == 20) {
		return "artist"; // i'm not doing reroll fuck it
	}
}

function randParentOccupation() {
	let birthLottery = rollDice(1, 20);
	if(birthLottery == 20) {
		// Noble!
		return randNoble();
	} else if(birthLottery == 18) {
		// Clergy!
		return randClergy();
	} else if(birthLottery == 16 || birthLottery == 17) {
		// Merchant!
		return randMerchant();
	} else if(birthLottery == 15) {
		// Government official...not bad!
		return randGovtOfficial();
	} else if(birthLottery == 8 || birthLottery == 9) {
		return randSkilledWorker();
	}
	const lowerClassOccupations = [ "beggar", "drifter", "criminal", "peasant", "farmer", "fisherperson", "farmhand", "miner", "logger", "sailor", "soldier", "mercenary", "sage", "scholar", "alchemist", "scribe", "slaver", "adventurer", "actor", "bard", "courtesan" ];
	return lowerClassOccupations[Math.floor(Math.random() * lowerClassOccupations.length)];
}

function randGuardian() {
	// Table 3A
	const guardians = [
		"a " + Math.random() < 0.5 ? "wicked " + (Math.random() < 0.5 ? "stepmother" : "stepfather" ) : "cruel " + (Math.random() < 0.5 ? "stepmother" : "stepfather" ),
		"a hedge wizard", // TODO wizard/mage
		"a " + Math.random() < 0.5 ? "monastary" : "convent",
		"a " + randSkilledWorker(),
		"your " + randRelative(),
		"slavers after being sold into slavery",
		"a pack of wolves",
		"an adventurer",
		"Dwarven indentured servants",
		"mysterious red-robed \"elven\" guardians",
		"centaurs",
		"hob-goblins",
		"deep ones",
		"mercenaries",
		"landsknechts",
		"bandits",
		"pirates",
		"nomads",
		"cossacks",
		"barbarians",
		"a " + randMerchant(),
		"a " + randClergy(),
		"a " + randNoble(),
		"no one and lived on the streets"
	];
	return getRandomFromArray(guardians);
}

function randMilitaryService() {
	// Roll a d20 and returns a random military service
	// Table 4A
	let m = rollDice(1, 20);
	if(m == 1) {
		return "were promoted";
	} else if(m == 2) {
		return "were demoted";
	} else if(m == 3) {
		return "were the lone survivor of a unit";
	} else if(m == 4) {
		return "were captured by the enemy and tortured";
	} else if(m == 5) {
		return "deserted";
	} else if(m == 6) {
		let noun = Math.random < 0.50 ? "mercenaries" : "landknechts";
		return `joined a group of ${noun}`;
	} else if(m == 7) {
		return "were responsible for the death of your comrades";
	} else if(m == 8) {
		return "had your best friend killed by your side";
	} else if(m == 9) {
		return "prevented the death of innocents";
	} else if(m == 10) {
		return "spent most of your time in non-combat roles";
	} else if(m == 11) {
		let crime = randCrime();
		return `committed an unsanctioned ${crime}`;
	} else if(m == 12) {
		return "ran away from battle";
	} else if(m == 13) {
		return "displayed heroism on the battlefield";
	} else if(m == 14) {
		return "learned the use of exotic weapons";
	} else if(m == 15) {
		return "learned siegecraft";
	} else if(m == 16) {
		return "led a mutiny";
	} else if(m == 17) {
		let noun = Math.random < 0.50 ? "disease" : "magical occurrence";
		return `survived ${noun}`;
	} else if(m == 18) {
		let noun = Math.random < 0.50 ? "vice of " + randVirtue() : "virtue of " + randVirtue();
		return `developed a ${noun}`;
	} else if(m == 19 || m == 20) {
		return "were transferred to " + randOtherService();
	}
}

function randCrime() {
	// Roll a d20 and returns a random military service
	// Table 3D
	let m = rollDice(1, 20);
	if(m == 1 || m == 2) {
		return "theft";
	} else if(m == 3) {
		return "assault";
	} else if(m == 4 || m == 5) {
		return "heresy";
	} else if(m == 6) {
		return "murder";
	} else if(m == 7) {
		return "insulting a noble of a higher order";
	} else if(m == 8) {
		return "tax evasion";
	} else if(m == 9 || m == 10) {
		return "political dissidence";
	} else if(m == 11) {
		return "harboring criminals";
	} else if(m == 12) {
		return "unlawful sorcery";
	} else if(m == 13) {
		let noun = Math.random < 0.50 ? "banditry" : "piracy";
		return noun;
	} else if(m == 14 || m == 15) {
		return "being at the wrong place at the wrong time";
	} else if(m == 16) {
		return "being the bearer of bad news";
	} else if(m == 17 || m == 18 || m == 19 || m == 20) {
		return randCrime() + " and " + randCrime();
	}
}

function randReligiousExperience() {
	// Roll a d20 and returns a random religious experience
	// Table 4E
	let re = rollDice(1, 20);
	if(re == 1) {
		return "joined a faith";
	} else if(re == 2) {
		return "lost your faith";
	} else if(re == 3) {
		let noun = Math.random < 0.50 ? "demi-god" : "saint";
		return `had a vision of ${noun}`
	} else if(re == 4) {
		return "had a vision of deity";
	} else if(re == 5) {
		let noun = Math.random < 0.50 ? "elder god" : "demon";
		return `had a vision of ${noun}`;
	} else if(re == 6) {
		return "became lay clergy (the non-magical kind)";
	} else if(re == 7) {
		return "made a pilgrimage to a holy place";
	} else if(re == 8) {
		return "were excommunicated";
	} else if(re == 9) {
		return "were persecuted for your faith";
	} else if(re == 10) {
		return "were involved in a holy war, where you " + randMilitaryService();
	} else if(re == 11) {
		return "became a religious hypocrite";
	} else if(re == 12) {
		return "made a prophetic statement";
	} else if(re == 13) {
		return "discredited your faith";
	} else if(re == 14) {
		return "were sent to religious school";
	} else if(re == 15) {
		return "started your own sect";
	} else if(re >= 16) {
		let noun = Math.random < 0.50 ? "vice of " + randVice() : "virtue of " + randVirtue();
		return `developed a ${noun}`;
	}
}

function randVice() {
	// Roll a d20 and returns a random vice
	// Table 4D
	let v = rollDice(1, 20);
	if(v == 1) {
		return "being a heavy drinker";
	} else if(v == 2) {
		return "having a drug problem";
	} else if(v == 3) {
		return "being a gambler";
	} else if(v == 4) {
		return "randiness";
	} else if(v == 5) {
		return "swearing like a sailor";
	} else if(v == 6) {
		return "duplicity";
	} else if(v == 7) {
		return "being mistrustful";
	} else if(v == 8) {
		return "being a loner";
	} else if(v == 9) {
		return "pushiness";
	} else if(v == 10) {
		return "being loud";
	} else if(v == 11) {
		return "poor hygiene";
	} else if(v == 12) {
		return "loving brawling";
	} else if(v == 13) {
		return "being quick-tempered";
	} else if(v == 14) {
		return "selfishness";
	} else if(v == 15) {
		return "being braggart";
	} else if(v == 16) {
		return "laziness";
	} else if(v == 17) {
		return "greed";
	} else if(v == 18) {
		return "intolerance";
	} else if(v == 19) {
		return "lacking self-confidence";
	} else if(v == 20) {
		return "being sacrilegious";
	}
}

function randMagicalOccurance() {
	let m = rollDice(1, 10);
	const events = [
		"survived magical disaster",
		"witnessed summoning",
		"saw magical omens",
		"visited by a witch",
		"gathered spell components for hedge wizard",
		"found a magical place",
		"found arcane scrolls",
		"discovered an ancient book",
		"had a spell cast on you",
		"learned a cantrip"
	];
	return getRandomFromArray(events);
}

function randVirtue() {
	// Roll a d20 and returns a random virtue
	// Table 4C
	let v = rollDice(1, 20);
	if(v == 1) {
		return "cleanliness";
	} else if(v == 2) {
		return "generosity";
	} else if(v == 3) {
		return "being well-mannered";
	} else if(v == 4) {
		return "being friendly";
	} else if(v == 5) {
		return "being a teetotaler";
	} else if(v == 6) {
		return "piousness";
	} else if(v == 7) {
		return Math.random() < 0.5 ? "being sincere" : "being earnest";
	} else if(v == 8) {
		return Math.random() < 0.5 ? "quietness" : "being a good listener";
	} else if(v == 9) {
		return "honesty";
	} else if(v == 10) {
		return "being a defender of the oppressed";
	} else if(v == 11) {
		return "being loving";
	} else if(v == 12) {
		return "being tolerant of all faiths";
	} else if(v == 13) {
		return "self-confidence";
	} else if(v == 14) {
		return "being hard-working";
	} else if(v == 15) {
		return "humbleness";
	} else if(v == 16) {
		let noun = Math.random() < 0.5 ? "negotiator" : "diplomat";
		return `being a good ${noun}`;
	} else if(v == 17) {
		return "being a hard bargainer"
	} else if(v == 18) {
		return "being punctual";
	} else if(v == 19) {
		return "being sensitive";
	} else if(v == 20) {
		return "being outgoing";
	}
}

function randYoungAdulthood() {
	const events = [
		randReligiousExperience(),
		randMagicalOccurance(),
		"you caused the death of your " + randRelative(),
		"you caused the death of a " + randNoun(),
		`developed a ${Math.random < 0.50 ? "vice of " + randVirtue() : "virtue of " + randVirtue()}`,
		"you were conscripted for the military where you " + randMilitaryService(),
		"you volunteered for the military where you " + randMilitaryService(),
		Math.random() < 0.25 ? "had a romantic affair, and had a child" : "had a romantic affair",
		"you learned how to be a " + randParentOccupation(),
		"you traveled abroad",
		"you survived a plague",
		"you moved to a big city",
		"you moved to the wilderness",
		"you were kidnapped and sold into slavery, but escaped",
		"you committed the crime of " + randCrime(),
		"your home town was wiped out by a " + randNoun() + " and allies",
		"you encountered a monster",
		"served a wealthy " + randNoble(),
		"saved the life of your " + randRelative(),
		"saved the life of a " + randNoun(),
		"were apprenticed to a " + randSkilledWorker()
	];
	return getRandomFromArray(events);
}

function randUpbringing() {
	// Chart 3
	let u = rollDice(1, 20);
	if(u == 20) {
		return "you committed the crime of " + randCrime();
	} else if(u == 19) {
		return "you had a religious experience where you " + randReligiousExperience();
	} else if(u == 18) {
		return "you were trained how to fight and use weapons";
	} else if(u == 17) {
		return "you ran away from home";
	} else if(u == 16) {
		return "you moved to the wilderness"; // "borderlands"
	} else if(u == 15) {
		return "you moved to the big city";
	} else if(u == 14) {
		return "you lived a nomadic life";
	} else if(u == 13) {
		return "you had a jealous rivalry with another kid"; // sibling?
	} else if(u == 12) {
		return "you had a magical experience where you " + randMagicalOccurance();
	} else if(u == 11) {
		let c = Math.random();
		let crime = randCrime();
		if(c >= 0.666) {
			return `your mother was outlawed for ${crime}`;
		} else if(c >= 0.333) {
			return `your father was outlawed for a ${crime}`;
		} else {
			return `your parents were outlawed for a ${crime}`;
		}
	} else if(u == 10) {
		let prng = Math.random();
		let p;
		if(prng < 0.333) {
			p = "father was";
		} else if(prng < 0.666) {
			p = "mother was";
		} else {
			p = "parents were";
		}
		return `your ${p} killed by your ${randRelative()}`;
	} else if(u == 9) {
		return "you were an apprentice to a " + randSkilledWorker();
	} else if(u == 8) {
		return "you were an apprentice to your parent's occupation";
	} else if(u == 7) {
		return "you were considered illegitimate and raised by " + randGuardian();
	} else if(u == 6) {
		return "you caused the death of a " + randNoun();
	} else if(u == 5) {
		return "your family was killed by a " + randNoun();
	} else if(u == 4 || u == 3) {
		return "you were orphaned and raised by " + randGuardian();
	} else if(u == 2) {
		return "you were unloved by your parents";
	} else if (u == 1) {
		return "you were loved and protected by your parents";
	}
}

function randRelative() {
	// Table 3B
	const relatives = [
		"brother",
		"sister",
		"first cousin",
		"uncle",
		"aunt",
		"grandfather",
		"grandmother",
		"great uncle",
		"great aunt",
		"distant relative"
	];
	return getRandomFromArray(relatives);
}

function randNoun() {
	// returns a random noun
	// Table 3C
	
	const nouns = [
		randGovtOfficial(),
		"friend",
		"thief",
		"wizard",
		"mentor",
		randNoble(),
		Math.random() < 0.5 ? "raider" : "invader",
		"demi-human",
		"monster",
		"lover",
		"craftsman",
		"brigand",
		"adventurer",
		"comrade",
		"wild animal",
		"nomad",
		Math.random() < 0.5 ? "religious leader" : "religious member",
		"mysterious stranger"
	];
	if (Math.random() < 0.05) {
		return getRandomFromArray(nouns) + " and " + getRandomFromArray(nouns) + " working together";
	} else {
		return getRandomFromArray(nouns);
	}
		//Math.random() < 0.333 ? "highwayman" : (Math.random() < 0.666 ? "bandit" : "pirate"),
}

function randOtherService() {
	// Roll a d12 and returns a random aux. military service
	// Table 4B
	let o = rollDice(1, 12);
	if(o == 1) {
		return "palace guard";
	} else if(o == 2) {
		let noun = Math.random < 0.50 ? "guard" : "watch";
		return `city ${noun}`;
	} else if(o == 3) {
		return "temple guard";
	} else if(o == 4) {
		let noun = Math.random < 0.50 ? "militia" : "rangers";
		return `border ${noun}`;
	} else if(o == 5) {
		return "private bodyguard";
	} else if(o == 6) {
		let noun = Math.random < 0.50 ? "engineer" : "sapper";
		return `border ${noun}`;
	} else if(o == 7) {
		return "scouts";
	} else if(o == 8) {
		return "navy";
	} else if(o == 9) {
		return "shipboard marine";
	} else if(o == 10) {
		return "messenger";
	} else if(o == 11) {
		return "caravan guard";
	} else if(o == 12) {
		return "border guard";
	}
}


function generateBackground() {
	const birthValues = [ "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth" ];
	let birth = birthValues[Math.floor(Math.random() * birthValues.length)];
	let parentOccupation = randParentOccupation();

	document.getElementById('bg').innerHTML = `You are the <b>${birth}</b> child of a <b>${parentOccupation}</b>.  During your childhood...<br />`

	let upbringing = [];
	let upbringingCount = Math.floor(Math.random() * 4) + 1
	for(let i = 0; i < upbringingCount; i++) {
		upbringing.push(randUpbringing());
	}
	for(let i = 0; i < upbringing.length; i++) {
		document.getElementById('bg').innerHTML += `...<b>${upbringing[i]}</b>. <br />`
	}

	let adulthood = [];
	let adulthoodCount = Math.floor(Math.random() * 4) + 1
	for(let i = 0; i < adulthoodCount; i++) {
		adulthood.push(randYoungAdulthood());
	}
	document.getElementById('bg').innerHTML += `During your adulthood...<br />`;
	for(let i = 0; i < adulthood.length; i++) {
	document.getElementById('bg').innerHTML += `...<b>${adulthood[i]}</b> <br />`;
	}
}

function writeLabel(id, name, value) {
	document.getElementById(id).innerHTML = `${name}: ${value}`;
}

function generateCharacter() {
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

	let name = randName();
	let stre = rollMethodFunc();
	let inte = rollMethodFunc();
	let wisd = rollMethodFunc();
	let dext = rollMethodFunc();
	let cons = rollMethodFunc();
	let cha = rollMethodFunc();

	let strem = getModifier(stre);
	let intem = getModifier(inte);
	let wisdm = getModifier(wisd);
	let dextm = getModifier(dext);
	let consm = getModifier(cons);
	let cham = getModifier(cha);

	let inv = randInventory();
	let invString = "";
	for(let i = 0; i < inv.length; i++) {
		invString += inv[i] + "<br />";
	}

	if(rollMethodChosen == "4d6any") {
		writeLabel('name', 'Name', name);
		writeLabel('astr', 'Ability 1', stre + " " + getModifierString(strem));
		writeLabel('aint', 'Ability 2', inte + " " + getModifierString(intem));
		writeLabel('awis', 'Ability 3', wisd + " " + getModifierString(wisdm));
		writeLabel('adex', 'Ability 4', dext + " " + getModifierString(dextm));
		writeLabel('acon', 'Ability 5', cons + " " + getModifierString(consm));
		writeLabel('acha', 'Ability 6', cha + " " + getModifierString(cham));
		writeLabel('avgs', '(Average Score)', getAverage([stre, inte, wisd, dext, cons, cha]).toFixed(2));
		writeLabel('inv', 'Inventory:', invString);
	} else {
		writeLabel('name', 'Name', name);
		writeLabel('astr', 'Strength', stre + " " + getModifierString(strem));
		writeLabel('aint', 'Intelligence', inte + " " + getModifierString(intem));
		writeLabel('awis', 'Wisdom', wisd + " " + getModifierString(wisdm));
		writeLabel('adex', 'Dexterity', dext + " " + getModifierString(dextm));
		writeLabel('acon', 'Constitution', cons + " " + getModifierString(consm));
		writeLabel('acha', 'Charisma', cha + " " + getModifierString(cham));
		writeLabel('avgs', '(Average Score)', getAverage([stre, inte, wisd, dext, cons, cha]).toFixed(2));
		writeLabel('inv', 'Inventory', invString);
	}
	//writeLabel('avgm', '(Average Modifier)', getAverage([c['astr'], c['aint'], c['awis'], c['adex'], c['acon'], c['acha']]).toFixed(2));
	// TODO: avgm

	// Flavor gen
	generateBackground();
}

generateCharacter();
