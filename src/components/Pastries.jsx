import styles from "../styles/categories.module.css"; // Import CSS module

const Pastries = () => {
    return (
        <div className={styles.container}>
            <p className={styles.description}>
                Our motto is, "Everything is better when made with real butter!" DeEtta's wide variety 
                of scratch-made pastries are sure to be a sweet addition to your day.
            </p>

            <h2 className={styles.title}>Pastries</h2>

            <h3 className={styles.subTitle}>Bostock - Seasonal</h3>
            <p className={styles.description}>
                A slice of Brioche bread that is soaked with an orange syrup and then topped with an almond paste and baked again.
            </p>

            <h3 className={styles.subTitle}>Eclairs</h3>
            <p className={styles.description}>
                Filled with homemade vanilla pastry cream and topped with chocolate ganache.
            </p>

            <h3 className={styles.subTitle}>Sweetie Pies</h3>
            <p className={styles.description}>
                DeEtta's version of a hand pie. Varieties: Apple, Cherry, Nutella, and Lemon along with other seasonal flavors.
            </p>

            <h3 className={styles.subTitle}>Petit Fours</h3>
            <p className={styles.description}>
                Marzipan base with three layers of all-butter pound cake and filled with either chocolate or vanilla buttercream, 
                apricot, or raspberry. Frosted with white or dark chocolate.
            </p>

            <h3 className={styles.subTitle}>Energy Bites</h3>
            <p className={styles.description}>
                A combination of peanut butter, cranberries, oats, chocolate chips, sunflower seeds, wheat germ, and honey, 
                coated in pecans.
            </p>

            <h3 className={styles.subTitle}>Cake Balls</h3>
            <p className={styles.description}>
                Chocolate, Vanilla, Red Velvet, Sugar Cookie, Cookies and Cream, or Cookie Dough.
            </p>
        </div>
    );
};

export default Pastries;
