import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const createGalleryTemplate = ({ preview, original, description }) => `
  <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
`;

const getImagesGallery = (images) =>
  images.map((item) => createGalleryTemplate(item)).join("");

gallery.innerHTML = getImagesGallery(galleryItems);
gallery.addEventListener("click", handleClick);

new window.SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
  captionPosition: "top",
});

function handleClick(e) {
  e.preventDefault();
}
