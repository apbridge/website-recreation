import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import styles from "../styles/news.module.css";
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";

const Newer = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert("Link copied to clipboard!");
    };

    return (
        <Wrapper>
            <div id={styles.container}>
                <div className={styles.section}>
                    <img src={news1} alt="News 1" className={styles.newsImage} />
                    <div className={styles.captionRow}>
                        <div className={styles.captionGroup}>
                            <p className={styles.captionLikes}>❤ 5 Likes</p>
                            <p
                                className={styles.captionShare}
                                onClick={() => copyToClipboard(window.location.href)}
                            >
                                ➤ Share
                            </p>
                        </div>
                        <Link to="/celebrate-america" className={styles.captionViewPost}>
                            View Post ⟶
                        </Link>
                    </div>
                    <hr className={styles.styledLine2} />
                    <div className={styles.text}>
                        <div className={styles.left}>
                            <h2 className={styles.h2}>Celebrating America!</h2>
                            <p className={styles.p}>July 1, 2016</p>
                        </div>
                        <p className={styles.pRight}>Break out the sparklers and fly those American flags high... it is time to honor the red, white, and blue for 4th of July weekend! </p>
                    </div>
                </div>

                <div className={styles.section}>
                    <img src={news2} alt="News 2" className={styles.newsImage} />
                    <div className={styles.captionRow}>
                        <div className={styles.captionGroup}>
                            <p className={styles.captionLikes}>❤ 8 Likes</p>
                            <p
                                className={styles.captionShare}
                                onClick={() => copyToClipboard(window.location.href)}
                            >
                                ➤ Share
                            </p>
                        </div>
                        <Link to="/doughnuts-and-dads" className={styles.captionViewPost}>
                            View Post ⟶
                        </Link>
                    </div>
                    <hr className={styles.styledLine2} />
                    <div className={styles.text}>
                        <div className={styles.left}>
                            <h2 className={styles.h2}>Doughnuts & Dads</h2>
                            <p className={styles.p}>June 7, 2016</p>
                        </div>
                        <p className={styles.pRight}>As we usher in June, and turn our attention to celebrating all the dads out there, I wanted to pause to reflect upon the influence that my own dad has had on my life. </p>
                    </div>
                </div>


                <div className={styles.section}>
                    <img src={news3} alt="News 3" className={styles.newsImage} />
                    <div className={styles.captionRow}>
                        <div className={styles.captionGroup}>
                            <p className={styles.captionLikes}>❤ 6 Likes</p>
                            <p
                                className={styles.captionShare}
                                onClick={() => copyToClipboard(window.location.href)}
                            >
                                ➤ Share
                            </p>
                        </div>
                        <Link to="/mothers-day" className={styles.captionViewPost}>
                            View Post ⟶
                        </Link>
                    </div>
                    <hr className={styles.styledLine2} />
                    <div className={styles.text}>
                        <div className={styles.left}>
                            <h2 className={styles.h2}>Mother's Day</h2>
                            <p className={styles.p}>May 6, 2016</p>
                        </div>
                        <p className={styles.pRight}>With Mother's Day fast-approaching, I can't help but pause to reflect on the meaning of this special holiday...and the impact my own mother had on my life. </p>
                    </div>
                </div>

            </div>
        </Wrapper>
    );
};

export default Newer;