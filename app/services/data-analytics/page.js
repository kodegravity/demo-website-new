import Link from 'next/link';
import CTA from '../../components/CTA';

export const metadata = {
  title: 'Data & Analytics | Quantorule',
  description: 'Build data platforms that drive better decisions. From data warehousing to business intelligence and analytics.',
};

export default function DataAnalytics() {
  return (
    <main>
      <section className="hero service-hero">
        <div className="page-width hero-content-service">
          <h1>Data & Analytics Services</h1>
          <p>Turn data into actionable insights. We design and build data platforms that enable better decision-making across your organization.</p>
        </div>
      </section>

      <section className="section">
        <div className="page-width">
          <div className="service-detail">
            <h2>Data-Driven Decision Making</h2>
            <p>Modern organizations need reliable data infrastructure. We help you collect, organize, and analyze data to support strategic decisions and operational efficiency.</p>
            
            <div className="service-features">
              <div className="feature">
                <h3>Data Warehouse Design</h3>
                <p>Build scalable data warehouses on cloud platforms (Snowflake, BigQuery, Redshift) to centralize and organize your data.</p>
              </div>
              <div className="feature">
                <h3>ETL & Data Integration</h3>
                <p>Create reliable pipelines to extract, transform, and load data from multiple sources into your analytics platform.</p>
              </div>
              <div className="feature">
                <h3>Business Intelligence</h3>
                <p>Develop dashboards and reports that provide visibility into key metrics and drive data-informed decisions.</p>
              </div>
              <div className="feature">
                <h3>Analytics & ML Models</h3>
                <p>Build predictive models and advanced analytics to uncover patterns and drive business value from your data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="page-width">
          <h2>Our Data Practice</h2>
          <div className="process-grid">
            <div>
              <p className="process-number">1</p>
              <h3>Assess</h3>
              <p>Understand your data landscape and analytics needs across the organization.</p>
            </div>
            <div>
              <p className="process-number">2</p>
              <h3>Design</h3>
              <p>Architecture data platforms built for scale, security, and performance.</p>
            </div>
            <div>
              <p className="process-number">3</p>
              <h3>Build</h3>
              <p>Implement data pipelines, warehouses, and analytics solutions.</p>
            </div>
            <div>
              <p className="process-number">4</p>
              <h3>Enable</h3>
              <p>Train teams and support adoption of data-driven practices.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Unlock insights from your data"
        description="Let's build a data platform that enables better decisions and operational insights."
        buttonText="Discuss your data needs"
        buttonHref="/contact"
      />
    </main>
  );
}
