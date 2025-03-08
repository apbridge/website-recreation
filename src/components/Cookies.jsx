import styles from "../styles/categories.module.css"; // Import CSS module

const Cookies = () => {
    return (
        <div className={styles.container}>
            <p className={styles.description}>
                Handcrafted sweets made with the finest chocolates and all-natural extracts, from our 
                popular chocolate chip cookies with sea salt, to our delicious kolacky.
            </p>
            <h2 className={styles.title}>Cookies</h2>
            <h3 className={styles.subTitle}>Chocolate Chip Cookie with Sea Salt - sweet and salty!</h3>
            <h3 className={styles.subTitle}>Double Chocolate Cookie</h3>
            <h3 className={styles.subTitle}>Oatmeal Cookie</h3>
            <h3 className={styles.subTitle}>Coconut Macaroon</h3>
            <p className={styles.description}>
                Moist coconut-based cookie flavored with almond and topped with chocolate ganache.
            </p>
            <h3 className={styles.subTitle}>French Macaroon</h3>
            <h3 className={styles.subTitle}>Butter Sprinkle Cookie</h3>
            <p className={styles.description}>Variety: Chocolate-dipped, Sprinkle, and Turtle</p>
            <h3 className={styles.subTitle}>Kolacky</h3>
            <p className={styles.description}>Variety: Apricot, Cherry, Cheese, Blueberry, and Raspberry</p>
            <h3 className={styles.subTitle}>Dipped Shortbread</h3>
            <p className={styles.description}>
                Buttery shortbread cookie dipped in chocolate and finished with sprinkles.
            </p>
            <h3 className={styles.subTitle}>Decorated Sugar Cookies</h3>
            
            <h2 className={styles.title}>Bars</h2>
            <h3 className={styles.subTitle}>Raspberry Shortbread Bar - seasonal</h3>
            <p className={styles.description}>
                A layer of shortbread, topped with preserves, an almond crumble, and sliced almonds.
            </p>
            <h3 className={styles.subTitle}>Brownie</h3>
            <p className={styles.description}>
                Scratch-made with high-quality Callebaut chocolate. Varieties may include: Plain, 
                Cream Cheese, Salted Caramel, S'mores, German Chocolate, Lemon, and Turtle.
            </p>
            <h3 className={styles.subTitle}>DeEtta's Delight Bar</h3>
            <p className={styles.description}>
                The bottom layer is an oatmeal crust and then topped with milk chocolate, pecans, and 
                homemade caramel. Topped again with an oatmeal/butter crumble layer.
            </p>
        </div>
    );
};

export default Cookies;
