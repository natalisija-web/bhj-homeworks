const rotators = Array.from(document.getElementsByClassName('rotator__case'));
let index = 0;
const max = rotators.length;
let speed = rotators[index].getAttribute('data-speed')

const rotator = () => {
    index++;
    if (index === max) {
        rotators[index - 1].classList.remove('rotator__case_active');
        index = 0;
        let timeNow = new Date()
    } else {
        rotators[index - 1].classList.remove('rotator__case_active');
    };
    rotators[index].classList.add('rotator__case_active');
    rotators[index].style.color = rotators[index].getAttribute('data-color');
    speed = rotators[index].getAttribute('data-speed');
    setTimeout(rotator, speed);
};

setTimeout(rotator, speed);