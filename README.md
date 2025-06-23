# 🎮 Game Inventory Manager

Game Inventory Manager API is a full stack app using Node.js, Express and MongoDB to perform CRUDE operations on a game inventory. It includes a responsive frontend, RESTful APIs and serves a great learning project for APIs and database integration This project allows users to manage a collection of video games with the ability to **add**, **view**, **update**, and **delete** entries through a clean frontend and custom backend APIs.


## 📦 Tech Stack

| Layer     | Tech                |
|-----------|---------------------|
| Backend   | Node.js, Express     |
| Database  | MongoDB Atlas (Mongoose ORM) |
| Frontend  | HTML, CSS, JavaScript |
| API Tools | Postman (for testing) |



## Features

- Add new games (Name, Genre, Price)
-  View all games in a list
-  Update game details via prompts
-  Delete games instantly
-  Fully synced with MongoDB backend
-  Responsive and interactive UI


## 🌐 API Endpoints

| Method | Endpoint             | Description          |
|--------|----------------------|----------------------|
| GET    | `/api/items`         | Get all games        |
| POST   | `/api/items`         | Add a new game       |
| PUT    | `/api/items/:id`     | Update a game        |
| DELETE | `/api/items/:id`     | Delete a game        |

**Sample POST/PUT JSON:**

```json
{
  "name": "God of War",
  "genre": "Action",
  "price": 1499
}

To Run the Project Locally, follow the following.


✅ Prerequisites
Node.js + npm
MongoDB Atlas account
VS Code (recommended)

🔧 Step-by-Step Setup
1. Clone the Rep
git clone https://github.com/your-username/keploy-api-server.git
cd keploy-api-server

2. Install Dependencies

npm install

3. Set Up .env File
Create a file named .env in the root folder:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/keployDB?retryWrites=true&w=majority
PORT=5000


4. Start the Backend Server

npm start
You should see:
MongoDB connected
Server running on port 5000

5. Open the Frontend
Navigate to /frontend/index.html
Open with Live Server (or double-click)
Your browser will show the Game Inventory UI 🎮

📁 Project Structure

keploy-api-server/
├── models/              # Mongoose schema (Game)
│   └── Item.js
├── routes/              # API route definitions
│   └── itemRoutes.js
├── server.js            # Express entry point
├── .env                 # Environment vars
├── frontend/            # UI files
│   ├── index.html
│   ├── style.css
│   └── script.js
├── package.json
└── README.md

🧪 API Testing 

Tested the backend APIs using Postman or curl.

GET http://localhost:5000/api/items
POST http://localhost:5000/api/items
PUT http://localhost:5000/api/items/:id
DELETE http://localhost:5000/api/items/:id


✨ About This Project
This project was created as part of Keploy API Fellowship - Session 2.



📬 Contact
Feel free to connect:

💼 https://www.linkedin.com/in/samriddhi-singh-b3003a24a

🌐 https://github.com/toughcodersir

🚀 Keep Building, Keep Learning — with Keploy!

