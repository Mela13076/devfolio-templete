# 📘 Customization Guide

### How to Add & Customize Projects and Blogs in Your Portfolio

This guide explains how to customize your **Projects** and **Blogs** in the Devfolio template.
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



## 1. `src/contents/blogs.ts` – Blog Listing Configuration

This file defines all blog posts that appear on the **Blogs page** and the **homepage featured blogs**.

```ts
import { Blog } from "@/types";

export const blogs: Blog[] = [
  {
    title: "My First Blog Post",
    summary: "A short preview of the post.",
    date: "2025-01-01",
    readTime: "6 min read",
    slug: "my-first-post",
    tags: ["Next.js", "Career", "Education"],
  },
];
```

### 🔍 What each field does

| Field      | Purpose                                        |
| ---------- | ---------------------------------------------- |
| `title`    | Display title of the blog card                 |
| `summary`  | Short preview text shown on the card           |
| `date`     | Published date (also shown on the card)        |
| `readTime` | Estimated reading time                         |
| `slug`     | **Must match the MDX filename**                |
| `tags`     | Tags displayed on the card and inside the blog |

### ⭐ Featured Blogs on Home Page

The **first 2–3 blogs** in this array are treated as featured items and appear on the homepage.

➡ **Put your favorite or newest blogs at the top.**

### **Optional Field: Tags**

The `tags` field in `blogs.ts` is **optional**.
If you don’t want to include tags for a post, simply remove the field:

```ts
{
  title: "My First Blog Post",
  summary: "A short preview...",
  date: "2025-01-01",
  readTime: "6 min read",
  slug: "my-first-post"
}
```

If `tags` is missing:

* No tags will be displayed on the blog card


## 2. `src/contents/posts/` – Your MDX Blog Files

🚨 **Blog Writing Guide** → [docs/blog-mdx-guide.md](./docs/blog-mdx-guide.md) 

Every blog post requires an `.mdx` file inside `src/contents/posts`.

### ⚠️ Important Rule

**The MDX filename must match the slug in `blogs.ts`.**

Example:

* slug: `"my-first-post"`
* MDX file: `src/contents/posts/my-first-post.mdx`

### 🏷 Required Metadata

At the top of each MDX file you must include the metadata for title, date, readTime, and tags:

```mdx
---
title: "My First Blog Post"
date: "2025-01-01"
readTime: "6 min read"
tags: ["Next.js", "Career", "Education"]
---
```

These **must match** the values in `blogs.ts` so the UI stays consistent.

### ✨ MDX Supports React Components

You can import and use React components inside the MDX file:

```mdx
import Alert from "@/components/Alert";

<Alert type="info">This is an MDX component!</Alert>
```

This allows you to create rich, interactive blog posts.

### 📝 **Optional Metadata Fields**

The blog layout supports several **optional fields**.
If you choose not to use them, you can safely remove the fields from the metadata block.

| Field         | Optional?         | Purpose                                                                | Behavior if removed                              |
| ------------- | ----------------- | ---------------------------------------------------------------------- | ------------------------------------------------ |
| `readTime`    | ✔ Optional        | Displays estimated reading time on the blog card & post page           | No read-time badge will appear                   |
| `tags`        | ✔ Optional        | Categorizes the post using tag chips                                   | No tags will be shown                            |
| `lastUpdated` | ✔ Optional        | Shows “Updated on …” under the original publish date                   | No update label is shown                         |
| `slug`        | ✔ Optional in MDX | Used automatically by the system—slug is pulled mainly from `blogs.ts` | Safe to omit unless you want additional metadata |

### Example with optional fields included:

```mdx
---
title: "Understanding Next.js Routing"
date: "2025-02-04"
slug: "nextjs-routing"
readTime: "7 min read"
tags: ["Next.js", "Routing", "React"]
lastUpdated: "2025-02-10"
---
```

### Example with optional fields removed:

```mdx
---
title: "My Minimal Blog Post"
date: "2025-03-01"
slug: "minimal-post"
---
```

The UI will still render perfectly as everything automatically adjusts.


# 💻 Projects

All projects shown on the **Projects page** and **homepage featured section** come from:

`src/contents/projects.ts`

---

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

Just like blogs, the **first projects in the array** appear as featured on the homepage.

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

---

# ✉️ Contact Form Setup (Resend API)

The contact form sends emails through **Resend**. 

 1. Create a free Resend account
    - ➡ [https://resend.com](https://resend.com)
 2. Create an API key
 3. Add an `.env` file:

```
RESEND_API_KEY=your_resend_key_here
```
 4. Configure your Contact Form Emails in `src/config/siteConfig.ts`


The API route can be found at `src/app/api/contact/route.ts` and *no changes are needed in this file*



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

---

# ⚠️ Common Mistakes to Avoid

| Issue                       | Fix                                                     |
| --------------------------- | ------------------------------------------------------- |
| Blog not showing            | Ensure `showBlogs = true` and slug matches MDX filename |
| Blog card shows wrong info  | Make sure metadata in MDX matches blogs.ts              |
| Project image not appearing | Image must be inside `/public/projects/`                |
| Featured items not correct  | Reorder the arrays so your favorites are first          |

