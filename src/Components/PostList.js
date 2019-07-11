import React, { useEffect } from "react";
import { get_posts } from "../actionCreator/Posts";
import { connect } from "react-redux";

function PostList(props) {
  useEffect(() => {
    props.dispatch(get_posts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>POSTS LIST</h1>

      {props.isLoading && <p>Please Wait...</p>}
      <ul>
        {props.posts.map(post => (
          <p key={post.id}>{post.title}</p>
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    isLoading: state.isLoading
  };
}

const connectedComponent = connect(mapStateToProps);
export default connectedComponent(PostList);
