Task Manager Application
📦 Project Structure
backend/ - Node.js/Express server for API and authentication.

frontend/ - React app for user interface.

🚀 Setup Instructions
Backend
bash
Copy
Edit
cd backend
npm install
Create .env inside /backend with:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Start the server:

bash
Copy
Edit
npm run dev
(Server runs on http://localhost:5000)

Frontend
bash
Copy
Edit
cd frontend
npm install
npm start
(React app runs on http://localhost:3000)

🛠 Technical Choices and Architecture
Frontend: React, TailwindCSS, React Router, Axios

Backend: Node.js, Express.js

Database: MongoDB Atlas (cloud database)

Authentication: JWT (JSON Web Token)

State Management: React Hooks and Custom Hooks (useTasks)

API Communication: Axios with Auth Token Interceptor

Styling: TailwindCSS for fast, responsive design

📚 Database Schema
User Model

json
Copy
Edit
{
  "email": "string (unique)",
  "password": "string (hashed)"
}
Task Model

json
Copy
Edit
{
  "title": "string",
  "description": "string",
  "status": "active" or "completed",
  "priority": "Low" | "Medium" | "High",
  "createdAt": "date",
  "userId": "reference to User"
}
💻 How to Run Locally
Clone this repository:

bash
Copy
Edit
git clone https://github.com/your-username/task-manager-app.git
Set up backend (Node.js):

bash
Copy
Edit
cd backend
npm install
npm run dev
Set up frontend (React):

bash
Copy
Edit
cd frontend
npm install
npm start
Visit http://localhost:3000 in your browser.

🌱 3. Seed Data
In your backend, you can create a simple seed script:

backend/seed.js

javascript
Copy
Edit
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Task = require('./models/Task');

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  await User.deleteMany();
  await Task.deleteMany();

  const password = await bcrypt.hash('password123', 10);

  const users = await User.insertMany([
    { email: 'user1@example.com', password },
    { email: 'user2@example.com', password },
    { email: 'user3@example.com', password },
  ]);

  const tasks = [
    {
      title: 'Buy groceries',
      description: 'Milk, Bread, Cheese',
      priority: 'High',
      userId: users[0]._id,
    },
    {
      title: 'Walk the dog',
      description: 'Take Sparky out for 30 mins',
      priority: 'Medium',
      userId: users[0]._id,
    },
    {
      title: 'Finish project report',
      description: 'Submit by Sunday',
      priority: 'High',
      userId: users[1]._id,
    },
  ];

  await Task.insertMany(tasks);

  console.log('Seeded database successfully!');
  process.exit();
}

seed();
Run it:

bash
Copy
Edit
node seed.js
✅ Now you have 3 users + some tasks ready for testing!

📤 4. Push to GitHub
Inside your project folder:

bash
Copy
Edit
git add .
git commit -m "Initial submission: Task Manager App"
git push origin main
