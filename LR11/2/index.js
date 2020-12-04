let tab;
let tabContent;

window.onload = function() {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick = function(e) {
    let target = e.target;
    if (target.className == 'tab') {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

//Task 1
function generateByRange() {
    let rtl = document.getElementById('rtl').value;
    let rtr = document.getElementById('rtr').value;
    let rbr = document.getElementById('rbr').value;
    let rbl = document.getElementById('rbl').value;

    let ttl = document.getElementById('ttl');
    let ttr = document.getElementById('ttr');
    let tbr = document.getElementById('tbr');
    let tbl = document.getElementById('tbl');

    let block = document.getElementById('block');

    let cssCode = document.getElementById('cssCode');

    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;

    block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px';
    cssCode.value = 'border-radius: ' + rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px;'
}

function generateByText() {
    let rtl = document.getElementById('rtl');
    let rtr = document.getElementById('rtr');
    let rbr = document.getElementById('rbr');
    let rbl = document.getElementById('rbl');

    let ttl = document.getElementById('ttl').value;
    let ttr = document.getElementById('ttr').value;
    let tbr = document.getElementById('tbr').value;
    let tbl = document.getElementById('tbl').value;

    let block = document.getElementById('block');

    let cssCode = document.getElementById('cssCode');

    rtl.value = ttl;
    rtr.value = ttr;
    rbr.value = tbr;
    rbl.value = tbl;

    block.style.borderRadius = ttl + 'px ' + ttr + 'px ' + tbr + 'px ' + tbl + 'px';
    cssCode.value = 'border-radius: ' + ttl + 'px ' + ttr + 'px ' + tbr + 'px ' + tbl + 'px;'
}

//Task 2
let mainBlock1 = document.getElementById('mainBlock1');
let cssCodeAlignContent = document.getElementById('align-content');

function setAlignContent(sel) {
    mainBlock1.style.alignContent = sel.value;
    cssCodeAlignContent.value = `border: 1px solid #000000;\ndisplay: flex;\nflex-wrap: wrap;\nalign-content: ${sel.value};`;
}

//Task 3
let mainBlock2 = document.getElementById('mainBlock2');
let cssCodeAlignItems = document.getElementById('align-items');


function setAlignItems(sel) {
    mainBlock2.style.alignItems = sel.value;
    cssCodeAlignItems.value = `display: flex;\nalign-items: ${sel.value};`;
}