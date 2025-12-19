import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
// import Newsletter from "@/components/Newsletter";
import ProjectSection from "@/components/ProjectSection";
import siteConfig from "@/config/siteConfig";
import { getAllBlogs } from "@/lib/blog/getAllBlogs";


export default async function Home() {
  const blogs = await getAllBlogs();
  return (
    <main>
      <Hero />
      <ProjectSection />
      {siteConfig.blogs.include && <Blogs blogs={blogs} />}
      {/* <Newsletter /> */}
    </main>
  );
} 