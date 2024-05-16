import * as express from 'express';
import { main } from './rabbit.ts';

const app = express();
app.use(express.json());

app.get('/rabbit/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await main(id);
    console.log("result from index: ", result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
