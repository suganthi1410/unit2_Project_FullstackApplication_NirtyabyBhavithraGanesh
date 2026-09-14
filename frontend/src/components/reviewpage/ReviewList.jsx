import ReviewCard from "./ReviewCard";

function ReviewList({ reviews }) {
  return (
    <div className="review-list">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}

export default ReviewList;

