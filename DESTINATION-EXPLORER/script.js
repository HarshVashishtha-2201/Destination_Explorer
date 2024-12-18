document.addEventListener("DOMContentLoaded", () => {
    // Modal functionality
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalDetails = document.getElementById("modal-details");
    const closeButton = document.getElementById("close-button");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const clone = card.cloneNode(true);
            modalDetails.innerHTML = "";
            modalDetails.appendChild(clone);
            modal.style.display = "flex";
        });
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Search functionality
    document.getElementById('search-button').addEventListener('click', () => {
        const searchTerm = document.getElementById('search-bar').value.toLowerCase();
        const allCards = document.querySelectorAll('.card');

        let hasResults = false;

        allCards.forEach(card => {
            const cityName = card.querySelector('h3').textContent.toLowerCase();

            if (cityName.includes(searchTerm)) {
                card.style.display = 'block';
                hasResults = true;
            } else {
                card.style.display = 'none';
            }
        });

        if (!hasResults) {
            alert('No results found!');
        }
    });
});
