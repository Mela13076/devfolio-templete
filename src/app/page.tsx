import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
// import Newsletter from "@/components/Newsletter";
import ProjectSection from "@/components/ProjectSection";
import siteConfig from "@/config/siteConfig";


export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectSection />
      {siteConfig.blogs.include && <Blogs />}
      {/* <Newsletter /> */}
    </main>
  );
} 