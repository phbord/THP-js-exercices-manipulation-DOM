class Page {
    constructor() {
        this.navBtnElt = document.querySelector('.btn-nav');
        this.sectionElt = document.querySelector('section');
    }

    clickOnNavBtn() {
        let i = 0;
        while (i < this.navBtnElt.length) {
            this.navBtnElt[i].addEventListener('click', (e) => {
                e.preventDefault();
                console.log('>>>', e);
                i
            });
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const pages = new Page();
    pages.clickOnNavBtn();
});