import express from "express";
const app = express()
import authRoutes from "./routes/auth.js"
import commentRoutes from "./routes/comment.js"
import usersRoutes from "./routes/users.js"
import postsRoutes from "./routes/posts.js"
import likesRoutes from "./routes/likes.js"

app.use('/api/users', usersRoutes)



app.listen(8800, () => console.log("API working"))