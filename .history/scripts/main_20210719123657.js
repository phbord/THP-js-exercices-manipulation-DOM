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
                this.__toggleNavBtn(this.navBtnElt, i);
                this.__toggleSectionBlock(this.sectionElt, navBtnId);
                console.log('>>>', navBtnId);
            });
        }
    }

    __toggleNavBtn(btn) {
        for (let j = 0; j < btn.length; j++) {
            if (btnId === sectionDataset) {
                btn[j].classList.remove('btn-outline-danger');
                btn[j].classList.add('btn-danger');
            }
            else {
                btn[j].classList.remove('btn-danger');
                btn[j].classList.add('btn-outline-danger');
            }
        }
    }

    __toggleSectionBlock(block, btnId) {
        for (let j = 0; j < block.length; j++) {
            let sectionDataset = block[j].dataset.btnNavId;
            if (btnId === sectionDataset) {
                block[j].classList.remove('d-none');
            }
            else {
                block[j].classList.add('d-none');
            }
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const pages = new Page();
    pages.clickOnNavBtn();
});