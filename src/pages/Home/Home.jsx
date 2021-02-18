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
        <Link to="/">Home</Link>
      </nav>
      <div className="form-post-container">
        <h2>
          Welcome on My Social Network. This website is a training to Redux and
          React. We use auth and routing to create a small social media website.
        </h2>
        {isAuthenticated && (
          <form onSubmit={(e) => handleSubmitPost(e)} className="inputPost">
            <input type="text" name="postContent" />
            <button type="submit" className="btn-submit" value="Save">
              Send
            </button>
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
