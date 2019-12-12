import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import "../sass/Popup.scss";

const defaultProps = {
  index: null
};

const AddNewBookmarkPopup = props => {
  /**
   * Define Hooks
   */
  const [data] = useState(Object.assign(defaultProps, props));

  /**
   * Methods
   */
  // --- //

  /**
   * On mount effect
   */
  useEffect(() => {});

  /**
   * Output the component
   */
  return data.index !== null ? (
    <Popup title="Add New Bookmark" index={data.index}></Popup>
  ) : (
    true
  );
};

export default AddNewBookmarkPopup;
