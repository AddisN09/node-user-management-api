# User Management API

A simple User Management REST API built with **Node.js**, **Express.js**, and the **File System (fs module)** as a temporary database. The API supports basic CRUD operations for managing users and was developed as a practice project to learn backend development fundamentals.

## Overview

This project demonstrates how to build a RESTful API without using a traditional database. User data is stored in a JSON file and managed through Node.js file system operations.

The current implementation focuses on simplicity and learning core backend concepts. Future versions of the project will replace the file-based storage with a real database such as MongoDB, PostgreSQL, or MySQL.

## Features

* Create a new user
* Retrieve all users
* Retrieve a single user by ID
* Update existing user information
* Delete a user
* Store data in a JSON file
* RESTful API architecture
* Express.js routing and middleware

## Technologies Used

* Node.js
* Express.js
* File System (fs)
* JSON

## API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| POST   | `/users`     | Create a new user |
| GET    | `/users`     | Get all users     |
| GET    | `/users/:id` | Get a user by ID  |
| PUT    | `/users/:id` | Update a user     |
| DELETE | `/users/:id` | Delete a user     |
| PATCH  | `/users/:id` | update a user part|

## Example Requests

### Create User

```http
POST /users
```

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Get All Users

```http
GET /users
```

### Get User By ID

```http
GET /users/1
```

### Update User

```http
PUT /users/1
```

```json
{
  "name": "John Updated",
  "email": "johnupdated@example.com"
}
```

### Delete User

```http
DELETE /users/1
```

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/user-management-api.git
```

Move into the project directory:

```bash
cd user-management-api
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

## Project Structure

```text
user-management-api/
│
├── data/
│   └── users.json
│
├── controllers/
│   └── userController.js
│
├── routes/
│   └── userRoutes.js
│
├── app.js
├── package.json
└── README.md
```

## Sample Response

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

## Future Enhancements

* MongoDB integration
* PostgreSQL integration
* MySQL integration
* Authentication and Authorization
* Input validation
* Better error handling
* Pagination and filtering
* API documentation with Swagger
* Unit and integration testing

## Learning Objectives

This project was built to practice:

* REST API development
* Express.js fundamentals
* CRUD operations
* File system manipulation
* JSON data management
* Backend project organization
* Preparing applications for database migration

## Future Database Migration

The current version uses a JSON file as a lightweight database. In future iterations, the same API will be migrated to a real database system while maintaining the existing API structure. This will improve scalability, security, and performance.

## License

This project is open for learning and educational purposes.
