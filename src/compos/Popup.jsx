import { useState } from "react";
import StarRatings from "./common/StarRatings";
import { useSelector } from "react-redux";

const Popup = ({ handleSubmit, onClose }) => {
  const ratings = useSelector((state) => state.courseReducer.ratings);

  const [rating, setRating] = useState({
    starRating: 0,
    comment: "Type your message here...",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleStartClick = (starCount) => {
    setRating({ ...rating, starRating: starCount });
  };

  const handleChange = (e) => {
    setRating({ ...rating, comment: e.target.value });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    handleSubmit(rating);
    setSubmitted(!submitted);
  };

  return (
    <div className="position-absolute top-50 start-50 translate-middle bg-light rounded p-1">
      <button className="btn btn-warning px-2 py-1 float-end" onClick={onClose}>
        &#x2715;
      </button>
      <div className="m-4 text-center">
        {!submitted && (
          <>
            <h2>How would you rate this course?</h2>
            <p className="mb-0">Select Ratings</p>
          </>
        )}

        <StarRatings onStarClick={handleStartClick} />
        {submitted && (
          <p className="mt-1">
            <strong>Comment:</strong>
            {rating.comment}
          </p>
        )}
        {!submitted && (
          <form onSubmit={onsubmit} className="mt-3">
            <div class="form-group">
              <textarea
                className="form-control text-area bg-dark text-white mb-2"
                id="exampleTextarea"
                name="comment"
                value={rating.comment}
                rows="4"
                onChange={handleChange}
              ></textarea>
            </div>
            <button className="btn btn-warning text-light">Submit</button>
          </form>
        )}
        {submitted && (
          <button className="btn btn-warning text-light" onClick={onClose}>
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default Popup;
