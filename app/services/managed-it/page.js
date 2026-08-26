import Link from 'next/link';
import CTA from '../../components/CTA';

export const metadata = {
  title: 'Managed IT Services | Quantorule',
  description: 'Reliable IT operations and support. Proactive monitoring, maintenance, and strategic technology management.',
};

export default function ManagedIT() {
  return (
    <main>
      <section className="hero service-hero">
        <div className="page-width hero-content-service">
          <h1>Managed IT Services</h1>
          <p>Reliable operations without the overhead. Proactive monitoring, maintenance, and strategic IT support so your team stays focused on the business.</p>
        </div>
      </section>

      <section className="section">
        <div className="page-width">
          <div className="service-detail">
            <h2>Operational Excellence</h2>
            <p>Managed IT services provide the expertise and operational capacity to keep systems running smoothly. We handle the technical operations so you can focus on growth.</p>
            
            <div className="service-features">
              <div className="feature">
                <h3>Infrastructure Management</h3>
                <p>24/7 monitoring, maintenance, and support of servers, storage, networks, and cloud infrastructure.</p>
              </div>
              <div className="feature">
                <h3>Helpdesk Support</h3>
                <p>Responsive technical support for end users covering hardware, software, and connectivity issues.</p>
              </div>
              <div className="feature">
                <h3>Backup & Disaster Recovery</h3>
                <p>Protect critical data with reliable backup and recovery capabilities to minimize downtime.</p>
              </div>
              <div className="feature">
                <h3>Technology Planning</h3>
                <p>Strategic guidance on infrastructure updates, modernization, and technology investments aligned with business goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="page-width">
          <h2>Our Managed Services Approach</h2>
          <div className="process-grid">
            <div>
              <p className="process-number">1</p>
              <h3>Assess</h3>
              <p>Understand your infrastructure, users, and operational needs.</p>
            </div>
            <div>
              <p className="process-number">2</p>
              <h3>Plan</h3>
              <p>Develop a service model tailored to your organization's size and complexity.</p>
            </div>
            <div>
              <p className="process-number">3</p>
              <h3>Implement</h3>
              <p>Deploy monitoring, management tools, and support processes.</p>
            </div>
            <div>
              <p className="process-number">4</p>
              <h3>Support</h3>
              <p>Provide ongoing monitoring, maintenance, and strategic guidance.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Get reliable IT operations"
        description="Let's discuss a managed IT service plan that works for your organization."
        buttonText="Talk to our team"
        buttonHref="/contact"
      />
    </main>
  );
}
