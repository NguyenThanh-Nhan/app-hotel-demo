import React, { useState } from "react";
import { NewHotelType } from "../types/hotel";
import { Link } from "react-router-dom";

interface IProps {
  hotel: NewHotelType;
  detailsPage?: boolean;
}
function Information({ hotel, detailsPage }: IProps) {
  const [editDescription, setEditDescription] = useState(false);

  console.log(hotel, "hotel");
  return (
    <div className="card" style={{ width: 350 }}>
      <img src={hotel.location} alt="Hotel" className="location-image" />
      <div className="card-body">
        <div className="highlights-test">
          <h2>{hotel.title}</h2>
          <p className="region">{hotel.region}</p>
        </div>
        <div className="highlights-price">
          <h2 className="per-night">${hotel.perNight}</h2>
          <p>per night</p>
        </div>
      </div>
      <div className="description ms-3">
        <span className="reviews">
          <strong className="review-number">{hotel.stars} start</strong> (based
          on {hotel.review} review)
        </span>
      </div>
      <hr />
      <span className="feature ms-3">Main Fearure: {hotel?.feature}</span>
      {detailsPage ? (
        <>
          <p className="description-text">
            {hotel.description}{" "}
            <strong
              className="edit-text"
              onClick={() => setEditDescription(!editDescription)}
            >
              Edit Description
            </strong>
          </p>
          <button>Delete Hotel</button>
        </>
      ) : (
        <Link to={`/hotels/${hotel.id}`}>
          <button type="button" className="btn btn-warning ms-2 me-2 mt-2 mb-2">
            View More Information
          </button>
        </Link>
      )}
    </div>
  );
}

export default Information;
