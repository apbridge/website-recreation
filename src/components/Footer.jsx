import styles from "../styles/footer.module.css";
import instagram from "../assets/instagram.png";
import pinterest from "../assets/pinterest.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.contactSection}>
                    <h3>Contact</h3>
                    <p>428 W. Fifth Ave</p>
                    <p>Naperville, IL 60563</p>
                    <p>hello@deettasbakery.com</p>
                    <p>630-548-4078</p>
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
                <div className={styles.hoursSection}>
                    <h3>Hours</h3>
                    <p>Monday 6:30AM - 6:00PM</p>
                    <p>Tuesday 6:30AM - 6:00PM</p>
                    <p>Wednesday 6:30AM - 6:00PM</p>
                    <p>Thursday 6:30AM - 6:00PM</p>
                    <p>Friday 6:30AM - 6:00PM</p>
                    <p>Saturday: 6:30AM - 2:00PM</p>
                    <p>Sunday: 7:00AM - 12:00PM</p>
                </div>
                <div className={styles.mailingListSection}>
                    <h3>Join Our Mailing List</h3>
                    <p>Sign up with your email address to receive news and updates.</p>
                    <form className={styles.mailingListForm}>
                        <input type="email" placeholder="Email Address" />
                        <button type="submit">SIGN UP</button>
                    </form>
                    <p>We respect your privacy.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;