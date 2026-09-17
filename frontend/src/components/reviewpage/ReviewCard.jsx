function ReviewCard({ review , loggedInUser ,onEdit, onDelete }) {
    const isOwner = review.username === loggedInUser;

    //converting backend levelId to level name
      const levelNames = {
    1: "Beginner",
    2: "Intermediate",
    3: "Advanced"
  };
  return (
    <div className="review-card" >
      <h3 className="card-title">{review.name}</h3>      
      <p className="card-level">
        Level: {levelNames[review.levelId] || "Not specified"}
      </p>
      <p className="card-rating">Rating: {review.rating}</p>
      <p className="card-comment">{review.comment}</p>
      <p className="card-date">Date: {review.date}</p>

      {isOwner && (
        <div className="actions">
      {/* button for edit delete */}
      <button className="submit-btn" onClick={() => onEdit(review)}>Edit</button>
      <button className="submit-btn" onClick={() => onDelete(review.id)}>Delete</button>
      </div >
      )}
    </div>
  );
}

export default ReviewCard;
