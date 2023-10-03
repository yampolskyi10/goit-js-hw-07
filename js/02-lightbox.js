
const galleryItems = [
    {
        src: 'large-image-1.jpg',
        alt: 'Image 1 description',
    },
    {
        src: 'large-image-2.jpg',
        alt: 'Image 2 description',
    },
    
];


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
