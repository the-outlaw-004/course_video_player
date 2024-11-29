export function checkCourseCompleted(courseVideos) {
  const videos = courseVideos?.filter((video) => video.seen === false);
  return videos.length === 0;
}
