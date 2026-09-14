import { useState } from "react";
import { Link } from "react-router-dom";
import timings from "./mockdata/ClassTimingsData.js";
import TimingsDisplay from "./TimingsDisplay.jsx";
import TableforAllTimings from "./TableForAllTimings.jsx";
import "./classpagecss/ClassTimings.css";
import mudraright from "../../assets/images/mudraright.jpeg";

// Displays class timing selection,shows the filtered results, and full 
//timings table with toggle option. Also back to class button is there

function ClassTimings() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredTimings = timings.filter((timingInfo) => {
    if (!selectedType || !selectedLevel) return false;

    return (
      timingInfo.type === selectedType && timingInfo.level === selectedLevel
    );
  });

  return (
    <div className="timings-page">
      <h3>CLASS TIMINGS </h3>
      <p>Please select the Student Type and Level</p>
      <div className="timings-page-container">
        <div className="select-type-level">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">Select Type </option>
            <option value="Kids">Kids </option>
            <option value="Adults">Adults</option>
          </select>
        </div>
        <div className="select-type-level">
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value="">Select Level </option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>
      <TimingsDisplay items={filteredTimings} />

      <div className="show-all-timings">
        <p>Please click on the button below for All Timings</p>
        <button className="toggle-button" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Hide Timings" : "Show All Timings"}
        </button>

        {showAll && <TableforAllTimings />}
      </div>
      <Link to="/class">
        <button className="back-button">
          <img src={mudraright} alt="mudra" className="back-button-icon" />
          Back to Class page
        </button>
      </Link>
    </div>
  );
}

export default ClassTimings;
