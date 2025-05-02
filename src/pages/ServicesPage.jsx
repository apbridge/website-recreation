import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import styles from "../styles/services.module.css";
import services1 from "../assets/services1.jpeg";
import services2 from "../assets/services2.jpeg";
import services3 from "../assets/services3.jpeg";
import q from "../assets/q.png";

const ServicesPage = () => {
    return (
        <Wrapper>
            <div className={styles.container}>
                <div className={styles.section1}>
                    <div className={styles.col1}>
                        {/* insert services1 image here */}
                        <div className={styles.colText}>
                            <h2 className={styles.h2}>Catering and Delivery</h2>
                            <p className={styles.p}>DeEtta's specializes in a wide variety of treats for every type of occasion. Ask us about catering your sweets table, creating a platter, providing treats for corporate and personal gifts, or anything else you would like to know.</p>
                            <p className={styles.p}>We travel to Chicago and all the surrounding suburbs. Contact us to learn more about delivery options and fees.</p>
                        </div>
                    </div>
                    <div className={styles.col2}>
                        {/* insert services2 image here */}
                        <div className={styles.colText}>
                            <h2 className={styles.h2}>Gifts</h2>
                            <p className={styles.p}>DeEtta’s specializes in a wide variety of treats that make delightful gifts. From individually packaged favors to platters and boxed treats, our baked goods make gift-giving delicious. We are available for your corporate event, shower, dinner party, and other event needs!</p>
                        </div>
                    </div>
                    <div className={styles.col3}>
                        {/* insert services3 image here */}
                        <div className={styles.colText}>
                            <h2 className={styles.h2}>Corporate Partnerships</h2>
                            <p className={styles.p}>DeEtta’s Bakery does sell wholesale, please contact our experienced team for more information.</p>
                        </div>
                    </div>
                </div>
                <hr className={styles.styledLine} />
                <div className={styles.section2}>
                    <div className={styles.qContainer}>
                        <img src={q} alt="Q" className={styles.qImage} />
                        <div className={styles.textContainer}>
                            <p className={styles.sectionText1}>Do you deliver?</p>
                            <p className={styles.sectionText}>We offer delivery based on mileage from DeEtta's Bakery, and travel to Chicago and all the surrounding suburbs. If, upon delivery, there is no one to accept the order, an additional delivery fee equal to the quoted delivery fee will be assessed.  Your re-delivery time will be based upon our re-delivery availability.</p>
                        </div>
                    </div>
                    <div className={styles.qContainer}>
                        <img src={q} alt="Q" className={styles.qImage} />
                        <div className={styles.textContainer}>
                            <p className={styles.sectionText1}>How do I place an order?</p>
                            <p className={styles.sectionText}>To place your order, please either stop by the bakery or call us at 630.548.4078.  Orders can only be placed in person, or in speaking with one of DeEtta's staff; orders cannot be placed via e-mail or voicemail.  </p>
                        </div>
                    </div>
                    <div className={styles.qContainer}>
                        <img src={q} alt="Q" className={styles.qImage} />
                        <div className={styles.textContainer}>
                            <p className={styles.sectionText1}>Do I need to order in advance?</p>
                            <p className={styles.sectionText}>We suggest ordering your items as soon as you are able.  Advanced planning assures proper design development and date availability. We typically need at least 72 hours notice for a basic cake or baked good order.  For custom designed cakes, we kindly request at least 2 weeks notice. </p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default ServicesPage;