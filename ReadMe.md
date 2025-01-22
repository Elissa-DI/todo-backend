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

   ```bash
   npm install

## Or
   ```bash
   yarn install
Set up environment variables:

## Check env.example


Ensure your MySQL server is running and the database specified in DATABASE_URL exists.
Start the server:

bash
Copy
Edit
npm run dev
# or
yarn dev
The server will start at http://localhost:3000.

Scripts
npm run dev or yarn dev: Start the development server.