import express, { Request, Response } from 'express';
import routePlants from './routePlants';

const app = express();

const PORT = 3000;

app.get('/', (_req: Request, res: Response) => {
  res.send('on');
});

app.use(routePlants);

app.listen(PORT, () => {
  console.log(`online on ${PORT}`);
});