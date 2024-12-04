document.addEventListener("DOMContentLoaded", function () {
    const toggleContainer = document.getElementById('dark-mode-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    // Aplica o tema escuro se ele estiver salvo no localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
    }

    // Alterna o Dark Mode ao clicar nos ícones
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
