document.addEventListener("DOMContentLoaded", function() {
  const metas = document.getElementsByTagName('meta');

  if (navigator.userAgent.match(/iPhone/i)) {
    Array.from(metas).forEach(meta => {
      if (meta.name === "viewport") {
        meta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
      }
    });

    document.addEventListener("gesturestart", function() {
      Array.from(metas).forEach(meta => {
        if (meta.name === "viewport") {
          meta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
        }
      });
    }, false);
  }

  // Lógica do Dark Mode
  const toggleContainer = document.getElementById('dark-mode-toggle');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  // Aplica tema escuro se salvo no localStorage
  if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline-block';
  }

  // Alterna entre sol e lua
  toggleContainer.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode', 'enabled');
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'inline-block';
    } else {
      localStorage.setItem('dark-mode', 'disabled');
      sunIcon.style.display = 'inline-block';
      moonIcon.style.display = 'none';
    }
  });
});
