

export const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
      description: 'Hokkaido Flower',
    },
    
  ];
  
 
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
  