document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('authModal');
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay hidden';
    document.body.appendChild(modalOverlay);

    // Obsługa przycisków
    document.querySelectorAll('[data-modal-toggle]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modalType = btn.dataset.modalToggle;
            showModal(modalType);
        });
    });

    // Zamknięcie modala
    modalOverlay.addEventListener('click', closeModal);
    document.querySelectorAll('[data-modal-close]').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    function showModal(type) {
        document.querySelectorAll('.auth-form').forEach(form => {
            form.classList.add('hidden');
        });
        document.getElementById(`${type}Form`).classList.remove('hidden');
        modal.classList.remove('hidden');
        modalOverlay.classList.remove('hidden');
    }

    function closeModal() {
        modal.classList.add('hidden');
        modalOverlay.classList.add('hidden');
    }
});