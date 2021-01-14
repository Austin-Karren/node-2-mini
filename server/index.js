const express = require('express'),
      cors = require('cors'),
      bc = require('./controllers/books_controller');

const app = express();


app.use(cors());
app.use(express.json());

app.get('/api/books', bc.read);
app.post('/api/books', bc.create);
app.put('/api/books/:id', bc.update);
app.delete('/api/books/:id', bc.delete);

const port = 4000;
app.listen(port, () => console.log(`Server running on port: #${port}`));    