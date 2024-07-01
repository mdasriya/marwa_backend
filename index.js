const express = require("express")
const cors = require("cors")
const { connection } = require("./config/db")
const { TankRouter } = require("./routes/tank.routes")
require("dotenv").config()

const app = express()
app.use(express.json())

app.use("/tank", TankRouter)


const port = process.env.PORT
app.listen(port, async()=> {
try {
   await connection
   console.log(`Server is running on http://localhost:${port}`);
   console.log("data base is connected");
} catch (error) {
   console.log(error.message); 
}
})
