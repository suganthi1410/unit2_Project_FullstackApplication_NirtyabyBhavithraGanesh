import { useEffect, useState } from "react";
import ReviewList from "./ReviewList";

function ReviewPage() {
    /*
    Tested with some reviews to display on the reviewpage
    const reviews = [
    {
      id: 1,
      username: "Ausha",
      levelName: "Beginner",
      rating: 5,
      comment: "Amazing class! Very patient teaching.",
      date: "2024-02-10"
    },
    {
      id: 2,
      username: "shalini",
      levelName: "Intermediate",
      rating: 4,
      comment: "Structured lessons and fun environment.",
      date: "2025-09-11"
    },
    {
      id: 3,
      username: "Ashwini",
      levelName: "Advanced",
      rating: 5,
      comment: "Loved the choreography sessions!",
      date: "2026-05-16"
    }
  ];
  */
 const [reviews, setReviews] = useState([]);
 useEffect(() => {
    fetch("http://localhost:8080/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);
  return (
    <main>
      <h2>Student Reviews</h2>
      <ReviewList reviews={reviews} />
    </main>
  );
}

export default ReviewPage;
