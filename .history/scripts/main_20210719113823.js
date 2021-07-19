class Page {
    constructor() {
        this.navBtnElt = document.querySelector('.btn-nav');
        this.sectionElt = document.querySelector('section');
    }

    clickOnNavBtn() {
        this.navBtnElt.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('>>>', e)
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const pages = new Page();
});