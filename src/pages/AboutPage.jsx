import Wrapper from "../components/Wrapper";
import rolling from "../assets/rolling2.jpeg";
import people2 from "../assets/people2.jpeg";
import people3 from "../assets/people3.jpeg";
import cup2 from "../assets/cup2.png";
import pie2 from "../assets/pie2.jpeg";
import food from "../assets/food.jpeg";
import fathers from "../assets/fathers.jpeg";
import q from "../assets/q.png";
import styles from "../styles/about.module.css";

const AboutPage = () => {
  return (
    <Wrapper>
      <div className={styles.section1}>
        <div className={styles.textContent}>
          <h2 className={styles.s1h2}>Welcome to DeEtta's Bakery!</h2>
          <h2 className={styles.s1h2}>We are located at 428 West Fifth Avenue in Naperville, Illinois.</h2>
          <p className={styles.s1p}>DeEtta's Bakery was created in 2009 by Morgan and Kevin Tyschper out of a passion for artisan baked goods and breads. DeEtta's focus is to bring scratch-made baked goods to the Chicagoland area with exceptional customer service.</p>
          <p className={styles.s1p}>We source the finest local ingredients and our products use real butter, flour, sugar, and eggs. During the local growing seasons, we can often be found at local farmer's markets sourcing items for the bakery. We look to support local growers in our seasonal offerings.</p>
        </div>
        <img src={rolling} alt="Rolling Pin" className={styles.rollingImage} />
      </div>

      <hr className={styles.styledLine} />

      <div className={styles.section2}>
        <div className={styles.imageColumn}>
          <img src={people2} alt="People" className={styles.people2Image} />
          <img src={people3} alt="People" className={styles.people3Image} />
          <img src={cup2} alt="Rolling Pin, Cup, & Doughtnut" className={styles.cup2Image} />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.s2h2}>Morgan Tyschper</h2>
          <p className={styles.s2p}>Morgan Tyschper is the chief creative designer at DeEtta's Bakery. Morgan has been baking as long as she can remember and has fond memories of baking in her mother's and grandmother's kitchens. So fond are Morgan's memories, the bakery is named after her mother, DeEtta. Morgan has always had a passion for baking and food, whether it be goods for family and friends, teaching children's baking classes in Minneapolis, starting a small baking business while living in South Carolina, or being a Registered Pediatric Dietitian. Morgan creates the many decorative designs and develops new flavor offerings at DeEtta's Bakery.</p>
          <hr className={styles.styledLine2} />
          <h2 className={styles.s22h2}>Kevin Tyschper</h2>
          <p className={styles.s22p}>Kevin Tyschper is the other half of the vision behind DeEtta's Bakery. With a baking and pastry background from Kendall College in Chicago, Kevin oversees production at DeEtta's. He has worked at local restaurants and family bakeries, sharpening his skills. Kevin started baking at an early age in his parents' kitchen and has fond memories of baking kolacky with his mom, along with the hundreds of pierogi's that she would make during the holidays.</p>
        </div>
      </div>


      <hr className={styles.styledLine} />

      <div className={styles.section3}>
        <h2 className={styles.s3h2}>We believe in helping to support the Naperville community and local charitable organizations. Together with our incredible team, we are living our dream of bringing delicious, hand-made goods to Naperville.</h2>
      </div>
      <hr className={styles.styledLine} />

      <div className={styles.section4}>
        <p className={styles.s4p}>Follow us on Instagram to keep up to date on events and new baked goods. @deettasbakery</p>
        <div className={styles.imageRow}>
          <img src={pie2} alt="Pie" className={styles.pie2Image} />
          <img src={pie2} alt="Pie" className={styles.pie22Image} />
          <img src={food} alt="Food" className={styles.foodImage} />
          <img src={fathers} alt="Father's Day" className={styles.fathersImage} />
        </div>
      </div>

      <hr className={styles.styledLine} />

      <div className={styles.section5}>
        <div className={styles.qContainer}>
          <img src={q} alt="Q" className={styles.qImage} />
          <div className={styles.textContainer}>
            <p className={styles.sectionText1}>Do you offer nut or gluten-free products?</p>
            <p className={styles.sectionText}>We do use multiple nut and flour types in our kitchen. We are unable to promise an allergen-free product. For those with allergies, we recommend that you use caution in coming in contact with products from DeEtta's Bakery.</p>
            <p className={styles.sectionText}>DeEtta's reserves the right to adjust/change prices at any time. Please confirm all pricing with DeEtta's prior to order placement.</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutPage;