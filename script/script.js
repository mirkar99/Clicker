const btn = document.querySelector('.main__button');
const clickCounter = document.querySelector('.main__text');
const clickBoosters = [...document.querySelectorAll('.section__element')];
const saveBtn = [...document.querySelectorAll('.menu__button')][0];
const loadBtn = [...document.querySelectorAll('.menu__button')][1];

let multiply = 1;
let autoClickAdder = 0;

const clickCounterTakeAmount = amount => clickCounter.innerText = Number(clickCounter.innerText) - amount;
const changeMultiply = () => multiply++;

const whenBtnClicked = () => clickCounter.innerText = Number(clickCounter.innerText) + 1 * multiply;


setInterval(() => { clickCounter.innerText = Number(clickCounter.innerText) + autoClickAdder; }, 1000);

const save = function () {
    localStorage.setItem('SaveWasDone', true);
    localStorage.setItem('clickValue', clickCounter.innerText);
    localStorage.setItem('multiplyValue', multiply);
    localStorage.setItem('autoClickAdderValue', autoClickAdder);
    localStorage.setItem('autoClickBoosterAmount', clickBoosters[0].children[0].innerHTML);
    localStorage.setItem('multiplyClickBoosterAmount', clickBoosters[1].children[0].innerHTML);
    localStorage.setItem('multiplyClickBoosterText', clickBoosters[1].children[1].innerHTML);
}
const load = function () {
    if(localStorage.getItem('SaveWasDone')){
    clickCounter.innerText = localStorage.getItem('clickValue');
    multiply = Number(localStorage.getItem('multiplyValue'));
    autoClickAdder = Number(localStorage.getItem('autoClickAdderValue'));
    clickBoosters[0].children[0].innerHTML = localStorage.getItem('autoClickBoosterAmount');
    clickBoosters[1].children[0].innerHTML = localStorage.getItem('multiplyClickBoosterAmount');
    clickBoosters[1].children[1].innerHTML = localStorage.getItem('multiplyClickBoosterText');
}
}
btn.addEventListener('click', () => {
    whenBtnClicked();
});
clickBoosters.forEach((el, index) => {
    el.addEventListener('click', () => {
        if (index === 0) {
            if (Number(clickCounter.innerHTML) >= Number(el.children[0].innerHTML)) {
                let amount = Number(el.children[0].innerHTML);
                el.children[0].innerHTML = Number(el.children[0].innerHTML) * 2;
                clickCounterTakeAmount(amount);
                autoClickAdder += 1;
            }
        }
        if (index === 1) {
            if (Number(clickCounter.innerHTML) >= Number(el.children[0].innerHTML)) {
                let amount = Number(el.children[0].innerHTML);
                clickCounterTakeAmount(amount);
                changeMultiply();
                el.children[0].innerHTML = Number(el.children[0].innerHTML) * 2;
                el.children[1].innerHTML = `Click multiplier x${multiply + 1}`;
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