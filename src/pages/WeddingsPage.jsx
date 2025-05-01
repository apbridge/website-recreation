import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import styles from "../styles/wed.module.css";
import cake1 from "../assets/cake1.png";
import cake2 from "../assets/cake2.jpeg";
import cake3 from "../assets/cake3.jpeg";
import cake4 from "../assets/cake4.1.jpg";
import cake5 from "../assets/cake5.jpeg";
import cake6 from "../assets/cake6.jpeg";
import cake7 from "../assets/cake7.1.jpg";
import cake8 from "../assets/cake8.1.jpg";
import cake9 from "../assets/cake9.1.jpg";
import q from "../assets/q.png";

const Weddings = () => {
    return (
        <Wrapper>
            <div className={styles.container}>
                <div className={styles.section1}>
                    <h2 className={styles.h2}>Your special day deserves a special dessert.</h2>
                    <img src={cake1} alt="Wedding Cake 1" className={styles.heroImage} />
                </div>

                <hr className={styles.styledLine} />

                <div className={styles.section2}>
                    <div className={styles.flexRow}>
                        <img src={cake2} alt="Wedding Cake 2" className={styles.sideImage} />
                        <div className={styles.textRight}>
                            <h3 className={styles.h3}>Cake</h3>
                            <p className={styles.p}>On your wedding day, the dessert you serve your guests is one of your final opportunities to make a lasting impression. DeEtta's makes it a delicious one.</p>
                            <p className={styles.p}>We believe wedding cakes should look beautiful AND taste delightful. Our desserts are scratch-made with real ingredients (eggs, cream, butter, and sugar), hand-crafted, and baked to perfection.</p>
                            <p className={styles.p}>For years, couples have selected DeEtta's Bakery for our quality baked goods, custom designs, exemplary service, and keen attention to detail. Your cake is in the best hands with DeEtta's.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.section2b}>
                    <div className={styles.textLeft}>
                        <h3 className={styles.h3}>Our Cakes</h3>
                        <ul className={styles.ul}>
                            <li className={styles.li}>
                                Are made from scratch with real ingredients to ensure the best possible taste without using additives or preservatives.
                            </li>
                            <li className={styles.li}>
                                Feature custom designs based on your personal tastes and wedding style.
                            </li>
                            <li className={styles.li}>
                                Are frosted to perfection; choose from buttercream, fondant, sculpted cakes, and more. We always include a layer of real buttercream — even under the fondant — to ensure the best possible taste.
                            </li>
                        </ul>
                    </div>
                    <img src={cake3} alt="Wedding Cake 3" className={styles.sideImage} />
                </div>


                <hr className={styles.styledLine} />

                <img src={cake4} alt="Wedding Cake 4" className={styles.cake4Image} />

                <div className={styles.section3}>
                    <div className={styles.left}>
                        <h3 className={styles.h3}>Wedding Cake Testing</h3>
                        <p className={styles.p}>We consider wedding cake tastings a highly personal experience. We offer a unique cake tasting as you are able to find your “perfect bite” in the comfort of your own home.</p>
                        <p className={styles.p}>Tastings consist of a choice of 2 cakes, 3 fillings, and our Italian and American buttercreams for you to sample.</p>

                        <h3 className={styles.h3}>Beyond Cake</h3>
                        <p className={styles.p}>We can help you create a unique dessert experience for your guests — from doughnuts, to pies, to a dessert table that features a bountiful selection of sweet treats.</p>
                        <p className={styles.p}>We also offer:</p>
                        <ul className={styles.ul}>
                            <li className={styles.li}>Groom's cakes</li>
                            <li className={styles.li}>Custom desserts for showers, parties, and other pre-wedding festivities</li>
                            <li className={styles.li}>Personalized wedding favors</li>
                            <li className={styles.li}>Wedding guest and wedding party specialities</li>
                            <li className={styles.li}>Cake stand rentals</li>
                        </ul>
                    </div>
                    <div className={styles.right}>
                        <img src={cake5} alt="Wedding Cake 5" className={styles.cake5} />
                        <img src={cake6} alt="Wedding Cake 6" className={styles.sideImage} />
                        <div className={styles.under}>
                            <h3 className={styles.h3}>Anniversary Cakes</h3>
                            <p className={styles.p}>DeEtta's believes you should enjoy your cake just like it tasted on your wedding day … instead of the cake from your wedding day, one year later. As our gift to you, all couples who purchase at least a three tiered cake receive a complementary 6 inch cake for their 1 year wedding anniversary.</p>
                        </div>
                    </div>
                </div>

                <hr className={styles.styledLine} />

                <div className={styles.section4}>
                    <h2 className={styles.h2}>Bookings for the 2024 - 2025 wedding seasons are well underway. Contact DeEtta's for all your sweet wedding details!</h2>
                    <Link to="/contact">
                        <button className={styles.contactButton} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact DeEtta's</button>
                    </Link>
                </div>

                <hr className={styles.styledLine} />

                <div className={styles.section5}>
                    <h2 className={styles.h2Left}>Wedding Gallery</h2>
                    <p className={styles.p}>
                        See more cake and dessert table inspiration on{" "}
                        <a href="https://www.pinterest.com/deettasbakery/" target="_blank" rel="noopener noreferrer" className={styles.pinterestLink}>
                            Pinterest
                        </a>.
                    </p>
                    <div className={styles.gallery}>
                        <img src={cake7} alt="Wedding Cake 7" className={styles.galleryImage} />
                        <img src={cake8} alt="Wedding Cake 8" className={styles.galleryImage} />
                        <img src={cake9} alt="Wedding Cake 9" className={styles.galleryImage} />
                    </div>
                </div>

                <hr className={styles.styledLine} />

                <div className={styles.section6}>
                    <h2 className={styles.h2Left}>Wedding FAQs</h2>

                    <div className={styles.qContainer}>
                        <img src={q} alt="Q" className={styles.qImage} />
                        <div className={styles.textContainer}>
                            <h3 className={styles.sectionText1}>What are your Payment/Refund/Cancellation Policies?</h3>
                            <p className={styles.sectionText}>
                                A 50% non-refundable deposit based on initial guests is due upon booking to reserve your date. Final payment is due 2 weeks prior to event. Due to the custom design of our wedding cakes, changes less than 30 days before pickup/delivery date may not be possible and are at the discretion of DeEtta’s Bakery.
                            </p>
                        </div>
                    </div>

                    <div className={styles.qContainer}>
                        <img src={q} alt="Q" className={styles.qImage} />
                        <div className={styles.textContainer}>
                            <h3 className={styles.sectionText1}>What is the charge for the tasting?</h3>
                            <p className={styles.sectionText}>
                                A $30 fee is required to reserve your tasting date. If you need to reschedule or change date of tasting after the 24 hours of receiving your tasting email, there will be a $30 rescheduling fee.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Weddings;
