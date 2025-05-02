import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import styles from "../styles/cel.module.css";

const CelebratePage = () => {
    return (
        <Wrapper>
            <div className={styles.container}>
                <div className={styles.text}>
                    <p className={styles.p}>Break out the sparklers and fly those American flags high... it is time to honor the red, white, and blue for 4th of July weekend! </p>
                    <p className={styles.p}>Here in Naperville, Independence Day is one of the most treasured celebrations of the year.</p>
                    <p className={styles.p}>Naperville's annual Ribfest, held July 1st through July 4th, is the ultimate party. Each year, we thoroughly enjoy joining our fellow community members and folks from all over at Knoch Park for the delicious food, incredible live music, and great amount of family-fun.</p>
                    <p className={styles.p}>It is definitely one hometown tradition we at the bakery always look forward to! And you can bet on seeing us there, enjoying all the festivities.</p>
                    <p className={styles.p}>Speaking of 4th of July celebrations, let DeEtta's help throw your big backyard bash! Party planning becomes a whole lot easier when you have an extra set of hands. Scroll down to see samples of colorful baked goods to add to your dessert table, and call to place your order today.</p>
                    <p className={styles.p}>Let's get the parties started, shall we?!</p>
                    <p className={styles.p}>Happy 4th of July!</p>
                    <p className={styles.p}>DeEtta's Bakery</p>
                </div>
                <div className={styles.captionGroup}>
                    <p className={styles.captionLikes}>❤ 5 Likes</p>
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

export default CelebratePage;