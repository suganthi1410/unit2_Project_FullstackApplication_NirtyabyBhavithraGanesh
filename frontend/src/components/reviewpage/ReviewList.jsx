import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

function ReviewList() {
  const [reviews, setReviews] = useState([]);
   useEffect(() => {
    fetch("http://localhost:8080/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);
  return (
    <div className="review-list">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}

export default ReviewList;

