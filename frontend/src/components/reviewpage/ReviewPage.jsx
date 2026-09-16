import { useEffect, useState, useRef } from "react";
import ReviewList from "./ReviewList";
import Modal from "../modal/Modal";
import ReviewForm from "./ReviewForm";


function ReviewPage({ loggedInUser }) {  
  
 const [reviews, setReviews] = useState([]);
 const [showModal, setShowModal] = useState(false);
 const [editingReview, setEditingReview] = useState(null);

 //fixing post/patch rendring double time
 const isSubmitting = useRef(false);


//Getting review from backend
 useEffect(() => {
  let ignore = false; 
   async function loadReviews() {
      if (!ignore) { 
      const res = await fetch("http://localhost:8080/reviews");
      const data = await res.json();
        if (loggedInUser) {        
        setReviews(data.filter(r => r.username === loggedInUser));
      } else {        
        setReviews(data);
      }
    }
  }
  loadReviews();

    return () => {
      ignore = true;      
    };
  }, [loggedInUser]);  
  function handleSaveReview(newReview) {
    if (isSubmitting.current) return;   
    isSubmitting.current = true;
    // If updating or editing PATCH

    if (editingReview) {
      fetch(`http://localhost:8080/reviews/update/${editingReview.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview)   
      })
        .then((res) => res.json())
        .then((updatedReview) => {
          setReviews(
            reviews.map((r) => (r.id === updatedReview.id ? updatedReview : r))
          );
          isSubmitting.current = false;
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
        isSubmitting.current = false;
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
          loggedInUser={loggedInUser}
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
