import { useDispatch, useSelector } from "react-redux";
import CourseNav from "./CourseNav";
import VideosList from "./VideosList";
import { videoList, videoSelection } from "./course/redux/actions";
import course_videos from "../utils/course_videos.json";
import { useEffect } from "react";

const PlayList = () => {
  const dispatch = useDispatch();
  const courseData = useSelector((state) => state.courseReducer.list);
  const playingVideo = useSelector((state) => state.courseReducer.playingVideo);

  useEffect(() => {
    dispatch(videoList(course_videos, true));
  }, []);

  return (
    <div className="bg-dark px-2 py-4 fullHeight">
      <h3 className="text-white">Course Content</h3>
      <CourseNav selectedVideo={playingVideo} totalVideos={courseData.length} />
      <VideosList videos={courseData} selectedVideo={playingVideo} />
    </div>
  );
};

export default PlayList;
