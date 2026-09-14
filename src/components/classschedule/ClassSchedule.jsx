import { Link } from "react-router-dom";
import { useState } from "react";
import KidsLevels from "../classschedule/KidsLevels";
import AdultsLevels from "../classschedule/AdultLevels";
import "../classschedule/classpagecss/ClassLevel.css";
import mudraleft from "../../assets/images/mudraleft.jpeg";

//Allows user to select the type of student and displays levels(Kids/Adults) and 
//shows timings link after seeing the levels

function ClassSchedule() {
  const [StudentType, setStudentType] = useState("");

  return (
    <div className="class-level-page">
      <h2 className="page-title">CLASS LEVELS AND TIMINGS</h2>
      <h3 className="level-title">Levels</h3>

      <div className="button-type-toggle">
        <button className="button-style" onClick={() => setStudentType("Kids")}>
          Kids
          <img src={mudraleft} alt="mudrascoochi" className="toggle-icon" />
        </button>
        <button
          className="button-style"
          onClick={() => setStudentType("Adults")}
        >
          Adults
          <img src={mudraleft} alt="mudrascoochi" className="toggle-icon" />
        </button>
      </div>
      <div className="levels-display">
        {StudentType === "Kids" && <KidsLevels />}
        {StudentType === "Adults" && <AdultsLevels />}
      </div>
      {StudentType && (
        <div className="link-to-timing">
          <h3>
            <Link to="/schedule/timings">View Class Timings</Link>
          </h3>
        </div>
      )}
    </div>
  );
}

export default ClassSchedule;
