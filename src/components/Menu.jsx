import styles from '../styles/menu2.module.css';
import cake1 from "../assets/cake1.jpg";
import cake2 from "../assets/cake2.jpg";
import cake3 from "../assets/cake3.jpg";
import cake4 from "../assets/cake4.jpg";
import cake5 from "../assets/cake5.jpg";
import cake6 from "../assets/cake6.jpg";
import cake7 from "../assets/cake7.jpg";
import cake8 from "../assets/cake8.jpg";
import cake9 from "../assets/cake9.jpg";
import baked1 from "../assets/baked1.jpg";
import baked2 from "../assets/baked2.jpg";
import baked3 from "../assets/baked3.jpg";
import baked4 from "../assets/baked4.jpg";
import baked5 from "../assets/baked5.jpg";
import baked6 from "../assets/baked6.jpg";
import baked7 from "../assets/baked7.jpg";
import baked8 from "../assets/baked8.jpg";
import baked9 from "../assets/baked9.jpg";
import baked10 from "../assets/baked10.jpg";
import baked11 from "../assets/baked11.jpg";
import baked12 from "../assets/baked12.jpg";
import q from "../assets/q.png";
import instagram from "../assets/instagram.png";
import pinterest from "../assets/pinterest.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png"

const Menu = () => {
    return (
        <div className={styles.menuContainer}>
            <hr className={styles.styledLine} />

            <div className={styles.section2}>
                <p className={styles.sectionText2}>Be sure to follow us on social media or sign up for our newsletter for new menu additions and bakery updates below.</p>
                <div className={styles.socialIcons}>
                    <a href="https://www.instagram.com/deettasbakery" target="_blank">
                        <img src={instagram} alt="instagram" className={styles.instagram} />
                    </a>
                    <a href="https://www.pinterest.com/deettasbakery/" target="_blank">
                        <img src={pinterest} alt="pinterest" className={styles.pinterest} />
                    </a>
                    <a href="https://twitter.com/DeEttasBakery" target="_blank">
                        <img src={twitter} alt="twitter" className={styles.twitter} />
                    </a>
                    <a href="https://www.facebook.com/DeEttas-Bakery-132771540127503/?fref=ts" target="_blank">
                        <img src={facebook} alt="facebook" className={styles.facebook} />
                    </a>
                </div>
            </div>

            <hr className={styles.styledLine} />

            <div className={styles.section3}>
                <h3 className={styles.galleryTitle}>Cake Gallery</h3>
                <p className={styles.galleryText}>See more cake inspiration on <a href="https://www.pinterest.com/deettasbakery/" target="_blank" rel="noopener noreferrer">Pinterest</a></p>
                <div className={styles.galleryImages9}>
                    <img src={cake1} alt="cake1" className={styles.cakeImage} />
                    <img src={cake2} alt="cake2" className={styles.cakeImage} />
                    <img src={cake3} alt="cake3" className={styles.cakeImage} />
                    <img src={cake4} alt="cake4" className={styles.cakeImage} />
                    <img src={cake5} alt="cake5" className={styles.cakeImage} />
                    <img src={cake6} alt="cake6" className={styles.cakeImage} />
                    <img src={cake7} alt="cake7" className={styles.cakeImage} />
                    <img src={cake8} alt="cake8" className={styles.cakeImage} />
                    <img src={cake9} alt="cake9" className={styles.cakeImage} />
                </div>
            </div>

            <div className={styles.section4}>
                <h3 className={styles.galleryTitle}>Baked Goods Gallery</h3>
                <p className={styles.galleryText}>See more of our baked goods on <a href="https://www.pinterest.com/deettasbakery/" target="_blank" rel="noopener noreferrer">Pinterest</a></p>
                <div className={styles.galleryImages}>
                    <img src={baked1} alt="baked1" className={styles.bakedImage} />
                    <img src={baked2} alt="baked2" className={styles.bakedImage} />
                    <img src={baked3} alt="baked3" className={styles.bakedImage} />
                    <img src={baked4} alt="baked4" className={styles.bakedImage} />
                    <img src={baked5} alt="baked5" className={styles.bakedImage} />
                    <img src={baked6} alt="baked6" className={styles.bakedImage} />
                    <img src={baked7} alt="baked7" className={styles.bakedImage} />
                    <img src={baked8} alt="baked8" className={styles.bakedImage} />
                    <img src={baked9} alt="baked9" className={styles.bakedImage} />
                    <img src={baked10} alt="baked10" className={styles.bakedImage} />
                    <img src={baked11} alt="baked11" className={styles.bakedImage} />
                    <img src={baked12} alt="baked12" className={styles.bakedImage} />
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

        </div>
    );
};

export default Menu;
