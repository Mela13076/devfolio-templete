# 📘 **Site Configuration Guide**

This page explains how to customize all parts of the portfolio template using the `siteConfig.ts` file.
Every section includes:

* What the setting is for
* Whether it changes the UI
* Example values
* Notes for users customizing the template

This file is located at:

```bash
src/config/siteConfig.ts
```



# 1️⃣ **Global Settings**

These values control your site's name, metadata, and overall branding.

```ts
siteName: "Devfolio",
name: "Your Name Here",
metadataTitle: "Developer Portfolio Template",
siteDescription: "A modern, customizable developer portfolio template...",
```

🔍 **What they do**

| Field             | Purpose                                         | Affects UI? |
| ----------------- | ----------------------------------------------- | ----------- |
| `siteName`        | The text shown in the navbar as your site title | ✔ Yes       |
| `name`            | Used in Hero section and SEO metadata           | ✔ Yes       |
| `metadataTitle`   | Appears in the `<title>` tag in the browser     | ✔ SEO only  |
| `siteDescription` | Used for SEO, homepage description, and embeds  | ✔ Minimal   |


### 📌 **Tab Icon**

You can customize the browser tab icon using the `tabIcon` field in `src/config/siteConfig.ts`:

```ts
tabIcon: "/icon.svg",
```

This value should be a **path to an image in the `public/` folder**.
The filename must match exactly.

For example:

```
public/icon.svg
```

Next.js will automatically use this value as the site’s favicon because it is wired into the root `layout.tsx` metadata configuration. No additional setup is required.

**Notes**

* Supported formats include `.svg`, `.png`, and `.ico`
* The icon must live in the `public/` directory
* Changes require a page reload to be reflected in the browser tab


### 📌 **Social Links**

```ts
socials: {
  github: { show: true, url: "https://github.com/username" },
  linkedin: { show: true, url: "https://linkedin.com/in/username" },
  twitter: { show: true, url: "https://twitter.com/username" }
},
```

🔍 **What they do**

* Toggle which icons show in the footer or hero section
* Users can hide social platforms they don’t use

⭐ **UI-changing settings**

* `show: false` = icon disappears entirely
* If all socials are turned off → footer adjusts automatically

---

### 📌 **Developer Logo Toggle**

```ts
showDevLogo: false,
```

🔍 **What it does**

If `true`, the navbar shows a `</>` developer logo before your site name.

**UI Impact**

| Value   | Navbar Looks Like  |
| ------- | ------------------ |
| `true`  | `</> YourSiteName` |
| `false` | `YourSiteName`     |

---

### 📌 **Color Theme**

```ts
siteColorTheme: "teal", 
// Options: blue, green, purple, pink, orange, red, yellow, teal
```

🔍 **What it does**

Controls your site’s primary accent color across:

* Buttons
* Links
* Icons
* Headings
* Contact form accents

**Changing this value immediately updates the UI theme.**

To modify or add new themes, edit:
```
src/config/themePresets.ts
```



# 2️⃣ **Navigation Links**

```ts
navLinks: [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  ...(showBlogs ? [{ label: "Blogs", href: "/blogs" }] : []),
  { label: "Contact", href: "/contact" },
],
```

### 🔍 What they do

These define the top navigation menu.

### ⭐ UI-changing elements

* **The Blogs link only shows if `showBlogs = true`**
* Links automatically hide if their section is disabled

### ⚠️ Important

- Even if the blogs folder exists, users *cannot access it* when disabled — the template handles that with route protection.

### 🧭 Editing Navigation Links

You can fully customize the navigation menu by editing the `navLinks` array.
Feel free to change labels or add/remove items.

However:

> ⚠️ **Make sure every `href` you add matches an actual page in your project.**
> If the route doesn't exist, the link will lead to a 404 page.

Example of a safely added link:

```ts
// Only do this if you created app/resume/page.tsx
{ label: "Resume", href: "/resume" }
```

You do **not** need to manually remove or edit the Blogs link — the template handles this automatically using the `showBlogs` toggle.




# 3️⃣ **Hero Section Configuration**

```ts
hero: {
    headline: "Hi, I'm",
    subtitle: "...",
    profileImage: "/profile.jpg",
    ctaPrimary: {
        include: true,
        label: "View Projects",
        href: "/projects",
    },
    ctaSecondary: {
        include: false,
        label: "Contact Me",
        href: "/contact",
    },
},
```
`ctaPrimary` and `ctaSecondary` updates the buttons on hero.

### 🔍 What it does

* Controls the main landing section users see on the homepage
* Updates text, buttons, and image

### UI-impact

* Changing `profileImage` immediately updates hero layout.
* Setting CTA `include` value to `false` will hide the button.
* Changing CTA `label` updates the buttons text.
* Changing CTA `href` updates the link the button will lead to. 



# 4️⃣ **About Page Configuration**

The About section contains your biography, skills, experience, and education.

### 📌 Bio

```ts
bio: `I'm a passionate Full Stack Developer...`,
```

**UI Impact**

Directly updates the paragraph text on the About page.

---

### 📌 Skills

>**Currently you are not able to add new skills but you can choose the ones you don't want.** 

```ts
skills: {
  frontend: {...},
  backend: {...},
  cloud: {
    name: "Cloud & DevOps",
    include: true,
    skill: ["Azure", "AWS", "CI/CD Pipelines", "Cloudinary"]
  },
  ai_security: {...},
  tools: {...},
}
```

**UI Impact**

* Each category (frontend, backend, etc.) becomes a “skill group” with styled skills.
* Setting a skill's `include` value to false will automatically removes the UI block.
* You can edit the `skill` arrary to add or remove what skill you have for that category. 


---

### 📌 Experience

```ts
experience: [
  {
    role: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2022 - Present",
    points: [
      "Developed and maintained web apps...",
      ...
    ],
  },
]
```

**UI Impact**

* Each item appears as a styled card with bullet points
* You can add/remove entries freely
* If the array is empty, the Experience section hides automatically

---

### 📌 Education

Works the same way as Experience.
Add or remove entries freely.



# 5️⃣ **Blog System Configuration**

### Toggle at top of file:

```ts
const showBlogs = true;
```

Then inside `siteConfig`:

```ts
blogs: {
  include: showBlogs, //don't change
  description: "Read my latest articles...",
},
```

### ⭐ UI-changing behavior

| Setting             | What Happens                                          |
| ------------------- | ----------------------------------------------------- |
| `showBlogs = true`  | Blog page shows, navbar shows “Blogs”                 |
| `showBlogs = false` | Blog page becomes inaccessible (404), link disappears |

### 📌 Important for users

If blogs are enabled, they must:

1. Create mdx files under `contents/blogs/`

Or the page will exist but remain empty.

🚨 **Blog Writing Guide** → [docs/blog-mdx-guide.md](./blog-mdx-guide.md) 


# 6️⃣ **Contact Page Configuration**

```ts
contact: {
  header: "Contact Me",
  description: "I'm always open to discussing...",
  email: "example@example.com",
  phone: "+1 (123) 456-7890",
  location: "Remote",
  includeForm: true,
},
```

### UI Behavior

| Setting              | Result                              |
| -------------------- | ----------------------------------- |
| `includeForm: true`  | Two-column layout: intro + form     |
| `includeForm: false` | Single centered card, no form shown |

⚠️ **If using the form**, users must configure environment variables for Resend.



# 7️⃣ **Resend Email Configuration**

```ts
resend: {
  fromEmail: "Portfolio Contact <contact@yourdomain.com>",
  toEmail: "your.email@domain.com",
},
```

### What it does

Defines the sender and receiver email for the contact form.

### Important Notes

* Requires a valid `RESEND_API_KEY` in an `.env` file
* Sender domains must be verified in Resend
* Free public domains (e.g. `.vercel.app`) are not supported
* If the API key is missing or email delivery fails, the contact form safely returns an error



# 8️⃣ **Footer Settings**

```ts
footer: {
  copyrightName: "Your Name",
  copyrightYear: "2025",
  details: "Customizable developer portfolio template...",
},
```

### UI Impact

* Updates the footer text across all pages
* Automatically updates the copyright year

---

# 📝 Best Practices for Customizing `siteConfig.ts`

### ✔ Only edit values, not structure

Users should avoid changing keys unless they understand TypeScript.

### ✔ Use the toggles

* `showBlogs`
* `includeForm`
* Social `show` flags
  These fully control UI features.

### ✔ Keep experience/education arrays clean

Empty arrays will hide entire sections.

### ✔ Use absolute URLs for socials

Avoid missing `https://`.

### ✔ Replace placeholder images

The hero image path must exist inside `/public`.

---

