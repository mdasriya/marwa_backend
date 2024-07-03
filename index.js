const express = require("express")
const cors = require("cors")
const { connection } = require("./config/db")
const { TankRouter } = require("./routes/tank.routes")
const { MachineRouter } = require("./routes/machine.route")
const { ReadinRouter } = require("./routes/reading.route")
const { UserRouter } = require("./routes/user.route")
const { MachineLayoutRouter } = require("./routes/machineLayout.route")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors())

app.use("/user",UserRouter)
app.use("/tank", TankRouter)
app.use("/machine",MachineRouter)
app.use("/machinelayout",MachineLayoutRouter)
app.use("/reading",ReadinRouter)


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
