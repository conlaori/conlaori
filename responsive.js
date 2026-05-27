function toggleMenu() {
  var menu   = document.getElementById('mobile-menu');
  var burger = document.querySelector('.nav-burger');
  if (!menu || !burger) return;
  menu.classList.toggle('open');
  burger.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function () {
  var menu   = document.getElementById('mobile-menu');
  var burger = document.querySelector('.nav-burger');
  if (!menu) return;

  // Cerrar al hacer click en un enlace
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('open');
      if (burger) burger.classList.remove('open');
    });
  });

  // Cerrar con Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      menu.classList.remove('open');
      if (burger) burger.classList.remove('open');
    }
  });
});
