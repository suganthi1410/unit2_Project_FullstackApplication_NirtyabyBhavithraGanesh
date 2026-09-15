import ReviewCard from "./ReviewCard";

function ReviewList({ reviews , onEdit, onDelete}) {   
  return (
    <div className="review-list">
      {reviews.map((review) => (
        <ReviewCard 
        key={review.id}
        review={review}
        onEdit={onEdit}
        onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ReviewList;

