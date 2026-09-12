import { kidsLevels } from "./mockdata/LevelData";

//Displays all Kids class levels with their descriptions.
function KidsLevels() {
  return (
    <div className="level-card">
      <h3 className="level-title">Kids Levels</h3>
      <div className="level-container">
        {kidsLevels.map((item, index) => (
          <section key={index} className="level-display">
            <h4 className="eachlevel-title">{item.level}</h4>
            <p className="level-description">{item.description}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
export default KidsLevels;
