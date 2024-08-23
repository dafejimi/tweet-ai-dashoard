# TweetAI

## Overview

The application includes both a frontend and backend component, offering a full-stack solution to manage users (Autobots), their posts, and comments.

## Frontend

### Features

- **User Interface**: Built using Vue.js, providing a responsive and intuitive user experience.
- **Navigation**: Includes a functional navigation bar for seamless user interaction.
- **Data Display**: Fetches and displays user posts and comments from the backend.

## Backend

### Features

- **RESTful API**: Implements endpoints to handle CRUD operations for Autobots, posts, and comments.
- **Database Integration**: Uses MySQL for data storage and retrieval, with support for efficient data querying.
- **Scheduled Tasks**: Uses cron jobs to automate the creation of Autobots, posts, and comments.

### Endpoints

1. **Autobots**
    ```bash
    GET /autobots - Retrieve all Autobots.
    GET /autobots/:id -  Retrieve details of a specific Autobot by ID.

2. **Posts**
    ```bash
    GET /posts - Retrieve all Posts.
    GET /posts/:id -  Retrieve details of a specific Post by ID.
    GET /posts/autobots/:id -  Retrieve details of a specific Post bast on the provided Autobot ID.

3. **Comments**
    ```bash
    GET /comments - Retrieve all Comments.
    GET /comments/:id -  Retrieve details of a specific Comment by ID.
    GET /comments/posts/:id -  Retrieve details of a specific Comment bast on the provided Post ID.

## Setup

### Backend

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```bash
   cd backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file with the following content:
   ```env
   MY_SQL_HOST=<your-db-host>
   MY_SQL_USER=<your-db-user>
   MY_SQL_PASSWORD=<your-db-password>
   MY_SQL_DATABASE=<your-db-name>
   ```

5. Create initial data:
   ```bash
   node cron-scripts/create-autobots.js
   ```

6. Run the server:
   ```bash
   npm run dev
   ```

### Frontend

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the application:
   ```bash
   npm run dev
   ```

## Contributing

Feel free to submit pull requests or open issues to contribute to the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
