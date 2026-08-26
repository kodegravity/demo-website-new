'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'Custom Software Development', href: '/services/software-development' },
    { name: 'Web Applications', href: '/services/software-development' },
    { name: 'Cloud Migration', href: '/services/cloud-migration' },
    { name: 'Data & Analytics', href: '/services/data-analytics' },
    { name: 'Cyber Security', href: '/services/cyber-security' },
    { name: 'DevOps & Platform', href: '/services/devops-platform' },
    { name: 'Managed IT Services', href: '/services/managed-it' },
    { name: 'Automation & AI', href: '/services/software-development' },
  ];

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="page-width navbar-content">
        <Link className="brand" href="/" aria-label="Quantorule home">
          <span className="brand-mark" aria-hidden="true">Q</span>
          <span>Quantorule</span>
        </Link>
        
        <div className="nav-links">
          <Link href="/">Home</Link>
          <div className="dropdown-container"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="dropdown-trigger">
              Services
            </button>
            {servicesOpen && (
              <div className="dropdown-menu">
                {services.map((service) => (
                  <Link key={service.href} href={service.href}>
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/how-we-work">How We Work</Link>
          <Link href="/engagements">Engagements</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/about">Our Company</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <Link className="button button-small button-primary" href="/contact">
          Talk to an expert
        </Link>
      </div>

      <style jsx>{`
        .dropdown-container {
          position: relative;
        }
        
        .dropdown-trigger {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 13px;
          color: #48606c;
        }
        
        .dropdown-trigger:hover {
          color: var(--teal);
        }
        
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          border: 1px solid var(--line);
          border-radius: 4px;
          min-width: 200px;
          display: flex;
          flex-direction: column;
          z-index: 1000;
          margin-top: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .dropdown-menu a {
          padding: 12px 16px;
          border-bottom: 1px solid #eee;
          font-size: 13px;
          color: var(--ink);
          transition: background .2s;
        }
        
        .dropdown-menu a:last-child {
          border-bottom: none;
        }
        
        .dropdown-menu a:hover {
          background: #e6f1ed;
          color: var(--teal);
        }
      `}</style>
    </nav>
  );
}
