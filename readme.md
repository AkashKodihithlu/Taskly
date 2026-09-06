# Taskly

A Kanban-style task management web app, built from scratch as a hands-on project to learn HTML, Tailwind CSS, and JavaScript.

## About

Taskly is a personal learning project focused on building real front-end skills by shipping a genuinely usable app rather than following a tutorial. The visual design is modeled after a professional light-mode dashboard reference created in Stitch.

## Features

### Done
- Semantic HTML structure (`header`, `nav`, `main`, `section` columns, proper heading hierarchy)
- Three-column Kanban board layout using Tailwind's flex and grid utilities
- Task data model (`id`, `title`, `description`, `priority`, `dueDate`, `column`)
- Dynamic rendering of tasks from a JavaScript array onto the board

### In Progress / Planned
- Reusable `renderBoard()` function to keep rendering DRY
- "Add Task" modal
- Task editing
- Task deletion
- Drag-and-drop between columns
- Full styling pass to match the Stitch reference design

## Tech Stack

- **HTML5** — semantic structure
- **Tailwind CSS** (via CDN) — styling and layout
- **JavaScript (Vanilla)** — app logic and DOM rendering
- **Font Awesome** (via CDN) — icons
- **Stitch** — used to generate the visual design reference

## Project Structure

```
taskly/
├── index.html        # Main HTML structure
├── scripts.js         # App logic: task data, rendering, interactions
└── README.md
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your browser — no build step required
3. Tailwind and Font Awesome load via CDN, so an internet connection is needed on first load

## Development Approach

This project follows a "structure before style" build order:

1. **HTML** — get the semantic skeleton right first
2. **Minimal layout** — just enough Tailwind to establish the page structure
3. **JavaScript functionality** — get the app actually working
4. **Full styling** — polish to match the design reference last

## Notes

- Tailwind is included via CDN rather than a full PostCSS/npm build setup, a deliberate tradeoff to keep focus on learning core concepts without build tooling overhead.
- The card UI intentionally omits inline edit/delete buttons to match the Stitch reference design; editing and deleting will be handled another way (to be decided).

## License

Personal learning project — no license specified.