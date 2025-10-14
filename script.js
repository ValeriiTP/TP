document.addEventListener('DOMContentLoaded', function () {
  const left = document.querySelector('.left');
  const right = document.querySelector('.right');
  const showLeft = document.getElementById('showLeft');
  const showRight = document.getElementById('showRight');

  // Show left section
  showLeft.addEventListener('click', function (e) {
    e.stopPropagation();
    left.style.display = 'flex';
    showLeft.style.display = 'none';
    // Hide left section and show arrow again when clicking outside
    document.addEventListener('click', hideLeft, { once: true });
  });

  // Show right section
  showRight.addEventListener('click', function (e) {
    e.stopPropagation();
    right.style.display = 'flex';
    showRight.style.display = 'none';
    // Hide right section and show arrow again when clicking outside
    document.addEventListener('click', hideRight, { once: true });
  });

  function hideLeft(e) {
    if (!left.contains(e.target)) {
      left.style.display = 'none';
      showLeft.style.display = 'block';
    } else {
      // If clicked inside, listen again for outside click
      document.addEventListener('click', hideLeft, { once: true });
    }
  }

  function hideRight(e) {
    if (!right.contains(e.target)) {
      right.style.display = 'none';
      showRight.style.display = 'block';
    } else {
      document.addEventListener('click', hideRight, { once: true });
    }
  }

  // On load, hide left/right and show arrows if on small screen
  function checkScreen() {
    if (window.innerWidth <= 500) {
      if (left) left.style.display = 'none';
      if (right) right.style.display = 'none';
      if (showLeft) showLeft.style.display = 'block';
      if (showRight) showRight.style.display = 'block';
    } else {
      if (left) left.style.display = 'flex';
      if (right) right.style.display = 'flex';
      if (showLeft) showLeft.style.display = 'none';
      if (showRight) showRight.style.display = 'none';
    }
  }

  window.addEventListener('resize', checkScreen);
  checkScreen();
});