const main = document.querySelector('main');
const form = document.querySelector('form');
const input = form.querySelector('input');
const backBtn = document.querySelector('.complete--wrapper button');
const reg = /.@.+(\.).+[^.]$/;

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const isValid = reg.test(input.value);

  if (isValid) {
    main.classList.add('done');
    form.classList.remove('hold');
    input.value = '';
  } else form.classList.add('hold');
});

backBtn.addEventListener('click', (ev) => {
  main.classList.remove('done');
});
