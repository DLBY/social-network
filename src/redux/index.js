// Auth
export { registerUser, loginUser } from './auth/authMiddleware';
export { logout } from './auth/authActions';

// Profile
export {
  profileUser,
  editProfile,
  loadProfile,
} from './profile/profileMiddleware';

// Post
export { newPost, getAllPost, getUserPost } from './post/postMiddleware';
