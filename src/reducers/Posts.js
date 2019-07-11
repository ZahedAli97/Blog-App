import produce from "immer";
import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
} from "../actionTypes/Posts";

export default function postsReducer(
  prevState = { posts: [], isLoading: false },
  action
) {
  return produce(prevState, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case GET_POSTS:
        draft.isLoading = true;
        break;
      case GET_POSTS_SUCCESS:
        draft.isLoading = false;
        draft.posts = action.posts;
        break;
      case GET_POSTS_FAILURE:
        draft.isLoading = false;
        draft.error = action.error;
        break;
    }
  });
}
