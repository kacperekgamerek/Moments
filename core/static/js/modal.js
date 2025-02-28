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


//-------------------------------------


document.addEventListener('DOMContentLoaded', () => {
    // Pobierz token CSRF z meta tagu
    const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

    // Obsługa like'ów
    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', async () => {
            const postId = button.dataset.postId;
            const likeCountSpan = button.querySelector('.like-count');

            try {
                const response = await fetch(`/toggle-like/${postId}/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrfToken  // Przekaż token CSRF
                    },
                });

                const data = await response.json();

                if (data.liked) {
                    button.classList.add('liked');
                } else {
                    button.classList.remove('liked');
                }

                // Zaktualizuj liczbę like'ów
                likeCountSpan.textContent = data.likes_count;
            } catch (error) {
                console.error('Błąd:', error);
            }
        });
    });
});