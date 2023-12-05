const article = Array.from(document.querySelectorAll('.article'));
const btn = Array.from(document.querySelectorAll('button'));
const content = Array.from(document.querySelectorAll('.article--content'));

btn.forEach((current, i) => {
  current.addEventListener('click', () => {
    article[i].classList.toggle('on');
    if (content[i].style.maxHeight) {
      content[i].style.maxHeight = null;
    } else {
      content[i].style.maxHeight = `${content[i].scrollHeight}px`;
    }
  });
});


