import { Context } from "https://deno.land/x/abc@v1.2.4/mod.ts";
import { Blog } from '../models/blogModel.ts';
import { v4 } from "https://deno.land/std@0.81.0/uuid/mod.ts";


const blogs: Blog[] = [
  {id: v4.generate(), title: 'Blog tutorial', content: 'Something', author: 'Matteo'}
]

export const getBlogs = (ctx: Context) => {
  ctx.json(blogs);
}