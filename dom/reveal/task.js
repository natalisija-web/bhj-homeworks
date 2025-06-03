const reveals = document.querySelectorAll('.reveal');
const viewportHeight = window.innerHeight;

const scrollFu = () => {
  for (let i = 0; i < reveals.length; i++) {
    const revealTop = reveals[i].getBoundingClientRect().top;
    if (revealTop < viewportHeight) {
      reveals[i].classList.add('reveal_active');
    } else {
      reveals[i].classList.remove('reveal_active');
    };
  };
};

document.addEventListener('scroll', scrollFu);