Note: Primary README has been moved to `frontend/README.md` for Vercel setup.

# Wozzle – Creative Upaay (Frontend) Mini Project

live deployement link: https://todo-wozzle-creative-upaay-wp8u.vercel.app/


Lakshyaraj Singh Ranawat 


## Assumptions (read first)
- Level 1 scope only: fully client-side, no backend.
- I learned Redux for this assignment and implemented it with a bit of AI help.
- Drag-and-drop is not included yet; moving tasks is done with buttons on each card.
- Styling is done with Tailwind CSS and DaisyUI components; Font Awesome provides icons.

## Overview
This is a Kanban-style task board built with React, Redux Toolkit, and Tailwind/DaisyUI. Tasks live in three columns (todo, inProgress, done). You can add, move, and delete tasks. Drag-and-drop is planned but not implemented yet; movement is via buttons.

## Tech Stack
- React 18 + Vite
- Redux Toolkit (state + localStorage persistence)
- React Redux
- React Router
- Tailwind CSS + DaisyUI (UI)
- Font Awesome (icons)

## Key Features
- Add tasks with name, description, and priority (high/medium/low)
- Move tasks across columns using buttons
- Delete tasks with confirmation
- Per-column task counts
- State persisted in localStorage

## Assumptions and Notes
- Scope is Level 1 functionality (no backend, all client-side).
- I learned Redux specifically for this task and implemented it with some AI assistance.
- Drag-and-drop was out of scope for now; Move buttons are used instead.
- Minimal validation is applied (task name required). You can extend as needed.
- Icons are from Font Awesome (loaded via class names).

## Project Structure
```
Wozzle/
├─ frontend/
│  ├─ index.html
│  ├─ package.json
│  ├─ vite.config.*
│  └─ src/
│     ├─ App.jsx / main.jsx
│     ├─ AppStore/
│     │  └─ taskSlice.js            # Redux slice: add/move/delete, localStorage persistence
│     ├─ Components/
│     │  ├─ Navbar.jsx
│     │  └─ Main/
│     │     ├─ SideMenu.jsx         # Left-side navigation/menu
│     │     └─ TodoFunc/
│     │        ├─ Todo.jsx          # Board wrapper (routes into Columns)
│     │        ├─ Columns.jsx       # Column list + modal trigger
│     │        ├─ TaskCard.jsx      # Task item (move/delete)
│     │        └─ AddTask.jsx       # Modal to add a task
│     ├─ routes/* (if present)
│     └─ styles/* (Tailwind config files live at project root as per setup)
└─ README.md (this file)
```

## Styling (Tailwind + DaisyUI)
- Tailwind  and a few DaisyUI classes for cards, inputs, and buttons.

## How State Works
- The Redux slice `taskSlice.js` stores tasks in `columns = { todo: [], inProgress: [], done: [] }`.
- On add/move/delete, the slice updates state and writes to `localStorage` under the `tasks` key.
- On first load, if `localStorage` is empty, the board starts with empty columns.

## Local Development
1) Install dependencies
```
cd frontend
npm install
```

2) Run the dev server
```
npm run dev
```
- Open the printed local URL (usually http://localhost:5173).

3) Build for production
```
npm run build
```

## Deploy on Vercel
This repo is pre-configured for Vercel. The app lives in `frontend/` and builds to `dist/`.

Option A – via Vercel Dashboard
- Push this repository to GitHub/GitLab/Bitbucket
- Import the repo in Vercel
- Vercel will read `vercel.json`, build `frontend`, and deploy

Option B – via Vercel CLI
```
npm i -g vercel
vercel    # first time: follow prompts
vercel --prod
```

```

## Usage Tips
- Click the plus button on a column to open the Add Task modal.
- Fill in Task Name (required), optional Description, and Priority.
- Use the task card buttons to move a task forward or mark it done, or delete it.

## Future Improvements
- Implement drag-and-drop between columns (e.g., `@dnd-kit` or `react-beautiful-dnd`).
- Add editing for existing tasks.
- Add filtering/search and sorting.
- Improve accessibility and keyboard navigation.

## Troubleshooting
- If tasks don’t persist, make sure your browser allows `localStorage` 




