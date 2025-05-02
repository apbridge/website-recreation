import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import styles from "../styles/cel.module.css";

const DoughnutsPage = () => {
    return (
        <Wrapper>
            <div className={styles.container}>
                <div className={styles.text}>
                    <p className={styles.p}>As we usher in June, and turn our attention to celebrating all the dads out there, I wanted to pause to reflect upon the influence that my own dad has had on my life. </p>
                    <p className={styles.p}>From a very young age, my dad has been my #1 cheerleader. In my youth, that meant everything from coaching my soccer team, rooting me on at my grammar school basketball games, and encouraging me to do my best at my studies. The ways he showed his love and support were endless.</p>
                    <p className={styles.p}>As I grew up, he has always been quick to support me in the endeavors I wanted to pursue ... including opening a bakery! </p>
                    <p className={styles.p}>Today his support includes sharing his talents and acumen by lending a hand on the business side of DeEtta's Bakery. </p>
                    <p className={styles.p}>When I think back on the importance of the relationship with my dad, I can't help but draw the parallel to how he has influenced my own parenting.</p>
                    <p className={styles.p}>My dad instilled in me some of the core tenets of being a good father: show up, be your child's biggest fan, lead by example. The fact that he has been an ever-present, devoted dad is not lost on me, and I can't thank him enough for that gift.</p>
                    <p className={styles.p}>I now strive to live up to his example by supporting my own children as they forge their life paths. These days, that means coaching baseball, being a fan in the stands at local swim meets, and attending recitals (I'm sure my daughters are relieved my dance "skills" prevent me from coaching that sport!).</p>
                    <p className={styles.p}>I encourage you to consider this Father's Day as the beginning of a year filled with opportunity; be sure to create some memories and moments that honor the dads, grandfathers, husbands, and male figures that play an important role in your life.</p>
                    <p className={styles.p}>Here's to you, Dad.</p>
                    <p className={styles.p}>Sincerely,</p>
                    <p className={styles.p}>Kevin</p>
                    <p className={styles.p}>P.S. Stay tuned for special Father's Day tributes on our Facebook page, Instagram, and Twitter this month!</p>

                </div>
                <div className={styles.captionGroup}>
                    <p className={styles.captionLikes}>❤ 8 Likes</p>
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

export default DoughnutsPage;