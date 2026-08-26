import Link from 'next/link';
import CTA from '../../components/CTA';

export const metadata = {
  title: 'Cyber Security | Quantorule',
  description: 'Protect your business from cyber threats. Security-focused design, implementation, and ongoing management.',
};

export default function CyberSecurity() {
  return (
    <main>
      <section className="hero service-hero">
        <div className="page-width hero-content-service">
          <h1>Cyber Security Services</h1>
          <p>Protect your systems and data. We design secure infrastructure, implement best practices, and help you manage ongoing security risks.</p>
        </div>
      </section>

      <section className="section">
        <div className="page-width">
          <div className="service-detail">
            <h2>Security-First Approach</h2>
            <p>Security isn't an afterthought—it's built into every system we design and deploy. We help organizations protect their assets while maintaining operational efficiency.</p>
            
            <div className="service-features">
              <div className="feature">
                <h3>Security Assessment</h3>
                <p>Evaluate your current security posture, identify vulnerabilities, and prioritize remediation efforts.</p>
              </div>
              <div className="feature">
                <h3>Infrastructure Security</h3>
                <p>Design and implement secure cloud and on-premise infrastructure with proper access controls and encryption.</p>
              </div>
              <div className="feature">
                <h3>Application Security</h3>
                <p>Secure development practices, code reviews, and penetration testing to identify and fix vulnerabilities.</p>
              </div>
              <div className="feature">
                <h3>Compliance & Governance</h3>
                <p>Help achieve and maintain compliance with industry standards (SOC 2, HIPAA, PCI-DSS, GDPR).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="page-width">
          <h2>Security Services</h2>
          <div className="process-grid">
            <div>
              <p className="process-number">1</p>
              <h3>Assess Risks</h3>
              <p>Comprehensive evaluation of threats, vulnerabilities, and compliance gaps.</p>
            </div>
            <div>
              <p className="process-number">2</p>
              <h3>Design Solutions</h3>
              <p>Create security architecture aligned with your risk tolerance and business requirements.</p>
            </div>
            <div>
              <p className="process-number">3</p>
              <h3>Implement Controls</h3>
              <p>Deploy security controls, monitoring, and incident response capabilities.</p>
            </div>
            <div>
              <p className="process-number">4</p>
              <h3>Monitor & Manage</h3>
              <p>Continuous monitoring, threat detection, and security incident management.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Strengthen your security posture"
        description="Let's assess your security needs and build a plan to protect your business."
        buttonText="Schedule assessment"
        buttonHref="/contact"
      />
    </main>
  );
}
