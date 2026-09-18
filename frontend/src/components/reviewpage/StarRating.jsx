function StarRating({ rating }) {
  const labels = ["Poor", "Fair", "Good", "Very Good", "Excellent"];

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div style={{ fontSize: "20px", color: "#f1b51e" }}>
        {"\u2605".repeat(rating) + "\u2606".repeat(5 - rating)}
      </div>

      <span style={{ fontSize: "16px", color: "gold" }}>
        {labels[rating - 1]}
      </span>
    </div>
  );
}
export default StarRating;
