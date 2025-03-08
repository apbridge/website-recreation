import styles from "../styles/categories.module.css"; // Assuming you have a CSS module for this component

const Breads = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Breads</h2>
      <p className={styles.description}>
        All-natural, scratch-made breads using the finest ingredients without any additives or preservatives. 
        Daily selections include white, wheat, and rye breads with additional artisanal offerings.
      </p>

      <h3 className={styles.subTitle}>Caraway Rye</h3>
      <p className={styles.description}>
        Filled with caraway seeds and rye flour. A fantastic addition to any meal.
      </p>

      <h3 className={styles.subTitle}>Challah - Seasonal</h3>
      <p className={styles.description}>
        A braided egg bread. Great by itself or as French toast in the morning. Also makes a great bread pudding.
      </p>

      <h3 className={styles.subTitle}>Croissant Cup - as featured on Chicago's Best!</h3>
      <p className={styles.description}>
        A croissant in a muffin form. Varieties: Spinach Feta, Ream's Market Bacon Cheddar, Ham with Smoked Gouda, Plain, Chocolate Custard, Custard, Ganache, and Almond.
      </p>

      <h3 className={styles.subTitle}>White Pan Loaf</h3>
      <p className={styles.description}>
        Traditional white bread. Made completely from scratch each morning. Great as a sandwich bread or as toast.
      </p>

      <h3 className={styles.subTitle}>Whole Wheat Pan Loaf</h3>
      <p className={styles.description}>
        A great wheat bread, with just a touch of honey. Made completely from scratch each morning. Great as a sandwich bread or as toast.
      </p>

      <h3 className={styles.subTitle}>Swirl Bread</h3>
      <p className={styles.description}>
        Can't decide between the white and wheat? This bread is a great combination of both varieties.
      </p>

      <h3 className={styles.subTitle}>Sourdough - Seasonal</h3>
      <p className={styles.description}>
        Classic sourdough - Available in traditional and a variety of flavors.
      </p>

      <h3 className={styles.subTitle}>Cheese Bread</h3>
      <p className={styles.description}>
        Delightful blend of cheeses throughout the bread.
      </p>

      <h3 className={styles.subTitle}>Focaccia</h3>
      <p className={styles.description}>
        Classic Italian herb bread with an olive oil base.
      </p>
    </div>
  );
};

export default Breads;
