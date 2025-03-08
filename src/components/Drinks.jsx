import styles from "../styles/categories.module.css"; // Import CSS module

const Drinks = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Drinks</h2>
            
            <h3 className={styles.subTitle}>Coffee</h3>
            <p className={styles.description}>Product handcrafted by Modest Coffee Roasters.</p>
            
            <h3 className={styles.subTitle}>Bottled Modest Cold Brew</h3>
            
            <h3 className={styles.subTitle}>
                Homemade Hot Chocolate with DeEtta's handcrafted marshmallows.
            </h3>
            
            <h3 className={styles.subTitle}>Teas</h3>
            <p className={styles.description}>Tea Forte Varieties</p>
            
            <h3 className={styles.subTitle}>Milk</h3>
            <p className={styles.description}>Organic regular and chocolate milk.</p>
            
            <h3 className={styles.subTitle}>Juice</h3>
            <p className={styles.description}>Orange and Apple</p>
            
            <h3 className={styles.subTitle}>Bottled Water</h3>
        </div>
    );
};

export default Drinks;
