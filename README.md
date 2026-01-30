# 🐼 Visa Slot Alert Tracker – The Flying Panda

An internal operations tool designed to help **The Flying Panda** team track and manage visa slot alerts efficiently. This project focuses on clarity, structural integrity, and real-world applicability.

---

## 📖 Project Overview
This mini-tool allows internal teams to perform full CRUD operations on visa alerts across different countries and visa categories. It is built to simulate a professional internal environment with a focus on functional design and reliable data persistence.

### Key Features
- **CRUD Operations:** Create, view, update, and delete visa alerts.
- **Dynamic Filtering:** Filter alerts by country and status via API query parameters.
- **Status Management:** Real-time updates for alert statuses (Active, Booked, Expired).
- **Custom Middleware:** Includes a request logger and centralized error handling.

---

## 🛠 Tech Stack

**Backend:** Node.js, Express.js, MongoDB (Mongoose)  
**Frontend:** React (Vite), Axios  
**Deployment:** Render (Backend), Vercel (Frontend), MongoDB Atlas (Database)

---

## 📂 Data Model
Each visa alert document contains:
- `id`: Unique Identifier
- `country`: String (Required)
- `city`: String (Required)
- `visaType`: Enum [Tourist, Business, Student]
- `status`: Enum [Active, Booked, Expired]
- `createdAt`: Timestamp

---

## 🔌 API Documentation

### Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/alerts` | Fetch all alerts (Supports `country` & `status` filters) |
| **POST** | `/alerts` | Create a new visa alert |
| **PUT** | `/alerts/:id` | Update an alert’s status |
| **DELETE** | `/alerts/:id` | Delete an alert |

**Example Query:** `GET /alerts?country=India&status=Active`

---

## 🚀 Setup Instructions

### Step 1: Clone Repository
```bash
git clone [https://github.com/Shantanu01B/visa-alert-tracker.git](https://github.com/Shantanu01B/visa-alert-tracker.git)
cd visa-alert-tracker
Step 2: Backend Setup
Bash
cd backend
npm install
Create a .env file in the backend directory:

Code snippet
PORT=5000
MONGO_URI=your_mongodb_connection_string
Run the server: npm run dev (Runs at http://localhost:5000)

Step 3: Frontend Setup
Bash
cd ../frontend
npm install
Create a .env file in the frontend directory:

Code snippet
VITE_API_URL=http://localhost:5000/alerts
Run the client: npm run dev (Runs at http://localhost:5173)

🧠 Design Decisions & Improvements
Architecture
Separation of Concerns: Distinct folders for routes, controllers, models, and middleware.

Persistence: Used MongoDB Atlas to ensure data remains consistent across sessions.

Minimalist UI: Focused on high-utility design for internal operations rather than heavy styling.

Production Roadmap
[ ] Implement Authentication & RBAC (Role-Based Access Control).

[ ] Add Pagination and sorting for scalability.

[ ] Integrate Schema Validation (Zod or Joi).

[ ] Enhanced security (Rate limiting & input sanitization).

🤖 AI Usage Disclosure
AI was utilized for boilerplate guidance, debugging, and structural suggestions. All core logic, architectural decisions, and feature selections were made manually to meet project requirements.

✅ Assignment Status: All required features and optional enhancements completed.

Built for The Flying Panda 💭 Dream. Soar. Explore.
