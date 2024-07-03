const express = require('express');
const connectToDatabase = require('./bd');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.MONGODB_URI || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectToDatabase().then((db) => {
  app.locals.db = db;

  app.post('/api/blogs', async (req, res) => {
    try {
      const { Categoria, Titulo, Informacion, Imagen } = req.body;
      const newBlog = { Categoria, Titulo, Informacion, Imagen, createdAt: new Date() };
      const result = await db.collection('blogs').insertOne(newBlog);
      res.status(201).json(result.ops[0]);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create blog' });
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((error) => {
  console.error('Failed to connect to database:', error);
});
