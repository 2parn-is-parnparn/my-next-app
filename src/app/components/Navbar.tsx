'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavbarProps = {
  currentPageName?: string;
};

export default function Navbar({ currentPageName }: NavbarProps) {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Use refs to store DOM elements
  const menuToggleRef = useRef<HTMLDivElement>(null);
  const navbarMenuRef = useRef<HTMLUListElement>(null);
  const navbarRef = useRef<HTMLElement>(null);
  
  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Close menu function
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  useEffect(() => {
    // Set current page name based on URL
    if (currentPageName) {
      setCurrentPage(currentPageName);
    } else if (pathname === '/') {
      setCurrentPage('Home');
    } else {
      const pageName = pathname.split('/').pop() || '';
      setCurrentPage(pageName.charAt(0).toUpperCase() + pageName.slice(1));
    }
    
    // Change navbar background on scroll
    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.scrollY > 50) {
          navbarRef.current.style.backgroundColor = 'var(--background)';
          navbarRef.current.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
          navbarRef.current.style.backgroundColor = 'transparent';
          navbarRef.current.style.boxShadow = 'none';
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, currentPageName]);
  
  // Apply active class based on isMenuOpen state
  useEffect(() => {
    if (navbarMenuRef.current) {
      if (isMenuOpen) {
        navbarMenuRef.current.classList.add('active');
      } else {
        navbarMenuRef.current.classList.remove('active');
      }
    }
  }, [isMenuOpen]);

  // Don't show page name if we're on the home page
  const showPageName = currentPage !== 'Home' && pathname !== '/';

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-content">
        <div className="navbar-left">
          <Link href="/" className="navbar-logo">ND</Link>
          {showPageName && (
            <span className="current-page">{currentPage}</span>
          )}
        </div>
        <div 
          className="menu-toggle" 
          ref={menuToggleRef} 
          onClick={toggleMenu}
          role="button"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="navbar-menu" ref={navbarMenuRef}>
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/#education" onClick={closeMenu}>Education</Link></li>
          <li><Link href="/#skills" onClick={closeMenu}>Skills</Link></li>
          <li><Link href="/#experience" onClick={closeMenu}>Experience</Link></li>
          <li><Link href="/#projects" onClick={closeMenu}>Projects</Link></li>
        </ul>
      </div>
    </nav>
  );
}