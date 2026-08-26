'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  const services = [
    { name: 'Custom Software Development', href: '/services/software-development' },
    { name: 'Cloud Migration', href: '/services/cloud-migration' },
    { name: 'Data & Analytics', href: '/services/data-analytics' },
    { name: 'Cyber Security', href: '/services/cyber-security' },
    { name: 'DevOps & Platform', href: '/services/devops-platform' },
    { name: 'Managed IT Services', href: '/services/managed-it' },
    { name: 'Automation & AI', href: '/services/automation-ai' },
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const closeMenus = () => {
    setServicesOpen(false);
    setMobileOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="page-width navbar-content">
        <Link className="brand" href="/" aria-label="Quantorule home" onClick={closeMenus}>
          <span className="brand-mark" aria-hidden="true">Q</span>
          <span>Quantorule</span>
        </Link>

        <button
          className="mobile-menu-button"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span>{mobileOpen ? 'Close' : 'Menu'}</span>
          <span className="menu-icon" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>

        <div id="primary-navigation" className={`nav-links ${mobileOpen ? 'nav-links-open' : ''}`}>
          <Link href="/" onClick={closeMenus}>Home</Link>

          <div className="nav-dropdown" ref={dropdownRef}>
            <button
              className="dropdown-trigger"
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={(event) => {
                event.stopPropagation();
                setServicesOpen((open) => !open);
              }}
            >
              Services
            </button>

            {servicesOpen && (
              <div className="dropdown-menu" role="menu">
                {services.map((service) => (
                  <Link
                    key={`${service.name}-${service.href}`}
                    href={service.href}
                    className="dropdown-link"
                    role="menuitem"
                    onClick={closeMenus}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/how-we-work" onClick={closeMenus}>How We Work</Link>
          <Link href="/engagements" onClick={closeMenus}>Engagements</Link>
          <Link href="/industries" onClick={closeMenus}>Industries</Link>
          <Link href="/about" onClick={closeMenus}>Our Company</Link>
          <Link href="/contact" onClick={closeMenus}>Contact</Link>
        </div>

        <Link className="button button-small button-primary nav-cta" href="/contact" onClick={closeMenus}>
          Talk to an expert
        </Link>
      </div>

      <style jsx>{`
        .navbar,
        .navbar-content,
        .nav-links {
          overflow: visible;
        }

        .nav-dropdown {
          position: relative;
          display: inline-flex;
          align-items: center;
        }

        .dropdown-trigger {
          background: none;
          border: none;
          cursor: pointer;
          font: inherit;
          font-size: 13px;
          color: #48606c;
          padding: 10px 0;
        }

        .dropdown-trigger:hover,
        .dropdown-trigger[aria-expanded='true'] {
          color: var(--teal);
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          min-width: 280px;
          display: flex;
          flex-direction: column;
          z-index: 99999;
          overflow: hidden;
          background: #102f38;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 6px;
          box-shadow: 0 22px 50px rgba(0, 0, 0, 0.28);
        }

        :global(.dropdown-link) {
          display: block !important;
          padding: 14px 18px !important;
          background: #102f38 !important;
          color: #ffffff !important;
          border-bottom: 1px solid rgba(214, 239, 235, 0.16) !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          line-height: 1.35 !important;
          text-decoration: none !important;
          opacity: 1 !important;
          visibility: visible !important;
        }

        :global(.dropdown-link:last-child) {
          border-bottom: none !important;
        }

        :global(.dropdown-link:hover),
        :global(.dropdown-link:focus) {
          background: #1b4b53 !important;
          color: #ffffff !important;
          outline: none;
        }

        @media (max-width: 900px) {
          .nav-dropdown {
            width: 100%;
            flex-direction: column;
            align-items: stretch;
          }

          .dropdown-trigger {
            text-align: left;
            width: 100%;
          }

          .dropdown-menu {
            position: static;
            margin-top: 10px;
            width: 100%;
          }
        }
      `}</style>
    </nav>
  );
}