import { useEffect, useState, useRef } from "react";
import ReviewList from "./ReviewList";
import Modal from "../modal/Modal";
import ReviewForm from "./ReviewForm";
import "./ReviewPage.css"


function ReviewPage({ loggedInUser }) {  
  
 const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  /* sorting review so user can see their reviews first */
const userReviews = reviews.filter(r => r.username === loggedInUser);
const otherReviews = reviews.filter(r => r.username !== loggedInUser);
 const [showModal, setShowModal] = useState(false); 
 const [editingReview, setEditingReview] = useState(null);

 //fixing post/patch rendring double time
 const formRef = useRef(null);
 const isSubmitting = useRef(false);
  // Scroll to review form when modal opens
useEffect(() => {
  if (showModal) {
    setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 100);
  }
}, [showModal]);
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
    <main className="review-page">
      <h2 className="review-title">Student Reviews</h2>
      {loggedInUser && (      
      <button
      className="review-submit-btn"
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
        <div ref={formRef}>
        <Modal onClose={() => setShowModal(false)}>
          <ReviewForm
          loggedInUser={loggedInUser}
          editingReview={editingReview}
          onClose={() => setShowModal(false)}
          onSave={handleSaveReview} 
          />
        </Modal>
        </div>
      )}
      
  
  <ReviewList
    reviews={userReviews}
    loggedInUser={loggedInUser}
    onEdit={(review) => {
      setEditingReview(review);
      setShowModal(true);
    }}
    onDelete={handleDeleteReview}
  />


<hr />

<h3>All Reviews</h3>
<ReviewList
  reviews={otherReviews}
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


