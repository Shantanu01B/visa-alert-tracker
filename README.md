# Visa Slot Alert Tracker – The Flying Panda

### Project Overview
This project is a mini internal tool built to help The Flying Panda track visa slot alerts. It allows internal teams to create, view, update, and delete visa alerts for different countries, cities, and visa types. The project focuses on clarity, structure, and realism, as required in the assignment.

---

### Tech Stack

**Backend**
* Node.js
* Express.js
* MongoDB (Mongoose)

**Frontend**
* React (Vite)
* Axios

**Deployment**
* Backend: Render
* Frontend: Vercel
* Database: MongoDB Atlas

---

### Data Model
Each visa alert contains the following fields:
* **id**
* **country**
* **city**
* **visaType**: Tourist, Business, Student
* **status**: Active, Booked, Expired
* **createdAt**

---

### Backend Implementation

#### API Routes
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | /alerts | Fetch all visa alerts |
| POST | /alerts | Create a new visa alert |
| PUT | /alerts/:id | Update an alert’s status |
| DELETE | /alerts/:id | Delete an alert |

#### Query Filters
The `GET /alerts` endpoint supports query filters:
* country
* status
* **Example:** `GET /alerts?country=India&status=Active`

#### Middleware
* **Custom Logger Middleware:** Logs the request method and URL for every incoming request.

#### Validation
* Required fields (country, city, visaType) are validated before creating alerts.
* Allowed values for visaType and status are enforced.
* Invalid requests return appropriate HTTP error responses.

#### Error Handling
* Centralized error handling middleware is implemented.
* Proper HTTP status codes are returned:
    * **200** – Success
    * **201** – Resource created
    * **204** – Resource deleted
    * **400** – Bad request
    * **404** – Resource not found
    * **500** – Server error

#### Data Storage
* MongoDB is used for persistent storage.
* Mongoose handles schema definition and database interaction.

---

### Frontend Implementation

#### Features
* Form to create new visa alerts
* Table view to display all alerts
* Button to update alert status
* Button to delete alerts
* Filter alerts by country and status
* Frontend communicates only with its own backend APIs

#### UI Design
* UI is intentionally simple and functional
* Styled to resemble an internal operations tool
* No unnecessary animations or complex styling

## Live Demo / Deployment

- Frontend (Vercel): https://visa-alert-tracker.vercel.app
- Backend API (Render): https://visa-alert-tracker.onrender.com/alerts

Note: The backend is hosted on Render’s free tier and may take a few seconds to wake up on first request.


### Setup Instructions

#### Step 1: Clone Repository
```bash
git clone [https://github.com/Shantanu01B/visa-alert-tracker.git](https://github.com/Shantanu01B/visa-alert-tracker.git)
cd visa-alert-tracker
Step 2: Backend Setup
Bash
cd backend
npm install
Create a .env file inside backend:

Code snippet
PORT=5000
MONGO_URI=your_mongodb_connection_string
Run backend: npm run dev

Backend URL: http://localhost:5000

Step 3: Frontend Setup
Bash
cd frontend
npm install
npm run dev
Create a .env file inside frontend: `env VITE_API_URL=http://localhost:5000/alerts

Frontend URL: http://localhost:5173

Deployment
Backend: Deployed on Render
Frontend: Deployed on Vercel
Database: Hosted on MongoDB Atlas
Environment variables are used for configuration in production.

Design Decisions
Kept backend structure simple while separating concerns (routes, controllers, models, middleware).
MongoDB is chosen for realistic persistence instead of in-memory storage.
UI kept minimal to reflect a real internal tool.
Avoided overengineering to maintain clarity and maintainability.
Deployment included to demonstrate end-to-end ownership.

Improvements for Production
If this system were to be used in production, the following improvements would be made:
Authentication and role-based access control.
Pagination and sorting for large datasets.
Schema-based validation (e.g., Joi/Zod).
Better logging and monitoring.
Security enhancements (rate limiting, sanitization).
Automated tests.

AI Usage
AI was used for boilerplate guidance, debugging assistance, and structural suggestions.
Core logic, architecture, feature selection, and trade-off decisions were made manually.
Focus remained on understanding requirements rather than generating features blindly.

Assignment Status
All required features and optional enhancements have been implemented in accordance with the assignment guidelines.

— Built for The Flying Panda 💭 Dream. Soar. Explore.
