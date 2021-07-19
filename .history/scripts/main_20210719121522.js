class Page {
    constructor() {
        this.navBtnElt = document.querySelectorAll('.btn-nav');
        this.sectionElt = document.querySelectorAll('section');
    }

    clickOnNavBtn() {
        for (let i = 0; i < this.navBtnElt.length; i++) {
            this.navBtnElt[i].addEventListener('click', (e) => {
                e.preventDefault();
                let navBtnd = e.target.id.split('btn-nav-')[1];
                for (let j = 0; j < this.sectionElt.length; j++) {
                    let sectionId = this.sectionElt[j].
                    if() {
                        this.sectionElt[j].classList.remove('d-none');
                    }
                    else {
                        this.sectionElt[j].classList.add('d-none');
                    }
                }
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