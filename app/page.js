import Link from 'next/link';
import CTA from './components/CTA';

export const metadata = {
  title: 'Quantorule | IT Consulting & Software Development',
  description:
    'Business technology specialists. Custom software, cloud, data, and security solutions for growing organizations.',
};

export default function Home() {
  const services = [
    {
      marker: '01',
      title: 'Custom Software Development',
      description: 'Replace manual workarounds with maintainable systems designed around your teams, data, and operating model.',
      detail: 'Discovery, architecture, delivery, and support',
      href: '/services/software-development'
    },
    {
      marker: '02',
      title: 'Web Applications',
      description: 'Customer portals, internal tools, and operational software that work reliably across devices.',
      detail: 'Interfaces, APIs, authentication, and integrations',
      href: '/services/software-development'
    },
    {
      marker: '03',
      title: 'Cloud Migration',
      description: 'Move workloads with a clear inventory, sensible sequencing, and controls for cost, access, and continuity.',
      detail: 'Assessment, migration planning, implementation, and handover',
      href: '/services/cloud-migration'
    },
    {
      marker: '04',
      title: 'Data & Analytics',
      description: 'Bring operational data together so leaders and teams can answer important questions without spreadsheet archaeology.',
      detail: 'Data models, pipelines, reporting, and governance',
      href: '/services/data-analytics'
    },
    {
      marker: '05',
      title: 'Cyber Security',
      description: 'Identify practical risks across applications, identities, infrastructure, and everyday working practices.',
      detail: 'Risk assessment, controls, hardening, and response planning',
      href: '/services/cyber-security'
    },
    {
      marker: '06',
      title: 'DevOps & Platform',
      description: 'Give development teams repeatable environments and release processes that are easier to operate and audit.',
      detail: 'CI/CD, infrastructure as code, observability, and runbooks',
      href: '/services/devops-platform'
    },
    {
      marker: '07',
      title: 'Managed IT Services',
      description: 'Keep core systems monitored, maintained, documented, and supported as your organization changes.',
      detail: 'Monitoring, support, maintenance, and technology planning',
      href: '/services/managed-it'
    },
    {
      marker: '08',
      title: 'Automation & AI',
      description: 'Reduce repetitive work with workflow automation grounded in your existing systems and processes.',
      detail: 'Process mapping, integrations, approvals, and assisted workflows',
      href: '/services/automation-ai'
    },
    {
      marker: '09',
      title: 'Data Protection & Recovery',
      description: 'Improve backup coverage and recovery readiness for the systems your business depends on.',
      detail: 'Backup design, recovery testing, retention, and documentation',
      href: '/services/cloud-infrastructure'
    },
    {
      marker: '10',
      title: 'System Integration',
      description: 'Connect business applications so information moves accurately between the places your teams work.',
      detail: 'API design, data exchange, orchestration, and monitoring',
      href: '/services/software-development'
    },
  ];

  const industries = [
    { name: 'Professional Services', description: 'Project delivery, time capture, billing, client portals, and document-heavy workflows.' },
    { name: 'Logistics', description: 'Dispatch, inventory, fleet visibility, supplier coordination, and exception handling.' },
    { name: 'Healthcare Operations', description: 'Secure operational tools for scheduling, records, referrals, and reporting.' },
    { name: 'Real Estate & Property', description: 'Leasing, maintenance, inspections, tenant communication, and portfolio reporting.' },
    { name: 'Retail Operations', description: 'Inventory, orders, store operations, customer data, and connected reporting.' },
    { name: 'Finance & Administration', description: 'Controls, approvals, reconciliation, reporting, and dependable internal systems.' }
  ];

  return (
    <main>
      <section className="hero hero-home">
        <div className="page-width hero-content">
          <div className="hero-copy">
            <p className="eyebrow">QUANTORULE / BUSINESS TECHNOLOGY</p>
            <h1>Business technology specialists you can trust.</h1>
            <p className="hero-text">Quantorule helps organisations make better technology decisions and build secure, dependable systems - from custom software and cloud migration to data platforms, automation, and managed operations.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">Discuss a project</Link>
              <Link className="button button-outline" href="/services">Explore our services</Link>
            </div>
          </div>
          <div className="hero-dashboard" aria-label="Quantorule technology services overview">
            <div className="dashboard-topline"><span>OPERATING PICTURE</span><span className="status-dot">● CONNECTED</span></div>
            <div className="dashboard-main">
              <div className="dashboard-orbit"><span className="orbit-line orbit-line-one" /><span className="orbit-line orbit-line-two" /><span className="orbit-core">Q</span><span className="orbit-label orbit-cloud">CLOUD</span><span className="orbit-label orbit-data">DATA</span><span className="orbit-label orbit-secure">SECURE</span></div>
              <div className="dashboard-summary"><span className="summary-label">FOCUS AREAS</span><strong>Clear decisions.<br />Reliable systems.</strong><p>Technology planning and delivery for the work your business actually does.</p></div>
            </div>
            <div className="dashboard-footer"><span>ARCHITECTURE</span><span>DELIVERY</span><span>SUPPORT</span></div>
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
          <div className="section-header section-header-split">
            <div><p className="section-kicker">CAPABILITIES</p><h2>Technology that holds up in the real world.</h2></div>
            <p>From a focused improvement to a longer-term technology roadmap, our work connects business priorities to systems people can use and support.</p>
          </div>

          <div className="service-grid-modern">
            {services.map((service) => (
              <Link key={service.marker} href={service.href} className="service-card-modern">
                <span className="service-marker">{service.marker}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-detail">{service.detail}</span>
                <span className="service-link">Explore service <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="section section-light">
        <div className="page-width">
          <div className="company-section company-section-split">
            <div><p className="section-kicker">THE QUANTORULE APPROACH</p><h2>A practical partner for important systems.</h2><p>Technology projects work better when the people, process, and platform are considered together. We take time to understand how your organization operates, then make the tradeoffs visible before work begins.</p><Link href="/about" className="text-link">Learn more about our company →</Link></div>
            <div className="company-points"><div><strong>Start with context</strong><p>We map the current environment, constraints, risks, and decisions already in motion.</p></div><div><strong>Make progress visible</strong><p>Clear phases, regular working sessions, and useful documentation keep teams aligned.</p></div><div><strong>Leave teams stronger</strong><p>We build for maintainability and hand over the knowledge needed to run the work.</p></div></div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section">
        <div className="page-width">
          <div className="section-header section-header-split">
            <div><p className="section-kicker">DELIVERY METHOD</p><h2>Steady progress, from first conversation to ongoing support.</h2></div>
            <p>Our process is structured enough to manage risk and flexible enough to reflect the way your teams actually make decisions.</p>
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
          <div className="section-header section-header-split">
            <div><p className="section-kicker">WAYS TO WORK TOGETHER</p><h2>Bring us in where the work needs momentum.</h2></div>
            <p>Choose a defined project, specialist support, or an ongoing operating relationship. We will help shape the right starting point.</p>
          </div>

          <div className="engagement-cards">
            <div className="engagement-item"><span className="card-kicker">ASSESS</span>
              <h3>Cloud Readiness Assessment</h3>
              <p>Understand what should move, what should change first, and what needs to remain stable.</p><span>Typical output: prioritized roadmap and risk register</span>
            </div>
            <div className="engagement-item"><span className="card-kicker">BUILD</span>
              <h3>Web Application Build</h3>
              <p>Turn an operational need into a useful application with a clear path from prototype to release.</p><span>Typical output: working application and launch plan</span>
            </div>
            <div className="engagement-item"><span className="card-kicker">CONNECT</span>
              <h3>Dashboard & Reporting</h3>
              <p>Replace disconnected reports with shared definitions, dependable data, and views people can act on.</p><span>Typical output: reporting model and decision-ready dashboards</span>
            </div>
            <div className="engagement-item"><span className="card-kicker">IMPROVE</span>
              <h3>Automation Implementation</h3>
              <p>Find repeatable work worth automating and connect the systems that currently require manual handoffs.</p><span>Typical output: documented workflow and monitored automation</span>
            </div>
            <div className="engagement-item"><span className="card-kicker">PROTECT</span>
              <h3>Security Assessment</h3>
              <p>Build a practical view of exposure, access, recovery, and the controls that deserve attention first.</p><span>Typical output: findings, priorities, and action plan</span>
            </div>
            <div className="engagement-item"><span className="card-kicker">OPERATE</span>
              <h3>Managed Support</h3>
              <p>Keep systems maintained and issues moving while your internal team focuses on the business.</p><span>Typical output: support rhythm, monitoring, and technology backlog</span>
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
          <div className="section-header section-header-split">
            <div><p className="section-kicker">INDUSTRY CONTEXT</p><h2>Technology shaped around the work behind the numbers.</h2></div>
            <p>We bring a systems view to teams where process, compliance, customer service, and operational continuity all matter.</p>
          </div>

          <div className="industries-grid">
            {industries.map((industry) => (
              <div key={industry.name} className="industry-badge">
                <h3>{industry.name}</h3><p>{industry.description}</p>
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
