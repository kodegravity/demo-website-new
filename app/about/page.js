import Link from 'next/link';
import CTA from '../components/CTA';

export const metadata = {
  title: 'About Quantorule | IT Consulting & Software Development',
  description: 'Learn about Quantorule\'s mission, team, and commitment to delivering excellence.',
};

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="hero service-hero">
        <div className="page-width hero-content-service">
          <h1 style={{ fontSize: '48px', marginBottom: '24px' }}>About Quantorule</h1>
          <p style={{ fontSize: '18px', maxWidth: '600px', color: '#60727d', lineHeight: '1.6' }}>Building reliable technology for growing businesses</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="page-width">
          <div style={{ maxWidth: '800px', marginBottom: '48px' }}>
            <h2 style={{ marginBottom: '24px' }}>Our Mission</h2>
            <p style={{ fontSize: '16px', color: '#60727d', lineHeight: '1.7', marginBottom: '16px' }}>
              At Quantorule, we believe technology should make important work clearer, safer, and easier to operate. Our mission is to give medium-sized businesses the technical judgment and delivery support they need to improve systems without losing sight of the people who use them.
            </p>
            <p style={{ fontSize: '16px', color: '#60727d', lineHeight: '1.7' }}>
              We combine software delivery, infrastructure, data, and security experience with practical business thinking. That means honest recommendations, clear tradeoffs, and solutions that can be maintained after the project team has left.
            </p>
          </div>

          <div className="outcomes-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
            <div className="outcome">
              <strong>Custom Solutions</strong>
              <h3>Built for You</h3>
              <p>We don't believe in one-size-fits-all. Every solution is tailored to your specific needs.</p>
            </div>
            <div className="outcome">
              <strong>Strategic Thinking</strong>
              <h3>Aligned with Goals</h3>
              <p>Technology should drive your business forward, not just solve today's problems.</p>
            </div>
            <div className="outcome">
              <strong>Reliable Delivery</strong>
              <h3>On Time, On Budget</h3>
              <p>We take pride in delivering quality work that meets commitments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Value */}
      <section className="section section-light">
        <div className="page-width">
          <h2 style={{ marginBottom: '48px' }}>What We Value</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Excellence</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6' }}>We strive for the highest standards in every aspect of our work, from code quality to client communication.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Partnership</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6' }}>We see our clients as partners, working together toward shared goals and mutual success.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Integrity</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6' }}>We're honest about capabilities, timelines, and tradeoffs. Your trust is our most valuable asset.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Innovation</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6' }}>We stay current with technology trends and continuously improve our capabilities and processes.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Collaboration</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6' }}>We believe in open communication, regular feedback, and working closely with your team.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Results</h3>
              <p style={{ color: '#60727d', lineHeight: '1.6' }}>Ultimately, we're focused on delivering measurable value that improves your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Working relationship */}
      <section className="section">
        <div className="page-width">
          <h2 style={{ marginBottom: '32px' }}>What working with us looks like</h2>
          <div className="process-grid">
            <div>
              <p className="process-number">01</p>
              <h3>Useful discovery</h3>
              <p>We document the current environment, the operating problem, and the decision that needs to be made.</p>
            </div>
            <div>
              <p className="process-number">02</p>
              <h3>Visible delivery</h3>
              <p>Work is organized into reviewable steps so stakeholders can respond before small issues become expensive ones.</p>
            </div>
            <div>
              <p className="process-number">03</p>
              <h3>Operational handover</h3>
              <p>Documentation, access decisions, runbooks, and training are part of delivery rather than an afterthought.</p>
            </div>
            <div>
              <p className="process-number">04</p>
              <h3>Practical support</h3>
              <p>After launch, we can stay involved through maintenance, improvements, and a technology backlog shaped with your team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section section-light">
        <div className="page-width">
          <h2 style={{ marginBottom: '48px' }}>Get in Touch</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Email</h3>
              <p style={{ color: '#60727d' }}><a href="mailto:info@quantorule.com" style={{ color: 'var(--teal)', fontWeight: '600' }}>info@quantorule.com</a></p>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Address</h3>
              <p style={{ color: '#60727d' }}>10 Four Seasons Pl<br />Etobicoke, ON M9B 6H7</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Let's Talk</h3>
              <p><Link className="button button-small button-primary" href="/contact">Schedule a Call</Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to work together?"
        description="Let's discuss the systems, workflows, or technology decisions that need attention next."
        buttonText="Start a conversation"
        buttonHref="/contact"
      />
    </main>
  );
}
