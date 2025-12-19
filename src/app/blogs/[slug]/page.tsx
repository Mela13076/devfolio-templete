import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import BlogLayout from '@/components/BlogLayout'
import { BlogLayoutProps } from "@/types";
import { getBlogBySlug } from '@/lib/blog/getBlogBySlug'
import { getAllBlogs } from '@/lib/blog/getAllBlogs';


export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  const blogs = await getAllBlogs();
  console.log(blogs);

  if (!blog) {
    return notFound();
  }

  return (
    <BlogLayout data={blog.metadata} >
      <MDXRemote source={blog.content} />
    </BlogLayout>
  )
}
