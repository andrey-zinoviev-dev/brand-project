const popup = document.querySelector('.popup');
const attachDocumentPopup = document.querySelector('.doc_send');
const sendMessagePopup = document.querySelector('.popup_send_message');
const uploadImagePage = document.querySelector('.upload_image');
const closeUploadPopup = document.querySelector('.close_popup');
let closeDocPopup;
if(attachDocumentPopup) {
  closeDocPopup = attachDocumentPopup.querySelector('.close_popup');
}

const deleteAccountPopup = document.querySelector('.delete_account');
const signDocs = document.querySelector('.sign_docs');
const hintTop = document.querySelector('.audio_top');
const hintBottom = document.querySelector('.audio_bottom');
const hintDiv = document.querySelector('.hint');
const hintShape = document.querySelector('.shape');
const hintDivBottom = document.querySelector('.hint_bottom');
const hintShapeBottom = document.querySelector('.shape_bottom');
const attachDocument = document.querySelector('.send');
const sendMessage = document.querySelector('.send_message');


if(uploadImagePage) {
  uploadImagePage.addEventListener('click', (evt) => {
    popup.classList.add('popup_opened');
  });
}
closeUploadPopup.addEventListener('click', (evt) => {
  popup.classList.remove('popup_opened');
  attachDocumentPopup.classList.remove('popup_opened');
});
if(deleteAccountPopup) {
  deleteAccountPopup.addEventListener('click', () => {
    popup.classList.add('popup_opened');
  })
}
if(signDocs) {
  signDocs.addEventListener('click', () => {
    popup.classList.add('popup_opened');
  })
}
if (hintTop) {
  hintTop.addEventListener('click', () => {
    hintDiv.classList.toggle('hint_opened');
    hintShape.classList.toggle('hint_opened');
  })
}
if(hintBottom) {
  hintBottom.addEventListener('click', () => {
    hintDivBottom.classList.toggle('hint_opened');
    hintShapeBottom.classList.toggle('hint_opened');
  })
}
if(attachDocument) {
  attachDocument.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
    attachDocumentPopup.classList.add('popup_opened');
  });
  closeDocPopup.addEventListener('click', () => {
    attachDocumentPopup.classList.remove('popup_opened');
  });
}
if(sendMessage) {
  sendMessage.addEventListener('click', () => {
    sendMessagePopup.classList.add('popup_opened');
  })
}
