# ✍️ Blog MDX Writing Guide

This guide explains how to write blog posts using **MDX**, how they are added to your site, required metadata, optional fields, and common patterns.

Devfolio uses **MDX as the single source of truth** for all blog content.  
There is no separate blog configuration file to maintain.

MDX lets you write Markdown **with full React component support**, making blog posts flexible, expressive, and interactive.



## 🚀 Before You Begin

Make sure blogs are enabled in your site configuration:

```ts
// src/config/siteConfig.ts
showBlogs: {
  include: true,
}
```

When blogs are enabled, Devfolio will automatically generate:

* The Blogs page
* Blog cards
* Individual blog routes

No additional setup is required.



## 📂 File Structure

All blog content lives inside the `blogs` directory:

```
src/
  contents/
    blogs/
      my-first-post.mdx
      another-post.mdx
      ...
```

Each blog post must be a **single `.mdx` file**.

The **filename defines the blog slug** and route.

Example:

```
src/contents/blogs/my-first-post.mdx
```

➡ This post will be available at:

```
/blogs/my-first-post
```



## 🏷 Frontmatter Metadata

Each MDX file must start with a frontmatter block.

### Required fields

* `title` – string
* `summary` – string (used for blog cards)
* `date` – string (ISO format recommended)

### Optional fields

* `tags` – string[]
* `readTime` – string
* `lastUpdated` – string



### Example frontmatter

```mdx
---
title: "My First Blog Post"
summary: "A short preview of the post."
date: "2025-01-01"
tags: ["Next.js", "Career"]
readTime: "6 min read"
lastUpdated: "2025-01-05"
---
```

🔹 **Important notes**

* The `slug` is **automatically derived from the filename**
* Do **not** define a blog list or slug anywhere else
* Frontmatter is validated at build time



## ✍️ Writing Blog Content

After the frontmatter block, you can write standard Markdown:

```mdx
# Welcome to My First Blog Post

This post is written using **MDX**.

- Markdown works as expected
- Inline code like `console.log()` is supported
- Code blocks, lists, and headings all work
```



## ⚛️ Using React Components in MDX

MDX allows you to import and use React components directly inside your blog posts.

Example:

```mdx
import Alert from "@/components/ui/Alert";

<Alert type="info">
  This is a live React component inside an MDX blog post.
</Alert>
```

You can embed:

* Custom components
* Interactive elements
* Diagrams
* Styled UI blocks

This makes blog posts far more expressive than plain Markdown.



## 🖼 Adding Images

Place images inside the `public/posts` directory:

```
public/posts/
```

Then reference them in MDX:

```mdx
![Screenshot](/posts/my-image.png)
```

Or with a custom `<img />` element:

```mdx
<img
  src="/posts/my-image.png"
  alt="JavaScript code example"
  className="my-8 rounded-lg shadow-md mx-auto"
/>
```



## ⭐ Featured Blogs on the Home Page

The homepage automatically displays the **most recent blog posts**.

Featured blogs are determined by:

* Publish date
* File ordering and metadata

To change which blogs appear first:

* Update the `date` field
* Add newer posts
* Rename or reorganize files if needed

No manual “featured” flag is required.



## 🧪 Metadata Validation

Devfolio validates blog frontmatter automatically.

If required fields are missing or invalid, the build will fail with a clear error message explaining:

* Which file is affected
* Which fields are missing or incorrect
* How to fix the issue

This prevents silent errors and keeps blog content consistent.



## 🔍 Common Mistakes & Fixes

| Issue                           | Fix                                            |
| ------------------------------- | ---------------------------------------------- |
| Blog page is empty              | No `.mdx` files exist in `src/contents/blogs/` |
| Visiting a blog route shows 404 | Filename does not match expected slug          |
| Build fails with metadata error | Frontmatter is missing required fields         |
| Tags not showing                | Ensure `tags` is an array of strings           |
| Blog order seems incorrect      | Check the `date` field values                  |

---

## 🎉 Example Complete MDX File

```mdx
---
title: "How I Built My Portfolio Template"
summary: "A behind-the-scenes look at the design and architecture decisions."
date: "2025-02-01"
readTime: "8 min read"
tags: ["Next.js", "Design", "Architecture"]
lastUpdated: "2025-02-10"
---

# How I Built My Portfolio Template

This post walks through how Devfolio was designed and built.

import Alert from "@/components/ui/Alert";

<Alert type="success">
  You can embed React components directly inside MDX.
</Alert>

More content here...
```



## 🎯 Final Notes

Once you:

* Add a valid `.mdx` file to `src/contents/blogs`
* Include the required frontmatter fields

Your blog post will automatically appear on:

* The Blogs page
* The Home page (if recent)
* Its own dedicated route

No additional configuration is needed.