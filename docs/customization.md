# 📘 Customization Guide

### How to Add & Customize Projects, Blogs, and Contact Form in Your Portfolio

This guide explains how to customize your **Projects**, **Blogs**, and **Contact Form** in the Devfolio template.
Each section describes the files you will work with, how they connect to the UI, and important rules to follow so everything displays correctly.



# 📝 Blogs

Blogs are **optional** and controlled by the `showBlogs` setting in `siteConfig.ts`.

```ts
//At the top of siteConfig.ts
const showBlogs = true; 
```

If `showBlogs = false` →

* The Blogs page is hidden
* The navigation link is removed
* The route still exists, so direct visits are allowed (this is normal)



## Blog Architecture Overview

Devfolio uses **MDX files as the single source of truth** for blog content.

There is **no manual blog list** or configuration file to maintain.

* Blog metadata is read directly from MDX frontmatter
* Blog cards and pages are generated automatically
* Invalid or missing metadata will throw a helpful build-time error



### 1. `src/contents/blogs/` – Blog Content (MDX)

All blog posts live inside:

```
src/contents/blogs/
```

Each blog post must be a **single `.mdx` file**.

The **filename becomes the blog slug**.

Example:

```
src/contents/blogs/my-first-post.mdx
```

---

### Frontmatter Metadata

Each MDX file must include frontmatter metadata at the top.

**Required fields** 
* `title` – string
* `summary` – string (used for blog cards)
* `date` – string (ISO format recommended)

**Optional fields**

* `tags` – string[]
* `readTime` – string
* `lastUpdated` – string

### Example

```mdx
---
title: "My First Blog Post"
summary: "A short preview of the post."
date: "2025-01-01"
tags: ["Next.js", "Career", "Education"]
readTime: "6 min read"
lastUpdated: "2025-05-01"
---

# My First Blog Post

Your article content goes here.
```



### 🔍 How metadata is used

| Field         | Purpose                                       |
| ------------- | --------------------------------------------- |
| `title`       | Display title on blog cards and blog page     |
| `summary`     | Short preview shown on blog cards             |
| `date`        | Published date (used for sorting and display) |
| `tags`        | Optional tags shown on cards and post pages   |
| `readTime`    | Optional reading-time badge                   |
| `lastUpdated` | Optional “Updated on…” label                  |
| `slug`        | Automatically derived from the filename       |



## ⭐ Featured Blogs on the Home Page

The homepage automatically displays the **most recent blog posts**.

You do **not** need to manually mark featured blogs.

To control which blogs appear first:

* Rename files
* Adjust publish dates
* The system sorts posts by date automatically



## ⚠️ Important Rules

* Every blog must have its own `.mdx` file
* Filenames must be unique
* The filename **defines the slug**
* Do not manually define a blog list anywhere else
* Frontmatter is validated at build time



## ✨ MDX Supports React Components

MDX allows you to mix Markdown and React components.

Example:

```mdx
import Alert from "@/components/Alert";

<Alert type="info">
  This is an MDX-powered component.
</Alert>
```

This makes it easy to create rich, interactive blog posts.



## 🧪 Metadata Validation

Devfolio validates blog frontmatter automatically.

If required fields are missing or invalid, the build will fail with a clear error explaining:

* Which file is invalid
* Which fields are missing or incorrect
* How to fix the issue

This prevents silent UI issues and keeps blog content consistent.



## 🚨 Blog Writing Guide

For more details on writing MDX content, see:

➡ **Blog Writing Guide** → [docs/blog-mdx-guide.md](./blog-mdx-guide.md)

# 💻 Projects

All projects shown on the **Projects page** and **homepage featured section** come from:

`src/contents/projects.ts`



## 1. `src/contents/projects.ts` – Project Listing Configuration

```ts
import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: 'Project Title 1',
    description:
      "Short description of the project. Users can replace this with their own information.",
    technologies: ["React", "Next.js", "API"],
    githubLink: "https://github.com/your-repo",
    demoLink: "https://your-demo-url.com",
    image: '/projects/project-1.jpeg',
  },
];
```

### 🔍 What each field does

| Field          | Purpose                                                   |
| -------------- | --------------------------------------------------------- |
| `title`        | Name of the project                                       |
| `description`  | Used in cards + project details                           |
| `technologies` | Displayed as tags                                         |
| `githubLink`   | Button linking to GitHub repo                             |
| `demoLink`     | Button linking to live demo                               |
| `image`        | Image used for the card (place inside `public/projects/`) |

### ⭐ Featured Projects on Home Page

The **first projects in the array** appear as featured on the homepage.

➡ **Put your best/most important projects first.**


### **Optional Fields (GitHub link, Demo link, and Image)**


Some project fields are **optional**.
If you do not need them, you may safely **remove the field entirely** from the object.

| Field        | Optional?  | Behavior                                                                          |
| ------------ | ---------- | --------------------------------------------------------------------------------- |
| `githubLink` | ✔ Optional | If removed, the GitHub button will not appear on the project card.                |
| `demoLink`   | ✔ Optional | If removed, the Demo button will not appear.                                      |
| `image`      | ✔ Optional | If removed, the project will display a placeholder-style layout without an image. |

**Example with optional fields removed:**

```ts
{
  title: "My Project",
  description: "A project without extra links or images.",
  technologies: ["React", "API"],
}
```

This will still render correctly



# ✉️ Contact Form Setup (Resend API)

The contact form sends emails through **Resend**. 

### Setup
 1. Create a free Resend account
    - ➡ [https://resend.com](https://resend.com)
 2. Create an API key
 3. Add an `.env` file:

```
RESEND_API_KEY=your_resend_key_here
```
 4. Configure your Contact Form Emails in `src/config/siteConfig.ts`

```ts
// src/config/siteConfig.ts
resend: {
  fromEmail: "Portfolio Contact <contact@yourdomain.com>",
  toEmail: "your.email@domain.com",
},
```

### Development vs Production

* During development, you may use Resend’s sandbox sender:

  ```
  onboarding@resend.dev
  ```
* Sandbox senders are **not guaranteed for long-term or production use**
* For production, you must verify a custom domain in Resend

> Free hosting domains such as `.vercel.app` or `.github.io` cannot be used as sender domains.

### Error Handling

If the email fails to send (for example, due to an unverified domain), the API will return an error and the contact form will show a failure message instead of falsely reporting success.

The API route is located at:

```
src/app/api/contact/route.ts
```

No changes are required in this file unless you want to customize behavior.



# 📂 File Structure Summary

```
src/
  contents/
    blogs.ts          ← All blog metadata (cards + featured)
    projects.ts       ← All project metadata (cards + featured)
    posts/
      my-first-post.mdx  ← Blog article content
      another-post.mdx
```



# ⚠️ Common Mistakes to Avoid

| Issue                       | Fix                                                     |
| --------------------------- | ------------------------------------------------------- |
| Blog not showing            | Ensure `showBlogs = true` and slug matches MDX filename |
| Blog card shows wrong info  | Make sure metadata in MDX matches blogs.ts              |
| Project image not appearing | Image must be inside `/public/projects/`                |
| Featured items not correct  | Reorder the arrays so your favorites are first          |

