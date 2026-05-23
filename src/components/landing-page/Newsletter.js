import styles from "./Newsletter.module.css";

function Newsletter() {
  return (
    <section className={styles.newsletterSection}>

      <div className={styles.container}>

        <div className={styles.newsletterBox}>

          <h2>
            The Perfect Pair Awaits
          </h2>

          <p>
            Subscribe to get exclusive offers,
            latest collections and vision care tips.
          </p>

          <form className={styles.form}>

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button type="submit">
              Subscribe
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;