import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import matter from 'gray-matter'
import BlogLayout from '@/components/BlogLayout'
import { BlogLayoutProps } from "@/types";


export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'src/contents/posts', `${slug}.mdx`)
  


  if (!fs.existsSync(filePath)) return notFound()

  const fileContent = await fs.promises.readFile(filePath, 'utf8')
  const { content, data } = matter(fileContent);
  //data is the metadata of the blog post & content is the actual mdx content

  return (
    <BlogLayout data={data as BlogLayoutProps}>
      <MDXRemote source={content} />
    </BlogLayout>
  )
}
