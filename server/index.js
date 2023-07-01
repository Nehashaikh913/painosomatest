// const { config } = require('process');
const configration = require('./configration')
const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require ('cors')
const helmet = require ('helmet')
const compression = require ('compression')
const http = require ('http')
const port = 5000;
const {allowedDomains} = configration;

const server = http.createServer(app);



// middleware
app.use(bodyParser.json())
app.use(cors({origin:allowedDomains}))
app.use(helmet())
app.use(compression())

// requiring routes
const categoryRoute = require("./routes/categoryRoutes.js");
const blogRoute = require("./routes/blogRoutes.js");
const imageRoute = require("./routes/imageRoutes.js")
const authorRoute = require("./routes/authorRoutes.js")
const productsRoute = require("./routes/productsRoutes.js")
const registerRoute = require("./routes/registerRoutes.js")
const loginRoute = require("./routes/loginRoutes.js");


// using routes
app.use("/api/category",categoryRoute)
app.use("/api/blog",blogRoute)
app.use("/api/image",imageRoute)
app.use("/api/author",authorRoute)
app.use("/api/products",productsRoute)
app.use("/api/register",registerRoute)
app.use("/api/login",loginRoute)

server.listen(port, () => {
    console.log(`server started on ${port}`);
})



