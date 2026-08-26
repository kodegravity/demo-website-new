import Link from 'next/link';
import CTA from '../components/CTA';

export const metadata = {
  title: 'Engagement Models | Quantorule',
  description: 'Different ways to work with Quantorule. From project-based engagements to ongoing managed services.',
};

export default function Engagements() {
  return (
    <main>
      <section className="hero service-hero">
        <div className="page-width hero-content-service">
          <h1>Engagement Models</h1>
          <p>We work in ways that fit your needs. Whether you need a discrete project, an extended engagement, or ongoing support, we have flexible models to match your situation.</p>
        </div>
      </section>

      <section className="section">
        <div className="page-width">
          <div className="engagements-grid">
            <div className="engagement-card">
              <h2>Cloud Readiness Assessment</h2>
              <p>Evaluate your infrastructure, applications, and operations to develop a realistic cloud migration plan.</p>
              <div className="engagement-details">
                <p><strong>Typical Duration:</strong> 2-4 weeks</p>
                <p><strong>Outcome:</strong> Assessment report with recommendations and prioritized roadmap</p>
              </div>
              <ul className="engagement-list">
                <li>Infrastructure inventory and analysis</li>
                <li>Cloud provider evaluation</li>
                <li>Cost and risk assessment</li>
                <li>Migration strategy and roadmap</li>
              </ul>
            </div>

            <div className="engagement-card">
              <h2>Web Application Build</h2>
              <p>Design and develop custom web applications from concept through deployment and support.</p>
              <div className="engagement-details">
                <p><strong>Typical Duration:</strong> 3-6 months</p>
                <p><strong>Outcome:</strong> Production-ready web application with documentation and training</p>
              </div>
              <ul className="engagement-list">
                <li>Requirements and specification</li>
                <li>UX/UI design</li>
                <li>Full-stack development</li>
                <li>Testing and deployment</li>
              </ul>
            </div>

            <div className="engagement-card">
              <h2>Dashboard & Reporting Project</h2>
              <p>Build custom dashboards and reports to provide visibility into business metrics and operations.</p>
              <div className="engagement-details">
                <p><strong>Typical Duration:</strong> 4-10 weeks</p>
                <p><strong>Outcome:</strong> Deployed dashboards with self-service capabilities for end users</p>
              </div>
              <ul className="engagement-list">
                <li>Data analysis and requirements</li>
                <li>Dashboard design</li>
                <li>Data pipeline and integration</li>
                <li>User training and support</li>
              </ul>
            </div>

            <div className="engagement-card">
              <h2>Automation Workflow Implementation</h2>
              <p>Identify and automate repetitive processes to improve efficiency and reduce manual errors.</p>
              <div className="engagement-details">
                <p><strong>Typical Duration:</strong> 3-8 weeks</p>
                <p><strong>Outcome:</strong> Automated workflows reducing manual work and improving consistency</p>
              </div>
              <ul className="engagement-list">
                <li>Process analysis and optimization</li>
                <li>Automation design</li>
                <li>Tool integration and implementation</li>
                <li>Testing and refinement</li>
              </ul>
            </div>

            <div className="engagement-card">
              <h2>Security Assessment & Hardening</h2>
              <p>Evaluate your security posture and implement improvements to protect systems and data.</p>
              <div className="engagement-details">
                <p><strong>Typical Duration:</strong> 4-6 weeks</p>
                <p><strong>Outcome:</strong> Security improvements, controls, and compliance enhancements</p>
              </div>
              <ul className="engagement-list">
                <li>Security assessment</li>
                <li>Vulnerability identification</li>
                <li>Control implementation</li>
                <li>Compliance alignment</li>
              </ul>
            </div>

            <div className="engagement-card">
              <h2>Managed Support Engagement</h2>
              <p>Ongoing technical support and operations management for your systems and infrastructure.</p>
              <div className="engagement-details">
                <p><strong>Typical Duration:</strong> Ongoing</p>
                <p><strong>Outcome:</strong> Reliable operations, proactive monitoring, and continuous optimization</p>
              </div>
              <ul className="engagement-list">
                <li>24/7 monitoring and support</li>
                <li>Infrastructure management</li>
                <li>Preventive maintenance</li>
                <li>Strategic technology guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="page-width">
          <h2>Flexible Engagement Terms</h2>
          <p>We adapt our working model to match your needs:</p>
          <div className="terms-grid">
            <div className="term-item">
              <h3>Project-Based</h3>
              <p>Defined scope, timeline, and deliverables. Best for discrete initiatives with clear endpoints.</p>
            </div>
            <div className="term-item">
              <h3>Extended Teams</h3>
              <p>Resource augmentation where our team works embedded within your organization for 3-12 months.</p>
            </div>
            <div className="term-item">
              <h3>Managed Services</h3>
              <p>Ongoing operational support with monthly retainers. Includes support, monitoring, and strategic guidance.</p>
            </div>
            <div className="term-item">
              <h3>Hybrid Models</h3>
              <p>Combination of project work and ongoing support. Common for system migrations or modernization initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Let's discuss the right engagement model"
        description="Tell us about your goals and we'll recommend the engagement model that works best for your situation."
        buttonText="Schedule a conversation"
        buttonHref="/contact"
      />
    </main>
  );
}
