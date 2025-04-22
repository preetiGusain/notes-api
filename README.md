
# Notes App Backend

This is a simple RESTful API built with **Node.js**, **Express**, and **MongoDB** to support a Notes app. It allows users to perform CRUD operations on notes.

[Frontend Demo](https://preetigusain.github.io/notes-ui)

## Project Structure

```
notes-backend/
│
├── models/
│   └── Note.js            # Mongoose schema for a Note
│
├── .env                   # Environment variables
├── db.js                  # MongoDB connection setup
├── index.js               # Main server file
├── package.json           # Project metadata and scripts
```

## Features

- Add new notes
- View all notes
- View a single note
- Edit a note
- Delete a note
- Keep-alive endpoint to keep server running

## 🔧 Installation

1. **Clone the repository**

```bash
git clone https://github.com/preetiGusain/notes-backend.git
cd notes-backend
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file**

```env
DATABASE_URL=mongodb+srv://your_user:your_password@cluster.mongodb.net/notesDB
PORT=3000
```

4. **Start the server**

```bash
node index.js
```

The server will run on `http://localhost:3000`.

## API Endpoints

| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| GET    | `/keep-alive`       | Health check route       |
| GET    | `/notes`            | Get all notes            |
| GET    | `/notes/:id`        | Get a single note by ID  |
| POST   | `/save`             | Create a new note        |
| PUT    | `/edit/:id`         | Edit an existing note    |
| DELETE | `/delete/:id`       | Delete a note by ID      |

## Sample Note Object

```json
{
  "title": "My Note",
  "content": "This is the content of the note."
}
```

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **Frontend**: React ([View](https://preetigusain.github.io/notes-ui))

## Keep-Alive Strategy

A `GET /keep-alive` route is used in combination with a [cron job and `nohup`](https://shorturl.at/aszVH) command to keep the server running continuously on platforms where idle timeout might occur.

## Author

**Preeti Gusain**

- GitHub: [@preetigusain](https://github.com/preetigusain)
- LinkedIn: [linkedin.com/in/preetigusain](https://www.linkedin.com/in/preetigusain)
