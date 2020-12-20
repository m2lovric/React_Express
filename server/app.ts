import { Application } from "https://deno.land/x/abc@v1.2.4/mod.ts";
import { cors, DefaultCORSConfig } from "https://deno.land/x/abc@v1.0.2/middleware/cors.ts";
import { getBlogs } from './controllers/blogController.ts';

const app = new Application();

app
  .use(cors(DefaultCORSConfig))
  .file('/', './public/index.html')
  .get('/blogs', getBlogs)
  .start({ port: 8080 });