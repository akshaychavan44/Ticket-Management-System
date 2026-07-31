# Ticket Management System

A full-stack ticket management application built using React.js, Node.js, Express.js, and MongoDB.

The application allows users to create, view, search, and manage customer support tickets with different statuses and priorities.

---

## Features

* View all tickets
* Display ticket details
* Search tickets
* Filter tickets
* Track ticket status
* REST API integration
* MongoDB Atlas database integration
* Responsive dashboard UI

---

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* Mongoose

### Database

* MongoDB Atlas

---

# Project Structure

```
ticket-management-system/

ticket-management-system/

├── backend/
│   ├── controller/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# Installation and Setup

## Clone Repository

```bash
git clone <repository-url>

cd ticket-management-system
```

---

# Backend Setup

Navigate to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

Start backend server:

```bash
npm start
```

Backend will run on:

```
http://localhost:5000
```

---

# Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```
VITE_API_URL=http://localhost:5000/api
```

Start frontend:

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

# API Endpoints

## Get All Tickets

```
GET /api/tickets
```

## Create Ticket

```
POST /api/tickets
```

## Get Single Ticket

```
GET /api/tickets/:id
```

## Update Ticket

```
PUT /api/tickets/:id
```

## Search Tickets

```
GET /api/tickets/search
```

---

# Environment Variables

Do not upload actual `.env` files containing passwords or secrets.

Use `.env.example` as a reference.

---

# Deployment

Backend:

```
https://ticket-management-system-mlcm.onrender.com
```

Frontend:
'''
https://ticket-management-frontend-hbl5.onrender.com
```

---

# Author

Akshay Chavan
