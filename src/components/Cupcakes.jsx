import styles from '../styles/categories.module.css';

const Cupcakes = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cupcakes</h2>
      <p className={styles.description}>
        DeEtta's offers a variety of cupcakes topped with our all-butter buttercream. Whether you're
        craving classic vanilla, decadent chocolate, or seasonal flavors, our cupcakes are made with the
        finest ingredients for the perfect bite every time.
      </p>
    </div>
  );
};

export default Cupcakes;
