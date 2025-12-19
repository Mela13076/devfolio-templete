import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import BlogLayout from '@/components/BlogLayout'
import { getBlogBySlug } from '@/lib/blog/getBlogBySlug'


export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return notFound();
  }

  return (
    <BlogLayout data={blog.metadata} >
      <MDXRemote source={blog.content} />
    </BlogLayout>
  )
}
