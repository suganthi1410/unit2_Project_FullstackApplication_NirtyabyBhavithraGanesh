//Displays day, time, and fee details for selected class timings.

function TimingsDisplay({ items }) {
  return (
    <div className="time-container">
      {items.map((timingInfo, index) => (
        <div key={index} className="day-time-fees">
          <p>Day: {timingInfo.day}</p>
          <p>Time: {timingInfo.time}</p>
          <p>Fee: {timingInfo.fee}</p>
        </div>
      ))}
    </div>
  );
}

export default TimingsDisplay;
