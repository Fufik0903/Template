
function clickHandler(event) {
    const widthElement = 240;
    const marginElement = 16;
    const key = event.target.dataset.key;
    const container = document.querySelector('.slider__items');
    const calculatePosition = key * (widthElement + marginElement);
    container.scrollTo({left: calculatePosition, behavior: "smooth"});
    currentButton();
    function currentButton(element) {
        const elements = document.getElementsByClassName('slide');
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove('active');
        }
        elements[key].classList.add('active');
    }
}
window.onload = function () {
    const list = document.getElementsByClassName('slide');
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", clickHandler);
    }
}
