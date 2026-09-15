import ReviewCard from "./ReviewCard";

function ReviewList({ reviews , loggedInUser ,onEdit, onDelete}) {   
  return (
    <div className="review-list">
      {reviews.map((review) => (
        <ReviewCard 
        key={review.id}
        review={review}
        loggedInUser={loggedInUser}
        onEdit={onEdit}
        onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ReviewList;

