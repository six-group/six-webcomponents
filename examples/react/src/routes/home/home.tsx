import styles from './home.module.css';

export function Home() {
  return (
    <>
      <h1 className={styles['home-title']}>Demo</h1>
      <p className={styles['home-text']}>
        <b>React Demo App</b> using{' '}
        <a type="link" href="https://www.npmjs.com/package/@six-group/ui-library-react">
          @six-group/ui-library-react
        </a>
      </p>
    </>
  );
}
