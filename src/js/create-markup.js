function makeGalleryItemMarkup({ preview, original, description }) {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
}
export default function makeGalleryMarkup(arr) {
  return arr.map(makeGalleryItemMarkup).join('');
}
