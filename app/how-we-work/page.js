import Link from 'next/link';
import CTA from '../components/CTA';

export const metadata = {
  title: 'How We Work | Quantorule',
  description: 'Our proven methodology for delivering technology solutions. From discovery through long-term support.',
};

export default function HowWeWork() {
  return (
    <main>
      <section className="hero service-hero">
        <div className="page-width hero-content-service">
          <h1>How We Work</h1>
          <p>A proven approach that balances careful planning with practical delivery. We focus on understanding your business, solving real problems, and building lasting partnerships.</p>
        </div>
      </section>

      <section className="section">
        <div className="page-width">
          <div className="service-detail">
            <h2>Our Five-Step Process</h2>
            <p>From initial conversation to ongoing support, we follow a structured approach that ensures alignment, manages risk, and delivers value.</p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="page-width">
          <div className="process-grid-large">
            <div className="process-card">
              <p className="process-number">1</p>
              <h3>Discover</h3>
              <p>We begin by deeply understanding your business, challenges, and goals. We ask questions, listen carefully, and develop a clear picture of what success looks like.</p>
              <ul className="process-details">
                <li>Business context and strategy</li>
                <li>Current systems and constraints</li>
                <li>Stakeholder needs and priorities</li>
                <li>Success criteria</li>
              </ul>
            </div>

            <div className="process-card">
              <p className="process-number">2</p>
              <h3>Plan</h3>
              <p>Based on what we've learned, we develop a detailed plan. We create architecture designs, identify risks, establish timelines, and define resource requirements.</p>
              <ul className="process-details">
                <li>Technical architecture and design</li>
                <li>Project timeline and milestones</li>
                <li>Resource and budget planning</li>
                <li>Risk assessment</li>
              </ul>
            </div>

            <div className="process-card">
              <p className="process-number">3</p>
              <h3>Build</h3>
              <p>We execute the plan with discipline and transparency. Regular communication, iterative delivery, and quality assurance ensure we stay aligned and on track.</p>
              <ul className="process-details">
                <li>Development and implementation</li>
                <li>Continuous testing and quality assurance</li>
                <li>Regular progress reviews and updates</li>
                <li>Proactive risk management</li>
              </ul>
            </div>

            <div className="process-card">
              <p className="process-number">4</p>
              <h3>Launch</h3>
              <p>Deployment is carefully planned and executed to minimize disruption. We provide training, documentation, and close support during the transition.</p>
              <ul className="process-details">
                <li>Deployment planning and execution</li>
                <li>User training and documentation</li>
                <li>Go-live support</li>
                <li>Performance monitoring</li>
              </ul>
            </div>

            <div className="process-card">
              <p className="process-number">5</p>
              <h3>Support</h3>
              <p>The work doesn't end at launch. We provide ongoing support, optimization, and strategic guidance to ensure your systems deliver lasting value.</p>
              <ul className="process-details">
                <li>Technical support and troubleshooting</li>
                <li>Performance optimization</li>
                <li>Updates and enhancements</li>
                <li>Strategic technology planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-width">
          <h2>Why This Approach Works</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Alignment</h3>
              <p>By starting with discovery, we ensure our solutions align with your actual business needs, not assumptions.</p>
            </div>
            <div className="benefit-item">
              <h3>Transparency</h3>
              <p>Regular communication and progress reviews keep everyone informed and enable course corrections early.</p>
            </div>
            <div className="benefit-item">
              <h3>Quality</h3>
              <p>Rigorous planning, testing, and risk management result in reliable systems built to last.</p>
            </div>
            <div className="benefit-item">
              <h3>Partnership</h3>
              <p>We're committed to your long-term success. Our relationship doesn't end at launch—we're there for ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Let's work together"
        description="We're ready to apply this proven approach to your next project. Tell us about your goals."
        buttonText="Get started"
        buttonHref="/contact"
      />
    </main>
  );
}
