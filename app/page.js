import Link from 'next/link';
import ServiceCard from './components/ServiceCard';
import CTA from './components/CTA';

export const metadata = {
  title: 'Quantorule | IT Consulting & Software Development',
  description:
    'Business technology specialists. Custom software, cloud, data, and security solutions for growing organizations.',
};

export default function Home() {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Purpose-built applications tailored to your business requirements.',
      href: '/services/software-development'
    },
    {
      title: 'Cloud Migration',
      description: 'Plan and execute secure migrations to cloud platforms.',
      href: '/services/cloud-migration'
    },
    {
      title: 'Data & Analytics',
      description: 'Build data platforms that drive better business decisions.',
      href: '/services/data-analytics'
    },
    {
      title: 'Cyber Security',
      description: 'Protect systems and data with security-first design.',
      href: '/services/cyber-security'
    },
    {
      title: 'DevOps & Platform',
      description: 'Modern CI/CD, automation, and reliable infrastructure.',
      href: '/services/devops-platform'
    },
    {
      title: 'Managed IT Services',
      description: 'Proactive monitoring, maintenance, and technical support.',
      href: '/services/managed-it'
    },
  ];

  const industries = [
    'Professional Services',
    'Logistics',
    'Healthcare Operations',
    'Real Estate & Property',
    'Retail Operations',
    'Finance & Administration'
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="page-width hero-content">
          <div className="hero-copy">
            <h1>Business technology specialists you can trust.</h1>
            <p className="hero-text">Quantorule helps organizations make better technology decisions and build secure, dependable systems—from custom software and cloud migration to data platforms, automation, and managed operations.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">Learn more</Link>
              <Link className="button button-outline" href="/contact">Talk to an expert</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="trust-section section-light">
        <div className="page-width">
          <div className="trust-grid">
            <div className="trust-item">
              <p><strong>Toronto-based team</strong></p>
              <p>Local expertise with a track record serving medium-sized organizations.</p>
            </div>
            <div className="trust-item">
              <p><strong>Practical, vendor-neutral guidance</strong></p>
              <p>We recommend technologies based on your needs, not vendor preferences.</p>
            </div>
            <div className="trust-item">
              <p><strong>Security-minded delivery</strong></p>
              <p>Security is built into every system we design, not added afterward.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="services">
        <div className="page-width">
          <div className="section-header">
            <h2>What We Do</h2>
            <p>Comprehensive technology services for growing organizations</p>
          </div>

          <div className="service-grid-modern">
            {services.map((service, idx) => (
              <Link key={idx} href={service.href} className="service-card-modern">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="section section-light">
        <div className="page-width">
          <div className="company-section">
            <h2>About Quantorule</h2>
            <p>We're a practical technology partner for growing organizations. We solve real problems—helping teams modernize systems, improve operations, and make better technology decisions.</p>
            <p>Our experience spans custom software development, cloud infrastructure, data platforms, security, and managed IT operations. We work in partnership with our clients, focusing on understanding business goals and delivering sustainable solutions.</p>
            <Link href="/about" className="text-link">Learn more about our company →</Link>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section">
        <div className="page-width">
          <div className="section-header">
            <h2>How We Work</h2>
            <p>A proven five-step process from discovery through ongoing support</p>
          </div>

          <div className="process-grid-horizontal">
            <div className="process-item">
              <span className="process-num">1</span>
              <h3>Discover</h3>
              <p>Understand your business and goals</p>
            </div>
            <div className="process-item">
              <span className="process-num">2</span>
              <h3>Plan</h3>
              <p>Develop strategy and architecture</p>
            </div>
            <div className="process-item">
              <span className="process-num">3</span>
              <h3>Build</h3>
              <p>Execute with quality and transparency</p>
            </div>
            <div className="process-item">
              <span className="process-num">4</span>
              <h3>Launch</h3>
              <p>Deploy carefully with training and support</p>
            </div>
            <div className="process-item">
              <span className="process-num">5</span>
              <h3>Support</h3>
              <p>Ongoing optimization and guidance</p>
            </div>
          </div>

          <div className="section-cta">
            <Link href="/how-we-work" className="text-link">See our methodology in detail →</Link>
          </div>
        </div>
      </section>

      {/* Engagements Section */}
      <section className="section section-light">
        <div className="page-width">
          <div className="section-header">
            <h2>Engagement Models</h2>
            <p>We work in ways that fit your needs</p>
          </div>

          <div className="engagement-cards">
            <div className="engagement-item">
              <h3>Cloud Readiness Assessment</h3>
              <p>Evaluate infrastructure and develop migration strategy</p>
            </div>
            <div className="engagement-item">
              <h3>Web Application Build</h3>
              <p>Custom application development from concept to launch</p>
            </div>
            <div className="engagement-item">
              <h3>Dashboard & Reporting</h3>
              <p>Business intelligence and analytics platforms</p>
            </div>
            <div className="engagement-item">
              <h3>Automation Implementation</h3>
              <p>Automate workflows and improve efficiency</p>
            </div>
            <div className="engagement-item">
              <h3>Security Assessment</h3>
              <p>Evaluate and strengthen security posture</p>
            </div>
            <div className="engagement-item">
              <h3>Managed Support</h3>
              <p>Ongoing operations, monitoring, and strategic guidance</p>
            </div>
          </div>

          <div className="section-cta">
            <Link href="/engagements" className="text-link">Explore engagement options →</Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section">
        <div className="page-width">
          <div className="section-header">
            <h2>Industries We Serve</h2>
            <p>Experience across key business sectors</p>
          </div>

          <div className="industries-grid">
            {industries.map((industry, idx) => (
              <div key={idx} className="industry-badge">
                {industry}
              </div>
            ))}
          </div>

          <div className="section-cta">
            <Link href="/industries" className="text-link">Learn about our industry expertise →</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to improve your technology?"
        description="Let's discuss how Quantorule can help your organization build better systems and make smarter technology decisions."
        buttonText="Start the conversation"
        buttonHref="/contact"
      />
    </main>
  );
}
