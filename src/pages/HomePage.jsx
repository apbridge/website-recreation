import Wrapper from "../components/Wrapper";
import styles from "../styles/home.module.css";
import { Link } from "react-router-dom";
import rolling from "../assets/rolling-pin.png";
import doughnuts from "../assets/doughnuts.jpg";
import decorated from "../assets/decorated-cakes.jpeg";
import bread from "../assets/fresh-bread.jpeg";
import sweet from "../assets/sweet-pastries.jpeg";
import pies from "../assets/pies.jpg";
import people from "../assets/people.jpg";
import cup from "../assets/cup.png";
import peeps from "../assets/peeps.jpg";

const HomePage = () => {
  return (
    <Wrapper>
      <div className={styles.all}>
        <div className={styles.section1}>
          <h2 className={styles.h2Title}>DeEtta's Bakery offers classic, scratch-made baked goods for every occasion.</h2>
          <p className={styles.s1desc}>
            We are Naperville's original scratch made bakery. We believe in the goodness of real food, made from scratch. We source only the finest ingredients and hand-craft our baked goods daily.
          </p>
          <div className={styles.imageBox1}>
            <img src={rolling} alt="Rolling Pin" className={styles.rollingImage} />
          </div>
        </div>

        <div className={styles.section2}>
          <div className={styles.imageBox2}>
            <img src={doughnuts} alt="Doughnuts" className={styles.doughnutsImage} />
          </div>
          <div className={styles.overlayContent1}>
            <h3 className={styles.sectionTitle}>SEASONAL OFFERINGS</h3>
            <p className={styles.sectionDescription}>
              There is always something new and exciting to discover at our bakery. From seasonal favorites to new additions, DeEtta's has baked goods for every occasion.
            </p>
            <Link to="/menu">
              <button className={styles.menuButton1}>Seasonal Offerings</button>
            </Link>
          </div>
        </div>

        <div className={styles.section3}>
          <div className={styles.col1}>
            <div className={styles.imageBox3}>
              <img src={decorated} alt="Decorated Cakes" className={styles.decoratedImage} />
            </div>
            <h2 className={styles.title}>Decorated Cakes</h2>
            <p className={styles.description}>Delight in three layers of cake paired with two generous layers of filling. DeEtta's uses real buttercream, offers a variety of flavors and fillings, and tailors everything — from taste to design — to your personal preferences.</p>
          </div>
          <div className={styles.col2}>
            <div className={styles.imageBox4}>
              <img src={bread} alt="Fresh Bread" className={styles.breadImage} />
            </div>
            <h2 className={styles.title}>Fresh Bread</h2>
            <p className={styles.description}>There is nothing like the aroma and taste of freshly-baked bread. We use traditional methods (without additives or preservatives) to ensure the best taste and quality possible. You can find us working in the wee hours of the morning mixing, kneading, and making each loaf by hand.</p>
            <Link to="/menu">
              <button className={styles.menuButton2}>View Menu</button>
            </Link>
          </div>
          <div className={styles.col3}>
            <div className={styles.imageBox5}>
              <img src={sweet} alt="Sweet Pastries" className={styles.sweetImage} />
            </div>
            <h2 className={styles.title}>Sweet Pastries</h2>
            <p className={styles.description}>Danishes, muffins, and scones ... oh my! Start your morning off right with a sweet treat from our bakery. Need a little pick-me-up any time of day? Look no further than our delicious selection of cookies, brownies, macarons, eclairs, and other goodies.</p>
          </div>

        </div>


        <div className={styles.section4}>
          <div className={styles.imageBoxSection4}>
            <img src={peeps} alt="People" className={styles.peopleImage} />
          </div>
          <div className={styles.overlayContent2}>
            <h3 className={styles.section4Title}>BEHIND THE COUNTER</h3>
            <p className={styles.section4Description}>
              Owners Kevin and Morgan Tyschper work closely with an incredible team to serve up delicious, hand-made baked goods to DeEtta's fans both near and far.
            </p>
            <Link to="/about">
              <button className={styles.aboutButton3}>About DeEtta's</button>
            </Link>
          </div>
        </div>

        <div className={styles.section5}>
          <div className={styles.columns5}>
            <div className={styles.column}>
              <div className={styles.imageBox6}>
                <img src={pies} alt="Pies" className={styles.pieImage} />
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.imageBox7}>
                <img src={people} alt="People" className={styles.people2Image} />
              </div>
            </div>
          </div>
        </div>


        <div className={styles.section6}>
          <h2 className={styles.leftSecTitle}>Kevin and Morgan Tyschper are the baking-enthusiast, husband-and-wife duo behind Naperville's favorite scratch-made bakery.</h2>
          <div className={styles.container4}>
            <div className={styles.imageBox7}>
              <img src={cup} alt="Cup" className={styles.cupImage} />
            </div>
            <div className={styles.text7}>
              <p className={styles.middleSec}>DeEtta's Bakery was founded in 2009 out of the Tyschper's passion for artisan baked goods. Together with their team of salespeople, bakers, and decorators, DeEtta's brings scratch-made baked goods to the Chicagoland area with exceptional service and unmatched quality.</p>
              <p className={styles.rightSec}>Kevin and Morgan are dedicated to using the finest local ingredients; their goods use real butter, flour, sugar, and eggs. During the local growing seasons, they can often be found at farmer's markets sourcing items for the bakery.</p>
            </div>
          </div>
        </div>
      </div >
    </Wrapper>
  );
};

export default HomePage;
