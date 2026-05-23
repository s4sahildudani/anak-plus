import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        <div className={styles.grid}>

          <div>
            <h2 className={styles.logo}>
              Ainak Plus
            </h2>

            <p className={styles.description}>
              Crafting the future of vision
              through design and technology.
            </p>
          </div>

          <div>
            <h4>Experience</h4>

            <a href="/">3D Try-On</a>
            <a href="/">Home Try-On</a>
            <a href="/">Stores Near You</a>
          </div>

          <div>
            <h4>Support</h4>

            <a href="/">About Us</a>
            <a href="/">Shipping & Returns</a>
            <a href="/">Contact</a>
          </div>

          <div>
            <h4>Legal</h4>

            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
          </div>

        </div>

        <div className={styles.bottom}>
          © 2026 Ainak Plus. All rights reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;