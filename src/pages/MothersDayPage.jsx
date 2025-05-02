import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import styles from "../styles/cel.module.css";

const MothersDayPage = () => {
    return (
        <Wrapper>
            <div className={styles.container}>
                <div className={styles.text}>
                    <p className={styles.p}>With Mother's Day fast-approaching, I can't help but pause to reflect on the meaning of this special holiday ... and the impact my own mother had on my life. </p>
                    <p className={styles.p}>For those that don't know, DeEtta's Bakery is named in memory of my mother, DeEtta. She instilled in me the love of baking, bought the cookbooks, and emphasized the importance of using real ingredients: flour, sugar, butter, and eggs.</p>
                    <p className={styles.p}>She encouraged me to have fun in the kitchen, which sparked a passion for baking that continues to this day.  </p>
                    <p className={styles.p}>I miss her dearly, and know she would be thrilled to see me living my life's dream, with Kevin by my side. In the bakery that sports her name -- no less!</p>
                    <p className={styles.p}>And so, this Mother's Day, if your mom is close I hope that you hug her tight. If she is far, be sure to give her a call as your voice means the world to her. If she is no longer with you, I hope that her memory fills your heart.</p>
                    <p className={styles.p}>Happy, Happy Mother's Day!</p>
                    <p className={styles.p}>Morgan</p>
                    <p className={styles.p}>P.S. Stay tuned for special Mother's Day tributes on our Facebook page, Instagram, and Twitter next week!</p>
                </div>
                <div className={styles.captionGroup}>
                    <p className={styles.captionLikes}>❤ 6 Likes</p>
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

export default MothersDayPage;