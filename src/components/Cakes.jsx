import styles from "../styles/categories.module.css"; // Assuming you have a CSS module for this component

const Cakes = () => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>
        Delight in three layers of cake paired with two generous layers of filling. DeEtta's uses real buttercream, offers a variety of flavors and fillings, and tailors everything ­­— from taste to design — to your personal preferences.
      </p>
      <h2 className={styles.title}>Cake Flavors</h2>
      <h3 className={styles.subTitle}>Chocolate - Yellow - White - Almond - Lemon - Red Velvet - Carrot</h3>
      <h2 className={styles.title}>Fillings</h2>
      <h3 className={styles.subTitle}>Bavarian Cream - Lemon Cream - Almond Cream - Chocolate Mousse - Mocha Mousse - Raspberry Mousse - Strawberry Mousse - Fresh Raspberries - Fresh Strawberries - Cream Cheese - Cannoli - Cookies and Cream - Coconut Cream - Peanut Butter Moussse</h3>
      <h2 className={styles.title}>Popular Cakes</h2>
      <h3 className={styles.subTitle}>Double Chocolate Mousse Cake</h3>
      <p className={styles.description}>Three layers of our very moist chocolate cake, filled and frosted with our chocolate mousse and topped with chocolate curls.</p>
      <h3 className={styles.subTitle}>Hummingbird Cake</h3>
      <p className={styles.description}>A blend of spice cake, pineapple, banana and pecans frosted with real cream cheese frosting.</p>
      <h3 className={styles.subTitle}>Cannoli Cake</h3>
      <p className={styles.description}>White cake filled with chocolate laced cannoli filling and frosted in Italian Buttercream. Garnished with chocolate curls and crushed pistachios.</p>
      <h3 className={styles.subTitle}>Carrot Cake</h3>
      <p className={styles.description}>Three layers of carrot cake filled with fresh carrots, pecans, coconut, pineapple and covered in a buttermilk caramel glaze then frosted in cream cheese frosting.</p>
      <h3 className={styles.subTitle}>Cake Balls</h3>
      <p className={styles.description}>Vanilla, Chocolate, Red Velvet, Sugar Cookie, Cookies and Cream, and Cookie Dough Balls</p>
      <h3 className={styles.subTitle}>Cheesecake</h3>
      <p className={styles.description}>Rich and creamy and made with real cream cheese with a graham cracker base. Also available in pumpkin, turtle, chocolate, ganache swirl, raspberry swirl, and maple pecan.</p>
      <h3 className={styles.subTitle}>Cookie Cake</h3>
      <p className={styles.description}>Available in Chocolate chip</p>
      <h3 className={styles.subTitle}>Doughnut Cake</h3>
      <p className={styles.description}>Chocolate or Vanilla Frosted with Sprinkles</p>
      <h3 className={styles.subTitle}>DeEtta's Bakery provides two different buttercream options.</h3>
      <p className={styles.description}>
        American is the sweeter of the two options; if you're unsure which to pick, start here. Italian is the less-sweet pick, is considered a "meringue buttercream," and has a smoother texture.
      </p>
    </div>
  );
};

export default Cakes;
