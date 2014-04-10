// wait for document load
document.addEventListener("DOMContentLoaded", function(event) {


  // fetch .gallery element
  var gallery = document.querySelector('.gallery-thumbnails');

  // if .gallery element exist in document, execute gallery code
  if(document.contains(gallery) && window.innerWidth > 640){
    // create all necessary modal elements
    var gallerySection = document.getElementById('gallery');

    var modalBackground = document.createElement('div');
    modalBackground.id = 'galleryModalBackground';

    var modal = document.createElement('div');
    modal.id = 'galleryModal';

    var modalClose = document.createElement('span');
    modalClose.innerHTML = "&#215";

    var galleryImage = document.createElement('img');

    modal.appendChild(galleryImage);
    modal.appendChild(modalClose);
    modalBackground.appendChild(modal);

    // append modal elements to document
    gallery.parentNode.insertBefore(modalBackground, gallery);

    // fetch all gallery links
    var galleryLinks = document.querySelectorAll('.gallery-thumbnails a');

    // behavior for clicking a gallery link
    function galleryAction(e){
      e.preventDefault();
      gallerySection.classList.add('modal-active');
      var imagePath = this.getAttribute('href');
      galleryImage.setAttribute('src', imagePath);
    }

    // behaviour for closing modal
    function closeModal(e){
      gallerySection.classList.remove('modal-active');
    }

    // associate clicking a gallery link to its behavior
    for(var i = 0; i < galleryLinks.length; i++){
      galleryLinks.item(i).addEventListener('click', galleryAction, false);
    }

    // associate clicking the close modal to its behavior and avoid event bubbling
    modalBackground.addEventListener('click', closeModal, false);
    modal.addEventListener('click', function(e){e.stopPropagation()}, false);
    modalClose.addEventListener('click', closeModal, false);
  }


}, false);
