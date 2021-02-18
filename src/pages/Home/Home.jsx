import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { newPost, getAllPost } from '../../redux';
import Post from '../../Components/Post/Post';

const Home = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const currentUser = useSelector((state) => state.auth.user);
  const posts = useSelector((state) => state.post.posts);

  const dispatch = useDispatch();
  console.log('posts:', posts);

  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  const handleSubmitPost = (e) => {
    e.preventDefault();
    const user = {
      id: currentUser.id,
      post: e.target[0].value,
      token: Cookies.get('id_token'),
    };
    e.target[0].value = '';
    dispatch(newPost(user));
  };
  return (
    <section className="section-home">
      <nav className="horizontal-navbar">
        <span className="home">
          <Link to="/">Home</Link>
        </span>
      </nav>
      <div className="form-post-container">
        {/* <h2>
          Welcome on My Social Network. This website is a training to Redux and
          React. We use auth and routing to create a small social media website.
        </h2> */}
        {isAuthenticated && (
          <form onSubmit={(e) => handleSubmitPost(e)} className="formPost">
            <textarea
              type="text"
              name="postContent"
              placeholder="What's happening?"
            />
            <div className="post-bot">
              <button
                type="submit"
                className="btn-submit-post btn-send"
                value="Save"
              >
                Send
              </button>
            </div>
          </form>
        )}
      </div>
      <div className="break" />
      <div className="post-container">
        {posts && posts.map((post) => <Post post={post} key={post.id} />)}
      </div>
    </section>
  );
};

export default Home;
