function ReviewCard({ review , onEdit, onDelete }) {
    //converting backend levelId to level name
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
      {/* button for edit delete */}
      <button onClick={() => onEdit(review)}>Edit</button>
      <button onClick={() => onDelete(review.id)}>Delete</button>
    </div>
  );
}

export default ReviewCard;
