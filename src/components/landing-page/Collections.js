import styles from "./Collections.module.css";

const data = [
  {
    title: "Classic Acetate",
    price: "$99",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200",
  },
  {
    title: "Minimalist Metal",
    price: "$129",
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=1200",
  },
];

function Collections() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <h2>Featured Collections</h2>

        <div className={styles.grid}>

          {data.map((item, index) => (
            <div className={styles.card} key={index}>

              <img src={item.image} alt={item.title} />

              <div className={styles.cardContent}>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Collections;