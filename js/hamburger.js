(function () {
  var bars = document.querySelector('.bars.clickable-bar');
  var menuItem = document.querySelector('.menu-item');
  if (!bars || !menuItem) return;

  var barOne = document.querySelector('.bar-1');
  var barTwo = document.querySelector('.bar-2');
  var barThree = document.querySelector('.bar-3');

  function setOpen(open) {
    bars.dataset.clicked = open ? '1' : '0';
    menuItem.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    if (open) {
      if (barTwo) barTwo.style.visibility = 'hidden';
      if (barOne) {
        barOne.style.transform = 'rotate(-40deg)';
        barOne.style.marginTop = '7px';
      }
      if (barThree) {
        barThree.style.transform = 'rotate(40deg)';
        barThree.style.marginTop = '-7px';
      }
    } else {
      if (barOne) barOne.removeAttribute('style');
      if (barThree) barThree.removeAttribute('style');
      if (barTwo) {
        barTwo.style.visibility = 'visible';
      }
    }
  }

  bars.addEventListener('click', function () {
    setOpen(bars.dataset.clicked !== '1');
  });

  menuItem.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      setOpen(false);
    });
  });
})();
