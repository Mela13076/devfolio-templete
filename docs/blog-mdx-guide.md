# ✍️ Blog MDX Writing Guide

This guide explains how to write blog posts using **MDX**, how to add them to your site, required metadata, optional fields, and examples.

MDX allows you to write Markdown **with the full power of React components**, making blog posts flexible and interactive.

---

# 🚀 Before You Begin

If blogs are enabled in your site configuration file `src/config/siteConfig.ts`:

```ts
const showBlogs = true;
```

Then you must:

1. **Create MDX files** in

   ```
   src/contents/posts/
   ```

2. **Add the post entry** to

   ```
   src/contents/blogs.ts
   ```

If you do **not** complete both of these steps:

* The blog page will exist but it will appear **empty** and clicking a blog card may lead to a 404 if the MDX file is missing

---

# 📂 File Structure

Your blog content must follow this structure:

* src/contents/blogs.ts is for all blog metadata for cards

```
src/
  contents/
    blogs.ts          ← All blog metadata 
    posts/
      my-first-post.mdx
      another-post.mdx
      ...
```

---

# 📝 Step 1 — Add Blog Metadata in `blogs.ts`

Each post displayed on your blog page and homepage starts here.

```ts
export const blogs: Blog[] = [
  {
    title: "My First Blog Post",
    summary: "A short preview of the post.",
    date: "2025-01-01",
    readTime: "6 min read",   // optional
    slug: "my-first-post",
    tags: ["Next.js", "Career"], // optional
  },
];
```

### ⚠️ **Slug must match the MDX filename**

If `slug: "my-first-post"` → the file must be named:

```
my-first-post.mdx
```

No exceptions — this is how the router finds your file.

---

# ✍️ Step 2 — Create the MDX File

Inside:

```
src/contents/posts/
```

Create a file with the **same slug name**:

```
my-first-post.mdx
```

---

# 🏷 Step 3 — Add Metadata to the MDX File

Every MDX file requires a metadata block at the top:

```mdx
---
title: "My First Blog Post"
summary: "A short preview of the post."
date: "2025-01-01"
readTime: "6 min read"   # optional
tags: ["Next.js", "Career"]   # optional
lastUpdated: "2025-01-05"   # optional
slug: "my-first-post"  # optional inside MDX
---
```

### Required Fields

✔ `title`
✔ `date`
✔ `summary`

### Optional Fields

| Field         | Behavior                                        |
| ------------- | ----------------------------------------------- |
| `readTime`    | Shows reading time on the card + article header |
| `tags`        | Shows tag badges on card + post page            |
| `lastUpdated` | Displays an “Updated on…” notice below the date |
| `slug`        | Safe to leave out unless you want redundancy    |

If removed, the UI adjusts automatically.

---

# 🧠 Step 4 — Write MDX Content

After the metadata block, you can write standard Markdown:

```mdx
# Welcome to My First Blog Post

This is a simple post written in **MDX**.

- It supports lists  
- Inline code like `console.log`  
- Code blocks  
- Images  
```

---

# ⚛️ Step 5 — Use React Components Inside MDX

You can import and use React components directly:

```mdx
import Alert from "@/components/ui/Alert";

<Alert type="info">
  This is a live React component inside an MDX blog post!
</Alert>
```

You can also embed:

* Custom components
* Diagrams
* Interactive elements
* Tailwind-styled blocks

---

# 🖼 Adding Images in MDX

Place images inside:

```
public/posts/
```

Then reference them like:

```mdx
![My Screenshot](/posts/my-image.png)
```
or 

```mdx
<img src="/posts/my-image.png" alt="JavaScript code example" className="my-8 rounded-lg shadow-md w-md mx-auto" />
```

---

# ⭐ Featured Blogs on Home Page

The **first items** in `blogs.ts` appear on the homepage.

If you want a post featured:

1. Move it to the **top** of the array found in `src/contents/blogs.ts` 
2. Keep the slug + MDX file the same

---

# 🔍 Common Mistakes + Fixes

| Issue                                  | Fix                                   |
| -------------------------------------- | ------------------------------------- |
| Blog card shows but clicking gives 404 | MDX filename does not match slug      |
| Blog page is blank                     | Did not add entries to `blogs.ts`     |
| Featured blogs wrong                   | Reorder the array                     |
| Tags not showing                       | Remove `tags` or ensure it's an array |
| Metadata errors                        | MDX frontmatter must use valid YAML   |

---

# 🎉 Example of a Complete MDX File

```mdx
---
title: "How I Built My Portfolio Template"
summary: "A behind-the-scenes look at the design, code, and decisions behind this template."
date: "2025-02-01"
readTime: "8 min read"
tags: ["Next.js", "Design", "Progress"]
lastUpdated: "2025-02-10"
slug: "building-my-template"
---

# How I Built My Portfolio Template

Welcome to the full breakdown of how this portfolio template was created...

import Alert from "@/components/Alert";

<Alert type="success">
  You can embed React components inside MDX like this!
</Alert>

More content here...
```

---

# 🎯 Final Notes

Once you’ve:

✔ Added the entry to `blogs.ts`
✔ Created the matching MDX file

The blog is fully ready and will display automatically on:

* The Blogs Page
* The Homepage (if featured)
* Its own dedicated reading page

