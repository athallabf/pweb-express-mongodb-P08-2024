import express, { type Express, type Request, type Response } from "express";
import connectDB from "./db-connection";
import authRoutes from "./routes/auth.route";
import bookRoutes from "./routes/book.route";

const app: Express = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Healthy");
});

// Routes
app.use("/book", bookRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
