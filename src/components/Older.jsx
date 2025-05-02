import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import styles from "../styles/news.module.css";
import news4 from "../assets/news4.jpg";
import news5 from "../assets/news5.jpg";
import news6 from "../assets/news6.jpg";

const Older = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert("Link copied to clipboard!");
    };

    return (
        <Wrapper>
            <div id={styles.container}>
                <div className={styles.section}>
                    <img src={news4} alt="News 1" className={styles.newsImage} />
                    <div className={styles.captionRow}>
                        <div className={styles.captionGroup}>
                            <p className={styles.captionLikes}>❤ 0 Likes</p>
                            <p
                                className={styles.captionShare}
                                onClick={() => copyToClipboard(window.location.href)}
                            >
                                ➤ Share
                            </p>
                        </div>
                        <Link to="/spring" className={styles.captionViewPost}>
                            View Post ⟶
                        </Link>
                    </div>
                    <hr className={styles.styledLine2} />
                    <div className={styles.text}>
                        <div className={styles.left}>
                            <h2 className={styles.h2}>Hello Spring!</h2>
                            <p className={styles.p}>April 6, 2016</p>
                        </div>
                        <div className={styles.rightText}>
                            <h2 className={styles.h2Right}>DeEtta's Bakery is buzzing with springtime excitement, new treats, and seasonal events.</h2>
                            <p className={styles.pRight}>This month, as we watch with delight as Naperville blossoms with color again, we at DeEtta's are enjoying the "bloom" of fruity, spring treats on the menu here at the bakery. We are also ramping up for one of the busiest seasons yet! </p>
                        </div>
                    </div>
                </div>

                <div className={styles.section}>
                    <img src={news5} alt="News 2" className={styles.newsImage} />
                    <div className={styles.captionRow}>
                        <div className={styles.captionGroup}>
                            <p className={styles.captionLikes}>❤ 0 Likes</p>
                            <p
                                className={styles.captionShare}
                                onClick={() => copyToClipboard(window.location.href)}
                            >
                                ➤ Share
                            </p>
                        </div>
                        <Link to="/anniversary" className={styles.captionViewPost}>
                            View Post ⟶
                        </Link>
                    </div>
                    <hr className={styles.styledLine2} />
                    <div className={styles.text}>
                        <div className={styles.left}>
                            <h2 className={styles.h2}>Thank You! Celebrating Our Anniversary!</h2>
                            <p className={styles.p}>March 5, 2016</p>
                        </div>
                        <div className={styles.rightText}>
                            <h2 className={styles.h2Right}>March 5th is one of those special days that is circled and starred on our calendar.</h2>
                            <p className={styles.pRight}>It's the day that we pause to celebrate the fans, staff, and good old-fashioned hard work that makes DeEtta's Bakery possible.  </p>
                        </div>
                    </div>
                </div>


                <div className={styles.section}>
                    <img src={news6} alt="News 3" className={styles.newsImage} />
                    <div className={styles.captionRow}>
                        <div className={styles.captionGroup}>
                            <p className={styles.captionLikes}>❤ 0 Likes</p>
                            <p
                                className={styles.captionShare}
                                onClick={() => copyToClipboard(window.location.href)}
                            >
                                ➤ Share
                            </p>
                        </div>
                        <Link to="/love" className={styles.captionViewPost}>
                            View Post ⟶
                        </Link>
                    </div>
                    <hr className={styles.styledLine2} />
                    <div className={styles.text}>
                        <div className={styles.left}>
                            <h2 className={styles.h2}>Love is in the air! Bring on the delicious sweets.</h2>
                            <p className={styles.p}>February 5, 2016</p>
                        </div>
                        <div className={styles.rightText}>
                            <h2 className={styles.h2Right}>February is one of our favorite times at the bakery. </h2>
                            <p className={styles.pRight}>From preparing for Paczki Day to crafting cute Valentine’s Day treats, the bakery is brimming with sweets and treats that only happen once a year ... which makes them particularly special to us. We look forward to making them for you!</p>
                        </div>
                    </div>
                </div>

            </div>
        </Wrapper>
    );
};

export default Older;