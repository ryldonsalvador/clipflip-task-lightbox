document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("lightboxModal");
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.querySelector(".close");
  const modalIframe = document.getElementById("modalIframe");

  openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
    modalIframe.src = "./external/lightbox-index.html"; // Load external page
  });

  closeModalBtn.addEventListener("click", closeLightbox);

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      // Close when clicking on overlay
      closeLightbox();
    }
  });

  function closeLightbox() {
    modal.style.display = "none";
    modalIframe.src = ""; // Clear src to stop loading
  }
});
