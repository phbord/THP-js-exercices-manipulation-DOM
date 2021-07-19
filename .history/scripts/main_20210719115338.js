class Page {
    constructor() {
        this.navBtnElt = document.querySelectorAll('.btn-nav');
        this.sectionElt = document.querySelectorAll('section');
    }

    clickOnNavBtn() {
        console.log('>>> ',this.navBtnElt[1]);
        for (let i = 0; i < this.navBtnElt.length; i++) {
            console.log('for >>>',i);
            this.navBtnElt[i].addEventListener('click', (e) => {
                e.preventDefault();
                console.log('>>>', e);
            });
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const pages = new Page();
    pages.clickOnNavBtn();
});