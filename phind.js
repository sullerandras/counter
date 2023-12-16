document.getElementById('section1').addEventListener('click', function(e) {
  if (e.target !== e.currentTarget) return; // Ignore clicks on the label
  var counter = document.getElementById('counter1');
  counter.textContent = parseInt(counter.textContent) + 1;
});

document.getElementById('section2').addEventListener('click', function(e) {
  if (e.target !== e.currentTarget) return; // Ignore clicks on the label
  var counter = document.getElementById('counter2');
  counter.textContent = parseInt(counter.textContent) + 1;
});

document.getElementById('section3').addEventListener('click', function(e) {
  if (e.target !== e.currentTarget) return; // Ignore clicks on the label
  var counter = document.getElementById('counter3');
  counter.textContent = parseInt(counter.textContent) + 1;
});
