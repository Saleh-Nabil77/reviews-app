# Reviews App (React + Node/Express)

A small full-stack app to manage product reviews. I built it while learning full-stack development.

## Features
- Show all reviews
- Add a review (validation in React and on the server)
- Edit a review (PUT)
- Delete a review

## Tech
- Back-end: Node.js, Express, CORS (folder `reviews-api`)
- Front-end: React with Vite, `useState`, `useEffect`, `fetch` (folder `my-react-app`, being added)

## How to run the server
```
cd reviews-api
npm install
node server.js
```
The server runs on http://localhost:3000

## API
- `GET    /reviews`
- `GET    /reviews/:id`
- `POST   /reviews`
- `PUT    /reviews/:id`
- `DELETE /reviews/:id`

## Notes
- Data is kept in server memory for now, so it resets when the server restarts. Next step: add a database.
- The React front-end will be added in the next commit.
