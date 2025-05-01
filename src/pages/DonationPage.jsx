import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import styles from "../styles/don.module.css";

const DonationPage = () => {
  return (
    <Wrapper>
      <div className={styles.container}>
        <hr className={styles.styledLine} />
        <div className={styles.donation}>
          <h2 className={styles.h2}>Donation Request</h2>
          <p className={styles.p}>Thank you for your interest in DeEtta's Bakery. All donations we make are because of how strongly we feel about the importance of giving back to our community.</p>
          <p className={styles.p}>To be considered, please fill out the form below and click 'Send Donation Request'. We do not accept phone calls regarding donations.</p>
        </div>
        <div className={styles.contact}>
          <div className={styles.inputWrapper}>
            <p className={styles.formMiniHeading}>Organization Name (required)</p>
            <input type="text" className={styles.input} required />
          </div>

          <div className={styles.inputWrapper}>
            <p className={styles.formMiniHeading}>Name of Event (required)</p>
            <input type="text" className={styles.input} required />
          </div>

          <p className={styles.formHeading}>Date of Event or Delivery (required)</p>
          <input type="date" className={styles.input} required />
        </div>

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

        <p className={styles.formHeading}>Phone (required)</p>
        <input type="text" className={styles.input} required />

        <p className={styles.formHeading}>Type of Donation Request (required)</p>
        <input type="text" className={styles.input} required />

        <p className={styles.formHeading}>What programs/services does your organization provide (required)</p>
        <input type="text" className={styles.input} required />

        <p className={styles.formHeading}>Brief note on how this will benefit our community (required)</p>
        <textarea className={styles.textarea} rows="6" required></textarea>

        <button className={styles.submitButton}>Submit</button>
      </div>
      <p className={styles.p}>We receive several requests each month and do our best to serve as many as possible. If we are able to assist with your event or request we will contact you.</p>
    </Wrapper>
  );
};

export default DonationPage;