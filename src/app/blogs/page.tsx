import { getAllBlogs } from '@/lib/blog/getAllBlogs'
import siteConfig from '@/config/siteConfig';
import BlogClientSection  from '@/components/BlogClientSection'
import BlogsEmpty from '@/components/BlogsEmpty';

export default async function Blogs() {
  const blogs = await getAllBlogs();
  const showBlogs = blogs.length > 0 

  return (
    <div className="container max-w-7xl mx-auto py-12 relative z-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Blog Posts
      </h1>
      <section className="mb-16">
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          {siteConfig.blogs.description}
        </p>
      </section>
      {showBlogs ?
        <BlogClientSection blogs={blogs} />
      : (
        <BlogsEmpty />
      ) }
      
    </div>
  )
} 