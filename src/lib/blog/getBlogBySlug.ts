import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogMetadata } from '@/types';
import { validateBlogMetadata } from './validateBlogMeta';

interface BlogPost {
    metadata: BlogMetadata;
    content: string;
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> { 
    const filePath = path.join(process.cwd(), 'src/contents/blogs', `${slug}.mdx`)
      
    if (!fs.existsSync(filePath)) return null;

    const fileContent = await fs.promises.readFile(filePath, 'utf8')
    //data is the metadata of the blog post & content is the actual mdx content
    const { content, data } = matter(fileContent);
    // validate the metadata
    validateBlogMetadata(data, slug);

    return {
        metadata: data as BlogMetadata,
        content
    };
}