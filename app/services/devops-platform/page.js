import Link from 'next/link';
import CTA from '../../components/CTA';

export const metadata = {
  title: 'DevOps & Platform Services | Quantorule',
  description: 'Build reliable platform infrastructure. From CI/CD pipelines to container orchestration and infrastructure automation.',
};

export default function DevOpsPlatform() {
  return (
    <main>
      <section className="hero service-hero">
        <div className="page-width hero-content-service">
          <h1>DevOps & Platform Services</h1>
          <p>Build reliable systems that scale. We create modern DevOps practices, automation, and platform infrastructure that enable fast, safe deployments.</p>
        </div>
      </section>

      <section className="section">
        <div className="page-width">
          <div className="service-detail">
            <h2>Modern Development Practices</h2>
            <p>DevOps bridges the gap between development and operations. We help teams automate deployment, improve reliability, and respond faster to changing business needs.</p>
            
            <div className="service-features">
              <div className="feature">
                <h3>CI/CD Pipelines</h3>
                <p>Automate testing and deployment workflows using GitHub Actions, Jenkins, or GitLab CI to enable fast, reliable releases.</p>
              </div>
              <div className="feature">
                <h3>Container & Orchestration</h3>
                <p>Docker and Kubernetes for consistent, scalable deployments across development, staging, and production.</p>
              </div>
              <div className="feature">
                <h3>Infrastructure as Code</h3>
                <p>Define infrastructure using Terraform, CloudFormation, or Helm for repeatable, version-controlled deployments.</p>
              </div>
              <div className="feature">
                <h3>Monitoring & Observability</h3>
                <p>Implement comprehensive monitoring, logging, and alerting to ensure system health and enable fast incident response.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="page-width">
          <h2>Platform Engineering</h2>
          <div className="process-grid">
            <div>
              <p className="process-number">1</p>
              <h3>Assess</h3>
              <p>Evaluate current processes, tools, and pain points in development and operations workflows.</p>
            </div>
            <div>
              <p className="process-number">2</p>
              <h3>Design</h3>
              <p>Create DevOps strategy and platform architecture that matches your organizational needs.</p>
            </div>
            <div>
              <p className="process-number">3</p>
              <h3>Implement</h3>
              <p>Build pipelines, infrastructure, and tooling with team training and best practices.</p>
            </div>
            <div>
              <p className="process-number">4</p>
              <h3>Optimize</h3>
              <p>Continuous improvement of deployment frequency, reliability, and incident response.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Modernize your development operations"
        description="Let's build a DevOps practice that enables faster, safer deployments and better team collaboration."
        buttonText="Discuss DevOps strategy"
        buttonHref="/contact"
      />
    </main>
  );
}
