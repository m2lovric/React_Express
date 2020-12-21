import express from 'express';
import {v4} from 'uuid';

interface Blog {
  id: string,
  title: string,
  content: string,
  author: string
}

const app = express();
const PORT = 8000;

const blogs: Blog[] = [
  {id: v4(), title: 'Blog tutorial', content: 'Something', author: 'Matteo'}
]

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/blogs', (req, res) => {
  res.json(blogs);
})

app.get('/blogs/:id', (req, res) => {
  const {id} = req.params;
  const blog = blogs.find(el => el.id === id);
  res.json(blog);
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
