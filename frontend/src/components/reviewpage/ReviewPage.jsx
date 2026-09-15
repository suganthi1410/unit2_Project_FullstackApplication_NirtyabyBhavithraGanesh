import { useEffect, useState } from "react";
import ReviewList from "./ReviewList";
import Modal from "../modal/Modal";
import ReviewForm from "./ReviewForm";


function ReviewPage({ loggedInUser }) {  
  
 const [reviews, setReviews] = useState([]);
 const [showModal, setShowModal] = useState(false);
 const [editingReview, setEditingReview] = useState(null);

//Getting review from backend
 useEffect(() => {
    fetch("http://localhost:8080/reviews")
      .then((res) => res.json())
      .then((data) => {
        if (loggedInUser) {        
        setReviews(data.filter(r => r.username === loggedInUser));
      } else {        
        setReviews(data);
      }
    })
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  
  function handleSaveReview(newReview) {
    // If updating or editing PATCH

    if (editingReview) {
      fetch(`http://localhost:8080/reviews/update/${editingReview.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview)   // ⭐ includes levelId
      })
        .then((res) => res.json())
        .then((updatedReview) => {
          setReviews(
            reviews.map((r) => (r.id === updatedReview.id ? updatedReview : r))
          );
        });
    } else {

     //Create-POST   

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
      {loggedInUser && (      
      <button
        onClick={() => {
          setEditingReview(null);   
          setShowModal(true);       
        }}
      >
        Write a Review
      </button>
      )}
      {!loggedInUser && (
     <p style={{ color: "gray" }}>
     Please login to write a review.
     </p>
)}
     
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
    loggedInUser={loggedInUser}
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
