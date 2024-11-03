import connectDB from './db-connection';
import productRoutes from './routes/product.route';
import bookRoutes from './routes/book.route';
import express, { type Request, type Response, Express } from 'express';

const app: Express = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Routes
app.use('/products', productRoutes);
app.use('/book', bookRoutes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
