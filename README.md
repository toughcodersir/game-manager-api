# 🎮 Game Inventory Manager

Game Inventory Manager API is a full stack app using Node.js, Express and MongoDB to perform CRUDE operations on a game inventory. It includes a responsive frontend, RESTful APIs and serves a great learning project for APIs and database integration. This project allows users to manage a collection of video games with the ability to add, view, update, and delete entries through a clean frontend and custom backend APIs showcasing real-world API development, CI/CD integration, and AI-powered testing.

## 📦 Tech Stack

| Layer     | Technologies                      |
|-----------|-----------------------------------|
| Backend   | Node.js, Express                  |
| Database  | MongoDB Atlas (Mongoose ORM)      |
| Frontend  | HTML, CSS, JavaScript             |
| Testing   | Jest, Supertest, Mockingoose      |
| API Tools | Postman, Keploy                   |


## 🚀 Features

-  Add new games (Name, Genre, Price)
-  View all games in a list
-  Update game details via prompts
-  Delete games instantly
-  Fully synced with MongoDB backend
-  Responsive and interactive UI
-  AI-powered API Testing with Keploy
-  Jest + Supertest Automated Tests
-  Code coverage: **67.39%**
-  Integrated with **CI/CD (GitHub Actions)**
-  `.env` support via dotenv



## 🌐 API Endpoints

| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| GET    | `/api/items`         | Get all games       |
| POST   | `/api/items`         | Add a new game      |
| PUT    | `/api/items/:id`     | Update a game       |
| DELETE | `/api/items/:id`     | Delete a game       |

**Sample Request (POST/PUT):**
```json
{
  "name": "God of War",
  "genre": "Action",
  "price": 1499
}
To run the project locally, follow the following :
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

🧪 Automated Testing: via Jest + Supertest
Tested the backend APIs using Postman 

GET http://localhost:5000/api/items
POST http://localhost:5000/api/items
PUT http://localhost:5000/api/items/:id
DELETE http://localhost:5000/api/items/:id

✅ Automated Testing
Run Tests:
$env:NODE_ENV="test"   # (For PowerShell)
npm test

📊 Coverage Report:
Metric	Coverage
Statements	67.39%
Branches	33.33%
Functions	42.85%
Lines	67.39%

Performed AI-Powered API Testing with Keploy
OpenAPI Schema: openapi.yaml and obtained dashboards screenshots.
🧪 CI/CD Integration
Added Keploy testing to GitHub Actions
CI/CD pipeline file: .github/workflows/keploy-test.yml

Pipeline ensures:
Dependency installation
Server spin-up
AI-powered test execution

✅ All stages pass successfully

🧪 Chrome Extension API Testing
Tested APIs on:

[1] https://reqres.in
[2] https://dummyjson.com

Used Keploy Chrome Extension to Capture requests ,Auto-generate test cases and to replay and verify results.

✍️ Blog Post
📖 How I Achieved 67%+ Test Coverage in Minutes Using AI

Covered:

Writing API tests manually vs using Keploy
How AI transformed my test workflow
Real-time experience using Chrome Extension
Moving from 0 to 67%+ test coverage seamlessly

Check out my blog: https://medium.com/@samriddhi.singh1222/how-i-achieved-67-api-test-coverage-using-keploy-in-minutes-c8033fb349da
CI/CD : https://github.com/toughcodersir/game-manager-api/actions


📁 Project Structure
bash
Copy
Edit
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
│   └── api/items.test.js
├── .env                 # Environment variables
├── server.js            # Express server entry point
├── package.json
└── README.md
✨ About This Project
This project highlights:

Real-world API development using REST
Database integration with MongoDB
Frontend-backend sync
Advanced testing using Jest + Keploy
CI/CD pipeline integration

Hands-on with Keploy's AI test generation and Chrome Extension

📬 Contact : Feel free to connect:

👩‍💻 LinkedIn – https://www.linkedin.com/in/samriddhi-singh-b3003a24a

🌐 GitHub – https://github.com/toughcodersir

🌐 CI/CD Workflow- https://github.com/toughcodersir/game-manager-api/actions

© 2025 Game Inventory Manager | Built with ❤️ for the Keploy Fellowship 