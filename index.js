// here i am importing packeges
const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")

// here i am importing all routes function
const { connection } = require("./config/db")
const { TankRouter } = require("./routes/tank.routes")
const { MachineRouter } = require("./routes/machine.route")
const { ReadinRouter } = require("./routes/reading.route")
const { UserRouter } = require("./routes/user.route")
const { MachineLayoutRouter } = require("./routes/machineLayout.route")
const { MWMRRouter } = require("./routes/MWMR.route")
const { dayStartRouter } = require("./routes/dayStart.routes")
const { handleLoneRouter } = require("./routes/handleLone.route")
const { clientRouter } = require("./routes/client.route")

// basic Backend setup 
require("dotenv").config()
const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser());

// all routes defined here 
app.use("/user",UserRouter)
app.use("/tank", TankRouter)
app.use("/machine",MachineRouter)
app.use("/machinelayout",MachineLayoutRouter)
app.use("/mwmr",MWMRRouter)
app.use("/reading",ReadinRouter)
app.use("/daystart",dayStartRouter)
app.use("/handlelone",handleLoneRouter)
app.use("/client",clientRouter)


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
