import { adultsLevels } from "./mockdata/LevelData";

//Displays all Adults class levels with their descriptions.

function AdultsLevels() {
  return (
    <div className="level-card">
      <h3 className="level-title">Adults Levels</h3>
      <div className="level-container">
        {adultsLevels.map((item, index) => (
          <section key={index} className="level-display">
            <h4 className="eachlevel-title">{item.level}</h4>
            <p className="level-description">{item.description}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
export default AdultsLevels;
