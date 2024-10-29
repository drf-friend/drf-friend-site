import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/setup">
            Django Petra Start
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Simplify Django REST API development effortlessly with Django Petra.`}
      description="Django Petra is a collection of utilities and enhancements for Django Rest Framework (DRF), aiming to simplify and streamline the process of building RESTful APIs. It provides convenience functions, tools, and patterns to help developers write clean, efficient, and maintainable code when working with DRF">
      <HomepageHeader />
      <main>
        
      </main>
    </Layout>
  );
}
