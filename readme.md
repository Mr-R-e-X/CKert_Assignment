## Micro Instagram - Backend Intern Assignment

### Project Overview

This project is a backend service for a simplified version of Instagram. It includes models for users and posts and supports CRUD operations on posts. The application is built with **Node.js** and **TypeScript**, using **Prisma ORM** and **PostgreSQL** for data persistence.

---

### Features

#### User Model

- **Fields**:
  - `id`: Number (Primary Key)
  - `name`: String (Max length: 256)
  - `mobileNumber`: String (Unique)
  - `address`: JSON
  - `postCount`: Integer (Automatically increments when a user creates a post)
  - Additional fields for user verification, profile picture, and more.

#### Post Model

- **Fields**:
  - `id`: Number (Primary Key)
  - `title`: String
  - `description`: String
  - `userId`: Foreign Key (References `User` model)
  - `images`: JSON Array of strings (Stores image URLs)

---

### REST APIs

#### Users

1. **Create a User**

   - **Endpoint**: `POST /api/v1/users/create`
   - **Description**: Creates a new user.

2. **Verify a User**

   - **Endpoint**: `POST /api/v1/users/verify/:id`
   - **Description**: Verifies a user by their ID.

3. **User Login**

   - **Endpoint**: `POST /api/v1/users/login`
   - **Description**: Logs in a user and generates a JWT token. (Requires authentication)

4. **Update User Data**

   - **Endpoint**: `PATCH /api/v1/users/update`
   - **Description**: Updates user data (name, address, etc.) and profile picture. (Requires authentication)

5. **User Logout**

   - **Endpoint**: `PATCH /api/v1/users/logout`
   - **Description**: Logs out the user and invalidates the session. (Requires authentication)

6. **Change User Password**

   - **Endpoint**: `PATCH /api/v1/users/change-password`
   - **Description**: Changes the user's password. (Requires authentication)

7. **Get User Profile**

   - **Endpoint**: `GET /api/v1/users/profile/:userId`
   - **Description**: Fetches the profile of a specific user by their ID. (Requires authentication)

8. **Get All Users**
   - **Endpoint**: `GET /api/v1/users/get-all-user`
   - **Description**: Retrieves a list of all users. (Requires authentication)

#### Posts

1. **Get All Posts**

   - **Endpoint**: `GET /api/v1/posts`
   - **Description**: Retrieves a paginated list of all posts.

2. **Create a Post**

   - **Endpoint**: `POST /api/v1/posts/create-post`
   - **Description**: Creates a new post for a user.

3. **Edit a Post**

   - **Endpoint**: `PATCH /api/v1/posts/update-post`
   - **Description**: Updates the title, description, or images of a post.

4. **Delete a Post**

   - **Endpoint**: `DELETE /api/v1/posts/remove-post/:id`
   - **Description**: Deletes a specific post.

5. **Get Posts of a Specific User**
   - **Endpoint**: `GET /api/v1/posts/get-user-post/:userId`
   - **Description**: Retrieves all posts created by a specific user.

---

### Technologies Used

- **Backend**: Node.js, TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Testing**: Jest
- **Cloud Storage**: Cloudinary (for image uploads)

---

### Folder Structure

```bash
├── src/
│   ├── controllers/       # Route controllers for all API endpoints
│   ├── middlewares/       # Custom middlewares (authentication, validation, etc.)
│   ├── logger /           # Logger configuration
│   ├── logs /             # Logs
│   ├── helper /           # Helper functions
│   ├── constants /        # Constant values
│   ├── config/            # Configuration files
│   ├── routes/            # API route definitions
│   ├── services/          # Business logic and service helpers
│   ├── utils/             # Utility functions (e.g., Cloudinary integration, error handling)
│   ├── index.ts           # Entry point of the application
│   └── env.ts             # Environment variable configuration
│   └── server.ts          # Main server setup
├── prisma/
│   ├── schema.prisma      # Prisma schema definition
│   └── migrations/        # Database migrations
├── tests/                 # Test files
├── .env                   # Environment variables
├── .gitignore             # Git ignore configuration
├── package.json           # Project dependencies and scripts
├── prettierrc             # Prettier configuration
├── prettierignore         # Prettier ignore configuration
├── nodemon.json           # Nodemon configuration
├── jest.config.ts         # Jest configuration
└── README.md              # Project documentation
```

## Installation and Usage

### Prerequisites

1. Install [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/).
2. Set up a PostgreSQL database.

### Steps to Run Locally

1. Clone the repository and create a .env file that will include the data of .envCopy:
   ```bash
   git clone https://github.com/your-repository-link.git
   cd your-repository-folder
   ```

```

```
