document.body.addEventListener('click', function(e) {
  if (e.target.classList.contains('section')) {
      var counterId = 'counter' + e.target.id.charAt(e.target.id.length - 1);
      var counter = document.getElementById(counterId);
      counter.textContent = parseInt(counter.textContent) + 1;
  }
});
