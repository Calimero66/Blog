import express from 'express';
import multer from 'multer';
import { 
    registerUser, 
    loginUser, 
    isAuthenticated, 
    logoutUser, 
    protectedRoute, 
    getUser 
} from '../controllers/userController.js';
import { createPost, updatePost, deletePost } from '../controllers/postController.js';

const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Directory to store uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Add timestamp to avoid duplicate filenames
    },
});

const upload = multer({ storage });

// User routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getUser', isAuthenticated, getUser);

// Protected route for testing
router.get('/protected', isAuthenticated, (req, res) => {
    res.json({ message: 'Accès autorisé' });
    console.log(req.user);
});

// Route for blog posts
router.post('/createPost', isAuthenticated, upload.single("image"), createPost);
router.put('/:postId', isAuthenticated, upload.single('image'), updatePost);
router.delete("/:postId", isAuthenticated, deletePost);

// Authentication check
router.get('/isAuthenticated', isAuthenticated, protectedRoute);
router.post('/logout', logoutUser);

export default router;
