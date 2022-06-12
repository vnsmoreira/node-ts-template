import { app } from './app';

const PORT = process.env.PORT 

app.listen(process.env.PORT, () => {
  console.info(`Running on http://localhost:${PORT}`);
});
