document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('.overlay-image');
  
  gsap.set(overlay, { scale: 0.97, opacity: 0 });
  
  setTimeout(() => {
    gsap.to(overlay, {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: 'power2.out'
    });
  }, 100);
});