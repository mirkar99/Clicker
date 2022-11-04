const btn = document.querySelector('.main__button');
const clickCounter = document.querySelector('.main__text');
const clickBoosters = [...document.querySelectorAll('.section__element')];

let multiply = 1;
let autoClickAdder = 0;

const clickCounterTakeAmount = amount => clickCounter.innerText = Number(clickCounter.innerText) - amount;
const changeMultiply = a => multiply = a;
const deleteDomElement = el => el.remove();
const showHiddenBoosters = (index) => clickBoosters[index + 1].classList.remove('hidden');

const whenBtnClicked = () => clickCounter.innerText = Number(clickCounter.innerText) + 1 * multiply;
const whenMultiplierBtnClicked = function (amount, el, multiplyBy) {
    clickCounterTakeAmount(amount);
    deleteDomElement(el);
    changeMultiply(multiplyBy);
}

setInterval(() => { clickCounter.innerText = Number(clickCounter.innerText) + autoClickAdder; }, 1000);

btn.addEventListener('click', () => {
    whenBtnClicked();
});
clickBoosters.forEach((el, index) => {
    el.addEventListener('click', () => {
        if (el.children[1].innerHTML == 'Auto click +1') {
            if (Number(clickCounter.innerHTML) >= Number(el.children[0].innerHTML)) {
                let amount = Number(el.children[0].innerHTML);
                el.children[0].innerHTML = Number(el.children[0].innerHTML) * 2
                clickCounterTakeAmount(amount);
                autoClickAdder += 1;
            }
        }
        if (el.children[1].innerHTML == 'Click multiplier x2') {
            if (Number(clickCounter.innerHTML) >= Number(el.children[0].innerHTML)) {
                let amount = Number(el.children[0].innerHTML);
                whenMultiplierBtnClicked(amount, el, 2);
                showHiddenBoosters(index);
            }
        }
        if (el.children[1].innerHTML == 'Click multiplier x3') {
            if (Number(clickCounter.innerHTML) >= Number(el.children[0].innerHTML)) {
                let amount = Number(el.children[0].innerHTML);
                whenMultiplierBtnClicked(amount, el, 3);
                showHiddenBoosters(index);
            }
        }
        if (el.children[1].innerHTML == 'Click multiplier x4') {
            if (Number(clickCounter.innerHTML) >= Number(el.children[0].innerHTML)) {
                let amount = Number(el.children[0].innerHTML);
                whenMultiplierBtnClicked(amount, el, 4);
                showHiddenBoosters(index);
            }
        }
        if (el.children[1].innerHTML == 'Click multiplier x5') {
            if (Number(clickCounter.innerHTML) >= Number(el.children[0].innerHTML)) {
                let amount = Number(el.children[0].innerHTML);
                whenMultiplierBtnClicked(amount, el, 5);
            }
        }
    })
});