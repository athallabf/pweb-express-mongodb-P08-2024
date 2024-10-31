import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Worlsd!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
