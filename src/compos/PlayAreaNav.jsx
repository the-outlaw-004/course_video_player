import { useDispatch, useSelector } from "react-redux";
import { completedVideo, videoSelection } from "./course/redux/actions";
import { checkCourseCompleted } from "../utils/checkCourseCompleted";
import { useEffect } from "react";

const PlayAreaNav = ({ playingVideo, videos, handlePopup }) => {
  const dispatch = useDispatch();

  const handleCompleted = () => {
    dispatch(completedVideo(playingVideo));
    if (playingVideo.id < videos.length) {
      const nextVideo = videos[playingVideo.id];
      dispatch(videoSelection(nextVideo));
    }
  };

  useEffect(() => {
    if (videos.length > 0 && checkCourseCompleted(videos)) {
      handlePopup();
    }
  }, [videos]);

  return (
    <div className="d-flex position-absolute justify-content-between pt-4 pb-2 px-3 bg-warning  w-100">
      <div className="d-flex gap-2 align-items-center">
        <button className="btn btn-warning text-light border border-light rounded-circle">
          &lt;
        </button>
        <p className="text-light fs-5 mb-0">{playingVideo.title}</p>
      </div>
      <button
        className="btn btn-light rounded-pill border text-white border-light bg-warning"
        onClick={handleCompleted}
      >
        Mark as complete
      </button>
    </div>
  );
};

export default PlayAreaNav;
