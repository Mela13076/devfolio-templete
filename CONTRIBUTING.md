# Contributing to Devfolio Template (Developer Portfolio) 

Thank you for your interest in contributing!  
This project aims to provide developers with a clean, modern, customizable portfolio template built with Next.js, Tailwind CSS, and MDX.

We welcome contributions of all kinds:
- Bug reports  
- Feature requests  
- Documentation updates  
- Code improvements  
- New components or patterns  

Please follow the guidelines below so your contribution can be reviewed smoothly.

---

## 🐛 Reporting Bugs

Before submitting a bug report:

1. Check [existing issues](https://github.com/Mela13076/devfolio-templete/issues) to see if it's already reported.  
2. Ensure you are using the latest version of the template.  
3. Provide as much detail as possible.

To report a bug, open a new issue and choose **Bug Report** from the template options.

Please include:

- A clear title  
- Steps to reproduce  
- Expected vs actual behavior  
- Screenshots or logs if available  
- Browser & OS  
- Node version  

---

## ✨ Requesting Features

Feature requests are welcome!  
Open a new issue and select **Feature Request**.

Please include:

- What problem the feature solves  
- Why it's useful for template users  
- How you imagine it working  
- Any examples or references  

---

## 🛠 Contributing Code (Pull Requests)

Follow this process:

1. Fork the repository  
2. Create a new branch  
   ```bash
   git checkout -b feature/my-new-feature
    ```

3. Make your changes
4. Test your changes locally
5. Commit with a descriptive message
6. Push your branch
7. Submit a Pull Request

Your PR should:

* Be focused (avoid mixing multiple changes)
* Pass Next.js build
* Follow established folder structure
* Update documentation if needed

---

## 📁 Project Structure Overview

```
src/
 ├── app/             # Next.js App Router pages & routes
 ├── components/      # Reusable UI components
 ├── contents/        # Projects, blogs, MDX posts
 ├── context/         # Theme provider
 ├── config/          # siteConfig.ts for easy customization
 ├── types/           # Shared TypeScript types
 ├── utils/           # Utility functions
 ├── lib/             # Reusable functions
```

---

## 📦 Installing & Running Locally

```bash
npm install
npm run dev
```

---

## 🧪 Code Style

* Use TypeScript
* Use functional components
* Keep components small & reusable
* Follow TailwindCSS conventions
* Put user-editable content in `/contents` or `/config`

---

## 🙌 Thank You

Your contributions help improve this template for developers around the world!
We appreciate your time, effort, and creativity.
