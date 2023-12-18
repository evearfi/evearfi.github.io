// console.log('head_btns.js loaded');


const head_btns = document.getElementsByClassName('headBtn');

const head_btns_attributes = [
    "",
    "aff",
    "impr",
    "photo",
    "anim",
    "illu",
    "prog",
];

for (let head_btn of head_btns) {
    head_btn.addEventListener('click', () => {

        for (let other_btns of head_btns) {
            other_btns.classList.remove('catSelected');
        }
        head_btn.classList.add('catSelected');
    })
}

const project_prevs = document.getElementsByClassName('project-prev');

for (let i = 0; i < head_btns.length; i++) {
    head_btns[i].addEventListener('click', () => {
        let corresponding_prev = document.getElementsByClassName(
            `project-prev ${head_btns_attributes[i]}`
        );

        // console.log(corresponding_prev);
        for (let prev of project_prevs) {
            prev.classList.add('hiddenPrev');
        }

        for (let cprev of corresponding_prev) {
            cprev.classList.remove('hiddenPrev');
        }

    });
}
