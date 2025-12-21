import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
// import Newsletter from "@/components/Newsletter";
import ProjectSection from "@/components/ProjectSection";
import siteConfig from "@/config/siteConfig";
import { getAllBlogs } from "@/lib/blog/getAllBlogs";


export default async function Home() {
  const blogs = await getAllBlogs();
  const showBlogs = siteConfig.blogs.include && blogs.length > 0;
  
  return (
    <main className="relative z-10">
      <Hero />
      <ProjectSection />
      {showBlogs && <Blogs blogs={blogs} />}
      {/* <Newsletter /> */}
    </main>
  );
} 