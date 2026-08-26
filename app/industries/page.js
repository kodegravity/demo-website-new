import Link from 'next/link';
import CTA from '../components/CTA';

export const metadata = {
  title: 'Industries | Quantorule',
  description: 'IT solutions for financial services, healthcare, manufacturing, retail, and more.',
};

export default function Industries() {
  return (
    <main>
      {/* Hero */}
      <section className="hero service-hero">
        <div className="page-width hero-content-service">
          <h1 style={{ fontSize: '48px', marginBottom: '24px' }}>Industries We Serve</h1>
          <p style={{ fontSize: '18px', maxWidth: '600px', color: '#60727d', lineHeight: '1.6' }}>Technology support for teams balancing customer service, operational detail, and responsible growth.</p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section">
        <div className="page-width">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginTop: '40px' }}>
            <div className="industry-card" style={{ borderLeft: '3px solid var(--teal)', paddingLeft: '24px' }}>
              <h3 style={{ marginBottom: '16px' }}>Financial Services</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6', marginBottom: '16px' }}>
                Finance and administration teams need dependable information, clear controls, and systems that make review and reconciliation less manual. We help improve reporting, approvals, integrations, and access management.
              </p>
              <p style={{ color: '#60727d', fontSize: '14px' }}>Focus: reporting, reconciliation, controls, and workflow automation</p>
            </div>

            <div className="industry-card" style={{ borderLeft: '3px solid var(--teal)', paddingLeft: '24px' }}>
              <h3 style={{ marginBottom: '16px' }}>Healthcare</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6', marginBottom: '16px' }}>
                Healthcare operations depend on accurate information and careful handling of sensitive workflows. We support scheduling, referrals, internal reporting, and secure operational tools.
              </p>
              <p style={{ color: '#60727d', fontSize: '14px' }}>Focus: workflow clarity, access controls, reporting, and integration planning</p>
            </div>

            <div className="industry-card" style={{ borderLeft: '3px solid var(--teal)', paddingLeft: '24px' }}>
              <h3 style={{ marginBottom: '16px' }}>Manufacturing</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6', marginBottom: '16px' }}>
                Logistics teams need timely information across dispatch, inventory, suppliers, and exceptions. We connect operational systems and improve the visibility needed for daily decisions.
              </p>
              <p style={{ color: '#60727d', fontSize: '14px' }}>Focus: dispatch, inventory, integrations, and operational reporting</p>
            </div>

            <div className="industry-card" style={{ borderLeft: '3px solid var(--teal)', paddingLeft: '24px' }}>
              <h3 style={{ marginBottom: '16px' }}>Retail & E-Commerce</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6', marginBottom: '16px' }}>
                Retail operations benefit from dependable inventory, order, customer, and store information. We help teams reduce duplicate entry and build reporting they can use.
              </p>
              <p style={{ color: '#60727d', fontSize: '14px' }}>Focus: inventory, orders, customer data, and connected reporting</p>
            </div>

            <div className="industry-card" style={{ borderLeft: '3px solid var(--teal)', paddingLeft: '24px' }}>
              <h3 style={{ marginBottom: '16px' }}>Professional Services</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6', marginBottom: '16px' }}>
                Professional services teams need systems that connect delivery, time, billing, documents, and client communication. We help improve the flow between those activities.
              </p>
              <p style={{ color: '#60727d', fontSize: '14px' }}>Focus: project operations, time capture, billing, and portals</p>
            </div>

            <div className="industry-card" style={{ borderLeft: '3px solid var(--teal)', paddingLeft: '24px' }}>
              <h3 style={{ marginBottom: '16px' }}>Technology & Software</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6', marginBottom: '16px' }}>
                Software and technology teams often need additional capacity for platform work, integrations, release practices, or the operational systems around a product.
              </p>
              <p style={{ color: '#60727d', fontSize: '14px' }}>Focus: APIs, cloud platforms, delivery automation, and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section-light">
        <div className="page-width">
          <h2 style={{ marginBottom: '48px' }}>Why Industry Expertise Matters</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Compliance Knowledge</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6' }}>We understand regulations specific to your industry and build compliant solutions from the ground up.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Domain Expertise</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6' }}>Our team has hands-on experience solving real problems in your industry.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Workflow Understanding</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6' }}>We understand your business processes and design solutions that fit the way your teams work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Let's discuss your industry challenges"
        description="We'd like to learn more about your business and how we can help."
        buttonText="Schedule a consultation"
        buttonHref="/contact"
      />
    </main>
  );
}
