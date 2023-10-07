


const gallery = document.querySelector('.gallery');
gallery.innerHTML = createGalleryMarkup(galleryItems);


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});