import { BlogLayoutProps } from "@/types";
import { formatDate } from "@/utils/formatDate";
import siteConfig from "@/config/siteConfig";
import BackBtn from "./BackBtn";

export default function BlogLayout({ data, children }:  {data: BlogLayoutProps, children: React.ReactNode}) {
  const { title, date, tags, readTime, lastUpdated } = data;

  return (
    <div className="prose dark:prose-invert container max-w-7xl mx-auto px-4 mb-8">
          <BackBtn buttonText="All Blogs" link="/blogs"/>
          <article className="dark:bg-dark/80 bg-bg rounded-lg shadow-md p-6  border-primary border">
            <h1 className="text-center pt-12 text-3xl sm:text-4xl">{title}</h1>
            <p className="text-gray-400 text-sm mt-2 text-center">
              Written by <span className="text-primary font-medium">{siteConfig.name}</span>
            </p>

            <div className="flex flex-col  sm:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400 px-10">
                <p className="text-gray-400 text-sm">
                  {formatDate(date)}
                  {lastUpdated && ` • Updated ${formatDate(lastUpdated)}`}
                  {readTime && ` • ${readTime}`}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                    {tags && tags.map((tag:string)=>(
                        <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            {tag}
                        </span>
                    ))}
                </div>   
            </div>
            <hr/>
            <div className="sm:px-10">
              {children}
            </div>
                    
  
          </article>
        </div>
  );
}
