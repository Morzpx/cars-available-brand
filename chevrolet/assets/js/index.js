document.addEventListener('DOMContentLoaded', () => {

    /*menu*/

    document.querySelector('.burger').addEventListener('click', () => {
        let body = document.querySelector('body').classList.toggle('--is-visible')
        disable();
    })
    document.querySelector('.close').addEventListener('click', () => {
        let body = document.querySelector('body').classList.toggle('--is-visible')
        enable()
    })

    /*menu*/

})

/*no scroll*/

const body = document.querySelector('body');
let scrollPosition = 0;
let styles = {
    //	"width": "100%",
    //	"height": "100%",
    "overflow": "hidden",
    //	"position": "fixed",
    //	"-ms-scroll-chaining": "none",
    //	"overscroll-behavior": "contain",
};

let disable = () => {
    Object.keys(styles).forEach(key => {
        body.style[key] = styles[key];
    })
}

let enable = () => {
    Object.keys(styles).forEach(key => {
        body.style.removeProperty(key);
    })
}

/*no scroll*/
