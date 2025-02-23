document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('authModal');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Funkcje do przełączania formularzy
    function showLogin() {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    }

    function showRegister() {
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    }

    // Obsługa przycisków w headerze
    document.getElementById('openLogin').addEventListener('click', (e) => {
        e.preventDefault();
        showLogin();
        modal.classList.remove('hidden');
    });

    document.getElementById('openRegister').addEventListener('click', (e) => {
        e.preventDefault();
        showRegister();
        modal.classList.remove('hidden');
    });

    // Obsługa linków w formularzach
    document.getElementById('showRegister').addEventListener('click', (e) => {
        e.preventDefault();
        showRegister();
    });

    document.getElementById('showLogin').addEventListener('click', (e) => {
        e.preventDefault();
        showLogin();
    });

    // Zamknięcie modala
    document.getElementById('closeModal').addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Zamknięcie przy kliknięciu na tło
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});