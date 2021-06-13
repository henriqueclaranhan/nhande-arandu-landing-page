const body = document.querySelector('body')
const appPreview = document.querySelector('#app-screen')

const modalBackground = document.querySelector('#download-app-modal')
const modal = document.querySelector('#modal-card')

const closeModalBtn = document.querySelector('#close-modal')
const goToDownloadBtn = document.querySelector('#go-to-download')

const showModal = () => {
    modalBackground.style = `display: flex;`;
    body.style = 'overflow: hidden;';
} 

const closeModal = () => {
    modalBackground.style = "display: none;";
    body.style = 'overflow: initial;';
}

const closeModalBg = ({target, currentTarget}) => {
    if (target === currentTarget) {
        closeModal()
    }
}

appPreview.addEventListener('click', showModal, false);

modalBackground.addEventListener('click', closeModalBg, false);
closeModalBtn.addEventListener('click', closeModal, false);
goToDownloadBtn.addEventListener('click', closeModal, false);