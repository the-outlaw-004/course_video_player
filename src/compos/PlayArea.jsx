import ReactPlayer from "react-player";
import PlayAreaNav from "./PlayAreaNav";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Popup from "./Popup";
import { completedVideo, courseRatings } from "./course/redux/actions";
import { checkCourseCompleted } from "../utils/checkCourseCompleted";

const PlayArea = () => {
  const dispatch = useDispatch();
  const playingVideo = useSelector((state) => state.courseReducer.playingVideo);
  const ratings = useSelector((state) => state.courseReducer.ratings);
  const videos = useSelector((state) => state.courseReducer.list);
  const [isOpen, setOpen] = useState(false);

  const handleSubmit = (rating) => {
    dispatch(courseRatings(rating));
    // setOpen(!isOpen);
  };
  const handleVideoFinished = () => {
    // if (playingVideo.id === videos.length) {
    dispatch(completedVideo(playingVideo));
    // }
  };

  useEffect(() => {
    if (videos.length > 0 && checkCourseCompleted(videos)) {
      setOpen(!isOpen);
    }
  }, [videos]);

  const handleClose = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="w-100 position-relative">
      <PlayAreaNav
        playingVideo={playingVideo}
        videos={videos}
        handlePopup={() => setOpen(!isOpen)}
      />
      <div className="playAreaPadding playAreaHeight">
        <ReactPlayer
          url={playingVideo.url}
          controls={true}
          width="100%"
          height="100%"
          onEnded={handleVideoFinished}
        />
      </div>
      {isOpen && <Popup handleSubmit={handleSubmit} onClose={handleClose} />}
    </div>
  );
};

export default PlayArea;
