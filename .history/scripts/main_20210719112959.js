class Page {
    constructor() {
        this.navBtnElt = document.querySelector('.btn-nav');
        this.sectionElt = document.querySelector('section');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const pages = new Page();
});