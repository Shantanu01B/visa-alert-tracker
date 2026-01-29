Visa Slot Alert Tracker – The Flying Panda

📌 Overview : This project is a mini internal tool built to help track visa slot alerts for different locations and visa types.
It allows internal teams to create, view, update, and manage visa alerts in a simple and efficient way.The focus of this assignment is clarity, structure, and realism, rather than excessive features or complex UI.

🛠 Tech Stack

Frontend
React (Vite)
Axios

Backend
Node.js
Express.js

MongoDB (Mongoose)

✨ Features
Create visa slot alerts (Country, City, Visa Type)
View all alerts in a tabular format
Update alert status (Active → Booked)
Delete alerts
REST APIs with proper HTTP status codes
Custom middleware for request logging
Centralized error handling
Clean and minimal internal-tool UI
Frontend consumes its own backend APIs

📂 Data Model (Alert)

Each visa alert contains:
id
country
city
visaType (Tourist / Business / Student)
status (Active / Booked / Expired)
createdAt

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone <your-github-repo-link>
cd visa-alert-tracker

2️⃣ Backend Setup
cd backend
npm install


Create a .env file in the backend folder:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/visaAlerts


Run the backend: npm run dev


Backend will run on: http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend will run on: http://localhost:5173

🔗 API Endpoints
Method	Endpoint	Description
GET	/alerts	Get all alerts
POST	/alerts	Create new alert
PUT	/alerts/:id	Update alert status
DELETE	/alerts/:id	Delete alert

Query Filters
?country=India
?status=Active

🧠 Design Decisions
Used single server file for simplicity since this is a small internal tool
Followed a modular structure (routes, controllers, models, middleware)
MongoDB chosen for realistic data persistence
UI intentionally kept minimal and functional, reflecting an internal dashboard rather than a consumer app

Inline CSS used to avoid unnecessary styling complexity

🚀 Improvements for Production
If this were a production system, I would add:
Authentication & role-based access
Input validation using Joi/Zod
Pagination and sorting
Search and filter UI
Better logging (Winston)
Environment-based configs
Deployment (Docker + cloud hosting)

🤖 AI Usage
AI was used for boilerplate guidance, debugging assistance, and code structure suggestions
Core logic, architecture decisions, UI restraint, and feature selection were human-driven
Focus remained on understanding requirements rather than blindly generating code

✅ Status

✔ Assignment requirements fully implemented
✔ APIs and frontend integrated
✔ Clean, readable, and realistic internal tool

💭 Dream. Soar. Explore.
— Built for The Flying Panda
