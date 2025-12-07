<p align="center">
  <img src="https://img.shields.io/github/license/Mela13076/devfolio-templete" />
  <img src="https://img.shields.io/github/stars/Mela13076/devfolio-templete" />
  <img src="https://img.shields.io/github/issues/Mela13076/devfolio-templete" />
  <img src="https://img.shields.io/github/forks/Mela13076/devfolio-templete" />
  <img src="https://img.shields.io/badge/deploy-vercel-black?logo=vercel" />
</p>

![Devfolio Banner](./public/banner.svg)


## **Developer Portfolio Template (Next.js 15 + MDX + Tailwind)**

A modern, customizable developer portfolio built with **Next.js 15, Tailwind CSS, MDX, and Framer Motion**.
Designed and customized by **Amelia R. Trevino** — now available as an open-source template for anyone to use, modify, and deploy.

🔗 **Live Demo:** [https://art-devfolio.vercel.app](https://art-devfolio.vercel.app)

📦 **Tech Stack:** Next.js 15 • TypeScript • TailwindCSS • MDX • Framer Motion • Resend Email API

---


## **Features**

* **Beautiful, modern portfolio design** with animations and smooth UX
* **Fully responsive** across all devices
* **Dynamic Projects section** powered by `src/contents/projects.ts`
* **Dynamic Blog system** using:
  * MDX files stored in `/src/contents/posts`
  * Blog metadata stored in `/src/contents/blogs.ts`
* **Automatic routing for blog posts** (`/blogs/[slug]`)
* **Customizable site information** through one config file: `src/config/siteConfig.ts`
* **Dark & Light mode theme toggle** with customizable color palette
* **Contact form integrated with Resend API**
* **Easy to extend, easy to deploy** (free deployment with Vercel)
* **Clean folder structure** ideal for beginners and scalable for advanced users

---

## 🎨 **Customization — Theme & Colors**

To modify the site's **primary accent**, **background**, **strokes**, or **dark mode palette**, edit:

```
src/globals.css
```

All colors for light/dark mode are defined as CSS variables.
Change them to instantly re-theme the entire portfolio.

---

# 🚀 Getting Started

## 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/Mela13076/devfolio-templete.git
cd devfolio-template
npm install
```

---

## 2️⃣ **Update Your Site Configuration**

All global website settings are stored in:

```
src/config/siteConfig.ts
```

You can edit:

* name & tagline
* social links
* navigation menu
* footer text

The website will automatically update everywhere after modifying this file.

---

# 📁 Content Management

This template uses a **content-driven approach**.
You only edit simple `.ts` files and `.mdx` files — no need to touch React components.

---

## 🧩 **Adding Projects**

Projects are stored here:

```
src/contents/projects.ts
```

Each project takes a typed object (types are optional & documented in `src/types/index.ts`):

```ts
{
  title: "My Cool Project",
  description: "...",
  tags: ["Next.js", "TypeScript"],
  demoUrl: "https://...",
  codeUrl: "https://..."
}
```

---

## 📝 **Adding Blog Metadata**

Blog cards use metadata from:

```
src/contents/blogs.ts
```

Example:

```ts
{
  slug: "my-first-post",
  title: "My First Post",
  date: "2025-01-01",
  tags: ["Next.js", "Career"],
  readingTime: "6 min"
}
```

---

## 📚 **Adding Blog Content (MDX)**

All actual blog post content is stored here:

```
src/contents/posts/
```

Each post must be a unique `.mdx` file:

```
/src/contents/posts/my-first-post.mdx
```

At the top of the MDX file, include metadata that matches your `blogs.ts` entry:

```mdx
---
title: "My First Post"
date: "2025-01-01"
tags: ["Career", "Education"]
readingTime: "6 min"
---

# My First Post

Your article content here...
```

🔹 **Important:**

* Every blog needs its own `.mdx` file
* The filename must match its `slug`
* Metadata **must match** what you wrote in `blogs.ts`

---

# ✉️ Contact Form Setup (Resend API)

The contact form sends emails through **Resend**.

### 1. Create a free Resend account

➡ [https://resend.com](https://resend.com)

### 2. Create an API key

### 3. Add an `.env` file:

```
RESEND_API_KEY=your_resend_key_here
```

### 4. Your route is already set up here:

```
src/app/api/contact/route.ts
```

The form will work automatically once the API key is configured.

---

# ☁️ Deployment (Vercel)

### 1️⃣ Commit and push your code to GitHub

### 2️⃣ Go to Vercel → "New Project"

### 3️⃣ Select your GitHub repo

### 4️⃣ Add environment variables (important!)

```
RESEND_API_KEY=your_resend_key_here
```

### 5️⃣ Deploy

Vercel will automatically handle build, routing, and optimization.

---

# 🗂 Recommended Folder Structure

```
src/
 ├── app/
 │    ├── page.tsx
 │    ├── globals.css
 │    ├── layout.tsx
 │    ├── about/
 │    ├── projects/
 │    ├── blogs/
 │    ├── contact/
 │    └── api/contact/route.ts
 ├── components/
 ├── contents/
 │    ├── blogs.ts
 │    ├── projects.ts
 │    └── posts/
 ├── config/
 │    └── siteConfig.ts
 ├── types/
 ├── utils/
 
```

---

# 🛠 Technologies Used

* **Next.js 15 (App Router)**
* **React + TypeScript**
* **TailwindCSS**
* **Framer Motion**
* **MDX**
* **Resend API**
* **Vercel Deployment**

---

# 📄 License

This project is open-source and free for personal or commercial use.

If you use it, ⭐ **please consider giving the repo a star!**
It helps others discover the template and supports its development.

---

# 🤝 Contributing

Pull requests, bug fixes, and feature suggestions are always welcome.

---

# 🙌 Acknowledgements

Designed and built by **Amelia R. Trevino**.
Made open-source to help developers build beautiful, production-ready portfolios fast.



