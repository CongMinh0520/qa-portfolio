const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  links.style.position = 'absolute'; links.style.top = '64px'; links.style.left = '0';
  links.style.right = '0'; links.style.padding = '20px 16px'; links.style.background = '#f5f1e8';
  links.style.flexDirection = 'column'; links.style.gap = '18px';
});
