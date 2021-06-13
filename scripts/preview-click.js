body = document.querySelector('body')

appPreview = document.querySelector('#app-screen')

modalBackground = document.querySelector('#download-app-modal')
modal = document.querySelector('#modal-card')
closeModalBtn = document.querySelector('#close-modal')
goToDownloadBtn = document.querySelector('#go-to-download')

userScroll = 0

let closeModal = () => {
    modalBackground.style = "display: none";
    body.style = 'overflow: initial';
}

window.onscroll = function (e) {
    userScroll = window.scrollY;
};

appPreview.addEventListener('click', (e) => {
    modalBackground.style = `display: grid; top: ${userScroll}px`;
    body.style = 'overflow: hidden';
}, false);

modalBackground.addEventListener('click', (e) => {
    if(e.target !== e.currentTarget) {
        console.log("...") 
    } 
    else {
        closeModal();
    }
}, false);

closeModalBtn.addEventListener('click', (e) => {
    closeModal();
}, false);

goToDownloadBtn.addEventListener('click', (e) => {
    closeModal();
}, false);