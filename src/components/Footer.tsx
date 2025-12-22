import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaCode} from 'react-icons/fa'
import siteConfig from '@/config/siteConfig'

export default function Footer() {
  return (
    <footer className="bg-bg dark:bg-dark border-t border-t-primary">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            {siteConfig.showDevLogo ? (
            <Link
            href="/"
            className="flex text-xl font-bold text-primary"
          >
            <FaCode className="h-6 w-6 text-primary" />
            <span className="ml-2" >{siteConfig.siteName}</span>
          </Link>
          ):(
            <Link href="/" className="text-xl font-bold text-primary">
              {siteConfig.siteName}
            </Link>
          )}
            <p className="text-sm text-secondary mt-2">
              © {siteConfig.footer.copyrightYear} | {siteConfig.footer.details}
            </p>
          </div>
          
          <div className="flex space-x-6">
            {siteConfig.socials.github.show && (
              <a
                href={siteConfig.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </a>
            )}

            {siteConfig.socials.twitter.show && (
              <a
                href={siteConfig.socials.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
            )}
            
            {siteConfig.socials.linkedin.show && (
            <a
              href={siteConfig.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
} 