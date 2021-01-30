var div1 = document.getElementById('div1');
div1.onclick = function (evt) {
  console.log(evt);

  console.log(this);

  this.style.width = '100px';
  this.style.height = '100px';
  this.style.borderRadius = '50%';
};

div1.ondblclick = function () {
  this.style.removeProperty('width');
  this.style.removeProperty('height');
  this.style.removeProperty('border-radius');
};

div1.oncontextmenu = function (evt) {

  evt.preventDefault();

  div1.classList.add('aniamte');
};

div1.onmousemove = function (evt) {
  // console.log(evt);
};
//  element.addEventListener('event', function(){})
div1.addEventListener('mouseover', function (evt) {
  this.style.backgroundColor = 'yellow';
});
div1.addEventListener('mouseout', function (evt) {
  // this.style.backgroundColor = 'green';
  this.style.removeProperty('background-color');
});
