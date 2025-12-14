# Node.js, Express & MongoDB Practice Project

Hi 👋

This repository contains my hands-on practice while learning **Node.js, Express, and MongoDB** by following **Dave Gray’s tutorials**. The goal of this project was to move beyond theory and build real backend features using industry‑standard tools and best practices.

This repo reflects my learning journey, experiments, and understanding of building RESTful APIs with authentication, authorization, and database integration.

---

## 🚀 Tech Stack

* **Node.js** – JavaScript runtime for building server-side applications
* **Express.js** – Fast and minimal web framework for Node.js
* **MongoDB** – NoSQL database for storing application data
* **Mongoose** – ODM for MongoDB
* **JWT (JSON Web Tokens)** – Authentication & authorization
* **bcrypt** – Password hashing
* **dotenv** – Environment variable management
* **CORS & Cookies** – Secure cross-origin requests

---

## ✨ What I Learned

Through this project, I gained practical experience with:

* Setting up an Express server
* Structuring a Node.js backend project
* Connecting and interacting with MongoDB using Mongoose
* Creating RESTful APIs (CRUD operations)
* User authentication and authorization (JWT, roles & permissions)
* Password hashing and security best practices
* Middleware (custom middleware, JWT verification, role-based access)
* Error handling and logging
* Working with environment variables
* Using Postman for API testing

---

## 📂 Project Structure (Simplified)

```bash
src/
│── config/        # Database, roles, CORS configuration
│── controllers/  # Request handling logic
│── middleware/   # JWT, roles, error handling, logging
│── models/       # Mongoose schemas
│── routes/       # API routes
│── server.js     # App entry point
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/libanmoo/Mastering-Node-JS
cd Mastering-Node-JS
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file**

```env
PORT=3500
DATABASE_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
```

4. **Run the server**

```bash
npm run dev
# or
npm start
```

---

## 🔐 Authentication & Roles

* Uses **JWT** for secure authentication
* Supports **role-based authorization** (e.g. User, Editor, Admin)
* Access tokens & refresh tokens are implemented for better security

---

## 🧪 Testing

* APIs were tested using **Postman**
* Different user roles were used to verify protected routes

---

## 📘 Learning Source

This project is based on and inspired by **Dave Gray’s Node.js & Express tutorials**. Full credit goes to him for the excellent explanations and learning material.

---

## 📈 Purpose of This Repository

* Practice backend development concepts
* Demonstrate understanding of Node.js, Express, and MongoDB
* Serve as a reference for future projects
* Showcase progress and consistency in learning backend development

---

## 🤝 Feedback

Feedback and suggestions are always welcome. This is a learning-focused project, and improvements are part of the journey.

---

## 📄 License

This project is for educational purposes.

---

Thanks for checking out my project! 🙌
