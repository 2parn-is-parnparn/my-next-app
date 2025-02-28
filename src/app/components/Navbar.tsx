'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// ประเภทสำหรับ props ที่ส่งเข้ามา
type NavbarProps = {
  currentPageName?: string; // ชื่อหน้าปัจจุบัน (ถ้ามี)
};

export default function Navbar({ currentPageName }: NavbarProps) {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState('');
  
  useEffect(() => {
    // ตั้งค่าชื่อหน้าปัจจุบันตาม URL
    if (currentPageName) {
      setCurrentPage(currentPageName);
    } else if (pathname === '/') {
      setCurrentPage('Home'); // ตั้งเป็น Home แทนที่จะเป็น "/"
    } else {
      // ถ้าไม่ได้กำหนดชื่อหน้าและไม่ใช่หน้าหลัก ใช้ส่วนสุดท้ายของ URL
      const pageName = pathname.split('/').pop() || '';
      setCurrentPage(pageName.charAt(0).toUpperCase() + pageName.slice(1));
    }
    
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
        
        if (menuToggle && navbarMenu) {
          menuToggle.removeEventListener('click', () => {});
        }
        navLinks.forEach(link => {
          link.removeEventListener('click', () => {});
        });
      };
    }
  }, [pathname, currentPageName]);

  // ไม่แสดงชื่อหน้าถ้าอยู่ที่หน้า Home หรือถ้า currentPage เป็น "Home"
  const showPageName = currentPage !== 'Home' && pathname !== '/';

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <Link href="/" className="navbar-logo">ND</Link>
          {showPageName && (
            <span className="current-page">{currentPage}</span>
          )}
        </div>
        <div className="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="navbar-menu">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#education">Education</Link></li>
          <li><Link href="/#skills">Skills</Link></li>
          <li><Link href="/#experience">Experience</Link></li>
          <li><Link href="/#projects">Projects</Link></li>
        </ul>
      </div>
    </nav>
  );
}