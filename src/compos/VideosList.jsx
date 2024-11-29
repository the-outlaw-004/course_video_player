import { useDispatch } from "react-redux";
import Video from "./Video";
// import { useEffect } from "react";
import { videoList, videoSelection } from "./course/redux/actions";
// import course_videos from "../utils/course_videos.json";

const VideosList = ({ videos, selectedVideo }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(videoList(course_videos));
  // }, []);

  const handleVideoClick = (video) => {
    dispatch(videoSelection(video));
  };

  return (
    <div className="">
      {videos.length &&
        videos.map((video) => (
          <Video
            video={video}
            onVideoClick={() => handleVideoClick(video)}
            key={video.id}
            selectedVideo={selectedVideo}
          />
        ))}
    </div>
  );
};

export default VideosList;
