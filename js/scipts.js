const photoPaths = [
  '../img/ImgForHa1.jpg',
  '../img/ImgForHa2.jpg',
  '../img/ImgForHa3.jpg',
  '../img/ImgForHa4.jpg'
];

function showPhoto(idx) {
  const mainPhoto = document.getElementById('mainPhoto');
  mainPhoto.style.opacity = 0.6;
  setTimeout(() => {
    mainPhoto.src = photoPaths[idx];
    mainPhoto.style.opacity = 1;
    document.querySelectorAll('.thumb').forEach((el, i) => el.classList.toggle('active', i===idx));
  }, 120);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.thumb')[0].classList.add('active');
});
