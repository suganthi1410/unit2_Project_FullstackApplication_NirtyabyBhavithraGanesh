function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <h3>{review.username}</h3>
      <p>Level: {review.levelName}</p>
      <p>Rating: {review.rating}</p>
      <p>{review.comment}</p>
      <p>Date: {review.date}</p>
    </div>
  );
}

export default ReviewCard;
