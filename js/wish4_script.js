document.addEventListener("DOMContentLoaded", function () {
    const photoCards = document.querySelectorAll(".photo-card");

    // Add a click event listener to each photo card
    photoCards.forEach((card) => {
        card.addEventListener("click", () => {
            openPhotoViewer(card);
        });
    });

    // Function to open the photo viewer for a specific photo card
    function openPhotoViewer(card) {
        const imageUrl = card.querySelector("img").src;
        const caption = card.querySelector(".photo-caption").textContent;

        // Create a modal for displaying the photo
        const modal = document.createElement("div");
        modal.classList.add("photo-modal");

        // Create an image element for the modal
        const modalImage = document.createElement("img");
        modalImage.src = imageUrl;
        modal.appendChild(modalImage);

        // Create a caption element for the modal
        const modalCaption = document.createElement("div");
        modalCaption.classList.add("modal-caption");
        modalCaption.textContent = caption;
        modal.appendChild(modalCaption);

        // Create a close button for the modal
        const closeButton = document.createElement("span");
        closeButton.classList.add("modal-close");
        closeButton.textContent = "X";
        closeButton.addEventListener("click", () => {
            closePhotoViewer(modal);
        });
        modal.appendChild(closeButton);

        // Add the modal to the page
        document.body.appendChild(modal);

        // Disable scrolling when the modal is open
        document.body.style.overflow = "hidden";
    }

    // Function to close the photo viewer modal
    function closePhotoViewer(modal) {
        modal.remove();

        // Re-enable scrolling when the modal is closed
        document.body.style.overflow = "auto";
    }
});
