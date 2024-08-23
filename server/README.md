# Autobots API Server

A Node.js backend service for managing Autobots, Posts, and Comments. This service provides a RESTful API with endpoints for basic CRUD operations. No authorization is required to access these endpoints.

## Features

- **RESTful API**: Supports CRUD operations for Autobots, Posts, and Comments.
- **No Authorization Required**: Public access to all API endpoints.
- **JSON Responses**: All API responses are in JSON format.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/autobots-api.git
   cd autobots-api

2. **Install Dependencies**
    ```bash
    npm install

3. **Start The Server**
    ```bash
    npm run dev

### API Endpoints

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
