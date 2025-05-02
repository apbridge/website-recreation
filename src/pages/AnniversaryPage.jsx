import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import styles from "../styles/cel.module.css";

const AnniversaryPage = () => {
    return (
        <Wrapper>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2 className={styles.h2}>March 5th is one of those special days that is circled and starred on our calendar. </h2>
                    <p className={styles.p}>It's the day that we pause to celebrate the fans, staff, and good old-fashioned hard work that makes DeEtta's Bakery possible. </p>
                    <p className={styles.p}>Saturday marks our 7th anniversary working full-time as the owners of DeEtta's, and is the 2nd anniversary of opening our storefront at 428 W. 5th Avenue in Naperville. </p>
                    <p className={styles.p}>In case you didn't already know, DeEtta's was a lifelong dream for Kevin and I. We both grew up with an appreciation for local bakeries (as we often stopped there for treats with our grandparents).</p>
                    <p className={styles.p}>I started my career as a pediatric dietitian working with children, which informed my stance on the importance of real ingredients, scratch-made food, without the use of additional preservatives.</p>
                    <p className={styles.p}>Kevin honed his skills at Kendall College's Baking and Pastry School, left corporate America, and agreed to go on this incredible journey with me.</p>
                    <p className={styles.p}>We are both so fortunate to be doing what we love in the town that our family calls home. We are so grateful for our loyal team of employees, our incredible fans, and the Naperville community.</p>
                    <p className={styles.p}>Thank you all for helping to support our dream.  </p>
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

export default AnniversaryPage;