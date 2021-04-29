export function popUpChat(event) {
  const upPopUp = document.getElementById('chatPopup');
  const closePopup = document.getElementById('CloseChat');
  const hide = document.getElementById('general');
  addRemoveFunction(upPopUp, closePopup,hide);
}

export function popUpCall(event) {
  const closePopup = document.getElementById('CloseCallBack');
  const upPopUp = document.getElementById('callBackPopup');
  const hide = document.getElementById('general');
  addRemoveFunction(upPopUp, closePopup,hide);
}

export function popUpSubMenu(event) {
  const closePopup = document.getElementById('CloseSubSection');
  const upPopUp = document.getElementById('subSection');
  const hide = document.getElementById('main');
  addRemoveFunction(upPopUp, closePopup,hide);
}

function addRemoveFunction(upPopUp, closePopup,hide) {
  hide.classList.add('hidden');
  upPopUp.classList.remove("popup");
  closePopup.addEventListener("click", function (event) {
    event.preventDefault();
    upPopUp.classList.add("popup");
    hide.classList.remove('hidden');
  });
}

