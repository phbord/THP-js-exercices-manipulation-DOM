class Page {
    constructor() {
        this.navBtnElt = document.querySelectorAll('.btn-nav');
        this.sectionElt = document.querySelectorAll('section');
    }

    clickOnNavBtn() {
        for (let i = 0; i < this.navBtnElt.length; i++) {
            this.navBtnElt[i].addEventListener('click', (e) => {
                e.preventDefault();
                let id = e.split(e.target.id);
                console.log('>>>', id);
            });
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const pages = new Page();
    pages.clickOnNavBtn();
});