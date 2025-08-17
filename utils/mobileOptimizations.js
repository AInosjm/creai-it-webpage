// Mobile Performance Optimizations

// Detect if device is mobile
export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
  
  return mobileRegex.test(userAgent.toLowerCase()) || window.innerWidth <= 768;
};

// Detect if device supports touch
export const isTouchDevice = () => {
  if (typeof window === 'undefined') return false;
  
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};

// Optimize images for mobile
export const getImageSizes = (isMobile) => {
  if (isMobile) {
    return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";
  }
  return "(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw";
};

// Debounce function for scroll/resize events
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for high-frequency events
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Detect if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches;
};

// Optimize animation frame rate for mobile
export const getAnimationDuration = (baseDuration) => {
  if (prefersReducedMotion()) return 0;
  if (isMobileDevice()) return baseDuration * 0.7; // Faster animations on mobile
  return baseDuration;
};

// Viewport height fix for mobile browsers
export const setViewportHeight = () => {
  if (typeof window === 'undefined') return;
  
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// Initialize mobile optimizations
export const initMobileOptimizations = () => {
  if (typeof window === 'undefined') return;
  
  // Set viewport height
  setViewportHeight();
  
  // Update on resize
  window.addEventListener('resize', debounce(setViewportHeight, 100));
  
  // Disable hover effects on touch devices
  if (isTouchDevice()) {
    document.documentElement.classList.add('touch-device');
  }
  
  // Add mobile class for CSS targeting
  if (isMobileDevice()) {
    document.documentElement.classList.add('is-mobile');
  }
};