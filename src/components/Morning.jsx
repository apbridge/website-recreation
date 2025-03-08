import styles from "../styles/categories.module.css"; // Import CSS module

const Morning = () => {
    return (
        <div className={styles.container}>
            <p className={styles.description}>
                Start your day off right with baked goods from DeEtta's. Selections include: scones, muffins, 
                danishes, doughnuts, croissant cups, and coffee cakes.
            </p>

            <h2 className={styles.title}>Morning Pastries</h2>

            <h3 className={styles.subTitle}>Danish</h3>
            <p className={styles.description}>
                Daily varieties may include: Cherry - Raspberry - Cheese - Almond - Apple
            </p>

            <h3 className={styles.subTitle}>Muffins</h3>
            <p className={styles.description}>
                Daily varieties may include: Blueberry - Pumpkin - Banana Nut - Morning Glory - Cranberry 
                Orange - Chocolate Cheese, plus other seasonal varieties.
            </p>

            <h3 className={styles.subTitle}>Scones</h3>
            <p className={styles.description}>
                A cream and butter based drop scone. Daily flavors may include: Lemon Blueberry - Strawberry 
                and Cream - Apple Cinnamon - Blackberry Corn Honey - Pumpkin White Chocolate - Eggnog - Raspberry 
                White Chocolate - Cranberry Orange - Double Chocolate - Peanut Butter Banana - Banana Chocolate 
                Chip - Peach - Butterscotch Banana - Cherry Almond White Chocolate - Raspberry White Chocolate - 
                and other seasonal flavors.
            </p>

            <h3 className={styles.subTitle}>Coffee Cakes - Available Daily</h3>
            <p className={styles.description}>
                Varieties: Pecan Heart - Apricot - Cherry - Raspberry - Chocolate Cheese - Cheese - Apple - 
                Almond - Six Sisters - Blueberry Cheese - Seasonal
            </p>

            <h3 className={styles.subTitle}>Cinnamon Rolls</h3>
            <p className={styles.description}>Traditional and Seasonal</p>

            <h2 className={styles.title}>Doughnuts</h2>
            <p className={styles.description}>(Available Fridays, Saturdays, and Sundays)</p>

            <h3 className={styles.subTitle}>Cake Doughnut Varieties</h3>
            <p className={styles.description}>
                Yellow Cake - Chocolate Frosted, Yellow Cake - Vanilla Frosted, Chocolate Cake - Zebra Frosted, 
                Chocolate Cake - Chocolate Frosted, Maple Bacon, Maple, Pecan
            </p>

            <h3 className={styles.subTitle}>Old Fashioned Doughnuts</h3>
            <p className={styles.description}>
                Vanilla Sour Cream - Chocolate Sour Cream (2017 Chicago Donut Fest Judges Choice Winner) - Seasonal
            </p>

            <h3 className={styles.subTitle}>Seasonal Doughnut Varieties</h3>
            <h3 className={styles.subTitle}>Custard-filled Bismark</h3>
            <h3 className={styles.subTitle}>Glazed Ring</h3>
            <h3 className={styles.subTitle}>Chocolate-glazed Ring</h3>

            <h3 className={styles.subTitle}>Long Johns</h3>
            <p className={styles.description}>Vanilla, Chocolate, Coconut</p>

            <h3 className={styles.subTitle}>Doughnut Cakes</h3>
            <p className={styles.description}>Chocolate or Vanilla frosted with sprinkles</p>
        </div>
    );
};

export default Morning;
