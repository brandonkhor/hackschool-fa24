import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar/index.jsx";

const Home = () => {
  return (
    
    <div className={styles.tripContainer}>
      <div className={styles.tripBox}>
            <h3>Trips</h3>
        </div>
        <div className={styles.tripBox}>
            <h3>Activities</h3>
        </div>
    </div>
    
    
  );
};

export default Home;
