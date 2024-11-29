const CourseNav = ({ selectedVideo, totalVideos }) => {
  return (
    <div className="d-flex justify-content-between">
      <p className="text-warning">Video</p>
      <p className="text-white">
        {(selectedVideo?.id ? selectedVideo.id : 1) + "/" + totalVideos}
      </p>
    </div>
  );
};

export default CourseNav;
