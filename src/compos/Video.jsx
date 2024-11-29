import { useSelector } from "react-redux";

const Video = ({ video, onVideoClick }) => {
  const playingVideo = useSelector((state) => state.courseReducer.playingVideo);
  return (
    <div
      className="d-flex justify-content-between py-2 text-white"
      onClick={onVideoClick}
    >
      <p
        className={`${
          playingVideo.id === video.id ? "text-warning" : "text-white"
        } mb-0`}
        role="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="25"
          height="25"
          viewBox="0 0 50 50"
          fill={`${playingVideo.id === video.id ? "#FFC107" : "white"}`}
          className="me-2"
        >
          <path d="M42.042,13.856C43.773,15.577,44,18.311,44,25s-0.227,9.423-1.958,11.144C40.311,37.864,38.508,38,25,38	S9.689,37.864,7.958,36.144S6,31.689,6,25s0.227-9.423,1.958-11.144S11.492,12,25,12S40.311,12.136,42.042,13.856z M21.76,30.933	l9.717-5.63L21.76,19.76V30.933z"></path>
        </svg>

        {video.title}
      </p>
      <div className="text-dark d-flex align-items-center" role="button">
        <p
          className={`${
            playingVideo.id === video.id ? "text-warning" : "text-white"
          } mb-0 me-2`}
        >
          {video.duration}
        </p>
        <input id="cb3" className="" type="checkbox" checked={video.seen} />
      </div>
    </div>
  );
};

export default Video;
