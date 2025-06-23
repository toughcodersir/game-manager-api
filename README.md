# 🎮 Game Inventory Manager

Game Inventory Manager API is a full stack app using Node.js, Express and MongoDB to perform CRUDE operations on a game inventory. It includes a responsive frontend, RESTful APIs and serves a great learning project for APIs and database integration. This project allows users to manage a collection of video games with the ability to **add**, **view**, **update**, and **delete** entries through a clean frontend and custom backend APIs.

---

## 📦 Tech Stack

| Layer     | Tech                             |
|-----------|----------------------------------|
| Backend   | Node.js, Express                 |
| Database  | MongoDB Atlas (Mongoose ORM)     |
| Frontend  | HTML, CSS, JavaScript            |
| API Tools | Postman (for testing)            |
| Testing   | Jest, Supertest, Mockingoose     |

---

## 🚀 Features

- Add new games (Name, Genre, Price)
- View all games in a list
- Update game details via prompts
- Delete games instantly
- Fully synced with MongoDB backend
- Responsive and interactive UI
- **Automated API Testing using Jest & Supertest**
- **Test coverage over 67.5%**
- **Environment variable setup with dotenv**

---

## 🌐 API Endpoints

| Method | Endpoint             | Description          |
|--------|----------------------|----------------------|
| GET    | `/api/items`         | Get all games        |
| POST   | `/api/items`         | Add a new game       |
| PUT    | `/api/items/:id`     | Update a game        |
| DELETE | `/api/items/:id`     | Delete a game        |

---

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
├── frontend/            # Frontend files
│   ├── index.html
│   ├── style.css
│   └── script.js
├── tests/               # API tests
│   └── api/
│       └── items.test.js
├── .env                 # Environment variables
├── server.js            # Express server entry point
├── package.json
└── README.md


🧪 API Testing 

Manual Testing: via Postman
Automated Testing: via Jest + Supertest
Tested the backend APIs using Postman 

GET http://localhost:5000/api/items
POST http://localhost:5000/api/items
PUT http://localhost:5000/api/items/:id
DELETE http://localhost:5000/api/items/:id

🧪 Automated Test Coverage
This project includes automated tests using Jest and Supertest, covering all core API endpoints (GET, POST, PUT, DELETE) and interactions with MongoDB.

🧪 To Run the Tests
$env:NODE_ENV="test"   # For PowerShell
npm test

📊 Test Coverage Report
Metric	Coverage
Statements	67.39%
Branches	33.33%
Functions	42.85%
Lines	67.39%

✅ Coverage can be improved by adding more tests for edge cases and input validations, which can exceed upto 90% as well.

✨ About This Project
 It majorly focuses on Real-world API development ,Testing best practices,Frontend + backend integration and High-quality documentation.


📬 Contact
Feel free to connect:

💼 https://www.linkedin.com/in/samriddhi-singh-b3003a24a

🌐 https://github.com/toughcodersir


