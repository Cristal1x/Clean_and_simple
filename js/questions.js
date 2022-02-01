let item = document.querySelectorAll('.faq__item');
let span = document.querySelectorAll('.faq__question');
let content = document.querySelectorAll('.faq__content');


for (let i = 0; i < item.length; i++) {
  
  item[i].addEventListener('click', function(event) {
    if (event.target.tagName == 'BUTTON') {
      return;
    }
    

    content[i].hidden = !content[i].hidden;

    if (!content[i].hidden) {
      item[i].style.listStyleImage = 'url(../img/arrow-close.png)';
      span[i].classList.add('faq__item-show');
    } else {
      item[i].style.listStyleImage = 'url(../img/arrow-open.png)';
      span[i].classList.remove('faq__item-show');
    }
  });
}