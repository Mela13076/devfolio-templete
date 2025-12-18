import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import BlogLayout from '@/components/BlogLayout'
import { BlogLayoutProps } from "@/types";
import { getBlogBySlug } from '@/lib/blog/getBlogBySlug'


export default async function BlogPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return notFound();
  }

  return (
    <BlogLayout data={blog.metadata as BlogLayoutProps} >
      <MDXRemote source={blog.content} />
    </BlogLayout>
  )
}
