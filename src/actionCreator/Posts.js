import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
} from "../actionTypes/Posts";

export function get_posts() {
  return { type: GET_POSTS };
}
export function get_posts_success(posts) {
  return { type: GET_POSTS_SUCCESS, posts };
}
export function get_posts_failure(error) {
  return { type: GET_POSTS_FAILURE, error };
}
