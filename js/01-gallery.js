import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");
function createGalleryTemplate(picturesList) {
  return picturesList
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `;
    })
    .join("");
}

const galleryTemplate = createGalleryTemplate(galleryItems);
gallery.insertAdjacentHTML("afterbegin", galleryTemplate);
gallery.addEventListener("click", handleClick);

function handleClick(e) {
  if (e.target === e.currentTarget) {
    return;
  }
  e.preventDefault();

  const modalGallary = basicLightbox.create(
    `<img src="${e.target.dataset.source}">`,
    {
      onShow: () => window.addEventListener("keydown", escapeCloseAlt),
      onclose: () => window.removeEventListener("keydown", escapeCloseAlt),
    }
  );

  modalGallary.show();
  window.addEventListener("keydown", escapeCloseAlt.bind(modalGallary));
}

function escapeCloseAlt(e) {
  if (e.code === "Escape") {
    this.close();
  }
}
