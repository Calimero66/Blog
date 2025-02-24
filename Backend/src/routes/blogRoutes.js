import express from 'express';
import { 
    registerUser, 
    loginUser, 
    logoutUser, 
    protectedRoute, 
    getUser,
    getUseById
} from '../controllers/userController.js';
import { createPost, updatePost, deletePost , getAllPosts ,getPost , getPostsByAuthor, getMyPosts ,getTags ,getPostsByTag  } from '../controllers/postController.js';
import { isAuthenticated } from '../middleware/auth.js'; 
import { upload } from '../middleware/uploadMiddleware.js'; // Use the shared multer config


const router = express.Router();

// User routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/getUser', isAuthenticated, getUser);
router.get('/getUseById/:userId', getUseById);


// Protected route for testing
router.get('/protected', isAuthenticated, (req, res) => {
    res.json({ message: 'Accès autorisé' });
    console.log(req.user);
});

// Route for blog posts
router.post('/createPost', isAuthenticated, upload.single("image"), createPost);
router.put('/updatePost/:postId', isAuthenticated, upload.single('image'), updatePost);
router.delete("/deletePost/:postId", isAuthenticated, deletePost);


router.get('/getMyPosts',isAuthenticated, getMyPosts);


router.get('/getTags', getTags);
router.get('/getPostsByTag', getPostsByTag); 





router.get('/getPost/:postId', getPost);




router.get('/allPosts', getAllPosts);
router.get('/getPostsByAuthor',isAuthenticated, getPostsByAuthor);

// Authentication check
router.get('/isAuthenticated', isAuthenticated, protectedRoute);


export default router;
