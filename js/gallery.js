const images = [
  {
    id:1,
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
        description: 'Hokkaido Flower',
        
  },
  {
    id:2,
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    
  },
  {
    id:3,
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    
  },
  {
    id:4,
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    
  },
  {
      id:5,
        preview:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
    }, 
  {
    id:6,
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    
  },
  {
    id:7,
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    
  },
  {
    id:8,
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
   
  },
  {id:9,
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    
  },
];
const { preview, original, description } = images;
const imagesListItem = document.querySelector('.gallery')
function imagesTemplate({preview, original, description, id}){
     return `<li class="gallery-item" data-id ="${id} >
  <a class="gallery-link" href="${original}"> 
    <img class="gallery-image"
      src="${preview}"
      data-source="${preview}"
      alt="${description}"
    />
  </a>
</li>`

}
 function renderImages() {
     const murkup = images.map(imagesTemplate).join('');
     imagesListItem.insertAdjacentHTML('beforeend', murkup)
 }

renderImages();


const galleryContainer = document.querySelector('.gallery');
galleryContainer.addEventListener('click', e => {
    e.preventDefault()
    if (e.target === e.currentTarget) return;
  const imgId = e.target.getAttribute('data-id');
  
  
    
const instance = basicLightbox.create(`
    <img src="${preview}" width="1112" height="640" data-id ="${id}>
`,
 {
     onShow: instance => {
        document.addEventListener('keydown', closeModal);
      },
     
      onClose: instance => {
        document.removeEventListener('keydown', closeModal);
      },
    },
  );

  function closeModal(e) {
    if (e.code === 'Escape') instance.close();
  }

  instance.show();
});