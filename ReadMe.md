# Todo Backend

This is a task management backend application built with **Node.js**, **TypeScript**, and **Express.js**. It supports user authentication and CRUD operations for managing tasks (todos).

---

## Features
- User registration and login with input validation.
- Authentication with middleware to protect routes.
- CRUD operations for managing todos.
- Centralized error handling.

---

## Prerequisites

- **Node.js** v16 or higher
- **npm** or **yarn** for package management
- Database: **MySQL** (configured via `.env` file)

---

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/Elissa-DI/todo-backend.git
   cd todo-backend
Install dependencies:

bash
Copy
Edit
npm install
# or
yarn install
Set up environment variables:

Copy the example environment file:

bash
Copy
Edit
cp .env.example .env
Edit the .env file with your configuration details.

Example .env file:

env
Copy
Edit
DATABASE_URL=mysql://username:password@localhost:3306/todo_database
JWT_SECRET=your_secret_key
PORT=3000
Initialize the database:

Ensure your MySQL server is running and the database specified in DATABASE_URL exists.
If you are using migrations, run them to set up the database schema.
Start the server:

bash
Copy
Edit
npm run dev
# or
yarn dev
The server will start at http://localhost:3000.

API Documentation
Authentication Routes
POST /auth/register
Registers a new user.

Request Body:

json
Copy
Edit
{
  "email": "user@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
Response:

json
Copy
Edit
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "email": "user@example.com"
  }
}
POST /auth/login
Logs in a user.

Request Body:

json
Copy
Edit
{
  "email": "user@example.com",
  "password": "password123"
}
Response:

json
Copy
Edit
{
  "message": "Login successful",
  "token": "your_jwt_token"
}
Todo Routes
POST /todos
Creates a new todo.

Headers:

json
Copy
Edit
{
  "Authorization": "Bearer your_jwt_token"
}
Request Body:

json
Copy
Edit
{
  "title": "Learn TypeScript",
  "description": "Complete the TypeScript course on Udemy",
  "dueDate": "2025-01-31"
}
Response:

json
Copy
Edit
{
  "message": "Todo created successfully",
  "todo": {
    "id": 1,
    "title": "Learn TypeScript",
    "description": "Complete the TypeScript course on Udemy",
    "dueDate": "2025-01-31",
    "status": "pending"
  }
}
GET /todos
Fetches all todos for the authenticated user.

Headers:

json
Copy
Edit
{
  "Authorization": "Bearer your_jwt_token"
}
Response:

json
Copy
Edit
[
  {
    "id": 1,
    "title": "Learn TypeScript",
    "description": "Complete the TypeScript course on Udemy",
    "dueDate": "2025-01-31",
    "status": "pending"
  }
]
GET /todos/:id
Fetches a specific todo by ID.

Headers:

json
Copy
Edit
{
  "Authorization": "Bearer your_jwt_token"
}
Response:

json
Copy
Edit
{
  "id": 1,
  "title": "Learn TypeScript",
  "description": "Complete the TypeScript course on Udemy",
  "dueDate": "2025-01-31",
  "status": "pending"
}
PUT /todos/:id
Updates a specific todo.

Headers:

json
Copy
Edit
{
  "Authorization": "Bearer your_jwt_token"
}
Request Body:

json
Copy
Edit
{
  "title": "Learn TypeScript - Updated",
  "status": "completed"
}
Response:

json
Copy
Edit
{
  "message": "Todo updated successfully",
  "todo": {
    "id": 1,
    "title": "Learn TypeScript - Updated",
    "description": "Complete the TypeScript course on Udemy",
    "dueDate": "2025-01-31",
    "status": "completed"
  }
}
DELETE /todos/:id
Deletes a specific todo.

Headers:

json
Copy
Edit
{
  "Authorization": "Bearer your_jwt_token"
}
Response:

json
Copy
Edit
{
  "message": "Todo deleted successfully"
}

Scripts
npm run dev or yarn dev: Start the development server.