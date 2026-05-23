import styles from "./navbar.module.css";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>

        <h2 className={styles.logo}>
          Ainak Plus
        </h2>

        <nav className={styles.navlinks}>
          <a href="/">Eyeglasses</a>
          <a href="/">Sunglasses</a>
          <a href="/">Computer Glasses</a>
        </nav>

        <button className={styles.cartBtn}>
          🛒
        </button>

      </div>
    </header>
  );
}

export default Navbar;