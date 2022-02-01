let bgModal = document.querySelector('.blog__modal');
let zoom = document.querySelector('.blog__zoom');

zoom.addEventListener('click', function() {
  bgModal.style.display = 'block';
});

bgModal.addEventListener('click', function() {
  bgModal.style.display = 'none';
});

