class Page {
    constructor() {
        this.navBtnElt = document.querySelectorAll('.btn-nav');
        this.sectionElt = document.querySelectorAll('section');
    }

    clickOnNavBtn() {
        for (let i = 0; i < this.navBtnElt.length; i++) {
            this.navBtnElt[i].addEventListener('click', (e) => {
                e.preventDefault();
                let id = e.target.id.split('btn-nav-')[1];
                for (const elt in this.sectionElt) {
                    elt.classList.toggle('d-none');
                }
                this.sectionElt.map(x => x.classList.toggle('d-none'))
                //this.sectionElt[id].classList.add('');
                console.log('>>>', id);
            });
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const pages = new Page();
    pages.clickOnNavBtn();
});