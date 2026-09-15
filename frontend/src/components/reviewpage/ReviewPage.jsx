import { useEffect, useState } from "react";
import ReviewList from "./ReviewList";
import Modal from "../modal/Modal";
import ReviewForm from "./ReviewForm";


function ReviewPage() {  
  
 const [reviews, setReviews] = useState([]);
 const [showModal, setShowModal] = useState(false);
 const [editingReview, setEditingReview] = useState(null);

//Getting review from backend
 useEffect(() => {
    fetch("http://localhost:8080/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  //Posting review to backend
  function handleSaveReview(newReview) {
  fetch("http://localhost:8080/reviews/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview)
    })
      .then((res) => res.json())
      .then((savedReview) => {
        setReviews([...reviews, savedReview]); 
      });
  }

  //Delete review
  function handleDeleteReview(id) {
    fetch(`http://localhost:8080/reviews/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        setReviews(reviews.filter((r) => r.id !== id));
      })
      .catch((err) => console.error("DELETE error:", err));
  }

  return (
    <main>
      <h2>Student Reviews</h2>      
      <button
        onClick={() => {
          setEditingReview(null);   
          setShowModal(true);       
        }}
      >
        Write a Review
      </button>
     
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewForm
          editingReview={editingReview}
          onClose={() => setShowModal(false)}
          onSave={handleSaveReview} 
          />
        </Modal>
      )}
      <ReviewList
    reviews={reviews}
    onEdit={(review) => {
    setEditingReview(review);
    setShowModal(true);
    }}
    onDelete={handleDeleteReview}
    />
    </main>
  );
}

export default ReviewPage;
