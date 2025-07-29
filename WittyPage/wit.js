// const images = [
//     'Assets/images/slideone.jpeg',
//     'Assets/images/slidetwo.jpeg',
//     'Assets/images/slidethree.jpeg',
//     'Assets/images/slidefour.jpeg',
//     'Assets/images/slidefive.jpeg',
//   ];

//   const carousel = document.querySelector('.background-carousel');
//   const prevBtn = document.querySelector('.carousel-btn.prev');
//   const nextBtn = document.querySelector('.carousel-btn.next');
//   let currentIndex = 0;

//   function updateBackground() {
//     carousel.style.backgroundImage = `url('${images[currentIndex]}')`;
//   }

//   prevBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     updateBackground();
//   });

//   nextBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % images.length;
//     updateBackground();
//   });

//   // Optional: set initial background
//   updateBackground();






const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});


document.querySelectorAll('.backgroud-carousel').forEach(el => {
  observer.observe(el);
});

