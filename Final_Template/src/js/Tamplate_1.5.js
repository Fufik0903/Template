function firstSlider(event) {
  const container = document.querySelector('.secondSection__sliderItems');
  Slider(container, event.target.dataset.key)
}

function secondSlider(event) {
  const container = document.querySelector('.thirdSection__sliderItems');
  Slider(container, event.target.dataset.key)
}

function thirdSlider(event) {
  const container = document.querySelector('.fourthSection__sliderItems');
  Slider(container, event.target.dataset.key)
}

function Slider(container, key) {
  const widthElement = 240;
  const marginElement = 16;
  const calculatePosition = key * (widthElement + marginElement);
  container.scrollTo({left: calculatePosition, behavior: "smooth"});
  currentButton();

  function currentButton(element) {
    const elements = document.getElementsByClassName('secondSection__slide');
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove('active');
    }
    elements[key].classList.add('active');
  }
}

function popUpChat(event) {
  const closePopup = document.getElementById('CloseChat');
  const upPopUp = document.getElementById('chatPopup');
  const hide = document.getElementById('general');
  addRemoveFunction(upPopUp, closePopup,hide);
}

function popUpCall(event) {
  const closePopup = document.getElementById('CloseCallBack');
  const upPopUp = document.getElementById('callBackPopup');
  const hide = document.getElementById('general');
  addRemoveFunction(upPopUp, closePopup,hide);
}

function popUpSubMenu(event) {
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

window.onload = function () {
  const firstList = document.getElementsByClassName('secondSection__slide');
  for (let i = 0; i < firstList.length; i++) {
    firstList[i].addEventListener("click", firstSlider);
  }
  const secondList = document.getElementsByClassName('thirdSection__slide');
  for (let i = 0; i < secondList.length; i++) {
    secondList[i].addEventListener("click", secondSlider);
  }
  const thirdList = document.getElementsByClassName('fourthSection__slide');
  for (let i = 0; i < thirdList.length; i++) {
    thirdList[i].addEventListener("click", thirdSlider);
  }
  const buttonChat = document.getElementsByClassName('btnChat');
  for (let i = 0; i < buttonChat.length; i++) {
    buttonChat[i].addEventListener("click", popUpChat);
  }
  const buttonCall = document.getElementsByClassName('btnCall');
  for (let i = 0; i < buttonCall.length; i++) {
    buttonCall[i].addEventListener("click", popUpCall);
  }
  const buttonSubMenu = document.getElementsByClassName('mainSection__btnSubMenu');
  for (let i = 0; i < buttonSubMenu.length; i++) {
    buttonSubMenu[i].addEventListener("click", popUpSubMenu);
  }
}



