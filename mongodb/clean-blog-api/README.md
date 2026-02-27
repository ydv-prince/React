# Clean Architecture Blogging API

A fully complete, self-contained blogging platform API built with Node.js, Express, and MongoDB, following the Controller-Service architecture.

## Installation

1. Clone or download the project.
2. Run `npm install` to install dependencies.
3. Configure your `.env` file with `PORT`, `MONGO_URI`, and `JWT_SECRET`.

## Running the Server

Start the server in development mode using:
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Login and receive a JWT token.

### Posts
- `POST /api/posts` - Create a new post (Auth required).
- `GET /api/posts` - Retrieve the post feed.
- `PUT /api/posts/:id/like` - Toggle like on a post (Auth required).
- `POST /api/posts/:id/comment` - Add a comment (Auth required).
- `POST /api/posts/:id/comment/:commentId/reply` - Add a reply to a comment (Auth required).

## Testing

Use the provided `test-requests.http` file with an HTTP client (like REST Client for VS Code) to test the endpoints.
