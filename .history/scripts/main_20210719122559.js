class Page {
    constructor() {
        this.navBtnElt = document.querySelectorAll('.btn-nav');
        this.sectionElt = document.querySelectorAll('section');
    }

    clickOnNavBtn() {
        for (let i = 0; i < this.navBtnElt.length; i++) {
            this.navBtnElt[i].addEventListener('click', (e) => {
                e.preventDefault();
                let navBtnId = e.target.id;
                for (let j = 0; j < this.sectionElt.length; j++) {
                    let sectionDataset = this.sectionElt[j].dataset.btnNavId;
                    if(navBtnId === sectionDataset) {
                        this.sectionElt[j].classList.remove('d-none');
                    }
                    else {
                        this.sectionElt[j].classList.add('d-none');
                    }
                }
                //this.sectionElt[id].classList.add('');
                console.log('>>>', navBtnId);
            });
        }
    }

    __tog
}


document.addEventListener('DOMContentLoaded', () => {
    const pages = new Page();
    pages.clickOnNavBtn();
});