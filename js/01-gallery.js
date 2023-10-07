
import { galleryItems } from './gallery-items.js';



function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
    `).join('');
}

 
  const galleryContainer = document.querySelector('.gallery');
  
 
  const galleryMarkup = galleryItems.map(item => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
      </a>
    </li>
  `).join('');
  
  
  galleryContainer.innerHTML = galleryMarkup;
  
  
  galleryContainer.addEventListener('click', e => {
    e.preventDefault();
  
   
    if (e.target.nodeName === 'IMG') {
      const source = e.target.dataset.source; 
  
      
      const instance = basicLightbox.create(`
        <img src="${source}" alt="${e.target.alt}" />
      `);
  
      instance.show();
    }
  });
  