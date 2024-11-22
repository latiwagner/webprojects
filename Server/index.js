const express = require("express")
const app = express()
const userController = require("./controllers/users")
const activityController = require("./controllers/activities")

const PORT = 3000

// Middleware
app.use(express.json())
app.use(express.static(__dirname + "/dist"))

// Controllers
app.get("/", (req, res) => {
    res.send("Hello World")
})
.get("/about", (req, res) => {
  res.send("About Us")
})
.use("/api/v1/users", userController)
.use("/ap1/v1/activities", activityController)

.get("*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html")
})

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT)
})