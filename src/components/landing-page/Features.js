import styles from "./Features.module.css";

const features = [
  {
    title: "3D Try-On",
    description:
      "Virtually try on frames from the comfort of your home with AI-powered technology.",
    icon: "👓",
  },
  {
    title: "Home Try-On",
    description:
      "Choose 5 frames and try them at home before making your decision.",
    icon: "🏠",
  },
  {
    title: "Precision Lenses",
    description:
      "Premium Zeiss and Essilor lenses crafted perfectly for your prescription.",
    icon: "✨",
  },
];

function Features() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>

        <div className={styles.heading}>
          <h2>Why Ainak Plus</h2>

          <p>
            We combine modern technology with premium eyewear experience.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div className={styles.card} key={index}>

              <div className={styles.icon}>
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;