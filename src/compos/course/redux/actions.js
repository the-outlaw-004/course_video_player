import {
  COURSE_VIDEO_LIST,
  VIDEO_SELECTION,
  VIDEO_COMPLETED,
  COURSE_RATING
  //   EMPLOYEE_UPDATED,
} from "./actionTypes";

export function videoList(list, first = false) {
  return {
    type: COURSE_VIDEO_LIST,
    payload: list,
    first: first,
  };
}

export function videoSelection(data) {
  return {
    type: VIDEO_SELECTION,
    payload: data,
  };
}
export function completedVideo(data) {
  return {
    type: VIDEO_COMPLETED,
    payload: data,
  };
}

export function courseRatings(data) {
  return {
    type: COURSE_RATING,
    payload: data,
  };
}

// export function employeeRemoved(employee) {
//   return {
//     type: EMPLOYEE_REMOVED,
//     payload: employee,
//   };
// }

// export function employeeUpdated(employee) {
//   return {
//     type: EMPLOYEE_UPDATED,
//     payload: employee,
//   };
// }
