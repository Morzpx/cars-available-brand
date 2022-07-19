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

    /*vw menu*/
    document.querySelector('.more').addEventListener('click', () => {
        document.querySelector('.vw-page_header').classList.toggle('--is-vw-open')
    })
    /*vw menu*/

    document.querySelector('.scrollTop').addEventListener('click', () => {
        toTop();
    })

})

/*scroll*/
const toTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
        }
    )
}
/*scroll*/

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
