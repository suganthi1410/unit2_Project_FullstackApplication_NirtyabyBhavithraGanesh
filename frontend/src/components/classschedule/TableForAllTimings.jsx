import timings from "./mockdata/ClassTimingsData.js";
import "./classpagecss/Table.css";

// Displays a full table of all class timings for Kids and Adults

function TableForAllTimings() {
  return (
    <div className="table-container">
      <h3>Class Timings for Kids and Adults</h3>
      <table className="table">
        <thead className="table-head">
          <tr>
            <th>Type</th>
            <th>Level</th>
            <th>Day</th>
            <th>Time</th>
            <th>Fee</th>
          </tr>
        </thead>

        <tbody className="table-body">
          {timings.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.level}</td>
              <td>{item.day}</td>
              <td>{item.time}</td>
              <td>{item.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TableForAllTimings;
