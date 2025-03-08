import styles from "../styles/categories.module.css"; // Import CSS module

const Pies = () => {
    return (
        <div className={styles.container}>
            <p className={styles.description}>
                DeEtta's pies start out with a hand-formed crust and are filled with the best seasonal 
                fruits and fillings available. Flavors vary by season and may include the following:
            </p>

            <h2 className={styles.title}>Pie Flavors</h2>

            <h3 className={styles.subTitle}>Apple</h3>
            <h3 className={styles.subTitle}>Banana Cream</h3>
            <h3 className={styles.subTitle}>Pecan - Seasonal</h3>
            <h3 className={styles.subTitle}>Cherry</h3>
            <h3 className={styles.subTitle}>Chocolate Cream</h3>
            <h3 className={styles.subTitle}>Coconut Cream</h3>
            <h3 className={styles.subTitle}>Key Lime</h3>
            <h3 className={styles.subTitle}>Lemon Cream</h3>
            <h3 className={styles.subTitle}>Cranberry Pear - Seasonal</h3>
            <h3 className={styles.subTitle}>Pumpkin - Seasonal</h3>
            <h3 className={styles.subTitle}>Mixed Berry</h3>
        </div>
    );
};

export default Pies;