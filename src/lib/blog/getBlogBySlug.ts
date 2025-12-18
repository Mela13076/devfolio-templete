import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogMeta } from '@/types';

interface BlogPost {
    metadata: BlogMeta;
    content: string;
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> { 
    const filePath = path.join(process.cwd(), 'src/contents/posts', `${slug}.mdx`)
      
    if (!fs.existsSync(filePath)) return null;

    const fileContent = await fs.promises.readFile(filePath, 'utf8')
    const { content, data } = matter(fileContent);
    //data is the metadata of the blog post & content is the actual mdx content

    return {
        metadata: data as BlogMeta,
        content
    };
}