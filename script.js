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



const tileClicked = [];
let check = false;

function getTile(num) {
	return document.getElementById(`tile${num}`);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function item(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array[0];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

setTimeout(() => {
	getBoard.style.transform = 'translate(0px)';
}, 100);

const fh = item(['>','','','','','','','','','','']);
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

		const currentTileElement = getTile(i);
	} else {
		if (i == 17) {
			currentTile.innerHTML = freeSpace;
			currentTile.style.fontSize = '30px';
		} else {
			//currentTile.innerHTML = list[i];
			currentTile.innerHTML = i;
		}
	}

	tileClicked[i] = false;

	getBoard.appendChild(currentTile);

	console.log(currentTile);
}

for (let i = 5; i < 30; i++) {
  getTile(i).addEventListener('mousedown', (event) => {
    tileClicked[i] = true;
    event.target.style.transform = `scale(0.8) rotate(${getRandomInt(-25, 25)}deg)`;
    event.target.style.backgroundColor = '#495297';
    check = true;

    if (check) {
      check = false;

      for (let i = 0; i < pw.length; i++) {
        let win = true;

        for (let j = 0; j < pw[i].length; j++) {
          if (!tileClicked[pw[i][j]]) {
            win = false;
            break;
          }
        }

        if (win) {
          for (let k = 0; k < 5; k++) {
            getTile(pw[i][k]).style.backgroundColor = '#499756';
            getTile(pw[i][k]).style.color = '#ffffff';
						getTile(pw[i][k]).style.transform = 'scale(1)';
          }
        }
      }
    }

  });
}

const pw = [
	[5,6,7,8,9],
	[10,11,12,13,14],
	[15,16,17,18,19],
	[20,21,22,23,24],
	[25,26,27,28,29],

	[5,10,15,20,25],
	[6,11,16,21,26],
	[7,12,17,22,27],
	[8,13,18,23,28],
	[9,14,19,24,29],

	[5,11,17,23,29],
	[9,13,17,21,25]
];
