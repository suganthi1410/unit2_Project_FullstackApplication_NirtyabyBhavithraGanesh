function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <h3>{review.name}</h3>
      <p className="username">({review.username})</p>
      <p>Rating: {review.rating}</p>
      <p>{review.comment}</p>
      <p>Date: {review.date}</p>
    </div>
  );
}

export default ReviewCard;
