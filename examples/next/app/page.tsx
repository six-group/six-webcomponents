'use client';
// css
import '@six-group/ui-library/dist/ui-library/ui-library.css';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section slot="main">
        <div className="dashboard">
          <h1>Demo</h1>
          <p>
            This is a <b>Nextjs Demo App</b> using <b>@six-group/ui-library-react</b>
          </p>
        </div>
      </section>
    </main>
  );
}
