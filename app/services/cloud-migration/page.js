import Link from 'next/link';
import CTA from '../../components/CTA';

export const metadata = {
  title: 'Cloud Migration | Quantorule',
  description: 'Plan and execute secure cloud migrations. Minimize downtime, reduce costs, and modernize your infrastructure.',
};

export default function CloudMigration() {
  return (
    <main>
      <section className="hero service-hero">
        <div className="page-width hero-content-service">
          <h1>Cloud Migration Services</h1>
          <p>Move to the cloud with confidence. We plan, execute, and optimize your migration to ensure smooth transitions and lasting value.</p>
        </div>
      </section>

      <section className="section">
        <div className="page-width">
          <div className="service-detail">
            <h2>Modernize Your Infrastructure</h2>
            <p>Cloud migration isn't just about moving systems—it's about modernizing your technology foundation to support growth, improve resilience, and reduce operational costs.</p>
            
            <div className="service-features">
              <div className="feature">
                <h3>Cloud Assessment & Planning</h3>
                <p>Evaluate your current infrastructure, identify opportunities, and develop a realistic migration strategy tailored to your business needs.</p>
              </div>
              <div className="feature">
                <h3>Workload Migration</h3>
                <p>Execute migrations with minimal downtime using proven methodologies. We handle both lift-and-shift and modernization approaches.</p>
              </div>
              <div className="feature">
                <h3>Architecture Optimization</h3>
                <p>Design cloud infrastructure for scalability, security, and cost efficiency using AWS, Azure, or GCP best practices.</p>
              </div>
              <div className="feature">
                <h3>Post-Migration Support</h3>
                <p>Ongoing optimization, cost management, and operational support to maximize value from your cloud investment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="page-width">
          <h2>Migration Approach</h2>
          <div className="process-grid">
            <div>
              <p className="process-number">1</p>
              <h3>Assess</h3>
              <p>Inventory applications, databases, and infrastructure. Identify dependencies and migration candidates.</p>
            </div>
            <div>
              <p className="process-number">2</p>
              <h3>Plan</h3>
              <p>Develop detailed migration roadmap with sequencing, resource allocation, and risk mitigation.</p>
            </div>
            <div>
              <p className="process-number">3</p>
              <h3>Execute</h3>
              <p>Implement migrations in phases with careful coordination to maintain service availability.</p>
            </div>
            <div>
              <p className="process-number">4</p>
              <h3>Optimize</h3>
              <p>Right-size resources, optimize costs, and tune performance post-migration.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Plan your cloud migration"
        description="Let's assess your infrastructure and develop a migration strategy that works for your business."
        buttonText="Get in touch"
        buttonHref="/contact"
      />
    </main>
  );
}
