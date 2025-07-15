# 📝 Full-Stack Blog App (React + Express + MongoDB)

A complete full-stack blog platform using **React.js (frontend)** and **Express.js (backend)** with **MongoDB** for data storage. Authenticated users can create articles with images and tags, comment on posts, and search articles by tag.

> 📦 GitHub: [https://github.com/Calimero66/Blog](https://github.com/Calimero66/Blog)

---

## 🚀 Features

- 🔐 JWT-based login/register system
- 📝 Create, edit, and delete blog posts
- 🖼 Upload article images (stored on server)
- 🏷 Add multiple tags to each post
- 🔍 Search blog posts by tags
- 💬 Add and view comments on posts
- ⚙️ Protected API routes using JWT
- 🌐 MongoDB database integration

---

## ⚙️ Tech Stack

### Frontend

- React.js (Vite or CRA)
- Axios
- React Router DOM
- Tailwind CSS (optional)

### Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Multer for image uploads

---

## 📁 Project Structure

## 📁 Blog/
├── client/ ## React frontend
│ └── src/
│   ├── components/ 
│   ├── context/ 
│   ├── lib/
│   └── Screens/
│
└── server/ ## Express backend
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── index.js # Main server entry point
├── 
├── uploads/ ⚠️ Stores uploaded images
├── .env
├── .babelrc
└── package.json
---

## ⚠️ Important

> If the `uploads/` folder does **not exist** in `/server`, you **must create it manually**:

```bash
mkdir server/uploads

# Navigate to the backend folder
cd server

# Install backend dependencies
npm install

# Create .env file and configure:
# PORT=5000
# MONGO_URI=mongodb://localhost:27017/blog-db
# JWT_SECRET=your_secret_key
cp .env.example .env

# ⚠️ Create uploads directory manually (if not present)
mkdir uploads

# Start the backend server
npm start



📬 Authentication

    JWT tokens used for login and protecting routes.

    Token stored in localStorage.

    Backend middleware validates tokens before allowing access to protected endpoints.