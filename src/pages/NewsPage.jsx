import { useState } from "react";
import Newer from "../components/Newer";
import Older from "../components/Older";
import styles from "../styles/newspage.module.css";

const NewsPage = () => {
    const [showNewer, setShowNewer] = useState(true); // default to Newer

    return (
        <>
            {showNewer ? <Newer /> : <Older />}
            <div className={styles.toggleBar}>
                <button
                    onClick={() => setShowNewer(true)}
                    className={`${styles.toggleButton} ${showNewer ? styles.active : ""}`}
                >
                    Newer Posts
                </button>
                <p className={styles.p}>/</p>
                <button
                    onClick={() => setShowNewer(false)}
                    className={`${styles.toggleButton} ${!showNewer ? styles.active : ""}`}
                >
                    Older Posts
                </button>
            </div>
        </>
    );
};

export default NewsPage;
