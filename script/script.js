const btn = document.querySelector('.main__button');
const clickCounter = document.querySelector('.main__text');
const clickBoosters = [...document.querySelectorAll('.section__element')];
const saveBtn = [...document.querySelectorAll('.menu__button')][0];
const loadBtn = [...document.querySelectorAll('.menu__button')][1];


let multiply = 1;
let autoClickAdder = 0;

const clickCounterTakeAmount = amount => clickCounter.innerText = Number(clickCounter.innerText) - amount;
const changeMultiply = () => multiply++;
const changeAutoClick = () => autoClickAdder++;

const whenBtnClicked = () => clickCounter.innerText = Number(clickCounter.innerText) + 1 * multiply;


setInterval(() => { clickCounter.innerText = Number(clickCounter.innerText) + autoClickAdder; }, 1000);

const save = function () {
    localStorage.setItem('SaveWasDone', true);
    localStorage.setItem('clickValue', clickCounter.innerText);
    localStorage.setItem('multiplyValue', multiply);
    localStorage.setItem('autoClickAdderValue', autoClickAdder);
    localStorage.setItem('autoClickBoosterAmount', clickBoosters[0].children[0].innerText);
    localStorage.setItem('multiplyClickBoosterAmount', clickBoosters[1].children[0].innerText);
    localStorage.setItem('multiplyClickBoosterText', clickBoosters[1].children[1].innerText);
}
const load = function () {
    if(localStorage.getItem('SaveWasDone')){
    clickCounter.innerText = localStorage.getItem('clickValue');
    multiply = Number(localStorage.getItem('multiplyValue'));
    autoClickAdder = Number(localStorage.getItem('autoClickAdderValue'));
    clickBoosters[0].children[0].innerText = localStorage.getItem('autoClickBoosterAmount');
    clickBoosters[1].children[0].innerText = localStorage.getItem('multiplyClickBoosterAmount');
    clickBoosters[1].children[1].innerText = localStorage.getItem('multiplyClickBoosterText');
}
}
btn.addEventListener('click', () => {
    whenBtnClicked();
});
clickBoosters.forEach((el, index) => {
    el.addEventListener('click', () => {
        if (index === 0) {
            if (Number(clickCounter.innerText) >= Number(el.children[0].innerText)) {
                let amount = Number(el.children[0].innerText);
                clickCounterTakeAmount(amount);
                changeAutoClick();
                el.children[0].innerText = el.children[0].innerText*2
            }
        }
        if (index === 1) {
            if (Number(clickCounter.innerText) >= Number(el.children[0].innerText)) {
                let amount = Number(el.children[0].innerText);
                clickCounterTakeAmount(amount);
                changeMultiply();
                el.children[0].innerText = el.children[0].innerText*2
                el.children[1].innerText = `Click multiplier x${multiply+1} `
            }
        }
    })
});

saveBtn.addEventListener('click', () => {
    save();
});
loadBtn.addEventListener('click', () => {
    load();
})
