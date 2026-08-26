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
            <h2>Reliable operations for a busy business.</h2>
            <p>Managed IT support gives your team a consistent operating rhythm for the systems, users, and vendors that keep work moving. We document the environment, resolve issues, and help prioritize improvements instead of waiting for the next interruption.</p>
            
            <div className="service-features">
              <div className="feature">
                <h3>Infrastructure Management</h3>
                <p>Keep servers, endpoints, networks, and cloud resources maintained, documented, and aligned with how your team works.</p>
              </div>
              <div className="feature">
                <h3>Helpdesk Support</h3>
                <p>Give staff a clear route for technical issues, with triage, communication, and follow-through for everyday support requests.</p>
              </div>
              <div className="feature">
                <h3>Backup & Disaster Recovery</h3>
                <p>Define what must be recoverable, how quickly it is needed, and how recovery procedures are tested and maintained.</p>
              </div>
              <div className="feature">
                <h3>Technology Planning</h3>
                <p>Maintain a prioritized technology backlog covering lifecycle decisions, security work, upgrades, and planned investments.</p>
              </div>
              <div className="feature">
                <h3>Monitoring & Maintenance</h3>
                <p>Use practical alerts, routine reviews, and preventive maintenance to identify issues before they interrupt the business.</p>
              </div>
              <div className="feature">
                <h3>Vendor & SaaS Support</h3>
                <p>Coordinate technical questions, renewals, access, and integrations across the software vendors your teams depend on.</p>
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
