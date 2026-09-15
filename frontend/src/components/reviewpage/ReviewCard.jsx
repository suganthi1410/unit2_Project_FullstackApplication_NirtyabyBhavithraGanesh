function ReviewCard({ review }) {
    //converting backend levelid to level name
      const levelNames = {
    1: "Beginner",
    2: "Intermediate",
    3: "Advanced"
  };
  return (
    <div className="review-card">
      <h3>{review.name}</h3>
      <p className="username">({review.username})</p>
      <p className="level">
        Level: {levelNames[review.levelId] || "Not specified"}
      </p>
      <p>Rating: {review.rating}</p>
      <p>{review.comment}</p>
      <p>Date: {review.date}</p>
    </div>
  );
}

export default ReviewCard;
