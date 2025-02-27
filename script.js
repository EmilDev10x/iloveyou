document.addEventListener('DOMContentLoaded', () => {
  // Get DOM elements
  const envelope = document.querySelector('.envelope');
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');
  const floatingHearts = document.querySelector('.floating-hearts');
  
  // Animation state
  let isAnimating = false;
  
  // Function to open envelope
  const openEnvelope = () => {
    if (isAnimating) return;
    
    isAnimating = true;
    envelope.classList.add('open');
    openBtn.disabled = true;
    
    // Show floating hearts
    floatingHearts.style.display = 'block';
    
    // Enable close button after animation completes
    setTimeout(() => {
      closeBtn.disabled = false;
      isAnimating = false;
    }, 1000);
  };
  
  // Function to close envelope
  const closeEnvelope = () => {
    if (isAnimating) return;
    
    isAnimating = true;
    envelope.classList.remove('open');
    closeBtn.disabled = true;
    
    // Hide floating hearts
    floatingHearts.style.display = 'none';
    
    // Enable open button after animation completes
    setTimeout(() => {
      openBtn.disabled = false;
      isAnimating = false;
    }, 1000);
  };
  
  // Add event listeners
  openBtn.addEventListener('click', openEnvelope);
  closeBtn.addEventListener('click', closeEnvelope);
  
  // Add hover effects for buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      if (!button.disabled) {
        button.style.transform = 'translateY(-2px)';
        button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }
    });
    
    button.addEventListener('mouseleave', () => {
      if (!button.disabled) {
        button.style.transform = '';
        button.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      }
    });
  });
  
  // Add some subtle parallax effect on mouse move
  document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) / 50;
    const moveY = (e.clientY - window.innerHeight / 2) / 50;
    
    document.querySelector('.top-right-heart').style.transform = 
      `translate(${moveX}px, ${moveY}px)`;
    
    document.querySelector('.bottom-left-heart').style.transform = 
      `translate(${-moveX}px, ${-moveY}px)`;
  });
});