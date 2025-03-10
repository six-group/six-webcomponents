import styles from './home.module.scss';

export default function Home() {
  return (
    <div style={styles} className="home-root">
      <h1>Demo</h1>
      <p>
        <b>React Demo with Next.js </b> using
        <a type="link" href="https://www.npmjs.com/package/@six-group/ui-library-react">
          @six-group/ui-library-react
        </a>
      </p>
    </div>
  );
}
