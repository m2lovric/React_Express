import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {v4} from 'uuid';

interface Blog {
  id: string,
  title: string,
  content: string,
  author: string
}

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


let blogs: Blog[] = [
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

app.post('/blogs', (req, res) => {
  const body = req.body;
  console.log(body);

  if (!body.title) {
    return res.status(400).json({ 
      error: 'content missing' 
    })
  }

  const blogPost: Blog = {
    id: v4(),
    title: body.title,
    content: body.content,
    author: body.author
  }

  blogs = blogs.concat(blogPost);
  res.json(blogPost);
})

app.delete('/blogs/:id', (req, res) => {
  const {id} = req.params;
  blogs = blogs.filter(el => el.id !== id);
  res.json(blogs);
  res.status(204).end();
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
