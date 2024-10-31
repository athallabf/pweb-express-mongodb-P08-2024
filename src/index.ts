import express, { type Express } from 'express';
import connectDB from './db-connection';
import productRoutes from './routes/product.route';

const app: Express = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/products', productRoutes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
