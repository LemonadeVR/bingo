const getBoard = document.getElementById('board');

// Hello FlyingPig525...
// So uhhhh. Why are you here??

const bingo = 'BINGO';
const bingoListTest = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
const bingoList = [
  'Fursuit Parade',
  "Dealer's Den",
  'Art Prints',
  'Fursuit Maker Booth',
  'Tail Accessories',
  'Hand Paws',
  'Furry Pins',
  'Fursuit Dance Competition',
  'Plushies',
  'Fursuit Repair Station',
  'Furry T-shirts',
  'Furry-themed Hoodies',
  'Furry Stickers',
  'Fursuit Prop Workshop',
  'Furry Comic Books',
  'Fursuit Photography Area',
  'Furry-themed Keychains',
  'Fursuit Walkaround Games',
  'Furry-themed Jewelry',
  'Fursuit Badge Commissions',
  'Furry-themed Hats',
  'Fursuit Dance Workshop',
  'Furry-themed Mugs',
  'Fursuit Lounge Area',
  'Furry-themed Backpacks',
  'Fursuit Maker Q&A Panel',
  'Furry-themed Phone Cases',
  'Fursuit Accessories',
  'Furry-themed Scarves',
  'Furry-themed Enamel Pins',
  'Furry-themed Patches',
  'Furry-themed Lanyards',
  'Furry-themed Posters',
  'Footpaws',
  'Furry-themed Earrings',
  'Furry-themed Tote Bags',
  'Fursuit Maker Demos',
  'Furry-themed Buttons',
  'Furry-themed Vinyl Decals',
  'Maker Consultations'
];



function getTile(num) {
	return document.getElementById(`tile${num}`);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements using destructuring assignment
  }
  return array;
}
function item(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements using destructuring assignment
  }
  return array[0];
}

const fh = item(['>','|','','','','','','','','','','']);
const mh = item([':',';',':']);
const sh = item([')','3','>',']','}']);

const freeSpace = fh + mh + sh;

const list = shuffle(bingoList);

for (let i = 0; i < 30; i++) {
	const currentTile = document.createElement('div');

	currentTile.className = 'tiles';
	currentTile.id = `tile${i}`;

	if (i < 5) {
		currentTile.style.backgroundColor = '#262626';
		currentTile.style.color = '#959595';
		currentTile.style.fontSize = '40px';
		if (bingo.split('')[i]) {
			currentTile.innerHTML = bingo.split('')[i];
		} else {
			currentTile.innerHTML = '';
		}
	} else {
		if (i == 17) {
			currentTile.innerHTML = freeSpace;
			currentTile.style.fontSize = '30px';
		} else {
			currentTile.innerHTML = list[i];
		}
	}
	
	getBoard.appendChild(currentTile);

	console.log(currentTile);
}
