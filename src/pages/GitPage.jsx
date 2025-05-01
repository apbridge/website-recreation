import Wrapper from "../components/Wrapper";
import styles from "../styles/git.module.css";
import { Link } from "react-router-dom";
import map from "../assets/map.png";
import q from "../assets/q.png";

const GitPage = () => {
    return (
        <Wrapper>
            <div className={styles.infoGrid}>
                <div className={styles.column}>
                    <h2 className={styles.h2}>Naperville</h2>
                    <p className={styles.p}>428 W. Fifth Ave</p>
                    <p className={styles.p}>Naperville, IL 60563</p>
                    <p className={styles.p}>630-548-4078</p>
                    <a href="mailto:hello@deettabakery.com" className={styles.link}>
                        hello@deettabakery.com
                    </a>
                </div>

                <div className={styles.column}>
                    <div className={styles.hours}>
                        <h2 className={styles.h2}>Hours of Operation</h2>
                        <p className={styles.p}>Monday 6:30AM - 6:00PM</p>
                        <p className={styles.p}>Tuesday 6:30AM - 6:00PM</p>
                        <p className={styles.p}>Wednesday 6:30AM - 6:00PM</p>
                        <p className={styles.p}>Thursday 6:30AM - 6:00PM</p>
                        <p className={styles.p}>Friday 6:30AM - 6:00PM</p>
                        <p className={styles.p}>Saturday 6:30AM - 2:00PM</p>
                        <p className={styles.p}>Sunday 7:00AM - 12:00PM</p>
                    </div>
                    <div className={styles.media}>
                        <h2 className={styles.h2}>Media Inquiries</h2>
                        <p className={styles.p}>630-548-4078</p>
                        <a href="mailto:hello@deettabakery.com" className={styles.link}>
                            hello@deettabakery.com
                        </a>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.map}>
                        <img src={map} alt="Map" className={styles.mapImage} />
                    </div>
                </div>
            </div>


            <hr className={styles.styledLine} />

            <div className={styles.contact}>
                <h2 className={styles.h2}>Already know what you're looking for?</h2>
                <h3 className={styles.h3}>Fill out the general form below and we will get in touch right away.</h3>

                <div className={styles.nameFields}>
                    <div className={styles.inputWrapper}>
                        <p className={styles.formMiniHeading}>First Name</p>
                        <input type="text" className={styles.input} required />
                    </div>
                    <div className={styles.inputWrapper}>
                        <p className={styles.formMiniHeading}>Last Name</p>
                        <input type="text" className={styles.input} required />
                    </div>
                </div>

                <p className={styles.formHeading}>Email Address (required)</p>
                <input type="email" className={styles.input} required />

                <p className={styles.formHeading}>Date of Event or Delivery (required)</p>
                <input type="date" className={styles.input} required />

                <p className={styles.formHeading}>Phone (required)</p>
                <input type="text" className={styles.input} required />

                <p className={styles.formHeading}>Subject (required)</p>
                <input type="text" className={styles.input} required />

                <p className={styles.formHeading}>Type of Event (required)</p>
                <select className={styles.input} required>
                    <option value="">Select an event type</option>
                    <option value="wedding">Weddings</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="other">Other</option>
                </select>

                <p className={styles.formHeading}>Number of Guests</p>
                <div className={styles.checkboxGroup}>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" /> 1-15
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" /> 16-25
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" /> 25-50
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" /> 51-100
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" /> 101+
                    </label>
                </div>

                <p className={styles.formHeading}>Message (required)</p>
                <p className={styles.formMiniHeading}>To share inspirational photos of your design, please contact us here first.</p>
                <textarea className={styles.textarea} rows="6" required></textarea>

                <button className={styles.submitButton}>Submit</button>
            </div>


            <hr className={styles.styledLine} />

            <div className={styles.donation}>
                <h2 className={styles.h2}>Donation Request</h2>
                <p className={styles.p}>
                    Thank you for your interest in DeEtta's Bakery. All donations we make are because of how strongly we feel about the importance of giving back to our community.
                </p>
                <Link to="/donation-request" className={styles.donationBtn} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Donation Request Form</Link>
                <p className={styles.p}>To be considered, please fill out our form. We do not accept phone calls regarding donations.</p>
            </div>

            <hr className={styles.styledLine} />

            <div className={styles.qContainer}>
                <img src={q} alt="Q" className={styles.qImage} />
                <div className={styles.textContainer}>
                    <h3 className={styles.sectionText1}>Are you hiring?</h3>
                    <p className={styles.sectionText}>
                        We are always looking for smiling people with a passion for baking, decorating and providing exceptional customer service. If you share these passions, we may have opportunities coming available for front of house, bakers, and cake/cookie decorators. Send us a note or call if you are interested.
                    </p>
                </div>
            </div>
        </Wrapper>
    );
};

export default GitPage;
