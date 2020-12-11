let sizeX = 0,
    sizeY = 0;
let bombsCount = 0;

let tileSize = 30;

let board = document.querySelector('.board');
let tiles;

let restartBtn = document.querySelector('.btn');
let endScreen = document.querySelector('.endScreen')

let bombs = [];
let numbers = [];
let numberColors = ['#3498db', '#2ecc71', '#e74c3c', '#9b59b6', '#f1c40f', '#1abc9c', '#34495e', '#7f8c8d', ];
let endScreenContent = {
    win: '<span>✔</span> ви перемогли!',
    loose: '💣 Бууум! Гра завершена.'
};

let gameOver = false;

let form = document.querySelector('#settings');
let inputSizeX = document.querySelector('#sizeX');
let inputSizeY = document.querySelector('#sizeY');
let inputBombsCount = document.querySelector('#bombsCount');

//Очищення
function clear() {
    gameOver = false;
    bombs = [];
    numbers = [];
    endScreen.innerHTML = '';
    endScreen.classList.remove('show');
    tiles.forEach(tile => {
        tile.remove();
    });
    form.style.display = 'flex';
    board.style.display = 'none';
    restartBtn.style.display = 'none';
}


//Ініціалізація
function setup() {
    for (let i = 0; i < sizeX * sizeY; i++) {
        let tile = document.createElement('div');
        tile.classList.add('tile');
        board.appendChild(tile);
    }
    tiles = document.querySelectorAll('.tile');
    board.style.width = sizeX * tileSize + 'px';

    document.documentElement.style.setProperty('--tileSize', `${tileSize}px`);
    document.documentElement.style.setProperty('--boardSize', `${sizeX * tileSize}px`);

    let x = 0;
    let y = 0;
    let nums = [];

    for (let i = 0; i < bombsCount; i++) {
        let pos = {
            x: Math.round(Math.random() * (sizeX - 1)),
            y: Math.round(Math.random() * (sizeY - 1))
        }
        if (bombs.findIndex(b => (b.x === pos.x && b.y === pos.y)) === -1) {
            bombs.push({
                x: pos.x,
                y: pos.y
            });
            if (pos.x > 0) nums.push({
                x: pos.x - 1,
                y: pos.y,
                num: 1
            });
            if (pos.x < sizeX - 1) nums.push({
                x: pos.x + 1,
                y: pos.y,
                num: 1
            });
            if (pos.y > 0) nums.push({
                x: pos.x,
                y: pos.y - 1,
                num: 1
            });
            if (pos.y < sizeY - 1) nums.push({
                x: pos.x,
                y: pos.y + 1,
                num: 1
            });

            if (pos.x > 0 && pos.y > 0) nums.push({
                x: pos.x - 1,
                y: pos.y - 1,
                num: 1
            });
            if (pos.x < sizeX - 1 && pos.y < sizeY - 1) nums.push({
                x: pos.x + 1,
                y: pos.y + 1,
                num: 1
            });

            if (pos.y > 0 && pos.x < sizeX - 1) nums.push({
                x: pos.x + 1,
                y: pos.y - 1,
                num: 1
            });
            if (pos.x > 0 && pos.y < sizeY - 1) nums.push({
                x: pos.x - 1,
                y: pos.y + 1,
                num: 1
            });
        } else {
            i--;
        }
    }

    tiles.forEach((tile, i) => {
        tile.oncontextmenu = function(e) {
            e.preventDefault();
            flag(tile);
        }

        tile.addEventListener('click', function(e) {
            clickTile(tile, i);
        });
    });
    nums.forEach(num => {
        if (numbers.findIndex(n => (n.x === num.x && n.y === num.y)) !== -1) {
            numbers[numbers.findIndex(n => (n.x === num.x && n.y === num.y))].num++;
        } else {
            numbers.push(num);
        }
    });
}


//Прапорці
function flag(tile) {
    if (gameOver) return;
    if (!tile.classList.contains('tile--checked')) {
        if (!tile.classList.contains('tile--flagged')) {
            tile.innerHTML = '🚩';
            tile.classList.add('tile--flagged');
        } else {
            tile.innerHTML = '';
            tile.classList.remove('tile--flagged');
        }
    }
    setTimeout(() => {
        checkVictory();
    }, 100);
}


//Перевірка чи бомба
function clickTile(tile, i) {
    if (gameOver) return;

    if (tile.classList.contains('tile--checked') || tile.classList.contains('tile--flagged')) return;

    let coords = {
        x: (i % sizeX),
        y: (Math.floor(i / sizeX))
    }

    if (bombs.findIndex(b => (b.x === coords.x && b.y === coords.y)) !== -1) {
        endGame();
    } else {
        if (numbers.findIndex(n => (n.x === coords.x && n.y === coords.y)) !== -1) {
            let num = numbers[numbers.findIndex(n => (n.x === coords.x && n.y === coords.y))].num;
            tile.classList.add('tile--checked');
            tile.innerHTML = num;
            tile.style.color = numberColors[num - 1];
            setTimeout(() => {
                checkVictory();
            }, 100);
            return;
        }

        checkTile(coords);
    }
    tile.classList.add('tile--checked');
}

//Пусті поля
function checkTile(coordinate) {
    let x = coordinate.x;
    let y = coordinate.y;

    setTimeout(() => {
        if (x > 0) {
            clickTile(tiles[((x - 1) + (y * sizeX))], ((x - 1) + (y * sizeX)));
        }
        if (x < sizeX - 1) {
            clickTile(tiles[((x + 1) + (y * sizeX))], ((x + 1) + (y * sizeX)));
        }
        if (y > 0) {
            clickTile(tiles[(x + ((y - 1) * sizeX))], (x + ((y - 1) * sizeX)));
        }
        if (y < sizeY - 1) {
            clickTile(tiles[(x + ((y + 1) * sizeX))], (x + ((y + 1) * sizeX)));
        }

        if (x > 0 && y > 0) {
            clickTile(tiles[((x - 1) + ((y - 1) * sizeX))], ((x - 1) + ((y - 1) * sizeX)));
        }
        if (x < sizeX - 1 && y < sizeY - 1) {
            clickTile(tiles[((x + 1) + ((y + 1) * sizeX))], ((x + 1) + ((y + 1) * sizeX)));
        }

        if (y > 0 && x < sizeX - 1) {
            clickTile(tiles[((x + 1) + ((y - 1) * sizeX))], ((x + 1) + ((y - 1) * sizeX)));
        }
        if (x > 0 && y < sizeY - 1) {
            clickTile(tiles[((x - 1) + ((y + 1) * sizeX))], ((x - 1) + ((y + 1) * sizeX)));
        }
    }, 10);
}


//Кінець
function endGame() {
    endScreen.innerHTML = endScreenContent.loose;
    endScreen.classList.add('show');
    gameOver = true;
    tiles.forEach((tile, i) => {
        let coords = {
            x: (i % sizeX),
            y: (Math.floor(i / sizeX))
        }
        if (bombs.findIndex(b => (b.x === coords.x && b.y === coords.y)) !== -1) {
            tile.classList.remove('tile--flagged');
            tile.classList.add('tile--checked', 'tile--bomb');
            tile.innerHTML = '💣';
        }
    });
}

//Перемога
function checkVictory() {
    let win1 = true;
    let win2 = true;
    tiles.forEach((tile, i) => {
        let coords = {
            x: (i % sizeX),
            y: (Math.floor(i / sizeX))
        }
        if (!tile.classList.contains('tile--checked') && !(bombs.findIndex(b => (b.x === coords.x && b.y === coords.y)) !== -1)) {
            win1 = false;
        }
        if (!tile.classList.contains('tile--flagged') && (bombs.findIndex(b => (b.x === coords.x && b.y === coords.y)) !== -1)) {
            win2 = false;
        }
    });
    if (win1 || win2) {
        endScreen.innerHTML = endScreenContent.win;
        endScreen.classList.add('show');
        gameOver = true;
    }
}

restartBtn.onclick = function(e) {
    e.preventDefault();
    clear();
}

form.onsubmit = function(e) {
    e.preventDefault();
    sizeX = parseInt(inputSizeX.value);
    sizeY = parseInt(inputSizeY.value);
    bombsCount = parseInt(inputBombsCount.value);
    form.style.display = 'none';
    board.style.display = 'flex';
    restartBtn.style.display = 'flex';
    setup();
}