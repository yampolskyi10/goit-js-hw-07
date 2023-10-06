
import galleryItems from './gallery-items.js';


function createGalleryMarkup(items) {
    return items.map(({ src, alt }) => `
        <li class="gallery__item">
            <a class="gallery__link" href="${src}">
                <img class="gallery__image" src="${src.replace('large-', 'small-')}" alt="${alt}" />
            </a>
        </li>
    `).join('');
}


const gallery = document.querySelector('.gallery');
gallery.innerHTML = createGalleryMarkup(galleryItems);


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});