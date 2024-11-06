import styles from "../styles/TripForm.module.css";

const AddActivity = () => {
  return (
    <div className={styles.container}>
      <h2>Add an Activity</h2>
      <p>
        What fun things did you do on your trip? Sky-diving? Hiking? Kayaking?
      </p>
      <form className={styles.tripForm}>
      <label for="trip">Choose your trip:</label>
            <select id="trip" name="trip" required>
              <option value="Select">Select a trip</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Japan">Japan</option>
            </select>
              
            <label for="activity">Activity:</label>
            <textarea id="activity" name="activity" required></textarea>

            <label for="rate" required>Rating (1-5):</label>
            <select id="rate" name="rate">
                <option value="Select">Select a rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <label for="review">Review:</label>
            <textarea id="review" name="review"></textarea> 

            <button type="submit">Add Activity</button>
      </form>
    </div>
  );
};

export default AddActivity;
