const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res, next) => { 
  res.status(200).send('<h1>Hello World!</h1>')
});

app.listen(PORT, () => { 
  console.log(`Express server at http://localhost:${PORT}`);
});