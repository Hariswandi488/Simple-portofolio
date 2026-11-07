# Hariswandi Maulana: Personal Portfolio

My personal portfolio website. I'm a student learning software development, game development, and electronics, and this site is where I show what I'm building and what I'm learning.

**Live site:** [Simple-Portofolio](https://hariswandi488.github.io/Simple-portofolio/)

## What's inside

- **About**: who I am and how I learn.
- **Projects**: LifeHub and Project Breakpoint, with screenshots and links.
- **Skills & tools**: only things I have actually used.
- **What I'm learning**: topics I'm still working on.
- **Contact**: email, GitHub, and the live LifeHub site.

## Built with

Plain HTML, CSS, and JavaScript. No framework, no build step, no dependencies. Fonts (Space Grotesk, Inter, JetBrains Mono) are loaded from Google Fonts.

## Project structure

```
.
├── index.html      # all page content
├── style.css       # design and styles
├── script.js       # menu, project toggles, active nav link
└── assets/
    ├── logo.jpg
    ├── lifehub-home.jpg
    ├── lifehub-todo.jpg
    ├── lifehub-finance.jpg
    └── breakpoint-editor.jpg
```

## Run locally

Open `index.html` in a browser. Or serve the folder if you prefer:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Deploy on GitHub Pages

1. Push this repository to GitHub with `index.html` in the root.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then save.
5. After a minute or two the site is live. Copy the link into the **Live site** line at the top of this file.

## Updating the site

- **Add a project:** copy an existing `<li class="project">` block in `index.html` (inside the `.plist` list), then change the name, description, technologies, status, and links. Give its button and panel a new matching `id`, like `p3`.
- **Add a screenshot:** put the image in `assets/` and add a `<figure>` inside the project's `.shots` block.
- **Change colors or fonts:** edit the variables at the top of `style.css` (`:root`).
- **Update skills or learning topics:** edit the lists in the Skills and Learning sections of `index.html`.

## Links

- GitHub: [Hariswandi488](https://github.com/Hariswandi488)
- LifeHub (repo): [Hariswandi488/LifeHub](https://github.com/Hariswandi488/LifeHub)
- LifeHub (live): [hariswandi.pythonanywhere.com](https://hariswandi.pythonanywhere.com/)
- Project Breakpoint (repo): [Hariswandi488/project-breakpoint](https://github.com/Hariswandi488/project-breakpoint)
- Email: hariswandi.dev@gmail.com
