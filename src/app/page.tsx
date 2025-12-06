import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
// import Newsletter from "@/components/Newsletter";
import ProjectSection from "@/components/ProjectSection";


export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectSection />
      <Blogs />
      {/* <Newsletter /> */}
    </main>
  );
} 