import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogMetadata } from '@/types';
import { validateBlogMetadata } from './validateBlogMeta';


export async function getAllBlogs(): Promise<BlogMetadata[]> { 
    // Construct the path to the posts directory 
    const blogsDirectory = path.join(process.cwd(), 'src/contents/blogs');

    // Read all file names in the posts directory and filter out non-mdx files
    const fileNames = fs.readdirSync(blogsDirectory).filter(fileName => fileName.endsWith('.mdx'));
    const allBlogs: BlogMetadata[] = [];

    // Read each file and extract the metadata
    for (const fileName of fileNames) {
        // Construct the full path to the file
        const filePath = path.join(blogsDirectory, fileName);
        // Read the file content
        const fileContent = await fs.promises.readFile(filePath, 'utf8')
        //data is the metadata of the blog post & content is the actual mdx content
        const { data } = matter(fileContent);
        const slug = fileName.replace('.mdx', '');
        // Add the slug to the metadata
        data.slug = slug;
        // Validate the metadata
        validateBlogMetadata(data, slug);
        // Add the metadata to the allBlogs array
        allBlogs.push(data as BlogMetadata);
    }
    //sort the array by date in descending order (most recent first)
    allBlogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return allBlogs;
}