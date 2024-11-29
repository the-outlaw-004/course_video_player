import {
  COURSE_VIDEO_LIST,
  VIDEO_COMPLETED,
  VIDEO_SELECTION,
  COURSE_RATING,
  //   EMPLOYEE_UPDATED,
} from "./actionTypes";

const init = {
  list: [],
  ratings: {
    starRatings: 0,
    comment: "",
  },
  playingVideo: {},
  status: "employeeXYZ",
  seenVideos: [],
  listTwo: [],
  count: [],
};

export default function courseReducer(state = init, action) {
  switch (action.type) {
    case COURSE_VIDEO_LIST:
      return {
        ...state,
        list: action.payload,
        playingVideo: action.first ? action.payload[0] : state.playingVideo,
      };
    case VIDEO_SELECTION:
      return {
        ...state,
        playingVideo: action.payload,
      };

    case VIDEO_COMPLETED:
      return {
        ...state,
        seenVideos: state.seenVideos.concat(action.payload), // not needed
        list: state.list.map((video) => {
          return video.id === action.payload.id
            ? { ...video, seen: true }
            : video;
        }),
        // playingVideo: state.list[action.payload.id + 1],
      };

    case COURSE_RATING:
      return {
        ...state,
        ratings: action.payload,
      };

    // case EMPLOYEE_REMOVED:
    //   return {
    //     ...state,
    //     list: state.list.filter((employee) => employee._id !== action.payload),
    //   };

    // case EMPLOYEE_UPDATED:
    //   return {
    //     ...state,
    //     list: state.list.map((employee) =>
    //       employee._id === action.payload._id ? action.payload : employee
    //     ),
    //   };

    default:
      return state;
  }
}
