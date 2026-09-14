import { Link } from "react-router-dom";
import galleryData from "./GalleryData.js";
import ReusableButton from "../ReusableButton.jsx";
import Reviews from "./Reviews.jsx";
import "./GalleryPage.css";

//Displays the gallery page with images, navigation buttons, and the Reviews section.
function GalleryPage() {
  return (
    <main className="gallery-main">
      <h2 className="gallery-title">Gallery</h2>

      <p className="gallery-subtext">
        A glimpse into our past performances and special moments.
      </p>
      <div className="gallery-grid">
        {galleryData.map((item) => (
          <div key={item.id} className="gallery-item">
            <img src={item.image} alt="Gallery" className="gallery-image" />
          </div>
        ))}
      </div>

      <div>
        <Link to="/class">
          <ReusableButton label="View Class Details" />
        </Link>

        <Link to="/contact">
          <ReusableButton label="View contact page" />
        </Link>
      </div>
      <Reviews />
    </main>
  );
}
export default GalleryPage;
