console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth
	const middleEarth = document.createElement('section')
	middleEarth.setAttribute('id', 'middle-earth')

	// 2. use a for loop to iterate over the lands array that does the following:
	for (i=0; i<lands.length; i++) {
	//   2a. creates an article tag (there should be one for each land when the loop is done)
		const land = document.createElement('article')

	//   2b. gives each land article an `id` tag of the corresponding land name
		land.setAttribute('id', lands[i])

	//   2c. includes an h1 with the name of the land inside each land article
		const landName = document.createElement('h1')
		landName.innerText = lands[i]
		land.appendChild(landName)

	//   2d. appends each land to the middle-earth section
		middleEarth.appendChild(land)
	}

	// 3. append the section to the body of the DOM.
	const body = document.querySelector('body')
	body.appendChild(middleEarth)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	// give each hobbit a class of `hobbit`
	const shire = document.getElementById('The-Shire')
	const theHobbits = document.createElement('ul')
	for (i=0; i<hobbits.length; i++) {
		const newHobbit = document.createElement('li')
		newHobbit.setAttribute('class', 'hobbit')
		newHobbit.innerText = hobbits[i]
		theHobbits.appendChild(newHobbit)
	}
	theHobbits.setAttribute('id', 'The-Hobbits')
	shire.appendChild(theHobbits)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	const theRing = document.createElement('div')
	theRing.setAttribute('id', 'the-ring')

	// give the div a class of `'magic-imbued-jewelry'`
	theRing.setAttribute('class', 'magic-imbued-jewelry')

	// add the ring as a child of `Frodo`
	const frodo = document.querySelector('.hobbit')
	frodo.appendChild(theRing)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	// give each of the baddies a class of "baddy"
	// remember to append them to Mordor
	const mordor = document.getElementById('Mordor')
	const theBaddies = document.createElement('ul')
	for (i=0; i<baddies.length; i++) {
		const newBaddy = document.createElement('li')
		newBaddy.setAttribute('class', 'baddy')
		newBaddy.innerText = baddies[i]
		theBaddies.appendChild(newBaddy)
	}
	theBaddies.setAttribute('id', 'The-Baddies')
	mordor.appendChild(theBaddies)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	const aside = document.createElement('aside')

	// put an `unordered list` of the `'buddies'` in the aside
	const theBuddies = document.createElement('ul')
	for (i=0; i<buddies.length; i++) {
		const newBuddy = document.createElement('li')
		newBuddy.setAttribute('class', 'buddy')
		newBuddy.innerText = buddies[i]
		theBuddies.appendChild(newBuddy)
	}
	theBuddies.setAttribute('id', 'The-Buddies')
	aside.appendChild(theBuddies)

	// insert your aside as a child element of `rivendell`
	const rivendell = document.getElementById('Rivendell')
	rivendell.appendChild(aside)
	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
	const theHobbits = document.getElementById('The-Hobbits')
	const rivendell = document.getElementById('Rivendell')
	const shire = document.getElementById('The-Shire')
	shire.removeChild(theHobbits)
	rivendell.appendChild(theHobbits)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`
	const buddies = document.getElementsByClassName('buddy')
	buddies[3].innerText = "Aragorn"
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	theFellowship = document.createElement('div')
	theFellowship.setAttribute('id', 'The-Fellowship')
	const rivendell = document.getElementById('Rivendell')
	rivendell.appendChild(theFellowship)

	oldHobbits = document.getElementsByClassName('hobbit')
	Array.from(oldHobbits).forEach(hobbit => {
		theFellowship.appendChild(hobbit)
		alert(`${hobbit.innerText} has joined the Fellowship!`)
	});
	document.getElementById('The-Hobbits').remove()
	oldBuddies = document.getElementsByClassName('buddy')
	Array.from(oldBuddies).forEach(buddy => {
		theFellowship.appendChild(buddy)
		alert(`${buddy.innerText} has joined the Fellowship!`)
	});
	document.getElementById('The-Buddies').remove()
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they // have joined your party

	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	const gandalf = document.getElementsByClassName('buddy')[0]
	gandalf.innerText = 'Gandalf the White'
	// apply the following style to the element, make the // background 'white', add a grey border
	gandalf.style.backgroundColor = 'white'
	gandalf.style.border = 'thick solid gray'
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert('The Horn of Gondor has been blown!')
	// Boromir's been killed by the Uruk-hai!
	alert('Boromir has been killed by the Uruk-hai!')
	// Remove `Boromir` from the Fellowship
	document.getElementsByClassName('buddy')[4].remove()
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	const mordor = document.getElementById('Mordor')
	mordor.appendChild(document.getElementById('The-Fellowship').childNodes[1])
	mordor.appendChild(document.getElementById('The-Fellowship').childNodes[0])

	// add a div with an id of `'mount-doom'` to `Mordor`
	mountDoom = document.createElement('div')
	mountDoom.setAttribute('id', 'mount-doom')
	mordor.appendChild(mountDoom)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	const gollum = document.createElement('div')
	gollum.setAttribute('id', 'gollum')
	const mordor = document.getElementById('Mordor')
	mordor.appendChild(gollum)

	// Remove `the ring` from `Frodo` and give it to `Gollum`
	const theRing = document.getElementById('the-ring')
	gollum.appendChild(theRing)

	// Move Gollum into Mount Doom
	const mountDoom = document.getElementById('mount-doom')
	mountDoom.appendChild(gollum)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	const mountDoom = document.getElementById('mount-doom')
	mountDoom.removeChild(mountDoom.firstElementChild)

	// Move all the `hobbits` back to `the shire`
	const heroicHalflings = document.getElementsByClassName('hobbit')
	const home = document.getElementById('The-Shire')
	Array.from(heroicHalflings).forEach(hero => {
		home.appendChild(hero)
	})
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
