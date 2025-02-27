// components/Navbar.tsx
'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  useEffect(() => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle') as HTMLElement;
    const navbarMenu = document.querySelector('.navbar-menu') as HTMLElement;
    
    if (menuToggle && navbarMenu) {
      menuToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
      });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar-menu a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (navbarMenu) {
          navbarMenu.classList.remove('active');
        }
      });
    });
    
    // Change navbar background on scroll
    const navbar = document.querySelector('.navbar') as HTMLElement;
    
    if (navbar) {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          navbar.style.backgroundColor = 'var(--background)';
          navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
          navbar.style.backgroundColor = 'transparent';
          navbar.style.boxShadow = 'none';
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      
      // Clean up event listener
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
    
    // Clean up other event listeners
    return () => {
      if (menuToggle && navbarMenu) {
        menuToggle.removeEventListener('click', () => {});
      }
      navLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">ND</div>
        <div className="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="navbar-menu">
          <li><Link href="#about">About</Link></li>
          <li><Link href="#education">Education</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#experience">Experience</Link></li>
          <li><Link href="#projects">Projects</Link></li>
        </ul>
      </div>
    </nav>
  );
}