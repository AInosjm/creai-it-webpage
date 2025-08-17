'use client'

import { useState, useEffect } from 'react';
import { 
  isMobileDevice, 
  isTouchDevice, 
  initMobileOptimizations,
  debounce
} from '../utils/mobileOptimizations';

export const useMobileOptimization = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Initialize optimizations
    initMobileOptimizations();
    
    // Set initial states
    setIsMobile(isMobileDevice());
    setIsTouch(isTouchDevice());
    setViewportSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    // Handle resize
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth <= 768);
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }, 150);
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return {
    isMobile,
    isTouch,
    viewportSize,
    isSmallMobile: viewportSize.width <= 375,
    isMediumMobile: viewportSize.width > 375 && viewportSize.width <= 414,
    isLargeMobile: viewportSize.width > 414 && viewportSize.width <= 768,
    isTablet: viewportSize.width > 768 && viewportSize.width <= 1024,
    isDesktop: viewportSize.width > 1024
  };
};