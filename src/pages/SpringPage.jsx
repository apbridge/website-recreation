import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import styles from "../styles/cel.module.css";

const SpringPage = () => {
    return (
        <Wrapper>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2 className={styles.h2}>DeEtta's Bakery is buzzing with springtime excitement, new treats, and seasonal events.</h2>
                    <p className={styles.p}>This month, as we watch with delight as Naperville blossoms with color again, we at DeEtta's are enjoying the "bloom" of fruity, spring treats on the menu here at the bakery. We are also ramping up for one of the busiest seasons yet! </p>
                    <p className={styles.p}>Beyond the counter, you can find our team driving around the Chicago suburbs delivering precious baked good cargo to our customers in the DeEtta's mobile, talking with brides and grooms about their dessert needs at wedding expos, and enjoying local events such as Naper Settlement Takes Flight and Naperville CARES' Cuisine for a Cause.</p>
                    <p className={styles.p}>April also marks a favorite program we are honored to be part of, working with the littlest aspiring bakers at the Mill Street Elementary School and Naper Elementary School mini-courses program. Inspiring passion in our city's youth and watching their creativity at work is always a treat!</p>
                    <p className={styles.p}>We cherish the time we get to spend working, playing, and giving back to the community we call home. We hope to see you in the bakery and out and about in Naperville as we all enjoy the sweetness of spring!    </p>
                    <p className={styles.p}>Sincerely,</p>
                    <p className={styles.p}> Morgan and Kevin</p>
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

export default SpringPage;