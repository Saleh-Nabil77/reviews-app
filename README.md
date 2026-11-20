# Reviews App (React + Node/Express)

A small full-stack app to manage product reviews. I built it while learning full-stack development, and the repository also keeps my small React practice components.

## Features
- Show all reviews
- Add a review (validation in React and on the server)
- Delete a review
- Edit a review: the server route (PUT) is done, and the React side is being finished

## Tech
- Back-end: Node.js, Express, CORS (folder `reviews-api`)
- Front-end: React with Vite, `useState`, `useEffect`, `fetch` (folder `my-react-app`)

## How to run the server
```
cd reviews-api
npm install
node server.js
```
The server runs on http://localhost:3000

## How to run the React app
```
cd my-react-app
npm install
npm run dev
```
The React app runs on http://localhost:5173 and needs the server running on port 3000.

## API
- `GET    /reviews`
- `GET    /reviews/:id`
- `POST   /reviews`
- `PUT    /reviews/:id`
- `DELETE /reviews/:id`

## Notes
- Data is kept in server memory for now, so it resets when the server restarts. Next step: add a database.
- `my-react-app/src/practice` holds my small React practice components (Counter, WorldList, Drill). `App.jsx` also has a small Study Tracker.
