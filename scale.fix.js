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
  const toggleButton = document.getElementById('dark-mode-toggle');

  // Checa se o Dark Mode foi ativado previamente no localStorage
  if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }

  // Alterna o Dark Mode ao clicar no botão
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Salva a preferência no localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      localStorage.setItem('dark-mode', 'disabled');
    }
  });
});
