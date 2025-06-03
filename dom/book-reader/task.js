const fonts = Array.from(document.getElementsByClassName('font-size'));
const book = document.getElementById('book');
const textColorsContainer = document.querySelector('.book__control_color');
const textColors = Array.from(textColorsContainer.querySelectorAll('.color'));
const bgColorContainer = document.querySelector('.book__control_background');
const bgColors = Array.from(bgColorContainer.querySelectorAll('.color'));

// Изменение шрифта
fonts.forEach(font => {
  font.addEventListener('click', function (event) {
    let index = fonts.indexOf(font);
    findFont = fonts[index].getAttribute('data-size');
    console.log(findFont == 'small');

    if (findFont == 'small') {
      book.classList.add('font-size_small')
      book.classList.remove('font-size_big')
    };

    if (findFont == null) {
      book.classList.remove('font-size_small')
      book.classList.remove('font-size_big')
    };

    if (findFont == 'big') {
      book.classList.add('font-size_big')
      book.classList.remove('font-size_small')
    };

    for (let i = 0; i < fonts.length; i++) {
      fonts[i].classList.remove('font-size_active');
    };

    font.classList.add('font-size_active');
    event.preventDefault();
  });
});

// Изменение цвет шрифта
textColors.forEach(color => {
  color.addEventListener('click', function (event) {
    let index = textColors.indexOf(color);
    findColor = textColors[index].getAttribute('data-text-color');

    if (findColor == 'black') {
      book.classList.add('book_color-black')
      book.classList.remove('book_color-gray')
      book.classList.remove('book_color-whitesmoke')
    };

    if (findColor == 'gray') {
      book.classList.add('book_color-gray')
      book.classList.remove('book_color-black')
      book.classList.remove('book_color-whitesmoke')
    };

    if (findColor == 'whitesmoke') {
      book.classList.add('book_color-whitesmoke')
    };

    for (let i = 0; i < textColors.length; i++) {
      textColors[i].classList.remove('color_active');
    };

    color.classList.add('color_active');
    event.preventDefault();
  });
});

// Изменение фона
bgColors.forEach(color => {
  color.addEventListener('click', function (event) {
    let index = bgColors.indexOf(color);
    findColor = bgColors[index].getAttribute('data-bg-color');
    console.log(findColor)
  
    if (findColor == 'black') {
      book.classList.add('book_bg-black')
      book.classList.remove('book_bg-gray')
      book.classList.remove('book_bg-white')
    };

    if (findColor == 'gray') {
      book.classList.add('book_bg-gray')
      book.classList.remove('book_bg-black')
      book.classList.remove('book_bg-white')
    };

    if (findColor == 'white') {
      book.classList.add('book_bg-white')
    };

    for (let i = 0; i < bgColors.length; i++) {
      bgColors[i].classList.remove('color_active');
    };

    color.classList.add('color_active');
    event.preventDefault();
  });
});