let currentFaq = 0;

let getFaqTitleItens = document.querySelectorAll('.content .accordion .item .title');
let getFaqBodyItens = document.querySelectorAll('.content .accordion .item .body');

getFaqTitleItens.forEach((element, index) => {
    element.querySelector('.content .accordion .item .title p').addEventListener('click', () => setFaqBodyItens(index));
});

const setFaqBodyItens = (index) => {
    currentFaq = index;

    if(getFaqBodyItens[currentFaq].classList.contains('opened')) {
        for(let img of getFaqTitleItens) {
            img.querySelector('.content .accordion .item .title img').setAttribute("src", "./assets/images/icon-plus.svg");
        }
        
        for(let item of getFaqBodyItens) {
            item.classList.remove('opened');
        };
        return;
    } else {
        for(let img of getFaqTitleItens) {
            img.querySelector('.content .accordion .item .title img').setAttribute("src", "./assets/images/icon-plus.svg");
        }
        
        for(let item of getFaqBodyItens) {
            item.classList.remove('opened');
        };

        getFaqTitleItens[currentFaq].querySelector('.content .accordion .item .title img').setAttribute("src", "./assets/images/icon-minus.svg")
        getFaqBodyItens[currentFaq].classList.add('opened');
    }
}