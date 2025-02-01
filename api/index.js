import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  const response = {
    email: "eniola.talabi@aol.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/eniolatalabi/hng12-stage0"
  };
  res.status(200).json(response);
});


export default app;