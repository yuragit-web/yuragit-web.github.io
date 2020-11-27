let setDiv = document.createElement('form');
setDiv.id = 'Settings';

let rowDiv = document.createElement('div');
rowDiv.className = 'row';

let cellDiv = document.createElement('div');
cellDiv.className = 'cell unpressed';

let inputWidth = document.createElement('input');
inputWidth.id = 'widthI';
inputWidth.type = 'number';
inputWidth.min = 1;
inputWidth.step = 1;
inputWidth.required = true;
inputWidth.value = '10';

let inputHeight = document.createElement('input');
inputHeight.id = 'heightI';
inputHeight.type = 'number';
inputHeight.min = 1;
inputHeight.step = 1;
inputHeight.required = true;
inputHeight.value = '10';

let inputBombs = document.createElement('input');
inputBombs.id = 'bombsI';
inputBombs.type = 'number';
inputBombs.min = 1;
inputBombs.step = 1;
inputBombs.required = true;
inputBombs.value = '1';

let genBut = document.createElement('input');
genBut.type = 'button';
genBut.value = 'Почати гру';

let saperArr = new Array();
let endGame = false;
let pressedI;
let pressedJ;
let flaqCount;
let currenNull;
let w, h;
let emptyCells = 0;
let wayI = 0,
    wayI2 = 0;
let wayJ = 0,
    wayJ2 = 0;

function createCanvas(w, h) {
    if (document.getElementById('mainCanvas') == null) {
        let saperCanvas = document.createElement('div');
        saperCanvas.setAttribute('id', 'mainCanvas');
        document.body.appendChild(saperCanvas);
        saperCanvas.appendChild(rowDiv);
        saperCanvas.firstChild.appendChild(cellDiv);
        for (let i = 0; i < w - 1; i++) {
            let cell2 = cellDiv.cloneNode(true);
            saperCanvas.firstChild.appendChild(cell2);
        }
        for (let i = 0; i < h - 1; i++) {
            let row2 = saperCanvas.firstChild.cloneNode(true);
            saperCanvas.insertBefore(row2, saperCanvas.nextSibling);
        }

        document.getElementById('mainCanvas').addEventListener('contextmenu', function(event) {
            event.preventDefault();
            if (event.target.className == 'cell unpressed' && endGame != true) {
                let parent;
                for (let i = 0; i < h; i++) {
                    parent = document.getElementsByClassName('row')[i];
                    for (let j = 0; j < w; j++) {
                        if (parent.children[j] == event.target && endGame != true) {
                            if (event.target.style.backgroundColor == 'yellow') {
                                flaqCount++;
                                event.target.style.backgroundColor = 'cadetblue';
                            } else if (flaqCount != 0) {
                                flaqCount--;
                                event.target.style.backgroundColor = 'yellow';
                            }
                        }
                    }
                }
            }
        });

        document.getElementById('mainCanvas').addEventListener('click', function(event) {
            if (event.target.className == 'cell unpressed' && endGame != true) {
                let parent;
                for (let i = 0; i < h; i++) {
                    parent = document.getElementsByClassName('row')[i];
                    for (let j = 0; j < w; j++) {
                        if (parent.children[j] == event.target) {
                            pressedI = i;
                            pressedJ = j;
                            if (saperArr[pressedI][pressedJ] == 1) {
                                if (event.target.style.backgroundColor == 'yellow') {
                                    flaqCount++;
                                }
                                event.target.innerHTML = '1';
                                event.target.style.color = 'blue';
                                event.target.style.backgroundColor = 'white';
                                event.target.classList.remove('unpressed');

                            }
                            if (saperArr[pressedI][pressedJ] == 2) {
                                if (event.target.style.backgroundColor == 'yellow') {
                                    flaqCount++;
                                }
                                event.target.innerHTML = '2';
                                event.target.style.color = 'green';
                                event.target.style.backgroundColor = 'white';
                                event.target.style.boxShadow = ' ';
                                event.target.classList.remove('unpressed');
                            }
                            if (saperArr[pressedI][pressedJ] == 3) {
                                if (event.target.style.backgroundColor == 'yellow') {
                                    flaqCount++;
                                }
                                event.target.innerHTML = '3';
                                event.target.style.color = 'red';
                                event.target.style.backgroundColor = 'white';
                                event.target.classList.remove('unpressed');
                            }
                            if (saperArr[pressedI][pressedJ] == -1) {
                                deadEnd();
                            }
                            if (saperArr[pressedI][pressedJ] == 0) {
                                wayJ = pressedJ;
                                wayI = pressedI;
                                emptySpace();
                            }
                        }
                    }
                }
            }
        });
    }
}

function deadEnd() {
    endGame = true;
    for (let i = 0; i < h; i++) {
        parent = document.getElementsByClassName('row')[i];
        for (let j = 0; j < w; j++) {
            if (saperArr[i][j] == -1) {
                parent.children[j].innerHTML = '<img src="bomb.png">';
                parent.children[j].style.backgroundColor = 'red';
                parent.children[j].classList.remove('unpressed');
            }
        }
    }
}

function emptySpace() {
    if (wayI >= 0 && wayJ >= 0 && wayI != h) {
        let parent2 = document.getElementsByClassName('row')[wayI];
        if (saperArr[wayI][wayJ] == 0 && parent2.children[wayJ].classList.contains('unpressed')) {
            parent2.children[wayJ].classList.remove('unpressed');
            emptyCells--;
        }

        while (saperArr[wayI][wayJ + 1] == 0 && (wayJ + 1) < w) {
            wayJ++;
            let parent2 = document.getElementsByClassName('row')[wayI];
            parent2.children[wayJ].classList.remove('unpressed');
            emptyCells--;
        }
    } else {
        return;
    }

    if (wayI - 1 != -1)
        if (saperArr[wayI - 1][wayJ] == 0) {
            wayI--;
            wayJ = pressedJ;
            emptySpace();
        } else {
            return;
        }
    else {
        wayJ = pressedJ;
        wayI = pressedI;
        emptySpace2();
    }
}

function emptySpace2() {
    if (wayI >= 0 && wayJ >= 0 && wayI != h) {
        let parent2 = document.getElementsByClassName('row')[wayI];
        if (saperArr[wayI][wayJ] == 0 && parent2.children[wayJ].classList.contains('unpressing')) {
            parent2.children[wayJ].classList.remove('unpressed');
            emptyCells--;
        }
        while (saperArr[wayI][wayJ - 1] == 0 && (wayJ - 1) >= 0) {
            wayJ--;
            let parent2 = document.getElementsByClassName('row')[wayI];
            parent2.children[wayJ].classList.remove('unpressed');
            emptyCells--;
        }
    } else {
        return;
    }
    if (wayI - 1 != -1)
        if (saperArr[wayI - 1][wayJ] == 0) {
            wayI--;
            wayJ = pressedJ;
            emptySpace2();
        } else {
            return;
        }
    else {
        wayJ = pressedJ;
        wayI = pressedI;
        emptySpace3();
    }
}

function emptySpace3() {
    if (wayI >= 0 && wayJ >= 0 && wayI != h) {
        let parent2 = document.getElementsByClassName('row')[wayI];
        if (saperArr[wayI][wayJ] == 0 && parent2.children[wayJ].classList.contains('unpressing')) {
            parent2.children[wayJ].classList.remove('unpressed');
            emptyCells--;
        }
        while (saperArr[wayI][wayJ - 1] == 0 && (wayJ - 1) >= 0 && parent2.children[wayJ - 1].classList.contains('unpressing')) {
            wayJ--;
            let parent2 = document.getElementsByClassName('row')[wayI];
            parent2.children[wayJ].classList.remove('unpressed');
            emptyCells--;
        }
    } else {
        return;
    }
    if (wayI + 1 != h)
        if (saperArr[wayI + 1][wayJ] == 0) {
            wayI++;
            wayJ = pressedJ;
            emptySpace3();
        } else {
            return;
        }
    else {
        wayJ = pressedJ;
        wayI = pressedI;
        emptySpace4();
    }
}

function emptySpace4() {
    if (wayI >= 0 && wayJ >= 0 && wayI != h) {
        let parent2 = document.getElementsByClassName('row')[wayI];
        if (saperArr[wayI][wayJ] == 0 && parent2.children[wayJ].classList.contains('unpressing')) {
            parent2.children[wayJ].classList.remove('unpressed');
            emptyCells--;
        }
        while (saperArr[wayI][wayJ + 1] == 0 && (wayJ + 1) < w) {
            wayJ++;
            let parent2 = document.getElementsByClassName('row')[wayI];
            parent2.children[wayJ].classList.remove('unpressed');
            emptyCells--;
        }
    } else {
        return;
    }
    if (wayI + 1 != h)
        if (saperArr[wayI + 1][wayJ] == 0) {
            wayI++;
            wayJ = pressedJ;
            emptySpace4();
        } else {
            return;
        }
    else {
        return;
    }
}

function generateSaperArr(w, h) {
    for (let i = 0; i < h; i++) {
        saperArr[i] = new Array();
        for (let j = 0; j < w; j++) {
            saperArr[i][j] = 0;
        }
    }
    let bombsCount = inputBombs.value;
    while (bombsCount != 0) {
        let randX = Math.floor(Math.random() * h);
        let randY = Math.floor(Math.random() * w);
        if (saperArr[randX][randY] != -1) {
            saperArr[randX][randY] = -1;
            bombsCount--;
        }
    }
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (saperArr[i][j] != -1) {
                if (i != 0) {
                    if (saperArr[i - 1][j] == -1) {
                        saperArr[i][j]++;
                    }
                    if (saperArr[i - 1][j - 1] == -1) {
                        saperArr[i][j]++;
                    }
                }
                if (i + 1 != h) {
                    if (saperArr[i + 1][j] == -1) {
                        saperArr[i][j]++;
                    }
                }
                if (j != 0) {
                    if (saperArr[i][j - 1] == -1) {
                        saperArr[i][j]++;
                    }
                }
                if (j + 1 != w) {
                    if (saperArr[i][j + 1] == -1) {
                        saperArr[i][j]++;
                    }
                }
                if (i + 1 != h && j + 1 != w) {
                    if (saperArr[i + 1][j + 1] == -1) {
                        saperArr[i][j]++;
                    }
                }
                if (i != 0 && j != w) {
                    if (saperArr[i - 1][j + 1] == -1) {
                        saperArr[i][j]++;
                    }
                }
                if (i + 1 != h && j != 0) {
                    if (saperArr[i + 1][j - 1] == -1) {
                        saperArr[i][j]++;
                    }
                }
            }
        }
    }
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (saperArr[i][j] == 0) {
                emptyCells++;
            }
        }
    }
}


genBut.onclick = function() {
    w = +inputWidth.value;
    h = +inputHeight.value;
    createCanvas(w, h);
    generateSaperArr(w, h);
    inputWidth.style.display = 'none';
    inputHeight.style.display = 'none';
    inputBombs.style.display = 'none';
    genBut.style.display = 'none';
    flaqCount = +inputBombs.value;
}

window.onload = function() {
    document.body.appendChild(setDiv)
    setDiv.appendChild(inputWidth);
    setDiv.appendChild(inputHeight);
    setDiv.appendChild(inputBombs);
    setDiv.appendChild(genBut);
}