import React, { useState } from "react";
import styles from "../styles/Postcode.module.css";
import { formatPostcode } from "../utils/utils";

function Postcode({ postcode, index, setPostcodes }) {
  const [edit, setEdit] = useState(false);
  const [newPostcode, setNewPostcode] = useState(postcode);

  const handleDelete = () => {
    setPostcodes((prevPostcodes) =>
      prevPostcodes.filter((postcode, currentIndex) => currentIndex !== index)
    );
  };

  const handleEdit = () => {
    const formattedPostcode = formatPostcode(newPostcode);

    setPostcodes((prevPostcodes) =>
      prevPostcodes.map((postcode, currentIndex) => {
        return currentIndex === index ? formattedPostcode : postcode;
      })
    );
    setEdit(false);
  };

  return (
    <div key={index} className={styles.ListItem}>
      <div className={styles.Dot}>
        <i className="fa-solid fa-circle"></i>
      </div>
      {edit ? (
        <div className={styles.PostcodeBox} onMouseLeave={handleEdit}>
          <input
            name="postcode"
            value={newPostcode}
            onChange={(event) => setNewPostcode(event.target.value)}
            pattern="^[A-Za-z][A-Za-z0-9]{2,3}(?:\s?[0-9][A-Za-z0-9]{2})$"
            title="Valid postcodes must be A123 1AB or AB1 1AB"
            maxLength={8}
            required
          />
          <i className="fa-solid fa-equals"></i>
        </div>
      ) : (
        <div className={styles.PostcodeBox} onClick={() => setEdit(true)}>
          <span>{postcode}</span>
          <i className="fa-solid fa-equals"></i>
        </div>
      )}
      <div className={styles.Delete} onClick={handleDelete}>
        <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
}

export default Postcode;
