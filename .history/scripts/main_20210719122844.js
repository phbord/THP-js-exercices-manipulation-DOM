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
                __toggleSectionBlock(this.sectionElt, navBtnId)
                //this.sectionElt[id].classList.add('');
                console.log('>>>', navBtnId);
            });
        }
    }

    __toggleSectionBlock(block, btnId) {
        for (let j = 0; j < block.length; j++) {
            let sectionDataset = block[j].dataset.btnNavId;
            if(btnId === sectionDataset) {
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