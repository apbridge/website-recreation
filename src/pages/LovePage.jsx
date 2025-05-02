import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import styles from "../styles/cel.module.css";

const LovePage = () => {
    return (
        <Wrapper>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2 className={styles.h2}>February is one of our favorite times at the bakery. </h2>
                    <p className={styles.p}>From preparing for Paczki Day to crafting cute Valentine’s Day treats, the bakery is brimming with sweets and treats that only happen once a year ... which makes them particularly special to us. We look forward to making them for you!</p>
                    <p className={styles.p}>We are rapidly approaching Paczki Day on February 9th; don't forget to reserve one or two for yourself by calling to place your pre-order NOW through February 6th! Click here for the full list of flavors.</p>
                    <p className={styles.p}>As for the rest of the month, you can expect to see a special post-Valentine's Day giveaway hosted on our Facebook and Instagram, as well as sneak peeks at all the DeEtta's scratch-made goodies you can order for your sweetie. </p>
                    <p className={styles.p}>We just love this holiday, it's a great opportunity to treat your parents, grandparents, children, spouse, friends, teachers ... any and all of the special people in your life! </p>
                    <p className={styles.p}>Here's to the sweetness of February! We're honored to be part of your table. </p>
                    <p className={styles.p}>Sincerely,</p>
                    <p className={styles.p}>Kevin & Morgan</p>
                </div>
                <div className={styles.captionGroup}>
                    <p className={styles.captionLikes}>❤ 0 Likes</p>
                    <p
                        className={styles.captionShare}
                        onClick={() => copyToClipboard(window.location.href)}
                    >
                        ➤ Share
                    </p>
                </div>
            </div>
        </Wrapper>
    );
};

export default LovePage;