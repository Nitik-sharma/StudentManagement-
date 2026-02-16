# 🎓 MERN Project Management System (Backend)

A Role-Based Project Management System built using Node.js, Express, MongoDB, and JWT Authentication.

This system allows Students to submit project proposals, Admins to approve and assign Teachers, and Teachers to track and update project progress.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (Authentication)
- bcrypt (Password Hashing)
- ES Modules (import/export)

---

## 🏗️ Architecture Overview

The backend follows a modular, scalable architecture.

src/
├── config/
│ └── db.js
│
├── models/
│ ├── User.js
│ └── Project.js
│
├── modules/
│ ├── auth/
│ │ ├── auth.controller.js
│ │ └── auth.routes.js
│ │
│ └── projects/
│ ├── project.controller.js
│ └── project.routes.js
│
├── middleware/
│ └── auth.middleware.js
│
└── app.js



---

# 🔐 Authentication & Authorization

## 1️⃣ User Roles

The system supports three roles:

- `student`
- `teacher`
- `admin`

Role-Based Access Control (RBAC) ensures each role can access only permitted resources.

---

## 2️⃣ Authentication Flow

### Registration
- User provides name, email, password, role
- Password is hashed using bcrypt
- User is saved in database

### Login
- Email & password verified
- JWT token generated
- Token contains:
  - user ID
  - user role

### Protected Routes
- Token sent via:


- Middleware verifies token
- Decoded user attached to `req.user`

---

# 🧠 Core Concepts Explained

## 🔑 JWT (JSON Web Token)

JWT works like a digital identity card.

After login:
- Server creates token
- Client sends token with every request
- Server verifies token
- Access is granted if valid

---

## 🛡️ RBAC (Role-Based Access Control)

Instead of checking manually, routes use:

```js
// authorizeRoles("admin")

//  populate()
// MongoDB stores references (ObjectId).

// populate() replaces ObjectId with actual user details like name and email.

Project Schema Fields
Each project contains:

title

description

student (reference to User)

teacher (reference to User)

status (pending / approved / rejected)

progress (0–100)

remarks

projectStatus (not-started / in-progress / completed)

createdAt

// updatedAt

🔄 Complete System Workflow
👨‍🎓 Step 1: Student Submits Project
Role: student

Status: pending

Teacher: null

👨‍💼 Step 2: Admin Approves / Rejects
Role: admin

Updates project status

👨‍💼 Step 3: Admin Assigns Teacher
Only for approved projects

Teacher ID stored in project

👨‍🏫 Step 4: Teacher Views Assigned Projects
Teacher sees only projects where:

project.teacher === req.user._id
👨‍🏫 Step 5: Teacher Updates Progress
Teacher can update:

progress percentage

remarks

projectStatus

Only assigned teacher can update.

🔒 Security Design
Passwords are hashed (never stored in plain text)

JWT verification required for protected routes

Role-based access enforced

Teachers cannot update projects not assigned to them

Admin controls approval and teacher assignment

📡 API Endpoints
🔐 Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
GET	/api/auth/profile	Get logged-in user
📁 Project Routes
Method	Endpoint	Role
POST	/api/projects	Student
GET	/api/projects	All roles (filtered)
PUT	/api/projects/:id/status	Admin
PUT	/api/projects/:id/assign-teacher	Admin
PUT	/api/projects/:id/progress	Teacher
🧩 Business Logic Rules
Only students can create projects.

Only admins can approve/reject.

Only admins can assign teachers.

Only assigned teacher can update progress.

Teachers see only assigned projects.

Students see only their own projects.

Admin sees all projects.

📊 Current Status
✅ Authentication Module
✅ JWT + RBAC
✅ Project Submission
✅ Admin Approval
✅ Teacher Assignment
✅ Teacher Progress Update

🚧 Future Enhancements
File Upload System (Multer)

Comment / Feedback System

Notification System

Dashboard Analytics

Frontend (React)

Deployment

🧠 Mental Model of the System
User logs in
      ↓
Receives JWT Token
      ↓
Token identifies user & role
      ↓
Middleware validates identity
      ↓
Role determines access
      ↓
Database performs controlled operations
👨‍💻 Author
Developed as a structured MERN backend project demonstrating:

Clean architecture

Secure authentication

RBAC implementation

Real-world project lifecycle management


---

If you want, I can now:

- Add badges (Node, MongoDB, License, etc.)
- Add installation & setup section
- Add environment variable setup guide
- Add deployment instructions
- Or create a separate frontend README

Tell me what level you want next 👌🚀

Show less




we make attandance schema which tell 
student → which student
course → which subject
totalClasses → total lectures
attendedClasses → attended lectures
attendancePercentage → calculated value
markedBy → teacher who marked attendance


