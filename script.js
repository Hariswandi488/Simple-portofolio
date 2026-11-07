(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('show', open);
    btn.setAttribute('aria-expanded', open);
    btn.textContent = open ? 'Close' : 'Menu';
  }
  btn.addEventListener('click', function () { setMenu(!nav.classList.contains('show')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  var items = document.querySelectorAll('.project');
  items.forEach(function (item) {
    item.querySelector('.p-head').addEventListener('click', function () {
      var willOpen = !item.classList.contains('open');
      items.forEach(function (o) {
        o.classList.remove('open');
        o.querySelector('.p-head').setAttribute('aria-expanded', 'false');
      });
      if (willOpen) {
        item.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.getElementById('yr').textContent = new Date().getFullYear();
})();
